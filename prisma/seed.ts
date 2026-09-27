import { PrismaClient } from "@prisma/client";
import { CHEESE_RECIPES } from "../src/data/recipes";
import { UTENSILS } from "../src/data/utensils";
import { SUPPLIERS } from "../src/data/suppliers";
import { GLOSSARY } from "../src/data/glossary";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Démarrage de l'ensemencement de la base de données artisanale...");

  // 1. Ingestion des Ustensiles
  console.log(`Ingestion de ${UTENSILS.length} ustensiles...`);
  for (const u of UTENSILS) {
    await prisma.utensil.upsert({
      where: { slug: u.slug },
      update: {},
      create: {
        id: u.id,
        slug: u.slug,
        name: u.name,
        category: u.category,
        approvedMaterial: u.approvedMaterial,
        description: u.description,
        traditionalAlternative: u.traditionalAlternative,
      },
    });
  }

  // 2. Ingestion des Fournisseurs
  console.log(`Ingestion de ${SUPPLIERS.length} fournisseurs artisanaux...`);
  for (const s of SUPPLIERS) {
    await prisma.supplier.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        id: s.id,
        slug: s.slug,
        name: s.name,
        country: s.country,
        region: s.region,
        category: s.category as any,
        specialty: s.specialty,
        address: s.address,
        website: s.website,
        contactEmail: s.contactEmail,
        phone: s.phone,
        description: s.description,
        isVerifiedCraft: s.isVerifiedCraft,
      },
    });
  }

  // 3. Ingestion du Glossaire
  console.log(`Ingestion de ${GLOSSARY.length} termes du lexique...`);
  for (const g of GLOSSARY) {
    await prisma.glossaryTerm.upsert({
      where: { slug: g.slug },
      update: {},
      create: {
        id: g.id,
        slug: g.slug,
        term: g.term,
        category: g.category,
        definition: g.definition,
        keyTip: g.keyTip,
      },
    });
  }

  // 4. Ingestion des 24 Recettes
  console.log(`Ingestion des ${CHEESE_RECIPES.length} recettes patrimoniales...`);
  for (const r of CHEESE_RECIPES) {
    const method = await prisma.method.upsert({
      where: { slug: r.slug },
      update: {},
      create: {
        id: r.id,
        slug: r.slug,
        name: r.name,
        country: r.country,
        region: r.region,
        family: r.family,
        milkType: r.milkType,
        pasteurization: r.pasteurization,
        referenceVolumeLiters: r.referenceVolumeLiters,
        minVolumeLiters: r.minVolumeLiters,
        maxVolumeLiters: r.maxVolumeLiters,
        description: r.description,
        history: r.history,
        version: r.version,
        author: r.author,
        validatorTech: r.validatorTech,
        validatorHealth: r.validatorHealth,
        hygieneWarning: r.hygieneWarning,
        legalDisclaimer: r.legalDisclaimer,
        expectedYieldKg: r.expectedYieldKg,
      },
    });

    // Étapes
    for (const st of r.steps) {
      await prisma.step.create({
        data: {
          methodId: method.id,
          stepNumber: st.stepNumber,
          phase: st.phase as any,
          title: st.title,
          durationMinutes: st.durationMinutes,
          temperatureC: st.temperatureC,
          phTarget: st.phTarget,
          description: st.description,
          sensoryCue: st.sensoryCue,
          criticalControlPoint: st.criticalControlPoint,
        },
      });
    }

    // Affinage
    if (r.ripening) {
      await prisma.ripeningParam.create({
        data: {
          methodId: method.id,
          cellarTempMin: r.ripening.cellarTempMin,
          cellarTempMax: r.ripening.cellarTempMax,
          humidityMinPercent: r.ripening.humidityMinPercent,
          humidityMaxPercent: r.ripening.humidityMaxPercent,
          woodType: r.ripening.woodType,
          careType: r.ripening.careType as any,
          careFrequency: r.ripening.careFrequency,
          careDescription: r.ripening.careDescription,
          minDays: r.ripening.minDays,
          optimalDays: r.ripening.optimalDays,
          maxDays: r.ripening.maxDays,
          sensoryEvolution: r.ripening.sensoryEvolution,
        },
      });
    }
  }

  console.log("✅ Ensemencement terminé avec succès !");
}

main()
  .catch((e) => {
    console.error("Erreur lors de l'ensemencement :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
