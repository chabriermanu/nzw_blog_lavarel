import { router, usePage, Link } from '@inertiajs/react';
import { useState } from 'react';
import { route } from 'ziggy-js'; 
import { Post, Props } from '../../types/post';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export default function ListPost({ posts, showAuthor = true }: Props) {
    const { auth } = usePage().props as any;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (postId: number) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
            setDeletingId(postId);
            router.delete(route('posts.destroy', postId), {
                onSuccess: () => {
                   
                    setDeletingId(null); 
                },
                onError: () => {
                    setDeletingId(null); 
                    alert("Une erreur est survenue lors de la suppression de l'article.")
                }
            })
        }
        const handleLike = (postId: number) => {
            router.post(route('posts.like', postId), {}, {
                preserveScroll: true,
                preserveState: true
            })
        }

        const canEditPost = (post: Post) => {
            return auth.user?.id === post.user_id;
        };

      return (
      <div className="grid grid-cols md:grid-cols-2 lg: grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            {post.image && (
              <div className="aspect-w-16 aspect-h-9">
                <img className="object-cover w-full h-h48" src={'/storage/${post.image}'} alt={post.title} />
              </div>
            )}
            <CardHeader>
              <h3 className="text-xl font-semibold text-grey-800">
                {post.title}
                </h3>
            </CardHeader>

            <CardContent>
              <p className="text-grey-600 line-clamp-3 md:line-clamp-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                {showAuthor && (
                  <span>Par {post.author.name}</span>
                )}
                <span>{new Date(post.create_at).toLocaleDateString('fr-FR')}</span>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between">

            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };
}
