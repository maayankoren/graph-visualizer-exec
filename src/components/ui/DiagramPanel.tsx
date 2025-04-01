// import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
// import Flow from "../GraphCanvas";

// export default function DiagramPanel() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Diagram</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="bg-muted rounded-md border border-dashed p-6 text-center">
//           [Diagram Placeholder]
//         </div>
//         <Flow/>
//       </CardContent>
//     </Card>
//   );
// }
'use client';

import  {ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Position,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CustomNode } from './../CustomNode';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VenetianMask,Server} from 'lucide-react';

const nodeTypes = { custom: CustomNode };

const nodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 100 },
    data: {
      label: 'Loremipsumm',
      icon: <VenetianMask size={16} />,
      color: 'red',
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 180, y: 100 },
    data: {
      label: 'Loremipsu',
      icon: <Server size={16} />,
      color: 'blue',
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 360, y: 100 },
    data: {
      label: 'Loremipsu',
      icon: <Server size={16} />,
      color: 'blue',
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 540, y: 40 },
    data: {
      label: 'Loremipsumdolorsit',
      sub: '192.168.1.1',
      icon: <Server size={16} />,
      color: 'red',
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 540, y: 160 },
    data: {
      label: 'Loremipsumdolorsit002',
      sub: '192.168.1.2',
      icon: <Server size={16} />,
      color: 'red',
    },
  },
];

const edges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2',type: 'default',
    markerEnd: {
      type: MarkerType.ArrowClosed, 
    }, },
  { id: 'e2-3', source: '2', target: '3',type: 'default',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    }, },
  { id: 'e3-4', source: '3', target: '4' ,type: 'default',
    markerEnd: {
      type: MarkerType.ArrowClosed, 
    }, },
  { id: 'e3-5', source: '3', target: '5' ,type: 'default',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    }, },
];

export default function DiagramPanel() {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Diagram</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
        >
          {/* <Background /> */}
          {/* <Controls showInteractive={false} /> */}
        </ReactFlow>

        {/* Legend */}
        <div className="flex gap-4 justify-center mt-4 text-sm">
          {/* <Legend color="red" label="Lorem" /> */}
          {/* <Legend color="orange" label="Lorem" /> */}
          {/* <Legend color="green" label="Lorem" /> */}
        </div>
      </CardContent>
    </Card>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  const colorMap: Record<string, string> = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  };
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${colorMap[color]}`} />
      <span>{label}</span>
    </div>
  );
}
