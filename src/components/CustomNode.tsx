import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from "@/lib/utils";

export function CustomNode({ data }: any) {
  return (
    <div
      className={cn(
        'rounded-full px-4 py-2 border shadow-sm flex flex-col items-center text-center text-xs',
        data.color === 'red' && 'bg-red-100 text-red-800 border-red-300',
        data.color === 'blue' && 'bg-blue-100 text-blue-800 border-blue-300',
        data.color === 'orange' && 'bg-orange-100 text-orange-800 border-orange-300',
        data.color === 'green' && 'bg-green-100 text-green-800 border-green-300'
      )}
    >
      <div className="text-lg">{data.icon}</div>
      <div className="font-medium">{data.label}</div>
      {data.sub && <div className="text-[10px] text-muted-foreground">{data.sub}</div>}

      <Handle type="source" position={Position.Right} className="!bg-transparent !border-none !shadow-none" />
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-none !shadow-none" />
    </div>
  );
}
