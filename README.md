![Build Status](https://github.com/ThomasLEBRET/portfolio/actions/workflows/quality-gate.yaml/badge.svg)
![Astro](https://img.shields.io/badge/Astro-v5.0-BC52EE?logo=astro)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)
# 🚀 Mon Portfolio - Thomas Lebret

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet est une vitrine de mes compétences techniques et de mes projets, conçu pour être rapide, minimaliste et maintenable.

## 🛠️ Stack Technique

- **Framework :** [Astro](https://astro.build/) (v5+)
- **UI :** React + Tailwind CSS
- **Interactivité :** Framer Motion & Lucide Icons
- **Diagrammes :** Mermaid.js
- **Hébergement :** Cloudflare Pages (Déploiement via Wrangler)
- **CI/CD :** GitHub Actions (Quality Gate personnalisée)

## 🚢 Architecture CI/CD & Quality Gate

Ce projet utilise un pipeline de déploiement continu automatisé. Contrairement à un déploiement GitHub classique, j'ai mis en place une **Quality Gate** stricte pour garantir la stabilité de la production.



Chaque modification sur la branche `main` déclenche le workflow suivant :

1. **🔍 Linting (ESLint)** : Analyse du code pour détecter les erreurs de syntaxe et de style.
2. **🏗️ Astro Check** : Validation TypeScript et intégrité des composants Astro.
3. **🔨 Build Test** : Simulation de la génération du site pour prévenir les échecs de build.
4. **🚀 Deploy** : Déploiement vers Cloudflare Pages via un API Token sécurisé. Cette étape n'est lancée que si tous les tests précédents ont réussi.

> **Note :** Les déploiements automatiques directs de Cloudflare ont été désactivés au profit de ce workflow pour assurer un contrôle total sur la qualité avant mise en ligne.

## 🚀 Installation et Développement Local

Si vous souhaitez explorer le projet localement :

1. **Cloner le projet**
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

## 📂 Structure du Projet

Le projet suit la structure standard d'Astro :
- `src/content/` : Contient mes articles de blog et notes au format Markdown.
- `src/components/` : Composants React et Astro réutilisables.
- `src/pages/` : Routes et pages du site.
- `public/` : Ressources statiques (favicon, images).

---
*Fait avec ❤️ par Thomas Lebret*
