import { observer } from "mobx-react-lite";
import { CurriculumNode } from "../../../engine/core/store/models/CurriculumNode";

const YLineHeight = "50%";
const XLineWidth = 16;

interface Props {
  node: CurriculumNode;
  depth?: number;
  isLastChildren?: boolean;
}

export const CurriculumNodeComponent = observer(
  ({ node, depth, isLastChildren }: Props) => {
    return (
      <div
        style={{
          marginLeft: (depth || 0) * 20,
          position: "relative",
        }}
      >
        <div
          style={{
            border: "1px solid #e8e8e8",
            padding: 10,
            display: "inline-block",
            marginTop: 10,
          }}
        >
          <div>{node.title}</div>
          <div>{node.description}</div>
        </div>
        <div>
          {node.children.map((child, index) => (
            <CurriculumNodeComponent
              key={child.id}
              node={child}
              depth={(depth || 0) + 1}
              isLastChildren={index === node.children.length - 1}
            />
          ))}
        </div>
        {/* Top Line */}
        {depth !== 0 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: -XLineWidth,
              height: YLineHeight,
              borderLeft: "1px solid #e8e8e8",
            }}
          />
        )}
        {/* Bottom Line */}
        {depth !== 0 && !isLastChildren && (
          <div
            style={{
              position: "absolute",
              top: YLineHeight,
              left: -XLineWidth,
              height: YLineHeight,
              borderLeft: "1px solid #e8e8e8",
            }}
          />
        )}
        {/* Right Line */}
        {depth !== 0 && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: -XLineWidth,
              width: XLineWidth,
              borderTop: "1px solid #e8e8e8",
            }}
          />
        )}
      </div>
    );
  }
);
