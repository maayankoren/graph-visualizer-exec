// components/diagram/FlowContent.tsx
'use client';
import React, { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import { useDiagramData } from './useDiagramData';
import { nodeTypes } from './nodeTypes';
import { Popover } from '../ui/popover';
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '../ui/button';
// import { edgeTypes } from './edgeTypes';

export default function FlowContent() {
    const { nodes, edges } = useDiagramData();
    const [selectedNode, setSelectedNode] = useState<Node | null>(null)

    const handleNodeClick: any = (event: any, node: any) => {
        console.log("hello")
        setSelectedNode(node)
    }

    const handleClose = () => {
        setSelectedNode(null)
    }
    return (
        <div className='w-full h-full relative'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                //   edgeTypes={edgeTypes}
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
                onNodeClick={handleNodeClick}
            />

            {selectedNode && (
                <Popover open={!!selectedNode} onOpenChange={handleClose}>
                    clicked
                    <PopoverContent className="z-50 bg-white shadow-md p-4 text-sm">
                        <Button size="sm" onClick={handleClose} className="mt-2">
                            סגור
                        </Button>
                    </PopoverContent>
                </Popover>
            )}
        </div>

    );
}
