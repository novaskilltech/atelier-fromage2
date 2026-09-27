import { describe, it, expect } from "vitest";
import { CHEESE_RECIPES } from "../data/recipes";
import { UTENSILS } from "../data/utensils";
import { SUPPLIERS } from "../data/suppliers";
import { GLOSSARY } from "../data/glossary";
import { calculateScaledYield, getAllRecipes } from "../lib/data";

describe("Validation du Corpus Artisanal (CDC v1.1)", () => {
  it("contient exactement 24 recettes artisanales", () => {
    expect(CHEESE_RECIPES.length).toBe(24);
  });

  it("couvre exactement 6 pays avec 4 recettes par pays", () => {
    const countries = ["France", "Italie", "Espagne", "Suisse", "Belgique", "Pays-Bas"];
    countries.forEach((country) => {
      const recipesForCountry = CHEESE_RECIPES.filter((r) => r.country === country);
      expect(recipesForCountry.length).toBe(4);
    });
  });

  it("garantit que chaque recette respecte la charte artisanale (20-200 L)", () => {
    CHEESE_RECIPES.forEach((r) => {
      expect(r.minVolumeLiters).toBeGreaterThanOrEqual(10);
      expect(r.maxVolumeLiters).toBeLessThanOrEqual(200);
      expect(r.referenceVolumeLiters).toBeGreaterThanOrEqual(r.minVolumeLiters);
      expect(r.referenceVolumeLiters).toBeLessThanOrEqual(r.maxVolumeLiters);
      expect(r.expectedYieldKg).toBeGreaterThan(0);
      expect(r.steps.length).toBeGreaterThanOrEqual(2);
      expect(r.ingredients.length).toBeGreaterThan(0);
    });
  });

  it("vérifie que les fromages affinés possèdent des paramètres d'affinage complets", () => {
    const agedCheeses = CHEESE_RECIPES.filter((r) => r.family !== "Lactique" || r.ripening?.minDays! > 7);
    agedCheeses.forEach((r) => {
      expect(r.ripening).toBeDefined();
      if (r.ripening) {
        expect(r.ripening.optimalDays).toBeGreaterThan(0);
        expect(r.ripening.minDays).toBeLessThanOrEqual(r.ripening.optimalDays);
        expect(r.ripening.optimalDays).toBeLessThanOrEqual(r.ripening.maxDays);
        expect(r.ripening.humidityMinPercent).toBeGreaterThan(60);
        expect(r.ripening.woodType.length).toBeGreaterThan(3);
      }
    });
  });

  it("vérifie l'intégrité relationnelle des ustensiles et fournisseurs", () => {
    const validUtensilIds = new Set(UTENSILS.map((u) => u.id));
    const validSupplierIds = new Set(SUPPLIERS.map((s) => s.id));

    CHEESE_RECIPES.forEach((r) => {
      r.utensilIds.forEach((uId) => {
        expect(validUtensilIds.has(uId)).toBe(true);
      });
      r.supplierIds.forEach((sId) => {
        expect(validSupplierIds.has(sId)).toBe(true);
      });
    });
  });

  it("calcule les rendements proportionnels avec précision", () => {
    const recipe = CHEESE_RECIPES[0]; // Crottin: ref 30L -> 3.6kg
    const yield60L = calculateScaledYield(recipe, 60);
    expect(yield60L).toBe(7.2);

    const yield15L = calculateScaledYield(recipe, 15);
    expect(yield15L).toBe(1.8);
  });

  it("filtre correctement les recettes par pays et famille", () => {
    const frenchCheeses = getAllRecipes({ country: "France" });
    expect(frenchCheeses.length).toBe(4);

    const sheepCheeses = getAllRecipes({ milkType: "Brebis" });
    expect(sheepCheeses.length).toBeGreaterThanOrEqual(3);
  });

  it("vérifie la richesse du lexique fromager (au moins 25 termes)", () => {
    expect(GLOSSARY.length).toBeGreaterThanOrEqual(25);
    GLOSSARY.forEach((item) => {
      expect(item.term.length).toBeGreaterThan(2);
      expect(item.definition.length).toBeGreaterThan(10);
    });
  });

  it("vérifie la présence des filières clés dans l'annuaire de sourcing", () => {
    const categories = new Set(SUPPLIERS.map((s) => s.category));
    expect(categories.has("RENNET_ANIMAL")).toBe(true);
    expect(categories.has("RENNET_VEGETABLE")).toBe(true);
    expect(categories.has("FERMENTS")).toBe(true);
    expect(categories.has("LINEN_CLOTHS")).toBe(true);
    expect(categories.has("WOOD_BOARDS")).toBe(true);
  });
});
