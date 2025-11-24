'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, HeartPulse, Mars, Info, Venus } from 'lucide-react';
import React from "react";

// Define the navigation groups
const navGroups = [
    {
        name: 'Cardiovasculair Risico',
        icon: <HeartPulse className="w-5 h-5" />,
        items: [
            {
                name: 'Algemeen',
                path: "/cardiovasculairrisico/algemeen",
                icon: <Info className="w-5 h-5" />,
            },
            {
                name: 'Vrouwen',
                path: '/cardiovasculairrisico/women',
                icon: <Venus className="w-5 h-5" />,
            },
            {
                name: 'Mannen',
                path: '/cardiovasculairrisico/men',
                icon: <Mars className="w-5 h-5" />,
            }
        ]
    }
    // Add more groups here in the future
] as const;

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="h-full bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 fixed p-4 w-48">
            <div className="flex items-center space-x-2 mb-8 p-2">
                <h1 className="text-xl font-bold">Visualisaties</h1>
            </div>

            {/* Home Link */}
            <nav className="space-y-1 mb-6">
                <Link
                    href="/"
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                        pathname === '/'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                    }`}
                >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </Link>
            </nav>

            {/* Navigation Groups */}
            <div className="space-y-6">
                {navGroups.map((group) => (
                    <div key={group.name} className="space-y-1">
                        {/* Group Header */}
                        <div className="flex items-center px-4 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider space-x-2">
                            <span className="flex-shrink-0">{group.icon}</span>
                            <span className="whitespace-normal">{group.name}</span>
                        </div>

                        {/* Group Items */}
                        <nav className="space-y-1">
                            {group.items.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                                        pathname === item.path
                                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                            : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                ))}
            </div>
        </div>
    );
}
