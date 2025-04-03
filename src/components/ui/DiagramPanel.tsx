// // import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
// // import Flow from "../GraphCanvas";

// // export default function DiagramPanel() {
// //   return (
// //     <Card>
// //       <CardHeader>
// //         <CardTitle>Diagram</CardTitle>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="bg-muted rounded-md border border-dashed p-6 text-center">
// //           [Diagram Placeholder]
// //         </div>
// //         <Flow/>
// //       </CardContent>
// //     </Card>
// //   );
// // }
'use client';

// import  {ReactFlow,
//   Background,
//   Controls,
//   MiniMap,
//   Node,
//   Edge,
//   Position,
//   MarkerType,
//   useReactFlow
// } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';
// import { CustomNode } from './../CustomNode';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VenetianMask, Server } from 'lucide-react';
// import { useEffect } from 'react';

// const nodeTypes = { custom: CustomNode };

// const nodes: Node[] = [
//   {
//     id: '1',
//     type: 'custom',
//     position: { x: 0, y: 100 },
//     data: {
//       label: 'Loremipsumm',
//       icon: <VenetianMask size={16} />,
//       color: 'red',
//     },
//   },
//   {
//     id: '2',
//     type: 'custom',
//     position: { x: 180, y: 100 },
//     data: {
//       label: 'Loremipsu',
//       icon: <Server size={16} />,
//       color: 'blue',
//     },
//   },
//   {
//     id: '3',
//     type: 'custom',
//     position: { x: 360, y: 100 },
//     data: {
//       label: 'Loremipsu',
//       icon: <Server size={16} />,
//       color: 'blue',
//     },
//   },
//   {
//     id: '4',
//     type: 'custom',
//     position: { x: 540, y: 40 },
//     data: {
//       label: 'Loremipsumdolorsit',
//       sub: '192.168.1.1',
//       icon: <Server size={16} />,
//       color: 'red',
//     },
//   },
//   {
//     id: '5',
//     type: 'custom',
//     position: { x: 540, y: 160 },
//     data: {
//       label: 'Loremipsumdolorsit002',
//       sub: '192.168.1.2',
//       icon: <Server size={16} />,
//       color: 'red',
//     },
//   },
// ];

// const edges: Edge[] = [
//   { id: 'e1-2', source: '1', target: '2',type: 'default',
//     markerEnd: {
//       type: MarkerType.ArrowClosed, 
//     }, },
//   { id: 'e2-3', source: '2', target: '3',type: 'default',
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     }, },
//   { id: 'e3-4', source: '3', target: '4' ,type: 'bezier',
//     markerEnd: {
//       type: MarkerType.ArrowClosed, 
//     },
//      },
//   { id: 'e3-5', source: '3', target: '5' ,type: 'bezier',
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     },
// ];

// export default function DiagramPanel() {

//   return (
//     <div className="bg-white rounded-xl shadow p-6  flex flex-col h-[400px]">
//       {/* <CardHeader>
//         <CardTitle>Diagram</CardTitle>
//       </CardHeader> */}
//       <div>
//       <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           nodeTypes={nodeTypes}
//           // fitView
//           // fitViewOptions={{ padding: 0.5 }}
//           // nodesDraggable={false}
//           // elementsSelectable={false}
//           // panOnDrag={false}
//           zoomOnScroll={false}
//           zoomOnPinch={false}

//         >
//           {/* <Background /> */}
//           {/* <Controls showInteractive={false} /> */}
//         </ReactFlow>
//         </div>
//         <div>;lk;lk</div>
//     </div>
//   );
// }

// function Legend({ color, label }: { color: string; label: string }) {
//   const colorMap: Record<string, string> = {
//     red: 'bg-red-500',
//     orange: 'bg-orange-500',
//     green: 'bg-green-500',
//   };
//   return (
//     <div className="flex items-center gap-2">
//       <div className={`w-4 h-4 rounded-full ${colorMap[color]}`} />
//       <span>{label}</span>
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  Node,
  Edge,
  Handle,
  Position,
  MarkerType,
  getSmoothStepPath,
  EdgeProps,
  Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CustomNode } from './../CustomNode';

const SoftSplitEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const midX = sourceX + (targetX - sourceX) * 0.4;

  const isUp = targetY < sourceY;
  const verticalOffset = Math.abs(targetY - sourceY) * 0.5;
  const curve = 30; // כמה עיקול בפנייה

  const path = `
    M ${sourceX},${sourceY}
    C ${midX},${sourceY} ${midX},${targetY} ${targetX},${targetY}
  `;

  return (
    <path
      id={id}
      d={path}
      className="stroke-gray-400"
      fill="none"
      strokeWidth={2}
      markerEnd={markerEnd}
      style={style}
    />
  );
};

// Custom node with icon and status badge
// const CustomNode = ({ data }: any) => {
//   return (
//     <div className="rounded-xl shadow-md px-4 py-2 bg-white border border-gray-200 relative w-44 text-center">
//       {/* Top-left icon (if any) */}
//       {data.icon && (
//         <div className="absolute -left-4 -top-4 bg-red-100 p-2 rounded-full shadow text-red-500">
//           {data.icon}
//         </div>
//       )}

//       {/* Top-right status badge */}
//       {data.status && (
//         <div
//           className={`absolute -top-2 -right-2 p-1 rounded-full shadow ${
//             data.status === 'error' ? 'bg-red-500' : data.status === 'warn' ? 'bg-yellow-400' : 'bg-green-500'
//           }`}
//         >
//           <span className="text-white text-xs">⚠️</span>
//         </div>
//       )}

//       {/* Node label */}
//       <div className="font-semibold">{data.label}</div>

//       {/* IP address if exists */}
//       {data.ip && <div className="text-xs text-gray-500 mt-1">{data.ip}</div>}
//     </div>
//   );
// };

const nodeTypes = {
  custom: CustomNode,
};
const edgeTypes = {
  soft: SoftSplitEdge,
};

// Nodes & Edges
const nodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 30, y: 100 },
    data: {
      label: 'Loremipsumm',
      icon: <VenetianMask size={20} />,
      color: 'red',
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 150, y: 100 },
    data: {
      label: 'Loremipsu',
      icon: <Server size={20} />,
      color: 'blue',
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 300, y: 100 },
    data: {
      label: 'Loremipsu',
      icon: <Server size={20} />,
      color: 'blue',
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 500, y: 50 },
    data: {
      label: 'Loremipsumdolorsit',
      sub: '192.168.1.1',
      icon: <Server size={20} />,
      color: 'red',
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 500, y: 160 },
    data: {
      label: 'Loremipsumdolorsit002',
      sub: '192.168.1.2',
      icon: <Server size={20} />,
      color: 'red',
    },
  },
];

const edges: Edge[] = [
  {
    id: 'e1-2', source: '1', target: '2', type: 'default',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-3', source: '2', target: '3', type: 'default',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-4', source: '3', target: '4', type: 'soft',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-5', source: '3', target: '5', type: 'soft',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

function FlowContent() {
  const { fitView } = useReactFlow();

  // useEffect(() => {
  //   fitView({ padding: 1});
  // }, [fitView]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      // edgeTypes={edgeTypes}
      fitView
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      zoomOnScroll={false}
      panOnDrag={false}
      panOnScroll={false}
      zoomOnPinch={false}
      proOptions={{ hideAttribution: true }}
      minZoom={1}
      maxZoom={1}



    >
      <Background
        size={1}       // עובי
        className="w-full h-full"
        variant='none'
      />
    </ReactFlow>

  );
}

export default function DiagramPanel() {
  return (
    <div className="h-[25vh]">
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}

