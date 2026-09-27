import { CheeseMethod } from "@/types";

export const CHEESE_RECIPES: CheeseMethod[] = [
  // ================= FRANCE =================
  {
    id: "fr-crottin",
    slug: "crottin-fermier-traditionnel",
    name: "Crottin Fermier Traditionnel",
    country: "France",
    region: "Centre-Val de Loire",
    family: "Lactique",
    milkType: "Chèvre",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 30,
    minVolumeLiters: 10,
    maxVolumeLiters: 100,
    description: "Fromage fermier pur chèvre à dominante lactique, moulé délicatement à la louche et affiné sur clayettes.",
    history: "Héritier séculaire des élevages caprins des collines du Sancerrois, où le fromage constituait le casse-croûte des vignerons.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager Jean-Luc Morin",
    validatorTech: "Institut de l'Élevage (Idele Caprin)",
    validatorHealth: "Dr. Vétérinaire S. Renaud (HACCP)",
    hygieneWarning: "Lait cru caprin : dépistage rigoureux des germes pathogènes (Listeria, Salmonella) et maîtrise stricte de l'hygiène de traite.",
    legalDisclaimer: "Méthode artisanale d'atelier. La dénomination Crottin de Chavignol relève d'une AOP soumise à son propre cahier des charges.",
    expectedYieldKg: 3.6, // ~12% en chèvre
    ingredients: [
      { name: "Lait cru entier de chèvre frais", quantity: "30 Litres", notes: "Lait du matin encore tiède ou réchauffé à 20°C" },
      { name: "Petit-lait de la veille (ferments indigènes)", quantity: "150 mL", notes: "Acidité D° environ 60-70°D" },
      { name: "Présure naturelle de caillette de veau (1:10 000)", quantity: "1.5 mL", notes: "Diluée dans 20 mL d'eau non chlorée" },
      { name: "Sel de mer pur non raffiné", quantity: "60 g", notes: "Pour salage à sec manuel" }
    ],
    utensilIds: ["u-louche", "u-moules-crottin", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-bioprox", "sup-kadvice"],
    steps: [
      {
        stepNumber: 1,
        phase: "MATURATION",
        title: "Maturation & acidogenèse",
        durationMinutes: 120,
        temperatureC: 20,
        phTarget: 6.4,
        description: "Ensemencer le lait tiède à 20°C avec le petit-lait fermenté. Laisser reposer 2 heures pour lancer l'acidification.",
        sensoryCue: "Odeur douce de lait frais légèrement acidulé, absence totale d'odeur ammoniacale."
      },
      {
        stepNumber: 2,
        phase: "COAGULATION",
        title: "Emprésurage & prise en masse",
        durationMinutes: 1320, // 22h
        temperatureC: 20,
        phTarget: 4.6,
        description: "Incorporer la présure diluée, brasser 1 minute puis immobiliser le lait. Couvrir et laisser cailler 20 à 24h à 20-22°C.",
        sensoryCue: "Le caillé est rétracté, entouré d'une lame de sérum vert translucide de 1 cm d'épaisseur.",
        criticalControlPoint: "Maintien de la température ambiante entre 19°C et 22°C impératif pour la cinétique d'acidification."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage à la louche en faisselles",
        durationMinutes: 60,
        description: "Déposer délicatement de grandes tranches de caillé à la louche dans les moules sans briser le gel. Remplir à ras-bord.",
        sensoryCue: "Le sérum s'écoule rapidement mais sans emporter de morceaux blancs de caillé."
      },
      {
        stepNumber: 4,
        phase: "MOULDING_DRAINING",
        title: "Égouttage et premier retournement",
        durationMinutes: 1440, // 24h
        temperatureC: 18,
        description: "Laisser égoutter spontanément. Procéder à un premier retournement dans le moule après 12 heures de repos.",
        sensoryCue: "Le fromage a réduit de moitié de volume dans son moule et présente des bords nets."
      },
      {
        stepNumber: 5,
        phase: "SALTING",
        title: "Démoulage et salage au sel sec",
        durationMinutes: 30,
        description: "Démouler les crottins sur grilles inox. Saler manuellement au sel fin sur le dessus et le tour, puis retourner et saler la base.",
        sensoryCue: "Texture ferme au toucher, toucher légèrement suintant qui va fixer le sel."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 82,
      humidityMaxPercent: 88,
      woodType: "Planchettes d'épicéa ou claies inox",
      careType: "TURNING",
      careFrequency: "Retournement quotidien les 10 premiers jours",
      careDescription: "Séchage préalable 48h au hâloir (15°C, 75% HR) puis mise en cave fraîche avec retournement régulier.",
      minDays: 10,
      optimalDays: 21,
      maxDays: 60,
      sensoryEvolution: "J+10 pâte crémeuse blanche ; J+21 croûte plissée ivoire bleutée à Geotrichum ; J+45 pâte cassante, saveur noisette typée."
    }
  },

  {
    id: "fr-saint-nectaire",
    slug: "saint-nectaire-fermier-traditionnel",
    name: "Tomme Fermière au Lait Cru (Type Saint-Nectaire)",
    country: "France",
    region: "Auvergne",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 100,
    minVolumeLiters: 40,
    maxVolumeLiters: 200,
    description: "Pâte pressée non cuite fermière affinée longuement sur paille de seigle, caractérisée par une croûte chamarrée fleurie.",
    history: "Emblème des plateaux volcaniques du Mont-Dore, traditionnellement confectionné par les fermières après la traite du soir et du matin.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Artisan Fromager Pierre Vial",
    validatorTech: "Centre Fromager Aurillac",
    validatorHealth: "Dr. Vétérinaire M. Bertrand",
    hygieneWarning: "Vérifier l'absence d'infections mammaires du troupeau (comptage cellulaire < 250 000 cell/mL).",
    legalDisclaimer: "Méthode inspirée du savoir-faire traditionnel auvergnat. L'appellation officielle AOP Saint-Nectaire requiert l'habilitation syndicale.",
    expectedYieldKg: 10.5,
    ingredients: [
      { name: "Lait cru entier de vache de montagne", quantity: "100 Litres", notes: "Lait de race Salers ou Montbéliarde" },
      { name: "Ferments lactiques mésophiles fermiers", quantity: "1 dose", notes: "Pour ensemencement doux" },
      { name: "Présure bovine naturelle 1:10 000", quantity: "25 mL", notes: "Pour prise en 30 minutes" },
      { name: "Sel de mer gros", quantity: "250 g", notes: "Salage en moule ou saumure" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à chaud",
        durationMinutes: 35,
        temperatureC: 32.5,
        description: "Porter le lait à 32.5°C. Ajouter la présure en brassant vigoureusement 1 minute. Laisser prendre en masse 30 minutes.",
        sensoryCue: "Cassure nette à l'ongle ou au doigt, sérum vert très pâle et limpide."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage & brassage",
        durationMinutes: 25,
        temperatureC: 33,
        description: "Découper le caillé à la harpe en grains réguliers de la taille d'un grain de maïs. Brasser doucement pendant 15 minutes.",
        sensoryCue: "Les grains s'arrondissent sans se coller, sensation élastique sous la main."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Rassemblement en toile et délissage",
        durationMinutes: 45,
        description: "Rassembler la masse de caillé au fond de la cuve sous une toile de lin. Presser manuellement pour expulser le premier sérum, puis émietter le caillé.",
        sensoryCue: "Texture de caillé dense mais encore souple et tiède."
      },
      {
        stepNumber: 4,
        phase: "MOULDING_DRAINING",
        title: "Moulage et pressage progressif",
        durationMinutes: 720, // 12h
        description: "Mettre le caillé émietté en moules chemisés de toile de lin. Placer sous presse manuelle en augmentant la charge progressivement.",
        sensoryCue: "Écoulement continu et régulier de sérum clair.",
        criticalControlPoint: "Retourner le fromage au bout de 2h, puis 6h sous presse pour équilibrer la texture."
      },
      {
        stepNumber: 5,
        phase: "SALTING",
        title: "Salage au sel sec en deux passes",
        durationMinutes: 30,
        description: "Démouler puis saler au sel sec sur chaque face à 12h d'intervalle.",
        sensoryCue: "Formation d'une première pellicule protectrice ferme."
      }
    ],
    ripening: {
      cellarTempMin: 8,
      cellarTempMax: 10,
      humidityMinPercent: 92,
      humidityMaxPercent: 96,
      woodType: "Planches d'épicéa recouvertes d'un lit de paille de seigle non traitée",
      careType: "WASHING",
      careFrequency: "Lavage à l'eau salée puis brossage hebdomadaire",
      careDescription: "Les meules sont frottées avec une saumure légère les 3 premières semaines, puis brossées à sec pour installer la flore noble chamarrée.",
      minDays: 28,
      optimalDays: 45,
      maxDays: 90,
      sensoryEvolution: "Pâte fondante et onctueuse couleur paille, odeur prononcée de champignon de forêt, sous-bois et noisette."
    }
  },

  {
    id: "fr-camembert",
    slug: "camembert-traditionnel-lait-cru",
    name: "Camembert Traditionnel au Lait Cru (Moulage 5 Passes)",
    country: "France",
    region: "Normandie",
    family: "Pâte Molle",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 50,
    minVolumeLiters: 25,
    maxVolumeLiters: 100,
    description: "Le grand classique normand au lait cru riche, moulé manuellement à la louche en 5 passes pour un feuilletage parfait.",
    history: "Mis au point par Marie Harel dans le bocage augeron, ce fromage doit son moelleux au respect du rythme d'égouttage naturel.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager Hervé Lefrançois",
    validatorTech: "Comité de Recherche Laitière Normandie",
    validatorHealth: "Dr. Vétérinaire B. Delmas",
    hygieneWarning: "Contrôle impératif de la chaîne du froid avant travail du lait cru : ensemencement immédiat en flore protectrice.",
    legalDisclaimer: "Procédé traditionnel. L'appellation AOP Camembert de Normandie impose une zone géographique et des règles d'alimentation spécifiques.",
    expectedYieldKg: 5.8, // ~20-22 pièces de 250g
    ingredients: [
      { name: "Lait cru entier de vaches normandes", quantity: "50 Litres", notes: "Lait riche en matière grasse et protéines" },
      { name: "Ferments lactiques mésophiles + Geotrichum candidum", quantity: "1 dose", notes: "Ensemencement initial" },
      { name: "Spores de Penicillium camemberti", quantity: "0.2 g", notes: "Pour le fleurissement du duvet blanc" },
      { name: "Présure bovine traditionnelle (1:10 000)", quantity: "12 mL", notes: "Diluée dans eau stérile" },
      { name: "Sel fin de mer", quantity: "120 g", notes: "Salage manuel" }
    ],
    utensilIds: ["u-louche", "u-moules-camembert", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-bioprox", "sup-kadvice"],
    steps: [
      {
        stepNumber: 1,
        phase: "MATURATION",
        title: "Maturation longue à froid",
        durationMinutes: 720,
        temperatureC: 12,
        description: "Maturation lente du lait de la veille à 12-14°C avec ferments mésophiles pour développer l'arôme sans sur-acidifier.",
        sensoryCue: "Développement d'un léger velouté à la surface du lait et arôme beurré."
      },
      {
        stepNumber: 2,
        phase: "COAGULATION",
        title: "Emprésurage à température douce",
        durationMinutes: 40,
        temperatureC: 33,
        description: "Réchauffer à 33°C, incorporer la présure et les spores de Penicillium. Laisser prendre 40 min.",
        sensoryCue: "Gel bien ferme, tranchage vertical très espacé (en lanières de 5 cm) pour débuter l'égouttage."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage manuel à la louche en 5 passes",
        durationMinutes: 200, // 5 x 40 min
        description: "Déposer une louche rase de caillé dans chaque moule sans la casser. Attendre 40 minutes d'égouttage avant la passe suivante. Répéter l'opération 5 fois au total.",
        sensoryCue: "Chaque couche s'affaisse légèrement et s'imbrique dans la précédente, créant le feuilletage.",
        criticalControlPoint: "Respecter impérativement l'intervalle de 40 min entre chaque passe de louche."
      },
      {
        stepNumber: 4,
        phase: "MOULDING_DRAINING",
        title: "Égouttage et retournement sur store",
        durationMinutes: 1080, // 18h
        temperatureC: 20,
        description: "Laisser égoutter en chambre chaude tempérée. Retourner le bloc avec les plaques et stores d'égouttage.",
        sensoryCue: "Fromage bien formé, surface lisse et bords réguliers."
      },
      {
        stepNumber: 5,
        phase: "SALTING",
        title: "Démoulage et salage au sel sec",
        durationMinutes: 20,
        description: "Démouler et saler uniformément la croûte au sel fin de mer.",
        sensoryCue: "Toucher ferme mais souple sous le doigt."
      }
    ],
    ripening: {
      cellarTempMin: 11,
      cellarTempMax: 13,
      humidityMinPercent: 88,
      humidityMaxPercent: 92,
      woodType: "Claies d'égouttage puis planches d'épicéa",
      careType: "TURNING",
      careFrequency: "Retournement tous les 2 jours au hâloir",
      careDescription: "12 jours au hâloir de fleurissement jusqu'à apparition du duvet blanc protecteur, puis emballage sous papier respirant et poursuite en cave froide (8°C).",
      minDays: 21,
      optimalDays: 35,
      maxDays: 50,
      sensoryEvolution: "Le plâtre intérieur disparaît progressivement au profit d'un cœur onctueux et fondant aux notes d'étable et de champignon frais."
    }
  },

  {
    id: "fr-bleu",
    slug: "bleu-artisan-auvergne",
    name: "Bleu de Terroir Artisanal (Pâte Persillée)",
    country: "France",
    region: "Massif Central",
    family: "Pâte Persillée",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 80,
    minVolumeLiters: 40,
    maxVolumeLiters: 150,
    description: "Fromage noble persillé au lait cru de vache, ensemencé en Penicillium roqueforti et piqué à l'aiguille en cave fraîche.",
    history: "Issu des traditions montagnardes d'Auvergne où l'on créait des cheminées d'aération dans les meules avec des aiguilles d'argent.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager Paul Borie",
    validatorTech: "ENILV Aurillac",
    validatorHealth: "Dr. Vétérinaire C. Chassang",
    hygieneWarning: "Vérifier la stricte absence d'infections coliformes responsables de gonflements précoces.",
    legalDisclaimer: "Recette traditionnelle d'atelier pour pâte persillée au lait cru fermier.",
    expectedYieldKg: 8.8,
    ingredients: [
      { name: "Lait cru entier de vache", quantity: "80 Litres" },
      { name: "Spores pures de Penicillium roqueforti", quantity: "0.5 g", notes: "Souche bleue/verte sélectionnée" },
      { name: "Présure bovine naturelle 1:10 000", quantity: "20 mL" },
      { name: "Sel de mer gros", quantity: "220 g", notes: "Salage progressif à sec" }
    ],
    utensilIds: ["u-harpe", "u-aiguille-piquage", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-bioprox", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Ensemencement et emprésurage",
        durationMinutes: 35,
        temperatureC: 31,
        description: "Mélanger les spores de Penicillium dans le lait à 31°C. Emprésurer pour obtenir une prise en 30 minutes.",
        sensoryCue: "Gel franc et ferme."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage modéré et coiffage des grains",
        durationMinutes: 30,
        description: "Découper le caillé en gros morceaux (taille d'une noix). Brasser lentement pour raffermir la pellicule extérieure des grains sans les écraser.",
        sensoryCue: "Les grains restent séparés et conservent des interstices d'air indispensables au bleu."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage sans pressage",
        durationMinutes: 1440, // 24h
        temperatureC: 19,
        description: "Verser le caillé dans des moules cylindriques hauts perforés. Ne JAMAIS presser mécaniquement : l'égouttage s'effectue par simple gravité avec 4 retournements.",
        sensoryCue: "Le fromage s'agglomère naturellement tout en conservant un réseau interne poreux."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Salage progressif au sel sec",
        durationMinutes: 120, // sur 3 jours
        description: "Saler au gros sel sur 3 jours consécutifs (faces et talon) pour assurer une diffusion osmotique lente.",
        sensoryCue: "Formation d'une croûte rustique et légèrement humide."
      }
    ],
    ripening: {
      cellarTempMin: 8,
      cellarTempMax: 10,
      humidityMinPercent: 92,
      humidityMaxPercent: 96,
      woodType: "Planches d'épicéa",
      careType: "TURNING",
      careFrequency: "Piquage à J+8 puis retournement 2 fois par semaine",
      careDescription: "À J+8, transpercer verticalement la meule de part en part avec une aiguille inox (30 à 40 trous) pour créer des cheminées d'aération où se déploiera le champignon.",
      minDays: 45,
      optimalDays: 60,
      maxDays: 120,
      sensoryEvolution: "Veinage bleu-vert régulier dans la pâte, texture beurrée et fondante, goût piquant et boisé sans amertume excessive."
    }
  },

  // ================= ITALIE =================
  {
    id: "it-caciocavallo",
    slug: "caciocavallo-fermier-traditionnel",
    name: "Caciocavallo Fermier Traditionnel (Pâte Filée)",
    country: "Italie",
    region: "Campanie / Calabre",
    family: "Pâte Filée",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 60,
    minVolumeLiters: 30,
    maxVolumeLiters: 150,
    description: "Chef-d'œuvre de la tradition fromagère du Sud de l'Italie : pâte filée manuellement dans l'eau bouillante et suspendue par corde de chanvre.",
    history: "Son nom évoque la coutume de suspendre les fromages liés deux par deux à cheval ('a cavallo') sur des perches de bois pour l'affinage.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maestro Casaro Antonio Esposito",
    validatorTech: "Associazione Nazionale Formaggi Tradizionali",
    validatorHealth: "Dr. Vétérinaire G. Rossi",
    hygieneWarning: "Vérifier la température de l'eau de filage (>80°C) qui participe à la maîtrise microbienne du produit final.",
    legalDisclaimer: "Méthode artisanale libre. Le Caciocavallo Silano AOP dispose de ses délimitations territoriales propres.",
    expectedYieldKg: 6.2,
    ingredients: [
      { name: "Lait cru entier de vache (race Podolica ou Brune)", quantity: "60 Litres" },
      { name: "Ferments lactiques thermophiles purs", quantity: "1 dose" },
      { name: "Pâte de présure d'agneau ou de chevreau", quantity: "15 g", notes: "Apporte le caractère piquant typique" },
      { name: "Eau très chaude pour filage", quantity: "20 Litres", notes: "Chauffée à 85°C" },
      { name: "Sel de mer pour saumure", quantity: "3 kg" }
    ],
    utensilIds: ["u-harpe", "u-presse-levier"],
    supplierIds: ["sup-clerici", "sup-kadvice"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à la pâte d'agneau",
        durationMinutes: 30,
        temperatureC: 36,
        description: "Dissoudre la pâte de présure d'agneau dans un peu d'eau tiède. Incorporer au lait à 36°C. Coagulation en 30 minutes.",
        sensoryCue: "Caillé compact et élastique."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage noisette et maturation sous sérum",
        durationMinutes: 240, // 4h
        temperatureC: 38,
        phTarget: 5.2,
        description: "Décailler à la taille d'une noisette. Laisser reposer et maturer la masse de caillé sous le sérum chaud pendant 3 à 5h jusqu'à ce que le pH atteigne 5.2.",
        sensoryCue: "Test de filage : prélever un morceau de caillé, le plonger dans l'eau à 85°C ; s'il s'étire en fil continu sur 1 mètre sans casser, il est prêt.",
        criticalControlPoint: "Contrôle impératif du pH de filabilité (entre 5.1 et 5.3). En-dessous il casse, au-dessus il ne fond pas."
      },
      {
        stepNumber: 3,
        phase: "CURD_WORK",
        title: "Filage et modelage manuel",
        durationMinutes: 45,
        temperatureC: 85,
        description: "Découper le caillé en lamelles. Verser l'eau à 85°C. Travailler manuellement avec une spatule en bois puis à mains gantées pour former une boule, puis modeler la tête (testa).",
        sensoryCue: "Pâte brillante, satinée, totalement lisse et sans grumeaux."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Refroidissement et saumurage",
        durationMinutes: 720, // 12h
        description: "Plonger immédiatement dans l'eau glacée pour figer la forme, puis transférer dans un bain de saumure saturée à 18% pendant 12 à 24h.",
        sensoryCue: "Croûte externe immédiatement durcie et ferme."
      }
    ],
    ripening: {
      cellarTempMin: 12,
      cellarTempMax: 14,
      humidityMinPercent: 78,
      humidityMaxPercent: 84,
      woodType: "Perches et poutres en bois suspendues",
      careType: "TURNING",
      careFrequency: "Surveillance hebdomadaire",
      careDescription: "Les pièces sont nouées deux à deux par une corde de chanvre naturel et suspendues à cheval sur des perches de bois dans une cave ventilée.",
      minDays: 30,
      optimalDays: 90,
      maxDays: 360,
      sensoryEvolution: "Doux et lacté à 1 mois ; piquant, beurré et effeuillable à 6-12 mois avec une croûte jaune dorée cireuse."
    }
  },

  {
    id: "it-pecorino",
    slug: "pecorino-toscano-fermier",
    name: "Pecorino Fermier au Lait Cru de Brebis",
    country: "Italie",
    region: "Toscane / Sardaigne",
    family: "Pâte Pressée Non Cuite",
    milkType: "Brebis",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 40,
    minVolumeLiters: 20,
    maxVolumeLiters: 100,
    description: "Fromage de caractère 100% lait cru de brebis, pressé à la main et frotté à l'huile d'olive vierge extra durant l'affinage.",
    history: "Fabriqué depuis l'époque étrusque sur les collines pastorales méditerranéennes.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Casaro Marco Bellini",
    validatorTech: "Consorzio Pastorizia Toscana",
    validatorHealth: "Dr. Vétérinaire L. Moretti",
    hygieneWarning: "Vérifier la bonne teneur en extrait sec et la pureté du lait de brebis.",
    legalDisclaimer: "Méthode artisanale traditionnelle de fromagerie fermière ovine.",
    expectedYieldKg: 8.0, // ~20% en brebis
    ingredients: [
      { name: "Lait cru entier de brebis", quantity: "40 Litres" },
      { name: "Présure liquide de caillette de veau", quantity: "10 mL" },
      { name: "Sel fin de mer", quantity: "200 g" },
      { name: "Huile d'olive vierge extra et marc de raisin", quantity: "100 mL", notes: "Pour soin de croûte" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-planches-epicea"],
    supplierIds: ["sup-clerici", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à température d'étable",
        durationMinutes: 25,
        temperatureC: 36,
        description: "Emprésurer le lait de brebis tiédi à 36°C. Prise rapide en 20 à 25 minutes.",
        sensoryCue: "Gel très ferme et dense, typique de la richesse du lait de brebis."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage fin grain de maïs",
        durationMinutes: 20,
        description: "Rompre le caillé énergiquement à la harpe en grains fins. Brasser doucement pour bien essorer la caséine.",
        sensoryCue: "Grains élastiques qui crissent sous la dent."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage et pressage manuel à chaud",
        durationMinutes: 180,
        temperatureC: 35,
        description: "Placer dans des moules tressés. Presser fermement avec la paume des deux mains pour extraire le sérum résiduel sans choc mécanique.",
        sensoryCue: "Fermeture parfaite de la meule sous l'action combinée de la tiédeur et de la paume."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Salage en saumure saturée",
        durationMinutes: 720,
        description: "Bain de saumure à 20% pendant 12 heures.",
        sensoryCue: "Texture équilibrée et début de durcissement."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 82,
      humidityMaxPercent: 86,
      woodType: "Épicéa ou chêne brut",
      careType: "OILING",
      careFrequency: "Frottage à l'huile d'olive toutes les 2 semaines",
      careDescription: "Après séchage, la meule est régulièrement enduite d'huile d'olive vierge additionnée de marc ou de cendre pour préserver la tendreté du cœur.",
      minDays: 20,
      optimalDays: 60,
      maxDays: 180,
      sensoryEvolution: "Saveur noisette herbacée et douce à 2 mois ; puissante, friable et beurrée après 6 mois."
    }
  },

  {
    id: "it-robiola",
    slug: "robiola-di-roccaverano-artisanale",
    name: "Robiola di Roccaverano Artisanale",
    country: "Italie",
    region: "Piémont",
    family: "Lactique",
    milkType: "Chèvre",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 25,
    minVolumeLiters: 10,
    maxVolumeLiters: 60,
    description: "Fromage crémeux piémontais pur chèvre, à coagulation lactique très lente et égouttage sans pressage.",
    history: "Déjà loué par Pline l'Ancien pour la douceur aromatique de ses pâturages de haute colline.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Casara Francesca Balbo",
    validatorTech: "Consorzio Robiola Roccaverano",
    validatorHealth: "Dr. Vétérinaire G. Rossi",
    hygieneWarning: "Surveillance de la pureté microbiologique du cailloir en fermentation lente.",
    legalDisclaimer: "Recette traditionnelle artisanale.",
    expectedYieldKg: 3.2,
    ingredients: [
      { name: "Lait cru de chèvre frais", quantity: "25 Litres" },
      { name: "Quelques gouttes de présure naturelle", quantity: "0.8 mL" },
      { name: "Sel fin de mer", quantity: "50 g" }
    ],
    utensilIds: ["u-louche", "u-moules-crottin", "u-planches-epicea"],
    supplierIds: ["sup-clerici", "sup-kadvice"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Caillage lent à 18-20°C",
        durationMinutes: 1440,
        temperatureC: 19,
        description: "Ajouter la présure minime dans le lait cru tiède. Laisser cailler 24 heures.",
        sensoryCue: "Caillé souple et porcelaine, couche de sérum claire."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Moulage délicat sans brisure",
        durationMinutes: 30,
        description: "Déposer le caillé en moules cylindriques bas sans le rompre. Égouttage libre pendant 48h.",
        sensoryCue: "Égouttage lent, formation d'un palet crémeux."
      },
      {
        stepNumber: 3,
        phase: "SALTING",
        title: "Salage léger au sel sec",
        durationMinutes: 15,
        description: "Saler sur chaque face au démoulage.",
        sensoryCue: "Toucher soyeux."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 85,
      humidityMaxPercent: 90,
      woodType: "Claies d'épicéa ou paille naturelle",
      careType: "TURNING",
      careFrequency: "Retournement quotidien",
      careDescription: "Peut être consommé frais dès J+4 ou affiné jusqu'à 30 jours pour développer un voile crémeux.",
      minDays: 4,
      optimalDays: 15,
      maxDays: 35,
      sensoryEvolution: "Pâte fine blanche devenant fondante sous la croûte fleurie crème, notes de noisette et thym sauvage."
    }
  },

  {
    id: "it-gorgonzola",
    slug: "gorgonzola-artisanal-double-caille",
    name: "Gorgonzola Artisanal au Double Caillé",
    country: "Italie",
    region: "Lombardie / Piémont",
    family: "Pâte Persillée",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 80,
    minVolumeLiters: 40,
    maxVolumeLiters: 150,
    description: "Méthode ancestrale combinant la caillée froide de la veille et la caillée tiède du matin pour un marbrage naturel inégalé.",
    history: "Méthode originale des bergers transhumants lombards ('stracchino di Gorgonzola').",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maestro Casaro Luigi Pozzi",
    validatorTech: "Scuola Casearia Pandino",
    validatorHealth: "Dr. Vétérinaire L. Moretti",
    hygieneWarning: "Vérifier la stricte absence de spores butyriques responsables de mauvais goûts.",
    legalDisclaimer: "Méthode traditionnelle au double caillé pour atelier artisanal.",
    expectedYieldKg: 9.0,
    ingredients: [
      { name: "Lait cru de vache du soir (refroidi)", quantity: "40 Litres" },
      { name: "Lait cru de vache du matin (tiède)", quantity: "40 Litres" },
      { name: "Spores de Penicillium roqueforti / glaucum", quantity: "0.4 g" },
      { name: "Présure naturelle liquide", quantity: "20 mL" },
      { name: "Sel de mer fin", quantity: "240 g" }
    ],
    utensilIds: ["u-harpe", "u-aiguille-piquage", "u-planches-epicea"],
    supplierIds: ["sup-clerici", "sup-bioprox", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Caillée du soir égouttée en toile",
        durationMinutes: 720,
        temperatureC: 30,
        description: "Fabriquer la première caillée le soir, l'égoutter en sac de lin suspendu toute la nuit à 15°C.",
        sensoryCue: "Caillé froid acidifié et ferme."
      },
      {
        stepNumber: 2,
        phase: "COAGULATION",
        title: "Caillée du matin et assemblage alterné",
        durationMinutes: 60,
        temperatureC: 32,
        description: "Préparer la caillée du matin. Dans le moule, alterner des couches de caillé froid de la veille et de caillé tiède du matin.",
        sensoryCue: "Les deux caillés de températures différentes ne se soudent pas totalement, laissant des galeries d'air."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Égouttage sans pressage et salage à sec",
        durationMinutes: 1440,
        description: "Laisser égoutter naturellement, puis saler à sec sur 3 jours consécutifs.",
        sensoryCue: "Croûte rugueuse et rosée."
      }
    ],
    ripening: {
      cellarTempMin: 4,
      cellarTempMax: 6,
      humidityMinPercent: 95,
      humidityMaxPercent: 98,
      woodType: "Planches d'épicéa brut",
      careType: "WASHING",
      careFrequency: "Piquage à J+15 et retournements hebdomadaires",
      careDescription: "Piquage manuel avec aiguilles épaisses en cuivre ou inox. Cave très froide et saturée d'humidité.",
      minDays: 60,
      optimalDays: 90,
      maxDays: 150,
      sensoryEvolution: "Pâte divinement crémeuse et beurrée, persillage vert-bleuté intense et arôme doux ou corsé selon la durée."
    }
  },

  // ================= ESPAGNE =================
  {
    id: "es-manchego",
    slug: "queso-manchego-artesano-fermier",
    name: "Queso Manchego Artesano au Lait Cru de Brebis",
    country: "Espagne",
    region: "Castille-La Manche",
    family: "Pâte Pressée Non Cuite",
    milkType: "Brebis",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 50,
    minVolumeLiters: 25,
    maxVolumeLiters: 150,
    description: "Le grand fromage ibérique pur brebis Manchega, pressé en moules à empreinte d'alfa et affiné à l'huile d'olive.",
    history: "Indissociable des paysages arides de Don Quichotte, façonné depuis des siècles par les bergers transhumants.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maestro Quesero Manuel Ramirez",
    validatorTech: "Instituto Tecnológico Agroalimentario de Castilla-La Mancha",
    validatorHealth: "Dr. Vétérinaire J. Martinez",
    hygieneWarning: "Vérifier la stricte conformité sanitaire des troupeaux ovins laitiers (brucellose indemne).",
    legalDisclaimer: "Méthode de fabrication artisanale. L'appellation D.O.P. Queso Manchego Artesano est certifiée par le Consejo Regulador.",
    expectedYieldKg: 10.2, // ~20%
    ingredients: [
      { name: "Lait cru de brebis de race Manchega", quantity: "50 Litres" },
      { name: "Présure d'agneau naturelle", quantity: "12 mL" },
      { name: "Sel de mer pour saumure", quantity: "3.5 kg" },
      { name: "Huile d'olive vierge extra", quantity: "150 mL", notes: "Soin de croûte" }
    ],
    utensilIds: ["u-harpe", "u-moules-manchego", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-clerici", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à 30-32°C",
        durationMinutes: 45,
        temperatureC: 31,
        description: "Emprésurer le lait de brebis avec de la présure d'agneau. Temps de coagulation 45 min.",
        sensoryCue: "Gel net et solide."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage très fin grain de riz",
        durationMinutes: 25,
        description: "Découper énergiquement le caillé jusqu'à la taille d'un grain de riz pour expulser un maximum de sérum.",
        sensoryCue: "Grains fermes et denses tombant rapidement au fond."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage en moules gravés et pressage fort",
        durationMinutes: 360, // 6h
        description: "Mettre en moules avec matrice de sparte. Presser progressivement jusqu'à pression maximale.",
        sensoryCue: "Empreinte caractéristique en zigzag parfaitement imprimée sur la croûte."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Saumurage froid saturé",
        durationMinutes: 1440, // 24h
        temperatureC: 12,
        description: "Immersion dans une saumure à 18-20° Baumé.",
        sensoryCue: "Salage régulier et net."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 80,
      humidityMaxPercent: 85,
      woodType: "Planches d'épicéa ou de chêne",
      careType: "OILING",
      careFrequency: "Brossage et huilage toutes les 3 semaines",
      careDescription: "Les meules sont frottées avec de l'huile d'olive vierge, développant une teinte ambrée naturelle sans aucun plastique.",
      minDays: 60,
      optimalDays: 180,
      maxDays: 365,
      sensoryEvolution: "Pâte ivoire compacte, saveur beurrée, légèrement piquante et persistante de brebis de pâturage sec."
    }
  },

  {
    id: "es-torta-casar",
    slug: "torta-del-casar-coagulation-vegetale",
    name: "Torta del Casar Artisanale (Coagulation Végétale au Chardon)",
    country: "Espagne",
    region: "Estrémadure",
    family: "Pâte Molle",
    milkType: "Brebis",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 30,
    minVolumeLiters: 15,
    maxVolumeLiters: 60,
    description: "Fromage unique au monde : coagulation 100% végétale à la fleur de chardon sauvage, donnant une pâte ultra-crémeuse quasi-liquide.",
    history: "Né de l'adaptation géniale des bergers d'Estrémadure utilisant le chardon sauvage fleuri pour coaguler le riche lait de brebis.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maestro Quesero Alfonso Bravo",
    validatorTech: "CRAEX Extremadura",
    validatorHealth: "Dr. Vétérinaire J. Martinez",
    hygieneWarning: "Vérifier la stérilité de la macération aqueuse de chardon sauvage.",
    legalDisclaimer: "Méthode artisanale à la fleur de chardon. L'appellation Torta del Casar D.O.P. fait l'objet d'un cahier des charges strict.",
    expectedYieldKg: 5.5,
    ingredients: [
      { name: "Lait cru entier de brebis", quantity: "30 Litres" },
      { name: "Fleurs séchées de chardon sauvage (Cynara cardunculus)", quantity: "15 g", notes: "Macérées 12h dans l'eau tiède" },
      { name: "Sel fin de mer", quantity: "100 g" }
    ],
    utensilIds: ["u-louche", "u-toile-lin", "u-planches-epicea"],
    supplierIds: ["sup-cardunculus", "sup-vosges-lin"],
    steps: [
      {
        stepNumber: 1,
        phase: "PREPARATION",
        title: "Macération des pistils de chardon",
        durationMinutes: 720,
        temperatureC: 20,
        description: "Broyer les étamines de chardon au pilon dans un peu d'eau tiède. Filtrer au tissu très fin pour récupérer l'extrait coagulant.",
        sensoryCue: "Liquide couleur thé brun, odeur herbacée et florale prononcée."
      },
      {
        stepNumber: 2,
        phase: "COAGULATION",
        title: "Coagulation végétale douce",
        durationMinutes: 60,
        temperatureC: 30,
        description: "Verser l'extrait végétal dans le lait à 30°C. Laisser coaguler pendant 60 minutes.",
        sensoryCue: "Gel très tendre et soyeux, texture plus fragile qu'un caillé à présure animale."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage et bandage obligatoire",
        durationMinutes: 120,
        description: "Mettre en moules sans pressage violent. **Ligoter impérativement la meule avec un bandage de coton noué** pour empêcher la croûte d'éclater lors de l'affinage.",
        sensoryCue: "Maintien mécanique indispensable du pourtour du fromage.",
        criticalControlPoint: "Pose du bandage textile serré impérative dès le premier jour."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Salage doux au sel sec",
        durationMinutes: 15,
        description: "Salage superficiel léger.",
        sensoryCue: "Croûte fine et délicate."
      }
    ],
    ripening: {
      cellarTempMin: 9,
      cellarTempMax: 11,
      humidityMinPercent: 90,
      humidityMaxPercent: 95,
      woodType: "Planches d'épicéa",
      careType: "TURNING",
      careFrequency: "Retournement quotidien très délicat",
      careDescription: "La protéolyse intense due au chardon liquéfie l'intérieur. Le bandage textile reste en place jusqu'à la dégustation.",
      minDays: 60,
      optimalDays: 75,
      maxDays: 100,
      sensoryEvolution: "On découpe le dessus comme un couvercle pour déguster à la cuillère une pâte crémeuse, onctueuse, fondante et légèrement amère."
    }
  },

  {
    id: "es-cabrales",
    slug: "queso-de-cabrales-fermier",
    name: "Queso de Cabrales Fermier (Persillé de Grotte)",
    country: "Espagne",
    region: "Asturies",
    family: "Pâte Persillée",
    milkType: "Mixte",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 60,
    minVolumeLiters: 30,
    maxVolumeLiters: 120,
    description: "Persillé montagnard rustique affiné dans les grottes calcaires naturelles et humides des Pics d'Europe.",
    history: "Né dans les villages d'altitude asturiens isolés par les neiges, où les meules mûrissent au souffle frais des cavernes.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Quesera Elena Fernandez",
    validatorTech: "Consejo Regulador D.O.P. Cabrales",
    validatorHealth: "Dr. Vétérinaire J. Martinez",
    hygieneWarning: "Vérifier la qualité aérobiologique de la grotte d'affinage (absence de moisissures pathogènes).",
    legalDisclaimer: "Recette traditionnelle de montagne.",
    expectedYieldKg: 6.8,
    ingredients: [
      { name: "Lait cru de vache", quantity: "40 Litres" },
      { name: "Lait cru de chèvre ou brebis (si disponible)", quantity: "20 Litres" },
      { name: "Présure animale traditionnelle", quantity: "15 mL" },
      { name: "Sel de mer brut", quantity: "200 g" }
    ],
    utensilIds: ["u-harpe", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage mixte à température fraîche",
        durationMinutes: 60,
        temperatureC: 29,
        description: "Mélanger les laits crus, emprésurer à 29°C pendant 1 heure.",
        sensoryCue: "Caillé souple."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Égouttage lent sans piquage",
        durationMinutes: 1440,
        description: "Moulage direct sans pressage. Le champignon se développe spontanément grâce aux courants d'air de la grotte.",
        sensoryCue: "Masse poreuse conservant son humidité."
      }
    ],
    ripening: {
      cellarTempMin: 8,
      cellarTempMax: 10,
      humidityMinPercent: 95,
      humidityMaxPercent: 98,
      woodType: "Étagères de bois ou dalles rocheuses en grotte naturelle",
      careType: "TURNING",
      careFrequency: "Retournement 2 fois par semaine",
      careDescription: "Affinage obligatoire en grotte calcaire saturée en humidité avec courant d'air naturel permanent.",
      minDays: 60,
      optimalDays: 120,
      maxDays: 180,
      sensoryEvolution: "Persillage bleu-gris intense, odeur puissante, saveur corsée, piquante et très fondante."
    }
  },

  {
    id: "es-garrotxa",
    slug: "queso-garrotxa-artisanal",
    name: "Queso Garrotxa Artisanal au Lait Cru de Chèvre",
    country: "Espagne",
    region: "Catalogne",
    family: "Pâte Pressée Non Cuite",
    milkType: "Chèvre",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 40,
    minVolumeLiters: 20,
    maxVolumeLiters: 80,
    description: "Fromage catalan réputé pour sa croûte grise cendrée feutrée et sa pâte semi-ferme au bon goût de noisette.",
    history: "Recette pastorale catalane ressuscitée dans les années 1980 par de jeunes artisans fromagers néo-ruraux.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Formatger Jordi Sole",
    validatorTech: "Associació de Formatgers de Catalunya",
    validatorHealth: "Dr. Vétérinaire J. Martinez",
    hygieneWarning: "Vérifier la bonne flore superficielle grise (Mucor et Geotrichum nobles) sans altération du cœur.",
    legalDisclaimer: "Méthode artisanale catalane.",
    expectedYieldKg: 4.8,
    ingredients: [
      { name: "Lait cru entier de chèvre", quantity: "40 Litres" },
      { name: "Présure de chevreau ou veau", quantity: "10 mL" },
      { name: "Sel de mer pour saumure", quantity: "2 kg" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-clerici", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à 33°C",
        durationMinutes: 35,
        temperatureC: 33,
        description: "Emprésurer à 33°C pour une coagulation en 35 minutes.",
        sensoryCue: "Gel franc."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage maïs et pressage modéré",
        durationMinutes: 240,
        description: "Décailler en grains de maïs, brasser 15 minutes, mouler sous toile et presser 4h.",
        sensoryCue: "Pâte compacte bien liée."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 85,
      humidityMaxPercent: 90,
      woodType: "Planches d'épicéa",
      careType: "BRUSHING",
      careFrequency: "Brossage très léger",
      careDescription: "Développement naturel d'un feutrage gris noble de surface sans lavage agressif.",
      minDays: 30,
      optimalDays: 60,
      maxDays: 90,
      sensoryEvolution: "Pâte blanche crémeuse à la coupe, croûte minérale grisâtre, arôme subtil de sous-bois et champignon."
    }
  },

  // ================= SUISSE =================
  {
    id: "ch-gruyere",
    slug: "gruyere-d-alpage-artisanal",
    name: "Gruyère d'Alpage Artisanal en Chaudron de Cuivre",
    country: "Suisse",
    region: "Fribourg / Vaud",
    family: "Pâte Pressée Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 120,
    minVolumeLiters: 80,
    maxVolumeLiters: 200,
    description: "Le sommet de la technologie fromagère alpine : cuit à 55°C en chaudron de cuivre au feu de bois et affiné à la morge.",
    history: "Régit par les chartes d'alpage depuis le XIIe siècle, chaque meule raconte la richesse florale des prairies d'altitude.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager d'Alpage Jean-Pierre Favre",
    validatorTech: "Station Fédérale Agroscope Liebefeld",
    validatorHealth: "Dr. Vétérinaire H. Schaller",
    hygieneWarning: "Maîtrise absolue du chaudron cuivre et de la cinétique de chauffe sans formation de brûlis.",
    legalDisclaimer: "Méthode inspirée du savoir-faire d'alpage suisse. La marque officielle Gruyère d'Alpage AOP est réservée aux producteurs certifiés.",
    expectedYieldKg: 10.5,
    ingredients: [
      { name: "Lait cru d'alpage riche du matin et du soir", quantity: "120 Litres", notes: "Vaches nourries sans ensilage" },
      { name: "Levain de petit-lait d'alpage (culture fermière)", quantity: "600 mL" },
      { name: "Présure naturelle en caillette", quantity: "25 mL" },
      { name: "Sel de mer pour morge et saumure", quantity: "4 kg" }
    ],
    utensilIds: ["u-chaudron-cuivre", "u-harpe", "u-poche", "u-toile-lin", "u-presse-levier", "u-planches-epicea", "u-brosses-tampico"],
    supplierIds: ["sup-cuivrerie-alpes", "sup-abel", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Chauffe au cuivre et emprésurage à 32°C",
        durationMinutes: 35,
        temperatureC: 32,
        description: "Chauffer le lait dans le chaudron de cuivre à 32°C. Ajouter le levain de petit-lait indigène puis la présure.",
        sensoryCue: "Gel compact et résistant."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage très fin et chauffe à 54-57°C",
        durationMinutes: 60,
        temperatureC: 56,
        description: "Découper à la harpe jusqu'à la taille d'un grain de blé. Chauffer progressivement le chaudron sous brassage continu jusqu'à 55°C pour cuire le caillé.",
        sensoryCue: "Grains fermes, séchés par la chauffe, qui se ressoudent instantanément sous une légère pression de la main.",
        criticalControlPoint: "Contrôler la vitesse de montée en température (1°C par minute maximum)."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Soutirage à la toile de lin et pressage lourd",
        durationMinutes: 1080, // 18h
        description: "Glisser la toile de lin sous la masse de caillé au fond du chaudron. Sortir la toile en un seul geste, placer en cercle d'alpage et appliquer une pression très lourde.",
        sensoryCue: "Expulsion vigoureuse de sérum bouillant.",
        criticalControlPoint: "Retourner et changer la toile 4 fois au cours des premières 12 heures."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Bain de saumure de 24h",
        durationMinutes: 1440,
        description: "Immersion dans une saumure à 20% à 12°C.",
        sensoryCue: "Surface nette et raffermie."
      }
    ],
    ripening: {
      cellarTempMin: 12,
      cellarTempMax: 14,
      humidityMinPercent: 90,
      humidityMaxPercent: 94,
      woodType: "Planches d'épicéa brut non raboté de montagne",
      careType: "MORGE",
      careFrequency: "Frottage à la morge 2 fois par semaine",
      careDescription: "Frottage régulier avec une solution de morge salée pour nourrir les bactéries corynéformes et constituer une croûte protectrice brune et saine.",
      minDays: 150,
      optimalDays: 365,
      maxDays: 720,
      sensoryEvolution: "Pâte fine et ferme, arômes puissants de fleurs d'alpage, caramel et fruits secs avec apparition de cristaux de tyrosine croquants au-delà de 12 mois."
    }
  },

  {
    id: "ch-tomme-vaudoise",
    slug: "tomme-vaudoise-artisanale",
    name: "Tomme Vaudoise Artisanale au Lait Cru",
    country: "Suisse",
    region: "Vaud / Jura",
    family: "Pâte Molle",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 30,
    minVolumeLiters: 15,
    maxVolumeLiters: 60,
    description: "Petite pâte molle ronde à croûte fleurie douce, célèbre pour son cœur fondant et crémeux.",
    history: "Fabriquée traditionnellement dans les chalets d'estive du Jura vaudois.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager Michel Rochat",
    validatorTech: "Association Fromagerie Vaudoise",
    validatorHealth: "Dr. Vétérinaire H. Schaller",
    hygieneWarning: "Contrôle des durées d'égouttage à température tempérée.",
    legalDisclaimer: "Spécialité traditionnelle vaudoise.",
    expectedYieldKg: 3.5,
    ingredients: [
      { name: "Lait cru entier de vache", quantity: "30 Litres" },
      { name: "Ferments mésophiles aromatiques", quantity: "1 dose" },
      { name: "Présure liquide 1:10 000", quantity: "7 mL" },
      { name: "Sel de mer fin", quantity: "60 g" }
    ],
    utensilIds: ["u-louche", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-kadvice"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à 32°C",
        durationMinutes: 30,
        temperatureC: 32,
        description: "Emprésurer à 32°C. Prise en 30 min.",
        sensoryCue: "Gel soyeux."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Moulage en moules plats ronds",
        durationMinutes: 120,
        description: "Moulage rapide à la louche perforée en moules individuels de 10-12 cm de diamètre.",
        sensoryCue: "Égouttage rapide sans tassement lourd."
      }
    ],
    ripening: {
      cellarTempMin: 12,
      cellarTempMax: 14,
      humidityMinPercent: 88,
      humidityMaxPercent: 92,
      woodType: "Claies d'épicéa",
      careType: "TURNING",
      careFrequency: "Retournement tous les 2 jours",
      careDescription: "Affinage court de 10 à 21 jours jusqu'à couverture par un duvet blanc immaculé.",
      minDays: 10,
      optimalDays: 18,
      maxDays: 28,
      sensoryEvolution: "Cœur coulant dès que l'on presse le centre avec le pouce, saveur douce et lactée."
    }
  },

  {
    id: "ch-mutschli",
    slug: "mutschli-fermier-montagne",
    name: "Mutschli Fermier de Montagne (Pâte Mi-Dure)",
    country: "Suisse",
    region: "Suisse Centrale",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 40,
    minVolumeLiters: 20,
    maxVolumeLiters: 80,
    description: "Format fermier individuel facile et rapide à fabriquer en micro-fromagerie, lavé à l'eau salée.",
    history: "Le 'fromage de tous les jours' des familles paysannes suisses, de taille modeste (500g à 1,5 kg).",
    status: "PUBLISHED",
    version: "1.0",
    author: "Fromager Hansruedi Müller",
    validatorTech: "INFORAMA Suisse",
    validatorHealth: "Dr. Vétérinaire H. Schaller",
    hygieneWarning: "Vérifier la bonne acidité de démarrage.",
    legalDisclaimer: "Méthode artisanale suisse.",
    expectedYieldKg: 4.2,
    ingredients: [
      { name: "Lait cru de vache", quantity: "40 Litres" },
      { name: "Ferments lactiques", quantity: "1 dose" },
      { name: "Présure naturelle", quantity: "10 mL" },
      { name: "Sel de mer pour bain de saumure", quantity: "2 kg" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage et décaillage maïs",
        durationMinutes: 45,
        temperatureC: 33,
        description: "Emprésurer à 33°C, décailler fin grain de maïs. Réchauffer légèrement à 38-40°C pour raffermir le caillé.",
        sensoryCue: "Grains bien détachés."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Moulage et pressage léger",
        durationMinutes: 180,
        description: "Mettre en moules et appliquer un poids de 2 à 4 kg par pièce pendant 3 heures.",
        sensoryCue: "Forme cylindrique compacte."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 86,
      humidityMaxPercent: 90,
      woodType: "Planches d'épicéa",
      careType: "WASHING",
      careFrequency: "Lavage à l'eau tiède salée 2 fois par semaine",
      careDescription: "Entretien à l'éponge salée pour former une jolie croûte jaune-orangée souple.",
      minDays: 28,
      optimalDays: 45,
      maxDays: 90,
      sensoryEvolution: "Pâte souple et beurrée, très facile à découper, goût doux de crème d'alpage."
    }
  },

  {
    id: "ch-formaggella",
    slug: "formaggella-ticinese-chevre",
    name: "Formaggella Ticinese Artisanale",
    country: "Suisse",
    region: "Tessin",
    family: "Pâte Pressée Non Cuite",
    milkType: "Chèvre",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 30,
    minVolumeLiters: 15,
    maxVolumeLiters: 60,
    description: "Fromage mi-dur tessinois pur chèvre ou mixte, affiné en cave de pierre de granite.",
    history: "Tradition des vallées rocheuses du Tessin où les chèvres Nera Verzasca pâturent en liberté.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Casaro Andrea Cotti",
    validatorTech: "Ticinowine e Formaggi",
    validatorHealth: "Dr. Vétérinaire H. Schaller",
    hygieneWarning: "Vérifier la bonne maîtrise du salage en cave de pierre.",
    legalDisclaimer: "Spécialité cantonale tessinoise.",
    expectedYieldKg: 3.4,
    ingredients: [
      { name: "Lait cru de chèvre tessinoise", quantity: "30 Litres" },
      { name: "Présure de chevreau", quantity: "7 mL" },
      { name: "Sel de mer", quantity: "150 g" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-planches-epicea"],
    supplierIds: ["sup-clerici", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à 34°C et prise",
        durationMinutes: 35,
        temperatureC: 34,
        description: "Chauffer le lait cru de chèvre à 34°C, incorporer la présure de chevreau et laisser prendre 35 minutes.",
        sensoryCue: "Gel homogène et franc."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage noisette et moulage sous sérum",
        durationMinutes: 40,
        description: "Découper à la harpe en grains réguliers de la taille d'une noisette. Réunir la masse sous le sérum et remplir les moules perforés.",
        sensoryCue: "Grains élastiques et souples sous la main."
      },
      {
        stepNumber: 3,
        phase: "SALTING",
        title: "Pressage léger et bain de saumure",
        durationMinutes: 360,
        description: "Appliquer une pression douce pendant 3h avec retournements, puis immerger dans une saumure à 18% pendant 6h.",
        sensoryCue: "Surface lisse et raffermie."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 88,
      humidityMaxPercent: 92,
      woodType: "Épicéa",
      careType: "WASHING",
      careFrequency: "Brossage saumuré hebdomadaire",
      careDescription: "Soins à l'eau salée dans une ambiance fraîche.",
      minDays: 30,
      optimalDays: 50,
      maxDays: 90,
      sensoryEvolution: "Pâte ivoire parsemée de petits yeux réguliers, saveur délicate sans agressivité caprine."
    }
  },

  // ================= BELGIQUE =================
  {
    id: "be-herve",
    slug: "fromage-de-herve-artisanal",
    name: "Fromage de Herve Artisanal au Lait Cru",
    country: "Belgique",
    region: "Pays de Herve (Wallonie)",
    family: "Pâte Molle",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 50,
    minVolumeLiters: 25,
    maxVolumeLiters: 100,
    description: "Le joyau du bocage liégeois : pâte molle à croûte lavée rouge orangée éclatante et parfum généreux et affirmé.",
    history: "Seul fromage belge bénéficiant d'une AOP historique, réputé depuis la Renaissance pour sa puissance gustative.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager Jean-Marie Dardenne",
    validatorTech: "Centre Fromager Wallon",
    validatorHealth: "Dr. Vétérinaire D. Vandeputte",
    hygieneWarning: "Suivi méticuleux des lavages pour maîtriser le développement de Brevibacterium linens.",
    legalDisclaimer: "Procédé traditionnel. L'appellation AOP Fromage de Herve est soumise aux règles de son cahier des charges.",
    expectedYieldKg: 5.6,
    ingredients: [
      { name: "Lait cru entier de vache du Pays de Herve", quantity: "50 Litres" },
      { name: "Ferments mésophiles aromatiques", quantity: "1 dose" },
      { name: "Présure bovine 1:10 000", quantity: "12 mL" },
      { name: "Eau tiède et sel marin pour lavages", quantity: "Q.S." }
    ],
    utensilIds: ["u-harpe", "u-brosses-tampico", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-kadvice", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à 31°C",
        durationMinutes: 60,
        temperatureC: 31,
        description: "Maturation puis emprésurage à 31°C. Coagulation en 60 minutes.",
        sensoryCue: "Gel très souple et onctueux."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Moulage en moules rectangulaires et découpe en cubes",
        durationMinutes: 720,
        description: "Égoutter en moules blocs rectangulaires, retourner plusieurs fois, puis découper en pavés carrés typiques (format 200 à 400g).",
        sensoryCue: "Forme carrée nette aux angles francs."
      }
    ],
    ripening: {
      cellarTempMin: 12,
      cellarTempMax: 14,
      humidityMinPercent: 94,
      humidityMaxPercent: 96,
      woodType: "Planches d'épicéa ou peuplier",
      careType: "WASHING",
      careFrequency: "Lavage manuel 2 à 3 fois par semaine",
      careDescription: "Lavage méticuleux à l'eau tiède salée pour stimuler la colonisation par le ferment du rouge (Brevibacterium linens).",
      minDays: 28,
      optimalDays: 45,
      maxDays: 70,
      sensoryEvolution: "Croûte luisante couleur brique/cuivrée, odeur corsée et pénétrante inimitable, pâte beurrée extrêmement fondante."
    }
  },

  {
    id: "be-chevre-wallonie",
    slug: "chevre-de-wallonie-cendre",
    name: "Chèvre de Wallonie Cendré Artisanal",
    country: "Belgique",
    region: "Ardenne / Wallonie",
    family: "Lactique",
    milkType: "Chèvre",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 25,
    minVolumeLiters: 10,
    maxVolumeLiters: 50,
    description: "Lactique pur chèvre égoutté en faisselle et saupoudré de charbon végétal de peuplier avant affinage.",
    history: "Issu des petits élevages caprins ardéchois et wallons valorisant les prairies herbeuses riches.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Fromagère Sophie Laurent",
    validatorTech: "Filière Caprine Wallonne",
    validatorHealth: "Dr. Vétérinaire D. Vandeputte",
    hygieneWarning: "Vérifier la qualité alimentaire du charbon végétal (exempt de tout résidu de combustion toxique).",
    legalDisclaimer: "Méthode artisanale fermière.",
    expectedYieldKg: 3.0,
    ingredients: [
      { name: "Lait cru entier de chèvre", quantity: "25 Litres" },
      { name: "Présure naturelle", quantity: "1 mL" },
      { name: "Sel fin mélangé à 2% de charbon végétal médicinal", quantity: "60 g" }
    ],
    utensilIds: ["u-louche", "u-moules-crottin", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-kadvice"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Caillage lactique lent de 24h",
        durationMinutes: 1440,
        temperatureC: 20,
        description: "Prise lactique lente à 20°C sous très faible dose de présure.",
        sensoryCue: "Caillé bien pris."
      },
      {
        stepNumber: 2,
        phase: "SALTING",
        title: "Cendrage au charbon végétal",
        durationMinutes: 20,
        description: "Saupoudrer uniformément au charbon salé pour neutraliser l'acidité de surface et favoriser le fleurissement.",
        sensoryCue: "Robe noire mate élégante."
      }
    ],
    ripening: {
      cellarTempMin: 11,
      cellarTempMax: 13,
      humidityMinPercent: 85,
      humidityMaxPercent: 90,
      woodType: "Claies d'épicéa",
      careType: "TURNING",
      careFrequency: "Retournement quotidien",
      careDescription: "Hâloir ventilé pendant 2 à 4 semaines.",
      minDays: 14,
      optimalDays: 25,
      maxDays: 45,
      sensoryEvolution: "Le feutrage blanc recouvre le noir de cendre, formant une croûte plissée marbrée d'un superbe contraste, cœur fondant et doux."
    }
  },

  {
    id: "be-abbaye",
    slug: "fromage-d-abbaye-artisan-biere",
    name: "Fromage d'Abbaye Fermier Lavé à la Bière Artisanale",
    country: "Belgique",
    region: "Hainaut / Namur",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 60,
    minVolumeLiters: 30,
    maxVolumeLiters: 120,
    description: "Pâte pressée demi-dure au lait cru dont la croûte est frottée à la bière trappiste non filtrée.",
    history: "Héritage des abbayes cisterciennes belges combinant l'art du brassage et la fromagerie fermière.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Maître Fromager Frère Marc",
    validatorTech: "Institut Meurice Bruxelles",
    validatorHealth: "Dr. Vétérinaire D. Vandeputte",
    hygieneWarning: "Vérifier la fraîcheur de la bière utilisée pour éviter toute contamination acétique.",
    legalDisclaimer: "Méthode monastique traditionnelle d'atelier.",
    expectedYieldKg: 6.3,
    ingredients: [
      { name: "Lait cru entier de vache", quantity: "60 Litres" },
      { name: "Ferments mésophiles", quantity: "1 dose" },
      { name: "Présure bovine 1:10 000", quantity: "15 mL" },
      { name: "Bière artisanale belge ambrée non pasteurisée", quantity: "1.5 Litre", notes: "Pour lavages de croûte" },
      { name: "Sel de mer pour saumure", quantity: "3 kg" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea", "u-brosses-tampico"],
    supplierIds: ["sup-abel", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "CURD_WORK",
        title: "Délactosage partiel à l'eau tiède",
        durationMinutes: 30,
        temperatureC: 36,
        description: "Décailler grain de maïs, soutirer 20% de sérum et remplacer par de l'eau à 45°C pour adoucir la pâte.",
        sensoryCue: "Grains doux et souples."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Pressage sous toile et saumurage",
        durationMinutes: 360,
        description: "Pressage de 6 heures sous toile, suivi d'un bain de saumure de 12 heures.",
        sensoryCue: "Meule ronde bien compacte."
      }
    ],
    ripening: {
      cellarTempMin: 11,
      cellarTempMax: 13,
      humidityMinPercent: 88,
      humidityMaxPercent: 92,
      woodType: "Planches d'épicéa",
      careType: "WASHING",
      careFrequency: "Lavage à la bière 2 fois par semaine",
      careDescription: "La croûte est frottée à la brosse imbibée de bière artisanale, apportant levures vivantes et parfum houblonné.",
      minDays: 45,
      optimalDays: 90,
      maxDays: 180,
      sensoryEvolution: "Croûte ambrée lumineuse, pâte jaune beurre tendre, notes intenses de malt, de levain et d'étable."
    }
  },

  {
    id: "be-maquee",
    slug: "maquee-artisanale-traditionnelle",
    name: "Maquée Artisanale Traditionnelle en Sac de Lin",
    country: "Belgique",
    region: "Wallonie",
    family: "Lactique",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 40,
    minVolumeLiters: 15,
    maxVolumeLiters: 80,
    description: "Fromage blanc frais fermier à égouttage gravitaire lent en étamine suspendue, sans aucun lissage mécanique industriel.",
    history: "La maquée (du wallon 'makèye', qui signifie frapper ou battre) est le fromage frais quotidien des fermes wallonnes.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Fromagère Marie-Claire Dumont",
    validatorTech: "Fédération Fromagère Wallonne",
    validatorHealth: "Dr. Vétérinaire D. Vandeputte",
    hygieneWarning: "Produit frais sans affinage : conservation stricte entre +2°C et +4°C et DLC courte (7 à 10 jours).",
    legalDisclaimer: "Spécialité fermière fraîche belge.",
    expectedYieldKg: 8.5,
    ingredients: [
      { name: "Lait cru de ferme (entier ou demi-écrémé)", quantity: "40 Litres" },
      { name: "Ferments mésophiles d'acidification", quantity: "1 dose" },
      { name: "Présure naturelle liquide", quantity: "0.5 mL" }
    ],
    utensilIds: ["u-poche", "u-toile-lin"],
    supplierIds: ["sup-vosges-lin", "sup-abel"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Caillage lactique lent de 24h",
        durationMinutes: 1440,
        temperatureC: 20,
        description: "Laisser cailler le lait tiédi à 20°C pendant 24h dans une grande bassine.",
        sensoryCue: "Masse lisse et blanche comme de la porcelaine."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Égouttage en sac de lin suspendu",
        durationMinutes: 720,
        description: "Verser délicatement le gel dans de grands sacs de lin suspendus au-dessus de bacs de récupération. Égouttage lent par simple gravité.",
        sensoryCue: "Le sérum s'écoule goutte à goutte sans aucune pression mécanique."
      }
    ],
    ripening: {
      cellarTempMin: 2,
      cellarTempMax: 4,
      humidityMinPercent: 80,
      humidityMaxPercent: 85,
      woodType: "Non affiné (chambre froide)",
      careType: "TURNING",
      careFrequency: "Aucun",
      careDescription: "Produit de consommation ultra-fraîche. Battu à la spatule avec de la crème fraîche de ferme ou ciboulette.",
      minDays: 1,
      optimalDays: 2,
      maxDays: 7,
      sensoryEvolution: "Texture veloutée, granuleuse et généreuse, saveur fraîche, douce et légèrement acidulée."
    }
  },

  // ================= PAYS-BAS =================
  {
    id: "nl-boerenkaas",
    slug: "boerenkaas-gouda-fermier-traditionnel",
    name: "Boerenkaas Authentique (Gouda Fermier au Lait Cru)",
    country: "Pays-Bas",
    region: "Hollande-Méridionale / Utrecht",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 100,
    minVolumeLiters: 50,
    maxVolumeLiters: 200,
    description: "Le véritable Gouda fermier au lait cru non standardisé : lavage du caillé à l'eau tiède, pressage sous toiles et affinage naturel sur bois.",
    history: "Reconnu Spécialité Traditionnelle Garantie (STG), le Boerenkaas est le gardien du goût originel des polders néerlandais.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Kaasmaker Jan Van de Berg",
    validatorTech: "Bond van Boerderij-Zuivelbereiders",
    validatorHealth: "Dr. Vétérinaire K. De Jong",
    hygieneWarning: "Vérifier la stricte hygiène lors du délactosage à l'eau chaude (eau potable certifiée).",
    legalDisclaimer: "Méthode artisanale du Boerenkaas traditionnel. Appellation STG officielle soumise à certification.",
    expectedYieldKg: 10.8,
    ingredients: [
      { name: "Lait cru entier de ferme non standardisé", quantity: "100 Litres", notes: "Mélange traite du soir et matin" },
      { name: "Ferments lactiques mésophiles hollandais", quantity: "1 dose" },
      { name: "Présure de veau naturelle (1:10 000)", quantity: "25 mL" },
      { name: "Eau chaude à 65°C pour lavage du caillé", quantity: "25 Litres" },
      { name: "Sel de mer pur pour saumure", quantity: "5 kg" }
    ],
    utensilIds: ["u-harpe", "u-moules-gouda", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-vosges-lin", "sup-kadvice", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage à 29-30°C",
        durationMinutes: 30,
        temperatureC: 29.5,
        description: "Emprésurer le lait frais à 29.5°C. Prise en 30 minutes.",
        sensoryCue: "Prise uniforme, gel propre."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Décaillage fin et lavage du caillé (Délactosage)",
        durationMinutes: 45,
        temperatureC: 35,
        description: "Décailler fin grain de maïs. Soutirer un tiers du lactosérum et ajouter l'eau chaude pour amener la cuve à 34-36°C. Brasser 20 minutes pour laver le caillé.",
        sensoryCue: "Le goût acide s'estompe, grains fermes et soyeux.",
        criticalControlPoint: "La température finale de lavage ne doit pas dépasser 36°C pour préserver la flore lactique."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Moulage sous toiles et pressage progressif",
        durationMinutes: 300, // 5h
        description: "Déposer le caillé tiède dans les moules à profil arrondi doublés de toiles de lin. Presser progressivement jusqu'à 4 bar.",
        sensoryCue: "La meule prend sa courbure ventrue caractéristique sans fissures."
      },
      {
        stepNumber: 4,
        phase: "SALTING",
        title: "Bain de saumure froide saturée",
        durationMinutes: 2880, // 48h
        temperatureC: 12,
        description: "Immersion dans une saumure à 18-20% pendant 48 heures pour une meule de 8-10 kg.",
        sensoryCue: "Fermeté périphérique parfaite."
      }
    ],
    ripening: {
      cellarTempMin: 12,
      cellarTempMax: 14,
      humidityMinPercent: 80,
      humidityMaxPercent: 85,
      woodType: "Planches d'épicéa brut non raboté",
      careType: "TURNING",
      careFrequency: "Retournement quotidien le premier mois",
      careDescription: "Les meules sont retournées chaque jour sur bois brut. Croûte naturelle brossée à sec sans enrobage plastique ou paraffine chimique.",
      minDays: 60,
      optimalDays: 180,
      maxDays: 540,
      sensoryEvolution: "Jeune (Jong belegen à 2 mois) : doux et élastique ; Vieux (Oud à 12 mois) : ambré, friable, arômes intenses de beurre noisette et cristaux de tyrosine croquants."
    }
  },

  {
    id: "nl-leidse",
    slug: "leidse-boerenkaas-cumin-fermier",
    name: "Leidse Boerenkaas Traditionnel au Cumin",
    country: "Pays-Bas",
    region: "Leyde (Hollande-Méridionale)",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 80,
    minVolumeLiters: 40,
    maxVolumeLiters: 150,
    description: "Fromage de Leyde au lait cru partiellement écrémé et graines entières de cumin ébouillantées incorporées au caillé.",
    history: "Le fromage des navigateurs de la Compagnie néerlandaise des Indes orientales au XVIIe siècle.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Kaasmaker Willem Jansen",
    validatorTech: "Vereniging Leidse Boerenkaas",
    validatorHealth: "Dr. Vétérinaire K. De Jong",
    hygieneWarning: "Ébullition obligatoire des graines de cumin pendant 10 minutes avant mélange au caillé.",
    legalDisclaimer: "Recette traditionnelle hollandaise protégée.",
    expectedYieldKg: 7.8,
    ingredients: [
      { name: "Lait cru de vache partiellement écrémé (2% MG)", quantity: "80 Litres" },
      { name: "Graines de cumin entières de haute qualité", quantity: "200 g", notes: "Ébouillantées 10 min et égouttées" },
      { name: "Présure de veau naturelle", quantity: "20 mL" },
      { name: "Sel de mer pour saumure", quantity: "4 kg" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "PREPARATION",
        title: "Ébouillantage du cumin",
        durationMinutes: 15,
        temperatureC: 100,
        description: "Faire bouillir le cumin dans l'eau claire 10 min pour assouplir la graine et libérer les huiles essentielles.",
        sensoryCue: "Parfum d'épices chaud et pénétrant."
      },
      {
        stepNumber: 2,
        phase: "CURD_WORK",
        title: "Brassage du caillé avec les graines de cumin tièdes",
        durationMinutes: 20,
        description: "Après décaillage fin, incorporer les graines de cumin directement dans la masse de caillé avant moulage.",
        sensoryCue: "Répartition uniforme des graines au cœur des grains de caillé."
      },
      {
        stepNumber: 3,
        phase: "MOULDING_DRAINING",
        title: "Pressage fort en moules à arêtes vives",
        durationMinutes: 360,
        description: "Presser fortement pour compacter la pâte écrémée.",
        sensoryCue: "Meule à bords droits et fermes."
      }
    ],
    ripening: {
      cellarTempMin: 11,
      cellarTempMax: 13,
      humidityMinPercent: 78,
      humidityMaxPercent: 82,
      woodType: "Planches d'épicéa",
      careType: "TURNING",
      careFrequency: "Retournement 2 fois par semaine",
      careDescription: "Affinage sec avec brossage régulier.",
      minDays: 90,
      optimalDays: 180,
      maxDays: 365,
      sensoryEvolution: "Pâte ferme et dense, saveur boisée, chaude, piquante et très aromatique."
    }
  },

  {
    id: "nl-edam",
    slug: "boeren-edam-artisanal-boule",
    name: "Boeren-Edam Artisanal (Petite Sphère Fermière au Lait Cru)",
    country: "Pays-Bas",
    region: "Hollande-Septentrionale",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 40,
    minVolumeLiters: 20,
    maxVolumeLiters: 80,
    description: "La célèbre boule fermière au lait cru, façonnée à la main et affinée en croûte naturelle lavée sans paraffine rouge.",
    history: "Exporté dans toute l'Europe dès le XIVe siècle grâce à sa forme sphérique compacte facile à rouler et stocker sur les navires.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Kaasmaker Piet Kramer",
    validatorTech: "Noord-Hollandse Kaasgilde",
    validatorHealth: "Dr. Vétérinaire K. De Jong",
    hygieneWarning: "Vérifier la bonne rotation des boules sur leurs étagères à rigoles.",
    legalDisclaimer: "Spécialité fermière traditionnelle artisanale.",
    expectedYieldKg: 4.2,
    ingredients: [
      { name: "Lait cru de vache demi-écrémé", quantity: "40 Litres" },
      { name: "Ferments lactiques", quantity: "1 dose" },
      { name: "Présure naturelle", quantity: "10 mL" },
      { name: "Sel de mer pour saumure", quantity: "2 kg" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "COAGULATION",
        title: "Emprésurage et décaillage blé",
        durationMinutes: 40,
        temperatureC: 31,
        description: "Emprésurer à 31°C. Décailler très fin grain de blé.",
        sensoryCue: "Grains fermes."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Moulage dans les hémisphères et modelage sphérique",
        durationMinutes: 240,
        description: "Remplir les moules hémisphériques, presser, puis lisser manuellement pour former la sphère parfaite (environ 1.5 à 2 kg).",
        sensoryCue: "Boule régulière et sans aucune aspérité."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 80,
      humidityMaxPercent: 85,
      woodType: "Étagères en épicéa à rigoles creusées",
      careType: "WASHING",
      careFrequency: "Lavage à l'eau salée puis retournement régulier",
      careDescription: "Zéro cire rouge industrielle ! La croûte reste 100% naturelle et dorée.",
      minDays: 45,
      optimalDays: 90,
      maxDays: 180,
      sensoryEvolution: "Pâte souple jaune paille, saveur douce, ronde, légèrement noisetée."
    }
  },

  {
    id: "nl-nagelkaas",
    slug: "friese-nagelkaas-girofle-fermier",
    name: "Friese Nagelkaas (Fromage de Frise aux Clous de Girofle)",
    country: "Pays-Bas",
    region: "Frise",
    family: "Pâte Pressée Non Cuite",
    milkType: "Vache",
    pasteurization: "Lait cru",
    referenceVolumeLiters: 60,
    minVolumeLiters: 30,
    maxVolumeLiters: 120,
    description: "Fromage historique des îles de Frise, mariant la pâte ferme au lait cru écrémé aux clous de girofle concassés et graines de cumin.",
    history: "Créé par les fermiers frisons pour conserver le fromage durant les rudes hivers maritimes grâce aux propriétés antiseptiques du clou de girofle.",
    status: "PUBLISHED",
    version: "1.0",
    author: "Kaasmaker Bauke Dijkstra",
    validatorTech: "Friese Zuivelbond",
    validatorHealth: "Dr. Vétérinaire K. De Jong",
    hygieneWarning: "Vérifier la granulométrie des clous de girofle concassés (ne pas laisser d'échardes trop pointues).",
    legalDisclaimer: "Recette traditionnelle de Frise.",
    expectedYieldKg: 5.9,
    ingredients: [
      { name: "Lait cru de vache écrémé", quantity: "60 Litres" },
      { name: "Clous de girofle entiers et concassés", quantity: "150 g" },
      { name: "Graines de cumin", quantity: "50 g" },
      { name: "Présure de veau liquide", quantity: "15 mL" },
      { name: "Sel de mer pour saumure", quantity: "3 kg" }
    ],
    utensilIds: ["u-harpe", "u-toile-lin", "u-presse-levier", "u-planches-epicea"],
    supplierIds: ["sup-abel", "sup-vosges-lin", "sup-scierie-jura"],
    steps: [
      {
        stepNumber: 1,
        phase: "CURD_WORK",
        title: "Incorporation intime des clous de girofle",
        durationMinutes: 20,
        description: "Mélanger intimement les clous de girofle et le cumin dans le caillé essoré avant mise sous presse.",
        sensoryCue: "Odeur boisée et camphrée intense."
      },
      {
        stepNumber: 2,
        phase: "MOULDING_DRAINING",
        title: "Pressage très fort pour pâte compacte",
        durationMinutes: 480,
        description: "Presser à charge lourde pendant 8 heures.",
        sensoryCue: "Pâte extrêmement compacte."
      }
    ],
    ripening: {
      cellarTempMin: 10,
      cellarTempMax: 12,
      humidityMinPercent: 75,
      humidityMaxPercent: 80,
      woodType: "Planches d'épicéa",
      careType: "TURNING",
      careFrequency: "Retournement hebdomadaire",
      careDescription: "Affinage sec prolongé.",
      minDays: 90,
      optimalDays: 240,
      maxDays: 720,
      sensoryEvolution: "Pâte très dure idéale à râper ou couper en fins copeaux translucides, notes chaudes, épicées et puissantes."
    }
  }
];
