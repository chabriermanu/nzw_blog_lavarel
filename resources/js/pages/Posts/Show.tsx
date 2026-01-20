import Nav from "@/components/Nav";
import { ShowProps } from "@/types/post";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Heart } from "lucide-react";
import { route } from "ziggy-js";
import { Button } from '@/components/ui/button';
export default function Show() {

  const { auth, post } = usePage().props as unknown as ShowProps;

  const handleLike = () => {
    if (!auth.user) {
      window.location.href = route('login');
      return;
    }

    router.post(route('posts.like', post.id), {}, {
      preserveScroll: true,
      preserveState: true
    });
  };

  const handleDelete = () => {
    if (confirm('Etes-vous sur de vouloir réllement supprimer ce post?')) {
      router.delete(route('posts.destroy', post.id));
    }
  };

  const canEdit = auth.user?.id === post.user_id;

  return (
    <div className="min-screen bg-gray-50">

      <Head title={post.title} />

      <Nav />

      <div className="py-12">
        <article className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-md sm:rounded-lg">
            <div className="p-6">
              <div className="mb-6 flex justify-between items-center">
                <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  Retour
                </Link>
                {canEdit && (
                  <div className="flex gap-4">
                    <Link href={route('posts.edit',post.id)}className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      Modifier
                    </Link>
                    <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition-colors">
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
              {post.image &&(
                <div className="mb-8">
                  <img src={`/storage/${post.image}`} alt={post.title}className=" w-full rounded-md w-[94] h-[94]"/>
                </div>
              )}
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {post.title}
              </h1>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-4">
                  <span>Par: {post.author.name}</span>
                  <span>-</span>
                  <span>{new Date(post.created_at).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                  <Heart
                    className="w-6 h-6"
                    fill={post.is_liked ? "currentColor" : "none"}
                  />

                  </button>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>

    </div>
  );
}
