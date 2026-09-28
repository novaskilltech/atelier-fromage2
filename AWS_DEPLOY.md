# Guide de Déploiement AWS — L'Atelier Fromager

Cette application Next.js 15 peut être déployée sur **Amazon Web Services (AWS)** selon deux méthodes prêtes à l'emploi.

---

## Option 1 : Déploiement Automatisé via AWS Amplify (Recommandé)

AWS Amplify offre un hébergement Serverless mondial (Edge CDN, SSR Next.js 15, certificats SSL automatiques) directement relié au dépôt GitHub.

### Étapes :
1. Connectez-vous à la [Console AWS](https://console.aws.amazon.com/amplify).
2. Cliquez sur **"Host your web app"** puis sélectionnez **GitHub**.
3. Autorisez l'accès et choisissez le dépôt :
   - Dépôt : `novaskilltech/atelier-fromage2`
   - Branche : `main`
4. AWS Amplify détecte automatiquement le fichier `amplify.yml` présent à la racine du projet :
   - Build commands : `npm ci` et `npm run build`
   - Base directory : `.next`
5. Cliquez sur **"Save and deploy"**.
6. Amplify compile l'application, configure le CDN CloudFront et fournit une URL HTTPS sécurisée (ex: `https://main.xxxx.amplifyapp.com`).

---

## Option 2 : Déploiement Conteneur via AWS App Runner / ECS

Pour un hébergement conteneurisé géré :
1. Construisez l'image Docker avec le `Dockerfile` multi-stage fourni :
   ```bash
   docker build -t atelier-fromage .
   ```
2. Poussez l'image vers **Amazon ECR** (Elastic Container Registry) :
   ```bash
   aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin <votre_compte_aws>.dkr.ecr.eu-west-3.amazonaws.com
   docker tag atelier-fromage:latest <votre_compte_aws>.dkr.ecr.eu-west-3.amazonaws.com/atelier-fromage:latest
   docker push <votre_compte_aws>.dkr.ecr.eu-west-3.amazonaws.com/atelier-fromage:latest
   ```
3. Dans **AWS App Runner** :
   - Créez un service pointant vers l'image ECR.
   - Port : `3000`.
   - App Runner assure l'autoscaling et le certificat HTTPS automatiquement.
