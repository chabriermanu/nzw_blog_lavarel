import { PageProps } from '@/types';

export interface Author {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    description: string;
    image: string | null;
    created_at: string;
    author: Author;
    is_liked: boolean;
    likes_count: number;
    user_id: number;
}

export interface PostFormData {
    [key: string]: string | File | null; // Corrigé: "keyo" -> "key"
    title: string;
    description: string;
    image: File | null;
}

export interface DashboardProps extends PageProps {
    userPosts: Post[];
}

export interface CreateProps extends PageProps {} // Corrigé: "interfcae" -> "interface"

export interface EditProps extends PageProps {
    post: Post; // Tu voudras probablement ajouter la propriété post ici
}

export interface ShowProps extends PageProps {
    post: Post; // Et ici aussi
}

export interface Props {
    post: Post[];
    showAuthor?: boolean;
    canEdit?: boolean;
}
