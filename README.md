# 📝 Laravel Blog System

> Application web moderne de gestion de posts/articles construite avec Laravel 12, Inertia.js, React et TypeScript.

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=flat&logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-2-9553E9?style=flat)](https://inertiajs.com)
![Version](https://img.shields.io/badge/Version-1.0-green)

*Projet réalisé dans le cadre de la formation Développeur Web et Web Mobile à l'AFPA Saint-Jean-de-Védas (2025-2026)*

## 📋 À propos

Laravel Blog System est une application full-stack de gestion de posts/articles avec upload d'images. Elle offre une interface utilisateur moderne et réactive construite avec les dernières technologies web et suit les meilleures pratiques de développement.

Développée dans le cadre de ma formation de Développeur Web et Web Mobile à l'AFPA Saint-Jean-de-Védas, cette application démontre ma maîtrise de l'architecture full-stack moderne avec Laravel et React.

## 📚 Historique du Développement

### Version 1.0 - Système de Posts Complet

**Phase 3 : Corrections et Optimisations**
- 🔧 Alignement du modèle Post avec la colonne `image` (suppression de `image_path`)
- 🔗 Correction de la relation `user` et chargement dans le dashboard
- 📸 Mise à jour de PostController pour gérer correctement le stockage/mise à jour/suppression des images
- ✅ Correction des noms de migrations et cohérence des tables
- 🖼️ Correction de l'affichage des images dans ListPost.tsx (utilisation de `/storage/{image}`)
- 🎨 Amélioration de la page Create Post pour correspondre à la nouvelle logique d'images
- 🧹 Nettoyage et correction des routes (suppression des retours inutilisés, cohérence)

**Phase 2 : Améliorations et Refactoring**
- 🔄 Mise à jour de ProfileController et WelcomeController
- 👤 Amélioration des relations du modèle User et nettoyage
- 📦 Mise à jour des dépendances (composer.lock, package-lock.json)
- ♻️ Refactorisation des composants Nav et ListPost
- 🧩 Ajout d'un composant réutilisable `<Textarea />` UI
- 🎨 Amélioration de AppLayout avec support header/breadcrumb
- 📄 Mise à jour des pages Dashboard, Create Post, Welcome et Profile
- 📝 Amélioration des types Post et typages TypeScript
- 🏗️ Mise à jour de la structure du layout Blade (app.blade.php)
- 🧹 Nettoyage et réorganisation des paramètres et routes web

**Phase 1 : Configuration Initiale**
- 🚀 Installation et configuration de Laravel 12
- 🔐 Configuration de Fortify pour l'authentification
- ⚛️ Configuration Inertia.js + React + TypeScript
- 📝 Système de posts avec CRUD complet
- 🎨 Composants UI style Shadcn
- 🛠️ Configuration ESLint, Prettier, et tests
- 🗄️ Migrations et modèles de base de données

## ✨ Fonctionnalités

- ✅ **CRUD complet des posts** : Créer, lire, mettre à jour et supprimer des articles
- 📸 **Gestion d'images** : Upload et affichage d'images pour chaque post
- 🔐 **Authentification sécurisée** : Laravel Fortify avec gestion complète des utilisateurs
- 👤 **Gestion de profil** : Page de profil utilisateur personnalisable
- 🎨 **Interface moderne** : Design épuré avec composants UI style Shadcn et Tailwind CSS
- 📱 **Responsive Design** : Interface adaptative pour tous les appareils
- ✔️ **Validation des données** : Validation côté serveur et client
- 🚀 **Navigation fluide** : SPA grâce à Inertia.js (pas de rechargement de page)
- 🧪 **Tests intégrés** : Configuration ESLint, Prettier pour la qualité du code
- 📊 **Dashboard** : Vue d'ensemble des posts avec relations utilisateur
- 🎯 **Architecture propre** : Code organisé et maintenable

## 🛠️ Stack Technique

### Backend
- **Laravel 12** - Framework PHP moderne
- **Laravel Fortify** - Authentification robuste
- **PHP 8.3+** - Langage serveur
- **MySQL** - Base de données relationnelle

### Frontend
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Inertia.js 2** - Adaptateur SPA pour Laravel
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/ui** - Composants UI modernes
- **Lucide React** - Bibliothèque d'icônes

### Qualité de Code
- **ESLint** - Linter JavaScript/TypeScript
- **Prettier** - Formatage de code automatique
- **PHPUnit** - Tests unitaires PHP

### Outils
- **Vite** - Build tool et dev server
- **Git** - Contrôle de version

## 📦 Installation

### Prérequis

- PHP >= 8.3
- Composer
- Node.js >= 18
- MySQL ou PostgreSQL
- Git

**💡 Note :** Ce projet a été développé avec **WAMP** sur Windows. Les instructions ci-dessous sont adaptées à cet environnement.

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/chabriermanu/laravel-blog.git
cd laravel-blog
```

2. **Installer les dépendances PHP**
```bash
composer install
```

3. **Installer les dépendances Node.js**
```bash
npm install
```

4. **Configuration de l'environnement**
```bash
cp .env.example .env
php artisan key:generate
```

5. **Configurer la base de données**

Modifiez le fichier `.env` avec vos credentials :
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_blog
DB_USERNAME=root
DB_PASSWORD=
```

6. **Exécuter les migrations**
```bash
php artisan migrate
```

7. **Créer le lien symbolique pour les images**
```bash
php artisan storage:link
```

8. **Lancer les serveurs de développement**

Terminal 1 - Backend :
```bash
php artisan serve
```

Terminal 2 - Frontend :
```bash
npm run dev
```

9. **Accéder à l'application**
```
http://localhost:8000
```

## 🏗️ Structure du Projet

```
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── PostController.php
│   │   │   ├── ProfileController.php
│   │   │   └── WelcomeController.php
│   │   └── Requests/
│   └── Models/
│       ├── User.php
│       └── Post.php
├── database/
│   └── migrations/
│       ├── [timestamp]_create_users_table.php
│       └── [timestamp]_create_posts_table.php
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   └── textarea.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── ListPost.tsx
│   │   │   └── AppLayout.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Welcome.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Posts/
│   │   │       ├── Create.tsx
│   │   │       ├── Edit.tsx
│   │   │       └── Show.tsx
│   │   └── types/
│   │       └── index.d.ts
│   └── views/
│       └── app.blade.php
├── routes/
│   └── web.php
├── storage/
│   └── app/
│       └── public/
│           └── images/
├── .eslintrc.js
├── .prettierrc
└── package.json
```

## 🎯 Utilisation

### Créer un post

1. Connectez-vous à votre compte
2. Cliquez sur "Créer un post" ou "Nouveau post"
3. Remplissez le titre et le contenu
4. Uploadez une image (optionnel)
5. Cliquez sur "Publier"

### Modifier un post

1. Accédez à la liste de vos posts
2. Cliquez sur l'icône ✏️ "Modifier"
3. Modifiez le contenu
4. Changez l'image si nécessaire
5. Enregistrez les modifications

### Supprimer un post

1. Accédez à la liste de vos posts
2. Cliquez sur l'icône 🗑️ "Supprimer"
3. Confirmez la suppression

### Gérer son profil

1. Cliquez sur votre avatar ou "Profil"
2. Modifiez vos informations personnelles
3. Sauvegardez les changements

## 📸 Captures d'écran

[Ajoutez vos captures d'écran ici]

### Suggestions de captures d'écran :
- Page d'accueil (Welcome)
- Dashboard avec liste des posts
- Formulaire de création de post
- Page de détail d'un post
- Page de profil utilisateur

## 🔐 Sécurité

- Authentification complète via Laravel Fortify
- Protection CSRF sur tous les formulaires
- Validation des données côté serveur
- Upload d'images sécurisé avec validation de type
- Requêtes HTTP sécurisées avec Inertia.js
- Relations Eloquent pour l'intégrité des données

## 🧪 Tests et Qualité de Code

### Lancer les tests
```bash
# Tests PHP (PHPUnit)
php artisan test

# Tests avec couverture
php artisan test --coverage
```

### Linting et formatage
```bash
# Linter ESLint
npm run lint

# Formatter Prettier
npm run format

# Vérifier le formatage
npm run format:check
```

### Standards de code
- **PSR-12** pour PHP
- **Airbnb** style guide pour TypeScript/React
- **Prettier** pour le formatage automatique

## 🚀 Déploiement

### Préparer pour la production

```bash
# Optimiser les assets frontend
npm run build

# Optimiser Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

# Créer le lien symbolique pour les images (si non fait)
php artisan storage:link
```

### Variables d'environnement de production
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://votre-domaine.com

# Configurer la base de données de production
DB_CONNECTION=mysql
DB_HOST=votre-hote-db
DB_PORT=3306
DB_DATABASE=votre_db_production
DB_USERNAME=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe_securise
```

## 📝 Améliorations futures

- [ ] Système de catégories pour les posts
- [ ] Tags et filtres avancés
- [ ] Système de commentaires
- [ ] Likes et partages
- [ ] Recherche full-text
- [ ] Pagination améliorée
- [ ] Éditeur WYSIWYG (TinyMCE ou Quill)
- [ ] Mode brouillon pour les posts
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Export de posts (PDF, Markdown)
- [ ] API REST pour consommation externe
- [ ] Dashboard analytics (vues, likes, etc.)

## 🐛 Problèmes connus et solutions

### Images ne s'affichent pas
```bash
# Vérifiez que le lien symbolique existe
php artisan storage:link
```

### Erreur CORS
```bash
# Configurez config/cors.php
'paths' => ['api/*', 'sanctum/csrf-cookie', 'storage/*'],
```

## 📚 Ressources et Documentation

- [Documentation Laravel 12](https://laravel.com/docs/12.x)
- [Documentation Inertia.js](https://inertiajs.com)
- [Documentation React](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)
- [Laravel Fortify](https://laravel.com/docs/12.x/fortify)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 👨‍💻 Auteur

**Emmanuel Chabrier** - Développeur Web Full-Stack en formation

🎓 **Formation :** Développeur Web et Web Mobile - AFPA Saint-Jean-de-Védas  
📅 **Période :** Septembre 2025 - Avril 2026  
🔍 **Recherche :** Stage de 10 semaines (Février 2026)  
📍 **Localisation :** Saint-Geniès-de-Fontédit, France

### Stack technique maîtrisée
- **Frontend :** HTML5, CSS3, JavaScript, React, TypeScript
- **Backend :** PHP, Laravel, Symfony, MySQL
- **Outils :** Git, WAMP, Figma, Bootstrap, ESLint, Prettier

### Projets en cours
- 📝 Blog sur les séries TV et dessins animés 80-2000 (ECF - Projet final)
- 🎄 Calendrier de l'Avent interactif (React/TypeScript + Symfony)
- 📇 Gestionnaire de contacts (Laravel + Inertia + React)
- 🎮 Jeu Space Invader (JavaScript)

---

**Liens :**
- 💼 GitHub: [@chabriermanu](https://github.com/chabriermanu)
- 💡 LinkedIn: [Votre profil LinkedIn](https://www.linkedin.com/in/votre-profil)
- 📧 Contact: chabrier.emmanuel@hotmail.fr

💡 *Ouvert aux opportunités de stage en développement web full-stack*

## 📄 Licence

Ce projet est développé dans un cadre pédagogique à l'AFPA.

## 🙏 Remerciements

- Formation AFPA Saint-Jean-de-Védas
- Documentation Laravel et React
- Communauté Open Source
- Tutoriels et ressources en ligne

---

⭐ **N'hésitez pas à mettre une étoile si vous aimez ce projet !**

---

## 💻 Commandes utiles

```bash
# Développement
php artisan serve          # Lancer le serveur Laravel
npm run dev               # Lancer Vite en mode dev
npm run build             # Build pour production

# Base de données
php artisan migrate       # Exécuter les migrations
php artisan migrate:fresh # Reset et re-migrer
php artisan db:seed       # Lancer les seeders

# Cache
php artisan cache:clear   # Nettoyer le cache
php artisan config:clear  # Nettoyer config cache
php artisan route:clear   # Nettoyer routes cache
php artisan view:clear    # Nettoyer views cache

# Qualité de code
npm run lint              # Vérifier le code
npm run format            # Formatter le code
php artisan test          # Lancer les tests
```

---

**Version :** 1.0  
**Dernière mise à jour :** Janvier 2026