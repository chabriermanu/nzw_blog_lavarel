import { type ReactNode } from 'react';

import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    header?:ReactNode;
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate 
    breadcrumbs={breadcrumbs} 
    header={Headers}
    {...props}
    >
        {children}
    </AppLayoutTemplate>
);
