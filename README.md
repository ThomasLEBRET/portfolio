# 🚀 Mon Portfolio - Thomas Lebret

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet présente mon parcours, mes compétences et mes réalisations acquises durant mon cursus (BTS SIO) et mes projets personnels.



## 🛠️ Stack Technique

- **Framework :** [Astro](https://astro.build/) (v4+)
- **Style :** Tailwind CSS
- **Hébergement :** Cloudflare Pages
- **DNS :** OVH géré par Cloudflare

## 📦 Structure du projet

```text
/
├── public/          # Fichiers statiques (favicon, images, PDF)
├── src/
│   ├── components/  # Composants Astro/React/Vue réutilisables
│   ├── layouts/     # Templates de mise en page (MainLayout.astro)
│   └── pages/       # Routes (index.astro, projets.astro, etc.)
├── package.json     # Scripts et dépendances
└── astro.config.mjs # Configuration spécifique à Astro
```

## 🚀 Installation et Développement Local

Si vous souhaitez faire tourner le projet sur votre machine :

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/ThomasLEBRET/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Accédez au site sur : `http://localhost:4321`

## 🚢 Déploiement Continu (CI/CD)

Ce portfolio utilise une architecture **Jamstack**

1. **Push** : Chaque modification poussée sur la branche `main` déclenche un build de pré-production.
2. **Build** : Cloudflare Pages récupère le code, exécute `npm run build` et génère les fichiers statiques.
3. **Distribution** : Le site est déployé sur le réseau CDN mondial de Cloudflare et associé au domaine [thomaslebret.cloud](https://thomaslebret.cloud)

---
*Fait avec ❤️ par Thomas Lebret*