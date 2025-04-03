// components/diagram/useDiagramData.ts
import { Node, Edge, MarkerType } from '@xyflow/react';
import { VenetianMask, Server } from 'lucide-react';

export function useDiagramData() {
    const nodes: Node[] = [
        {
            id: '1',
            type: 'custom',
            position: { x: 30, y: 120 },
            data: {
                label: 'Loremipsumm',
                icon: <VenetianMask size={20} />,
                color: 'red',
            },
        },
        {
            id: '2',
            type: 'custom',
            position: { x: 150, y: 120 },
            data: {
                label: 'Loremipsu',
                icon: <Server size={20} />,
                color: 'blue',
            },
        },
        {
            id: '3',
            type: 'custom',
            position: { x: 300, y: 120 },
            data: {
                label: 'Loremipsu',
                icon: <Server size={20} />,
                color: 'blue',
            },
        },
        {
            id: '4',
            type: 'custom',
            position: { x: 500, y: 60 },
            data: {
                label: 'Loremipsumdolorsit',
                sub: '192.168.1.1',
                icon: <Server size={20} />,
                color: 'blue',
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
                color: 'blue',
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

    return { nodes, edges };
}
