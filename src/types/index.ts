export type Role = "ARTISAN" | "VALIDATOR" | "ADMIN";

export type MethodStatus = "DRAFT" | "REVIEW_TECH" | "REVIEW_HEALTH" | "APPROVED" | "PUBLISHED" | "ARCHIVED";

export type StepPhase = "PREPARATION" | "MATURATION" | "COAGULATION" | "CURD_WORK" | "MOULDING_DRAINING" | "SALTING";

export type CareType = "BRUSHING" | "WASHING" | "MORGE" | "OILING" | "TURNING";

export type SupplierCategory =
  | "RENNET_ANIMAL"
  | "RENNET_VEGETABLE"
  | "FERMENTS"
  | "LINEN_CLOTHS"
  | "MOULDS"
  | "WOOD_BOARDS"
  | "EQUIPMENT";

export interface StepItem {
  stepNumber: number;
  phase: StepPhase;
  title: string;
  durationMinutes?: number;
  temperatureC?: number;
  phTarget?: number;
  description: string;
  sensoryCue: string;
  criticalControlPoint?: string;
}

export interface RipeningInfo {
  cellarTempMin: number;
  cellarTempMax: number;
  humidityMinPercent: number;
  humidityMaxPercent: number;
  woodType: string;
  careType: CareType;
  careFrequency: string;
  careDescription: string;
  minDays: number;
  optimalDays: number;
  maxDays: number;
  sensoryEvolution: string;
}

export interface UtensilItem {
  id: string;
  slug: string;
  name: string;
  category: "Petit outillage manuel" | "Équipement d'atelier";
  approvedMaterial: string;
  description: string;
  traditionalAlternative?: string;
}

export interface SupplierItem {
  id: string;
  slug: string;
  name: string;
  country: string;
  region?: string;
  category: SupplierCategory;
  specialty: string;
  address?: string;
  website?: string;
  contactEmail?: string;
  phone?: string;
  description: string;
  isVerifiedCraft: boolean;
}

export interface GlossaryItem {
  id: string;
  slug: string;
  term: string;
  category: "Coagulation" | "Affinage" | "Matières" | "Matériel" | "Technologie";
  definition: string;
  keyTip?: string;
}

export interface CheeseMethod {
  id: string;
  slug: string;
  name: string;
  image?: string;
  country: "France" | "Italie" | "Espagne" | "Suisse" | "Belgique" | "Pays-Bas";
  region: string;
  family: "Lactique" | "Pâte Molle" | "Pâte Pressée Non Cuite" | "Pâte Pressée Cuite" | "Pâte Persillée" | "Pâte Filée";
  milkType: "Vache" | "Chèvre" | "Brebis" | "Bufflonne" | "Mixte";
  pasteurization: "Lait cru" | "Lait thermisé doux";
  referenceVolumeLiters: number;
  minVolumeLiters: number;
  maxVolumeLiters: number;
  description: string;
  history: string;
  status: MethodStatus;
  version: string;
  author: string;
  validatorTech: string;
  validatorHealth: string;
  hygieneWarning: string;
  legalDisclaimer: string;
  expectedYieldKg: number;
  ingredients: {
    name: string;
    quantity: string;
    notes?: string;
  }[];
  steps: StepItem[];
  ripening?: RipeningInfo;
  utensilIds: string[];
  supplierIds: string[];
}
