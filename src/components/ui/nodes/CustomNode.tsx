// import { Handle, Position, NodeProps } from '@xyflow/react';
// import { cn } from "@/lib/utils";

// export function CustomNode({ data }: any) {
//   return (
//     <div
//       className={cn(
//         'rounded-full flex w-[55px] h-[55px] shadow-sm  justify-center items-center text-center ',
//         data.color === 'blue' && 'bg-[#d8eaff] text-blue-500',
//         data.color === 'red' && 'bg-[#fff2f0] text-red-500',
//         data.color === 'orange' && 'bg-orange-500 text-orange-800 ',
//         data.color === 'green' && 'bg-green-500 text-green-800 '
//       )}
//     >
//       <div >{data.icon}</div>
//       {/* <div className="font-medium">{data.label}</div> */}
//       {/* {data.sub && <div className="text-[10px] text-muted-foreground">{data.sub}</div>} */}

//       <Handle type="source" position={Position.Right} className="!bg-transparent !border-none !shadow-none w-2 h-2 bg-gray-500" />
//       <Handle type="target" position={Position.Left} className="!bg-transparent !border-none !shadow-none " />
//     </div>
//   );
// }
import { Handle, Position } from '@xyflow/react';
import { cn } from "@/lib/utils";

export function CustomNode({ data }: any) {
  return (
    <div
      className={cn(
        'relative rounded-full flex w-[55px] h-[55px] shadow-sm justify-center items-center text-center',
        data.color === 'blue' && 'bg-[#d8eaff] text-blue-500',
        data.color === 'red' && 'bg-[#fff2f0] text-red-500',
        data.color === 'orange' && 'bg-orange-500 text-orange-800',
        data.color === 'green' && 'bg-green-500 text-green-800'
      )}
    >
      {/* האייקון המרכזי */}
      <div>{data.icon}</div>

      {/* האייקון הקטן בפינה */}
      {data.badgeIcon && (
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shadow-md">
          {data.badgeIcon}
        </div>
      )}

      {/* Handles */}
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-transparent !border-none !shadow-none w-2 h-2 bg-gray-500"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-transparent !border-none !shadow-none"
      />
    </div>
  );
}
