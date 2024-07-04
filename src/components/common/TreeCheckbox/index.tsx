import { clsx } from "../../../utils/className";
import { Checkbox, IconTriangleDown } from "../../DesignSystem/main";
import styles from "./index.module.css";
import { treeCheckboxPresenter } from "./index.presenter";

export const TreeCheckbox = <V extends string>(
  props: Parameters<typeof treeCheckboxPresenter.useTreeCheckboxViewModel<V>>[0]
) => {
  const viewModel = treeCheckboxPresenter.useTreeCheckboxViewModel(props);

  return (
    <div className={styles.wrapper}>
      {viewModel.nodes.map((node) => (
        <div key={node.key}>
          <div className={styles.topNodeCheckboxWrapper}>
            <button
              className={clsx(
                styles.toggleButton,
                node.isCollapsed && styles.collapsed
              )}
              onClick={node.onChangeCollapse}
            >
              <IconTriangleDown className={styles.toggleIcon} />
            </button>
            <Checkbox className={styles.checkbox} {...node.checkboxProps} />
          </div>
          {!node.isCollapsed && (
            <div className={styles.topNodeChildrenWrapper}>
              {node.childrenNodes.map((child) => (
                <Node<V> key={child.key} {...child.props} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Node = <V extends string>(
  props: Parameters<typeof treeCheckboxPresenter.useNodeViewModel<V>>[0]
) => {
  const viewModel = treeCheckboxPresenter.useNodeViewModel(props);

  return (
    <div>
      <Checkbox {...viewModel.checkboxProps} />
      <div className={styles.nodeChildrenWrapper}>
        {viewModel.isChildren &&
          viewModel.childrenNodes?.map((child) => (
            <Node key={child.key} {...child.props} />
          ))}
      </div>
    </div>
  );
};
