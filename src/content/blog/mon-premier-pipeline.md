---
title: "CI/CD : Automatiser la qualité avec ESLint 9 et GitHub Actions"
description: "Comment j'ai blindé mon workflow de développement en intégrant un Quality Gate rigoureux pour mon portfolio Astro."
pubDate: 2026-01-12
tags: ["DevOps", "CI/CD", "Qualité", "Astro"]
---

Dans un projet moderne, la rapidité ne doit jamais se faire au détriment de la qualité. Pour la refonte de mon portfolio sous **Astro**, j'ai décidé de mettre en place une véritable "Quality Gate" (barrière de qualité) qui empêche tout code instable d'atteindre la production.

## Pourquoi ESLint 9 ?

Le passage à **ESLint 9** et sa nouvelle "Flat Config" (`eslint.config.mjs`) permet une gestion beaucoup plus granulaire des règles de codage. Voici les piliers de ma configuration actuelle :

* **Zéro variable inutile** : La règle `no-unused-vars` est strictement appliquée pour garder un bundle léger.
* **Sécurité Astro** : Utilisation de `astro/no-set-html-directive` pour éviter les injections XSS accidentelles.
* **Complexité maîtrisée** : Une règle de complexité cyclomatique (`complexity`) limite la longueur des fonctions pour garantir la maintenabilité.

## Le Pipeline de Déploiement

Pour automatiser cette vérification, j'utilise **GitHub Actions**. À chaque `git push`, le pipeline exécute les étapes suivantes :

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'edgeLabelBackground':'#1e293b', 'tertiaryColor': '#1e293b'}}}%%
graph LR
    %% Définition des styles
    classDef default fill:#1e293b,stroke:#334155,color:#cbd5e1,stroke-width:1px;
    classDef highlight fill:#0f172a,stroke:#22c55e,color:#22c55e,stroke-width:2px;
    classDef error fill:#0f172a,stroke:#ef4444,color:#ef4444,stroke-width:2px;

    A[Push Code] --> B[Install Deps]
    B --> C{Linting Check}
    
    C -- Success --> E[Build Astro]:::highlight
    C -- Error --> D[Stop & Notify]:::error
    
    E --> F[Deploy to Cloudflare]:::highlight
```

## Ce que cela m'apporte au quotidien

Grâce à ce workflow, je délègue la relecture de code de base à la machine. 
Si j'oublie un `console.log` ou si j'utilise un comparateur faible (`==` au lieu de `===`), le pipeline me l'indique immédiatement.

**Note DevOps** : Un pipeline qui échoue en local est une minute gagnée en production.

C'est la première brique d'une infrastructure robuste. 
La prochaine étape ? L'intégration de tests unitaires pour mes composants interactifs.