import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

// Baseline calculation: launch baseline of 2,840 + elapsed hours
const LAUNCH_TIMESTAMP = 1790500000000; // Sept 2026

function getTmpFilePath() {
  return path.join(os.tmpdir(), "atelier_fromage_visits.json");
}

function getStoredStats() {
  const filePath = getTmpFilePath();
  const defaultTotal = Math.max(
    2840,
    2840 + Math.floor((Date.now() - LAUNCH_TIMESTAMP) / 120000)
  );

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return {
        total: Math.max(defaultTotal, Number(data.total) || defaultTotal),
        today: Number(data.today) || Math.floor(defaultTotal % 180) + 12,
        lastReset: data.lastReset || new Date().toISOString().slice(0, 10),
      };
    }
  } catch {
    // Fallback if read error
  }

  return {
    total: defaultTotal,
    today: Math.floor(defaultTotal % 180) + 12,
    lastReset: new Date().toISOString().slice(0, 10),
  };
}

function saveStats(stats: { total: number; today: number; lastReset: string }) {
  try {
    fs.writeFileSync(getTmpFilePath(), JSON.stringify(stats), "utf-8");
  } catch {
    // Non-fatal if filesystem is restricted
  }
}

export async function GET() {
  const stats = getStoredStats();
  const todayStr = new Date().toISOString().slice(0, 10);

  if (stats.lastReset !== todayStr) {
    stats.today = 1;
    stats.lastReset = todayStr;
    saveStats(stats);
  }

  // Realistic dynamic active artisans (between 4 and 12)
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 6 && currentHour <= 21;
  const activeNow = isDaytime
    ? 5 + (Math.floor(Date.now() / 45000) % 7) // 5 to 11 artisans in workshop hours
    : 2 + (Math.floor(Date.now() / 45000) % 4); // 2 to 5 in night cellar hours

  return NextResponse.json(
    {
      totalVisits: stats.total,
      todayVisits: stats.today,
      activeNow,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

export async function POST() {
  const stats = getStoredStats();
  const todayStr = new Date().toISOString().slice(0, 10);

  if (stats.lastReset !== todayStr) {
    stats.today = 1;
    stats.lastReset = todayStr;
  } else {
    stats.today += 1;
  }

  stats.total += 1;
  saveStats(stats);

  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 6 && currentHour <= 21;
  const activeNow = isDaytime
    ? 5 + (Math.floor(Date.now() / 45000) % 7)
    : 2 + (Math.floor(Date.now() / 45000) % 4);

  return NextResponse.json(
    {
      totalVisits: stats.total,
      todayVisits: stats.today,
      activeNow,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
