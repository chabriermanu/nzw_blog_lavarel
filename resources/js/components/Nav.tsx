import { Link, usePage } from '@inertiajs/react';

export default function Nav() {
    const { auth } = usePage().props as any;

    return (
        <nav className="border-b bg-white py-2 shadow-md">
            <div className="sm:px-6 mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-black text-indigo-600"
                        >
                            Myblog
                        </Link>
                    </div>

                    <div className="space-x-4 flex items-center">
                        {auth.user ? (
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center border bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                tableau de bord
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-grey-600 hover:text-grey-900 inline-flex items-center border bg-indigo-600 px-4 py-2 text-sm font-medium"
                                >
                                    Connection
                                </Link>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center border bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                >
                                    Inscription
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
