import React from 'react'
import { Button } from '@/components/ui/button'
import { SidebarButton } from '@/components/ui/sidebar-button'
import { Divider } from '@/components/ui/divider'
import Link from 'next/link'
import { cn } from '@/utils/lib/tailwind-merge'

interface SidebarProps {
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => {



    return (
        <section className={cn('w-full bg-sidebar', className)}>
            <div className='mt-5 px-8 w-full h-full flex flex-col space-y-7'>
                <div className='flex flex-col space-y-1'>
                    <Link passHref href='/'>
                        <Button
                            variant='link'
                            className='w-fit px-2 text-base font-bold text-accent-foreground hover:no-underline'
                        >
                            React and Next Guide
                        </Button>
                    </Link>
                    <Divider variant='horizontal' />
                </div>
                <div className='flex flex-col space-y-0'> {/* TODO: add subsections to each button */}
                    <SidebarButton href='/'>
                        Ecosistema
                    </SidebarButton>
                    <SidebarButton href='/react'>
                        React
                    </SidebarButton>
                    <SidebarButton href='/next'>
                        Next
                    </SidebarButton>
                </div>
            </div>
        </section>
    )
}

export default Sidebar
