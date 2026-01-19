import Nav from '@/components/Nav';
import { Head, Link } from '@inertiajs/react';
import ListPost from '../components/Post/ListPost';
import { PageProps } from '../types';
import { Post } from '../types/post';

export default function Welcome({
    auth,
    posts,
    canRegister,
}: PageProps<{ posts: Post[]; canRegister: boolean }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen">
                <Nav />
                <div className="bg-white">
                    <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4 py-16 sm:py-24">
                        <div className="text-center">
                            <h1 className="text-grey800 text-4xl font-black">
                                <span className="block">Bienvenue sur </span>
                                <span className="block text-indigo-700">
                                    Notre Blog
                                </span>
                            </h1>
                            <p className="maw-w-md text-grey-500 mx-auto mt-3 text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis quam aliquid
                                praesentium eius autem pariatur velit, nihil
                                dicta sint nam molestias dignissimos eveniet
                                enim corrupti ea quidem earum dolores iste?
                            </p>
                            {!auth.user && canRegister && (
                                <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                                    <div className="rounded-md shadow-md">
                                        <Link
                                            href="/register"
                                            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white transition duration-300 hover:bg-indigo-700"
                                        >
                                            Commencer
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 sm:py-12">
                    <div className="mb-12 text-center">
                        <h2 className="text-grey-800 text-3xl font-extrabold">
                            Articles Récents
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl">
                            Découvrez nos derniers articles et actualités.
                        </p>
                    </div>
                    <ListPost posts={posts} />
                </div>
                
            </div>
        </>
    );
}
