import type { SidebarEntry } from '@/types/sidebar'
import { Ecosystem } from '@/components/ui/icons/ecosystem'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { NextJS } from '@/components/ui/icons/nextjs'

const sidebar: SidebarEntry[] = [
    {
        id: 0,
        title: 'Ecossistema',
        href: '/introduction',
        icon: <Ecosystem />,
        items: [
            {
                id: 0,
                title: 'Introdução e Instalação',
                href: '/introduction',
            },
            {
                id: 1,
                title: 'Configurações e Diretórios',
                href: '/settings',
            },
            {
                id: 2,
                title: 'Node',
                href: '/node',
            },
            {
                id: 3,
                title: 'Typescript',
                href: '/typescript',
            },
            {
                id: 4,
                title: 'Tailwind',
                href: '/tailwind',
            },
            {
                id: 5,
                title: 'ESLint',
                href: '/eslint',
            },
            {
                id: 6,
                title: 'Husky',
                href: '/husky',
            }
        ],
    },
    {
        id: 1,
        title: 'React',
        href: '/react/introduction',
        icon: <ReactJS />,
        items: [
            {
                id: 7,
                title: 'Introdução ao React',
                href: '/react/introduction',
            },
            {
                id: 8,
                title: 'Componentes',
                href: '/react/components',
            },
            {
                id: 9,
                title: 'Props',
                href: '/react/props',
            },
            {
                id: 10,
                title: 'Estado',
                href: '/react/state',
            },
        ],
    },
    {
        id: 2,
        title: 'Next',
        href: '/next/introduction',
        icon: <NextJS />,
        items: [
            {
                id: 11,
                title: 'Introdução',
                href: '/next/introduction',
            },
            {
                id: 12,
                title: 'Instalação e Configuração',
                href: '/next/installation-and-settings',
            },
        ],
    }
]

export { sidebar }
