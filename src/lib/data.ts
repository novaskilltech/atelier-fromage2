import { CHEESE_RECIPES } from "@/data/recipes";
import { UTENSILS } from "@/data/utensils";
import { SUPPLIERS } from "@/data/suppliers";
import { GLOSSARY } from "@/data/glossary";
import { CheeseMethod, UtensilItem, SupplierItem, GlossaryItem, SupplierCategory } from "@/types";

export interface RecipeFilters {
  country?: string;
  milkType?: string;
  family?: string;
  search?: string;
}

export function getAllRecipes(filters?: RecipeFilters): CheeseMethod[] {
  let list = [...CHEESE_RECIPES];

  if (!filters) return list;

  if (filters.country && filters.country !== "Tous") {
    list = list.filter((r) => r.country.toLowerCase() === filters.country!.toLowerCase());
  }

  if (filters.milkType && filters.milkType !== "Tous") {
    list = list.filter((r) => r.milkType.toLowerCase() === filters.milkType!.toLowerCase());
  }

  if (filters.family && filters.family !== "Tous") {
    list = list.filter((r) => r.family.toLowerCase() === filters.family!.toLowerCase());
  }

  if (filters.search && filters.search.trim().length > 0) {
    const q = filters.search.toLowerCase().trim();
    list = list.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.region.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.country.toLowerCase().includes(q)
    );
  }

  return list;
}

export function getRecipeBySlug(slug: string): CheeseMethod | undefined {
  return CHEESE_RECIPES.find((r) => r.slug === slug);
}

export function getAllUtensils(category?: string): UtensilItem[] {
  if (!category || category === "Tous") return UTENSILS;
  return UTENSILS.filter((u) => u.category === category);
}

export function getUtensilBySlug(slug: string): UtensilItem | undefined {
  return UTENSILS.find((u) => u.slug === slug);
}

export function getUtensilsForRecipe(recipe: CheeseMethod): UtensilItem[] {
  return UTENSILS.filter((u) => recipe.utensilIds.includes(u.id));
}

export function getAllSuppliers(category?: string): SupplierItem[] {
  if (!category || category === "Tous") return SUPPLIERS;
  return SUPPLIERS.filter((s) => s.category === category);
}

export function getSupplierBySlug(slug: string): SupplierItem | undefined {
  return SUPPLIERS.find((s) => s.slug === slug);
}

export function getSuppliersForRecipe(recipe: CheeseMethod): SupplierItem[] {
  return SUPPLIERS.filter((s) => recipe.supplierIds.includes(s.id));
}

export function getAllGlossaryTerms(category?: string, search?: string): GlossaryItem[] {
  let list = [...GLOSSARY];

  if (category && category !== "Tous") {
    list = list.filter((g) => g.category === category);
  }

  if (search && search.trim().length > 0) {
    const q = search.toLowerCase().trim();
    list = list.filter(
      (g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
    );
  }

  return list.sort((a, b) => a.term.localeCompare(b.term, "fr"));
}

export function getGlossaryTermBySlug(slug: string): GlossaryItem | undefined {
  return GLOSSARY.find((g) => g.slug === slug);
}

export function calculateScaledYield(recipe: CheeseMethod, targetLiters: number): number {
  if (!recipe.referenceVolumeLiters || recipe.referenceVolumeLiters === 0) return recipe.expectedYieldKg;
  const ratio = targetLiters / recipe.referenceVolumeLiters;
  return Math.round(recipe.expectedYieldKg * ratio * 10) / 10;
}
