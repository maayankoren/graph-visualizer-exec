import { EdgeProps } from '@xyflow/react';


export function SoftSplitEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    markerEnd,
    style = {},
  }: EdgeProps) {
    const dx = targetX - sourceX;
    const dy = targetY - sourceY;
    const curvature = 0.4; 
  
    const controlPointX1 = sourceX + dx * curvature;
    const controlPointY1 = sourceY;
    const controlPointX2 = targetX - dx * curvature;
    const controlPointY2 = targetY;
  
    const path = `
      M ${sourceX},${sourceY}
      C ${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${targetX},${targetY}
    `;
  
    return (
      <path
        id={id}
        d={path}
        className="stroke-gray-400"
        fill="none"
        strokeWidth={1.5}
        markerEnd={markerEnd}
        style={style}
      />
    );
  }
  
// components/diagram/nodeTypes.ts

export const edgeTypes = {
  custom: SoftSplitEdge,
};
