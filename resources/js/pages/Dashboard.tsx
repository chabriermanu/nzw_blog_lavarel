import { Head, Link } from '@inertiajs/react';


import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

import { DashboardProps } from '@/types/post';

import { route } from 'ziggy-js';
import ListPost from '@/components/Post/ListPost';
 ;



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard({ userPosts }: DashboardProps) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="py-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Mes Publications
                            </h2>
                            <Link href={(route('posts.create'))} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                            text-white bg-indigo-600 hover:bg-indigo-700">
                                Créer un Post                            
                            </Link>
                        </div>
                        {userPosts.length > 0 ? (
                            <ListPost posts={userPosts} showAuthor={true} />
                        ) : (
                            <div className="text-center py-12">
                                <p className="mb-4 text-gray-500">
                                    Vous n'avez pas encore créer de Post
                                </p>
                                <Link href={route('posts.create')} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                                text-white bg-indigo-600 hover:bg-indigo-700">
                                    Créer votre premier Post
                                </Link>
                            </div>
                        )},

                    </div>
                </div>
            </div>
            
               
            
        </AppLayout>
    );
}
