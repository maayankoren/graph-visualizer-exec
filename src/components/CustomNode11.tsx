import { Handle, NodeProps, Position } from "@xyflow/react";

export default function CustomNode({ data }: NodeProps) {
  return (
    <div className="w-20 h-20 flex items-center justify-center  text-white rounded-full shadow-md border">
      {/* {data.label} */}
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-white rounded-full" />
      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-white rounded-full" />
    </div>
  );
}
