
'use client'

import { Handle, Position } from '@xyflow/react'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useState } from 'react'

export function CustomNode({ data }: any) {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div
                    onClick={() => setOpen(true)}
                    className="flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                    <div
                        className={cn(
                            'relative rounded-full flex w-[45px] h-[45px] shadow-sm justify-center items-center transition',
                            data.color === 'blue' && 'bg-[#d8eaff] text-blue-500',
                            data.color === 'red' && 'bg-[#fff2f0] text-red-500'
                        )}
                    >
                        <div>{data.icon}</div>

                        {data.badgeIcon && (
                            <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md bg-[${data.badgeIconColor}]`}>
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

                    <div>
                        <div className="w-[80px] truncate text-[13px] font-semibold text-gray-700 leading-tight text-center">
                            {data.label}
                        </div>
                        {data.sub && (
                            <div className="text-[11px] text-muted-foreground">{data.sub}</div>
                        )}
                    </div>
                </div>
            </PopoverTrigger>

            <PopoverContent className="z-50 w-48 max-w-[200px] p-4 text-sm text-gray-800">
                <div className="font-medium truncate">{data.label}</div>
                {data.sub && (
                    <p className="text-xs text-muted-foreground mt-2 break-words truncate">
                        {data.sub}
                    </p>
                )}
            </PopoverContent>
        </Popover>
    )
}
