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

  // Fonction récursive pour lire tous les fichiers dans les sous-dossiers
  function getAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Récursif: chercher dans les sous-dossiers
        getAllImages(filePath, fileList);
      } else if (acceptedFormats.includes(path.extname(file).toLowerCase())) {
        // Ajouter le fichier image avec son chemin complet
        fileList.push({
          fullPath: filePath,
          filename: file,
        });
      }
    });

    return fileList;
  }

  // Obtenir toutes les images récursivement
  const imageFiles = getAllImages(canvaPath);

  if (imageFiles.length === 0) {
    console.log("⚠️  Aucune image trouvée dans le dossier!");
    process.exit(1);
  }

  console.log(`\n📸 ${imageFiles.length} image(s) trouvée(s)!\n`);

  // Copier les images
  let copied = 0;
  imageFiles.forEach((fileObj) => {
    const source = fileObj.fullPath;
    const dest = path.join(publicCreativeDir, fileObj.filename);

    try {
      fs.copyFileSync(source, dest);
      console.log(`✅ ${fileObj.filename}`);
      copied++;
    } catch (error) {
      console.error(`❌ Erreur: ${fileObj.filename}`, error.message);
    }
  });

  // Générer la liste JSON
  const imagesList = imageFiles.map((fileObj, index) => ({
    id: `image-${index}`,
    src: `/images/creative/${fileObj.filename}`,
    alt: fileObj.filename.replace(/\.[^/.]+$/, ""),
    filename: fileObj.filename,
  }));

  const jsonPath = path.join(publicCreativeDir, "images-list.json");
  fs.writeFileSync(jsonPath, JSON.stringify(imagesList, null, 2));

  console.log(`\n✨ Succès!\n`);
  console.log(`📤 ${copied} image(s) copiée(s)`);
  console.log(`📄 Liste générée: ${jsonPath}\n`);

  rl.close();
}

main().catch(console.error);
