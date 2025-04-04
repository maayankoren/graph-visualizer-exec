
'use client';

import React from 'react';
import {
  ReactFlowProvider,

} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FlowContent } from '../diagram/FlowContent';


export default function DiagramPanel() {
  return (
    <div className="h-[30vh]">
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}

