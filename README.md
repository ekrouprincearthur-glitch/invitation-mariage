# Invitation de mariage — Celia & Arthur

Site d'une seule page (HTML, CSS, JavaScript), sans installation ni outil de compilation.

## Contenu du dossier

```
invitation-mariage/
├── index.html      ← la page (à ne pas modifier)
├── style.css       ← couleurs, polices, animations
├── script.js       ← TOUS LES TEXTES sont en haut de ce fichier
├── photos/
│   ├── hero.jpg        ← photo plein écran de l'accueil
│   └── galerie-1.jpg … galerie-6.jpg
└── README.md
```

## Ce que vous devez modifier

1. **Les photos** : remplacez les fichiers du dossier `photos/` en gardant exactement les mêmes noms.
   - `hero.jpg` : photo verticale, environ 1200 × 1800 px.
   - `galerie-1.jpg` à `galerie-6.jpg` : photos verticales (format 4:5), environ 900 × 1125 px.
   - Gardez chaque photo sous 400 Ko environ (outil gratuit : squoosh.app) pour que le site reste rapide.
2. **Les textes** : ouvrez `script.js`. Tout est dans l'objet `SITE` tout en haut : date, heure, histoire, programme, lieu, tenue, lien du formulaire, date limite de réponse.
3. **Le lien du formulaire** : dans `script.js`, remplacez `https://forms.gle/VOTRE-LIEN` par le lien de votre formulaire (Google Forms, par exemple).
4. **L'aperçu WhatsApp** : après la mise en ligne, dans `index.html`, remplacez les deux `https://VOTRE-SITE.vercel.app` par votre vrai lien.

## Mise en ligne avec GitHub et Vercel

1. Créez un compte gratuit sur **github.com**.
2. Cliquez sur **+** (en haut à droite) puis **New repository**. Nom : `invitation-mariage`. Laissez **Public** (ou Private, Vercel fonctionne aussi). Cliquez **Create repository**.
3. Sur la page du dépôt, cliquez **uploading an existing file**. Dézippez le dossier sur votre ordinateur, puis glissez **tout son contenu** (`index.html`, `style.css`, `script.js`, `README.md` et le dossier `photos`) dans la fenêtre. Cliquez **Commit changes**.
4. Allez sur **vercel.com** et cliquez **Sign Up**, puis **Continue with GitHub**.
5. Cliquez **Add New… → Project**, puis **Import** à côté de `invitation-mariage`.
6. Ne changez rien : **Framework Preset = Other**, laissez vides Build Command et Output Directory. Cliquez **Deploy**.
7. Au bout d'une minute, Vercel affiche votre lien, du type `invitation-mariage.vercel.app`. C'est le lien à partager à vos invités.

### Pour modifier le site plus tard

Sur GitHub, ouvrez le fichier (ou le dossier `photos`), cliquez sur le crayon ou **Add file → Upload files**, puis **Commit changes**. Vercel remet le site à jour tout seul en moins d'une minute.

### Un joli nom de lien (facultatif)

Dans Vercel : votre projet → **Settings → Domains** → modifiez le nom `.vercel.app` (par exemple `celia-et-arthur.vercel.app`).
