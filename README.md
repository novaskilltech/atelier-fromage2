# Atelier Fromager — Plateforme Professionnelle de Fromagerie Traditionnelle et Artisanale

Plateforme technique et patrimoniale réservée aux artisans fromagers, producteurs fermiers et micro-ateliers (20 à 200 Litres de lait cru).

Conçue et validée selon le **Cahier des Charges Fonctionnel & Métier v1.1**.

---

## 🌟 Points Clés & Fonctionnalités

### 1. 24 Recettes Patrimoniales (6 Pays × 4 Spécialités)
* **France** : Crottin fermier (Lactique chèvre), Tomme type Saint-Nectaire (PPNC vache), Camembert à la louche 5 passes (Pâte molle vache), Bleu d'Auvergne fermier (Pâte persillée).
* **Italie** : Caciocavallo fermier (Pâte filée à l'eau à 85°C), Pecorino Toscano (Brebis huilé), Robiola di Roccaverano (Lactique crémeux), Gorgonzola traditionnel au double caillé (Caillée froide + caillée tiède).
* **Espagne** : Queso Manchego Artesano (Brebis en moules sparte), Torta del Casar (100% Coagulation végétale à la fleur de chardon sauvage *Cynara cardunculus*), Queso de Cabrales (Persillé affiné en grotte calcaire naturelle), Queso Garrotxa (Chèvre à croûte cendrée grise).
* **Suisse** : Gruyère d'Alpage artisanal (Cuisson à 55°C en chaudron de cuivre massif, affinage à la morge), Tomme vaudoise (Pâte molle fleurie), Mutschli fermier (Mi-dure montagnarde), Formaggella ticinese (Mi-dure pur chèvre en cave de granite).
* **Belgique** : Fromage de Herve au lait cru (Pâte molle à croûte lavée rouge orangée *Brevibacterium linens*), Chèvre de Wallonie cendré au charbon de peuplier, Fromage d'Abbaye frotté à la bière trappiste non filtrée, Maquée artisanale en étamine de lin suspendue.
* **Pays-Bas** : Boerenkaas authentique (Gouda fermier au lait cru non standardisé avec délactosage à l'eau tiède), Leidse Boerenkaas (Fromage de Leyde au cumin ébouillanté), Boeren-Edam (Sphère au lait cru sans cire plastique), Friese Nagelkaas (Fromage de Frise aux clous de girofle concassés).

### 2. Mode Atelier Tactile & Plein Écran
* Développé pour une utilisation en conditions réelles d'atelier (mains humides, gants).
* Gros boutons de progression par étape.
* Chronomètre intégré pour chaque étape (maturation, temps de prise, décaillage, pressage).
* Repères sensoriels paysans mis en exergue (au toucher, à l'œil, consistance du gel).
* Points Critiques de Maîtrise Sanitaire (HACCP) en alerte visuelle haute visibilité.

### 3. Calculateur Proportionnel de Litrage & Rendement
* Ajustement dynamique de 20 L à 200 L avec recalcul immédiat des volumes d'intrants et de la masse finale estimée de fromage.

### 4. Référentiel Matériel & Ustensiles d'Atelier
* Nomenclature du petit outillage manuel (tranche-caillés, harpes, louches, toiles de lin) et du gros équipement (chaudrons cuivre, tables d'égouttage, presses à levier, planches d'épicéa brut non raboté).

### 5. Annuaire Professionnel de Sourcing
* Adresses de confiance pour trouver : présures traditionnelles liquides et en pâte d'agneau/chevreau, fleurs de chardon séchées, ferments de terroir sans OGM, toiles 100% lin lourd des Vosges, moules micro-perforés et bois d'affinage jurassien.

### 6. Lexique Technique Fromager (30+ Termes)
* Définitions claires des concepts clés : synérèse, délactosage, morge, point de gel, acidification, caséine, tyrosine.

### 7. Gabarit d'Impression A4 Épuré
* Impression optimisée pour affichage mural en atelier sans éléments de navigation web (`@media print`).

---

## 🛠️ Stack Technique

* **Framework** : Next.js 15 (App Router, React 19)
* **Langage** : TypeScript 5 (typage strict)
* **Styles** : Tailwind CSS avec palette Fromagère & Terroir
* **Icônes** : Lucide React
* **Persistance** : Modélisation relationnelle Prisma (PostgreSQL / SQLite)
* **Tests** : Vitest (validation du corpus, ratios mathématiques, intégrité relationnelle)

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Exécution des tests automatisés
npm test

# Build de production
npm run build
```

---

## 📜 Conformité & Hygiène Alimentaire

* Les méthodes publiées s'inscrivent dans le cadre des règlements européens **CE 852/2004** et **CE 853/2004** ainsi que de la communication **2022/C 355/01** sur la flexibilité accordée aux établissements artisanaux pour préserver les méthodes traditionnelles.
* Données personnelles conformes au **RGPD** (minimisation stricte des comptes professionnels).
