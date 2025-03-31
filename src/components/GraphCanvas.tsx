'use client';

import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import CustomNode from "./CustomNode";
import CustomEdge from './CustomEdge'

const nodeTypes = { custom: CustomNode };
const edgeTypes = {
    'custom-edge': CustomEdge
  }
   
const initialNodes = [
    { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } ,type: "custom"},
    { id: "2", position: { x: 200, y: 200 }, data: { label: "2" },type: "custom" },
  ];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrow',}];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
        ,akndlkasndlk
      
    </ReactFlow>
  );
}

export default Flow;