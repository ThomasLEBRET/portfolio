---
title: "CI/CD : Automatiser la qualite avec ESLint 9 et GitHub Actions"
description: "Comment j'ai blinde mon workflow de developpement en integrant un Quality Gate rigoureux pour mon portfolio."
pubDate: 2026-01-12
tags: ["DevOps", "CI/CD", "Qualite"]
---

Dans un projet moderne, la rapidite ne doit jamais se faire au detriment de la qualite. Pour la refonte de mon portfolio, j'ai decide de mettre en place une veritable "Quality Gate" (barriere de qualite) qui empeche tout code instable d'atteindre la production.

## Pourquoi ESLint 9 ?

Le passage a **ESLint 9** et sa nouvelle "Flat Config" (`eslint.config.mjs`) permet une gestion beaucoup plus granulaire des regles de codage. Voici les piliers de ma configuration actuelle :

* **Zero variable inutile** : La regle `no-unused-vars` est strictement appliquee pour garder un bundle leger.
* **Securite** : Utilisation des regles de plugin framework pour eviter les injections XSS accidentelles.
* **Complexite maitrisee** : Une regle de complexite cyclomatique (`complexity`) limite la longueur des fonctions pour garantir la maintenabilite.

## Le Pipeline de Deploiement

Pour automatiser cette verification, j'utilise **GitHub Actions**. A chaque `git push`, le pipeline execute les etapes suivantes :

1. Checkout du code
2. Installation des dependances (`npm ci`)
3. Linting ESLint
4. Verification de types (`svelte-check`)
5. Build de production
6. Deploiement sur Cloudflare Pages

## Ce que cela m'apporte au quotidien

Grace a ce workflow, je delègue la relecture de code de base a la machine.
Si j'oublie un `console.log` ou si j'utilise un comparateur faible (`==` au lieu de `===`), le pipeline me l'indique immediatement.

**Note DevOps** : Un pipeline qui echoue en local est une minute gagnee en production.

C'est la premiere brique d'une infrastructure robuste.
La prochaine etape ? L'integration de tests unitaires pour les composants interactifs.
