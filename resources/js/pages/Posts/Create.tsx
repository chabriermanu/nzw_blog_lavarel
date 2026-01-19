import {FormEvent, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { CreateProps, PostFormData } from '@/types/post'

import { route } from 'ziggy-js';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

export default function Create({}: CreateProps ) {

    const breadcrumbs: BreadcrumbItem[] = [
        { 
            title: 'Créer un article', 
            href: route('posts.create'), 
        },
    ];

    const { data, setData, post, processing, errors, reset } = useForm<PostFormData>({
        title: '',
        description: '',
        image: null as File |null
    });

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };            
            reader.readAsDataURL(file);
        }
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('posts.store'), {
            onSuccess: ()=>{
                reset();
                setPreviewUrl('');
            }
        });
    }    




    return (
        <AppLayout 
            breadcrumbs={breadcrumbs}
            header={
                <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
                    Créer un Post
                </h2>
            }
        >
            <Head title="Créer un Post" />
            <div>
                
                {/* Ton formulaire ici */}
            </div>
        
        </AppLayout>
    );
}
