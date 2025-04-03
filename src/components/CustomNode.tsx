import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from "@/lib/utils";

export function CustomNode({ data }: any) {
  return (
    <div
      className={cn(
        'rounded-full flex w-10 h-10 shadow-sm  justify-center items-center text-center text-xs',
        data.color === 'red' && 'bg-red-100 text-red-800 ',
        data.color === 'blue' && 'bg-blue-100 text-blue-800 ',
        data.color === 'orange' && 'bg-orange-100 text-orange-800 ',
        data.color === 'green' && 'bg-green-100 text-green-800 '
      )}
    >
      <div className="text-lg">{data.icon}</div>
      {/* <div className="font-medium">{data.label}</div> */}
      {/* {data.sub && <div className="text-[10px] text-muted-foreground">{data.sub}</div>} */}

      <Handle type="source" position={Position.Right} className="!bg-transparent !border-none !shadow-none -right-3 w-2 h-2 bg-gray-500" />
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-none !shadow-none" />
    </div>
  );
}
