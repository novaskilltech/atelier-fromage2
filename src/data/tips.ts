export interface VideoTip {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  category: "Salage" | "Moulage" | "Affinage" | "Rendement & Caillé";
  duration: string;
  description: string;
  keyTakeaways: string[];
  isFeatured?: boolean;
}

export interface WrittenTip {
  id: string;
  title: string;
  category: "Salage" | "Moulage" | "Affinage" | "Coagulation";
  content: string;
  ruleOfThumb: string;
}

export const VIDEO_TIPS: VideoTip[] = [
  {
    id: "vid-salage-idele",
    youtubeId: "7eNphzCqSBU",
    title: "Transformation fromagère fermière : Comment bien saler ses fromages à sec en technologie lactique ?",
    channel: "Institut de l'Élevage (Idele) / Réseau Cap'Pradel",
    category: "Salage",
    duration: "4:32",
    description: "Vidéo de référence expliquant le geste précis du salage à sec manuel sur technologie lactique caprine ou bovine. Détaille la dose de sel requise, la répartition homogène sur les deux faces et le pourtour, ainsi que l'impact direct sur la freinte et l'installation du Geotrichum.",
    isFeatured: true,
    keyTakeaways: [
      "Doser précisément le sel : environ 1.5 % à 2 % du poids de caillé frais démoulé.",
      "Saler impérativement en 2 temps (face supérieure et talon au démoulage, puis face inférieure 12h plus tard).",
      "Éviter le sur-salage qui bloque le développement des moisissures nobles (Geotrichum candidum).",
      "Utiliser un sel de mer fin, sec, sans aucun anti-agglomérant chimique (pas de E535)."
    ]
  },
  {
    id: "vid-salage-techniques",
    youtubeId: "Vqv9EnrSk3c",
    title: "Les techniques de salage en fromagerie : à sec, en saumure et dans la masse",
    channel: "LMTA Formations Fromagères",
    category: "Salage",
    duration: "6:15",
    description: "Comparatif complet des trois grands modes de salage : salage au sel sec (crottins, camemberts), salage en bain de saumure saturée (pâtes pressées, tommes, goudas) et salage dans la masse du caillé émietté (Cantal, Salers, Cheddar).",
    keyTakeaways: [
      "Le sel joue 4 rôles capitaux : exhausteur de goût, freinte de l'eau résiduelle, formation de la croûte et frein aux bactéries pathogènes.",
      "La saumure doit être maintenue à 10-12°C et saturée à 18-20° Baumé avec un pH équilibré.",
      "Le salage dans la masse s'effectue après pressage sous sérum et émiettage avant le second pressage."
    ]
  },
  {
    id: "vid-moulage-individuel",
    youtubeId: "IHRfFWtdy3M",
    title: "Comment mouler et retourner vos fromages à l’aide de moules individuels ?",
    channel: "Institut de l'Élevage (Idele)",
    category: "Moulage",
    duration: "3:48",
    description: "Guide pratique pour réussir le moulage à la louche et le retournement en moules individuels sans briser la structure du caillé ni provoquer de pertes de rendement dans le sérum.",
    keyTakeaways: [
      "Prélever des tranches horizontales régulières sans agiter la louche.",
      "Remplir les moules au-dessus du niveau pour anticiper le tassement naturel.",
      "Effectuer le premier retournement dès que le caillé s'est affaissé de moitié dans la faisselle."
    ]
  },
  {
    id: "vid-moulage-bloc",
    youtubeId: "BnAsXmmdwCk",
    title: "Comment mouler et retourner les fromages lactiques à l’aide d’un bloc-moule ?",
    channel: "Institut de l'Élevage (Idele)",
    category: "Moulage",
    duration: "4:05",
    description: "Démonstration du travail au répartiteur et bloc-moule pour les ateliers traitant entre 50 et 200 litres de lait par jour avec un gain de temps considérable tout en préservant le caillé.",
    keyTakeaways: [
      "Verser le caillé avec la pelle répartitrice de façon continue et homogène.",
      "Retourner l'ensemble du bloc d'un geste sec et franc pour des fromages calibrés.",
      "Gain de temps de plus de 40% sur les séries de crottins et palets lactiques."
    ]
  },
  {
    id: "vid-rendement-moulage",
    youtubeId: "kHEUtQGLsTE",
    title: "Préparation du moulage du fromage lactique en utilisant le rendement fromager",
    channel: "Institut de l'Élevage (Idele)",
    category: "Rendement & Caillé",
    duration: "5:20",
    description: "Comment calculer précisément le nombre de moules nécessaires en fonction du litrage mis en cuve et du taux de matière sèche du lait cru pour éviter tout surplus ou manque en atelier.",
    keyTakeaways: [
      "Compter en moyenne 1 moule à crottin pour 0.7 à 0.8 L de lait de chèvre.",
      "Anticiper les variations saisonnières du rendement (lait de printemps plus hydraté que lait d'automne).",
      "Évite les fonds de cuve perdus et standardise le poids net commercial."
    ]
  },
  {
    id: "vid-affinage-formation",
    youtubeId: "kgPVZCmABrM",
    title: "L'Affinage des Fromages : Gestion de la cave, hygrométrie et soins de croûte",
    channel: "Formation Fromagère & Terroir",
    category: "Affinage",
    duration: "8:40",
    description: "Comprendre les équilibres biochimiques et microbiens en cave d'affinage : régulation de l'humidité relative, rôle des planches d'épicéa brut et fréquence des retournements.",
    keyTakeaways: [
      "Ne jamais ventiler directement les fromages sous peine de former une croûte plâtreuse étanche (croûtage).",
      "L'épicéa brut non traité est un réservoir vivant qui restitue l'humidité et régule la flore.",
      "Le brossage à sec élimine les acariens (cirons) et égalise le fleurissement."
    ]
  }
];

export const WRITTEN_TIPS: WrittenTip[] = [
  {
    id: "tip-salage-sec",
    title: "La Règle des 2 Passes pour le Salage au Sel Sec",
    category: "Salage",
    content: "Pour les fromages lactiques et pâtes molles (Crottin, Camembert), le salage ne doit jamais être fait en une seule fois. Le premier salage s'effectue au démoulage sur la face supérieure et le talon circulaire. 12 à 24 heures plus tard, le fromage est retourné et la face inférieure est salée. Cela permet au sel de pénétrer par gravité sans dessécher brusquement la surface.",
    ruleOfThumb: "Dose idéale : 1.5 % à 2 % du poids égoutté (soit environ 2g à 3g pour un crottin de 150g)."
  },
  {
    id: "tip-saumure-temperature",
    title: "Température & Équilibre de la Saumure",
    category: "Salage",
    content: "Une saumure trop chaude (>14°C) fait fuir les matières grasses et rend le fromage huileux. Une saumure trop froide (<8°C) ralentit la diffusion osmotique du sel au cœur de la meule. Maintenez toujours votre bac de saumure entre 10°C et 12°C. Si vos croûtes deviennent gluantes, la saumure manque de calcium : ajoutez une dose de chlorure de calcium (CaCl2) pour équilibrer la pression avec le caillé.",
    ruleOfThumb: "Densité optimale : 18° à 20° Baumé (environ 300g à 320g de sel de mer pur par litre d'eau)."
  },
  {
    id: "tip-floculation",
    title: "Calcul du Temps de Décaillage par la Floculation",
    category: "Coagulation",
    content: "Pour les pâtes pressées (Tomme, Gouda, Gruyère), ne vous fiez jamais uniquement à un minutage fixe pour découper le caillé. Notez à la minute près l'instant où apparaissent les premiers flocons visibles (point de gel). Multipliez ce temps de floculation par le coefficient k de la famille (k=2.5 pour pâte pressée, k=3 pour pâte molle) pour connaître la minute exacte où trancher.",
    ruleOfThumb: "Exemple : Floculation à 12 min × coefficient 2.5 = Décaillage exact à 30 min après emprésurage."
  },
  {
    id: "tip-toiles-lavage",
    title: "Entretien Naturel des Toiles de Lin d'Égouttage",
    category: "Moulage",
    content: "Les toiles de lin et étamines retiennent les protéines et les matières grasses acides. Pour ne pas détériorer les fibres nobles et éviter les faux goûts : rincez immédiatement après pressage à l'eau froide claire (l'eau chaude cuit les protéines qui s'incrustent dans la toile), puis lavez à 90°C au savon de Marseille pur. Proscrivez absolument les adoucissants parfumés et l'eau de Javel qui dégradent le lin.",
    ruleOfThumb: "Toujours tremper les toiles neuves 24h dans l'eau claire bouillie avant leur premier usage."
  },
  {
    id: "tip-hygrometrie-haloir",
    title: "Éviter le 'Croûtage' Précoce au Hâloir",
    category: "Affinage",
    content: "Si l'humidité de votre hâloir descend sous les 80% HR ou que l'air circule trop vite, l'évaporation de surface est plus rapide que la migration de l'eau du cœur. Il se forme une écorce dure et sèche qui emprisonne l'humidité interne : le fromage coulera ou pourrira de l'intérieur au bout de quelques semaines. Maintenez 88-92% HR et une aération douce et indirecte.",
    ruleOfThumb: "Le fromage doit rester frais et souple au toucher sous la pulpe du doigt pendant toute sa première semaine."
  }
];
