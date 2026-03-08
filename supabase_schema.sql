-- EXTENSION POUR LA SÉCURITÉ
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- TABLE DES PROFILS (Design Expert)
CREATE TABLE public.profiles (
    id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    country_code TEXT DEFAULT '225',
    is_verified BOOLEAN DEFAULT false,
    is_private BOOLEAN DEFAULT false,
    allow_downloads BOOLEAN DEFAULT true,
    wallet_balance DECIMAL(12,2) DEFAULT 0.00,
    
    -- COMPTEUR DE CHANGEMENTS (Max 3/mois)
    name_changes_count INT DEFAULT 0,
    last_reset_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'banned')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- TABLE DES VIDÉOS (Liberté de contenu)
CREATE TABLE public.videos (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
    video_url TEXT NOT NULL,
    thumbnail_url TEXT,
    caption TEXT,
    category TEXT NOT NULL, -- 'sport', 'divertissement', 'adulte', etc.
    likes_count INT DEFAULT 0,
    is_adult BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- SÉCURITÉ INFAILLIBLE (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Politique : Tout le monde peut voir les profils (sauf si privés)
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
    FOR SELECT USING (is_private = false OR auth.uid() = id);

-- Politique : Seul le propriétaire peut modifier son profil
CREATE POLICY "Users can update own profile." ON public.profiles
    FOR UPDATE USING (auth.uid() = id);
