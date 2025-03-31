import { BaseEdge, EdgeProps, getStraightPath } from "@xyflow/react";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) {
  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY });

  return (
    <>
      {/* הגדרת חץ SVG */}
      <svg width="0" height="0">
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="10"
            refY="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,5 L0,10 L2,5 Z" fill="#333" />
          </marker>
        </defs>
      </svg>

      {/* הצגת הקו עם החץ */}
      <BaseEdge id={id} path={edgePath} markerEnd="url(#arrow)" style={{ stroke: "#333", strokeWidth: 2 }} />
    </>
  );
}
