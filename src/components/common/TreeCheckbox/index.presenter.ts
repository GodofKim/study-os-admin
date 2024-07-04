import { useReducer } from 'react';

export const treeCheckboxPresenter = {
  useTreeCheckboxViewModel: <V extends string>({
    nodes,
    selectedNodes,
    onChangeSelectedNodes,
  }: TreeCheckboxProps<V>): TreeCheckboxViewModel<V> => {
    const [collapsedNodes, onToggleCollapse] = useReducer(
      (state: string[], targetNode: string) =>
        state.includes(targetNode)
          ? state.filter((n) => n !== targetNode)
          : [...state, targetNode],
      []
    );

    const onChangeChecked = ({
      node,
      checked,
    }: {
      node: TreeCheckboxNode<V>;
      checked: boolean;
    }) => {
      // leaf node 일 경우, 해당 엘리먼트를 클릭한 것으로 간주
      if (getIsLeaf(node)) {
        if (checked) onChangeSelectedNodes([...selectedNodes, node.value]);
        else
          onChangeSelectedNodes(selectedNodes.filter((n) => n !== node.value));
      }

      // leaf node 가 아닐 경우, 해당 node 하위의 모든 leaf node 를 얘의 상태로 변경
      else {
        const allLeafNodes = getAllLeafNodes(node);

        if (checked)
          onChangeSelectedNodes([
            ...selectedNodes,
            ...allLeafNodes.filter((n) => !selectedNodes.includes(n)),
          ]);
        else
          onChangeSelectedNodes(
            selectedNodes.filter((n) => !allLeafNodes.includes(n))
          );
      }
    };

    return {
      nodes: nodes.map((node) => {
        const isCollapsed = collapsedNodes.includes(node.value);

        const checked = getAllLeafNodes(node).every((n) =>
          selectedNodes.includes(n)
        );
        const common = {
          key: node.value,
          checkboxProps: {
            checked,
            onChange: () => onChangeChecked({ node, checked: !checked }),
            label: node.title,
            size: 'S' as const,
          },
          onChangeCollapse: () => onToggleCollapse(node.value),
        };

        if (isCollapsed) return { ...common, isCollapsed: true };
        else
          return {
            ...common,
            isCollapsed: false,
            childrenNodes: node.children.map((child) => ({
              key: child.value,
              props: { node: child, selectedNodes, onChangeChecked },
            })),
          };
      }),
    };
  },

  useNodeViewModel: <V extends string>({
    node,
    ...props
  }: NodeProps<V>): NodeViewModel<V> => {
    const isLeaf = getIsLeaf(node);
    const checked = isLeaf
      ? props.selectedNodes.includes(node.value)
      : getAllLeafNodes(node).every((n) => props.selectedNodes.includes(n));
    const checkboxProps: CheckboxProps = {
      label: node.title,
      checked,
      onChange: () => props.onChangeChecked({ node, checked: !checked }),
      size: 'S',
    };

    return node.children
      ? {
          checkboxProps,
          isChildren: true,
          childrenNodes: node.children.map((child) => ({
            key: child.value,
            props: { node: child, ...props },
          })),
        }
      : { checkboxProps, isChildren: false };
  },
};

type ParentNode<V extends string> = {
  title: string;
  value: string;
  children: TreeCheckboxNode<V>[];
};
type LeafNode<V extends string> = { title: string; value: V; children?: never };
type TreeCheckboxNode<V extends string> = ParentNode<V> | LeafNode<V>;
type TreeCheckboxProps<V extends string> = {
  nodes: ParentNode<V>[];
  selectedNodes: V[];
  onChangeSelectedNodes: (selectedNodes: V[]) => void;
};
type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  size: 'S';
};
type TreeCheckboxViewModel<V extends string> = {
  nodes: ({
    key: string;
    onChangeCollapse: () => void;
    checkboxProps: CheckboxProps;
  } & (
    | { isCollapsed: true }
    | {
        isCollapsed: false;
        childrenNodes: { key: string; props: NodeProps<V> }[];
      }
  ))[];
};
type NodeProps<V extends string> = {
  node: TreeCheckboxNode<V>;
  selectedNodes: V[];
  onChangeChecked: (_: { node: TreeCheckboxNode<V>; checked: boolean }) => void;
};
type NodeViewModel<V extends string> = {
  checkboxProps: CheckboxProps;
} & (
  | { isChildren: false }
  | { isChildren: true; childrenNodes: { key: string; props: NodeProps<V> }[] }
);

const getAllLeafNodes = <V extends string>(node: TreeCheckboxNode<V>): V[] => {
  const isLeaf = getIsLeaf(node);
  if (isLeaf) return [node.value];
  return node.children?.flatMap(getAllLeafNodes) ?? [];
};

const getIsLeaf = <V extends string>(
  node: TreeCheckboxNode<V>
): node is LeafNode<V> => !node.children;
