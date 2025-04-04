// components/diagram/FlowContent.tsx
'use client';
import React from 'react';
import { ReactFlow } from '@xyflow/react';
import { useDiagramData } from './useDiagramData';
import { nodeTypes } from './nodeTypes';

export function FlowContent() {
    const { nodes, edges } = useDiagramData();
    return (
        <div className='w-full h-full relative'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
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
                className="w-full h-full"
                onNodeClick={()=>{}}
            />
        </div>

    );
}
