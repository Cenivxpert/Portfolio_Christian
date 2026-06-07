#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const publicCreativeDir = path.join(projectRoot, "public/images/creative");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function main() {
  console.log("\n🎨 Synchroniseur d'images Canva\n");

  // Demander le chemin du dossier Canva
  const canvaPath = await question(
    "📁 Entrez le chemin vers votre dossier Canva (ex: C:\\Users\\chris\\Desktop\\Canva):\n> "
  );

  if (!fs.existsSync(canvaPath)) {
    console.error("❌ Dossier non trouvé!");
    process.exit(1);
  }

  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(publicCreativeDir)) {
    fs.mkdirSync(publicCreativeDir, { recursive: true });
  }

  // Formats acceptés
  const acceptedFormats = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

  // Lire tous les fichiers
  const files = fs.readdirSync(canvaPath);
  const imageFiles = files.filter((file) =>
    acceptedFormats.includes(path.extname(file).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log("⚠️  Aucune image trouvée dans le dossier!");
    process.exit(1);
  }

  console.log(`\n📸 ${imageFiles.length} image(s) trouvée(s)!\n`);

  // Copier les images
  let copied = 0;
  imageFiles.forEach((file) => {
    const source = path.join(canvaPath, file);
    const dest = path.join(publicCreativeDir, file);

    try {
      fs.copyFileSync(source, dest);
      console.log(`✅ ${file}`);
      copied++;
    } catch (error) {
      console.error(`❌ Erreur: ${file}`, error.message);
    }
  });

  // Générer la liste JSON
  const imagesList = imageFiles.map((file, index) => ({
    id: `image-${index}`,
    src: `/images/creative/${file}`,
    alt: file.replace(/\.[^/.]+$/, ""),
    filename: file,
  }));

  const jsonPath = path.join(publicCreativeDir, "images-list.json");
  fs.writeFileSync(jsonPath, JSON.stringify(imagesList, null, 2));

  console.log(`\n✨ Succès!\n`);
  console.log(`📤 ${copied} image(s) copiée(s)`);
  console.log(`📄 Liste générée: ${jsonPath}\n`);

  rl.close();
}

main().catch(console.error);
