# 🎨 Guide: Synchronisation des images Canva

## 📝 Comment ça marche?

1. **Script** (`sync-canva-images.mjs`) → Copie vos 50+ images depuis votre dossier Canva local
2. **Génération** → Crée une liste JSON automatiquement
3. **Galerie** → React charge et affiche toutes les images dynamiquement

---

## 🚀 Utilisation (3 étapes simples)

### **Étape 1: Préparer votre dossier Canva**

Créez/organisez un dossier sur votre PC avec tous vos visuels Canva exportés:
```
C:\Users\chris\Desktop\Mes_Creations_Canva\
├── logo-client-1.png
├── affiche-noel.png
├── flyer-summer.jpg
├── tiktok-video.png
└── ... (50+ images)
```

### **Étape 2: Lancer le script (depuis le terminal du codespace)**

**Option A - Avec npm (plus simple):**
```bash
npm run sync-canva
```

**Option B - Directement:**
```bash
node scripts/sync-canva-images.mjs
```

### **Étape 3: Le script va demander**

```
📁 Entrez le chemin vers votre dossier Canva:
> C:\Users\chris\Desktop\Mes_Creations_Canva
```

**Collez votre chemin Windows et appuyez sur Entrée!**

---

## ✨ Résultat

Le script va:
- ✅ Copier toutes les images (PNG, JPG, WEBP, GIF)
- ✅ Les placer dans `/public/images/creative/`
- ✅ Générer une liste JSON automatiquement
- ✅ Afficher un résumé:

```
✨ Succès!
📤 52 image(s) copiée(s)
📄 Liste générée: public/images/creative/images-list.json
```

---

## 🎯 Sur votre site

- **Rechargez** votre portfolio
- La galerie affiche toutes vos créations
- **Masonry layout** = différents formats s'affichent parfaitement
- **Clic** sur une image = l'agrandir en modale
- **Aléatoire** = les images changent d'ordre à chaque rechargement

---

## 🔄 Mise à jour future

Quand vous avez **10 nouvelles images** à ajouter:

1. Mettez-les dans votre dossier `Mes_Creations_Canva`
2. Relancez: `npm run sync-canva`
3. Dites oui si le script demande de remplacer les anciennes
4. ✅ Terminé!

---

## ⚠️ Dépannage

**"Dossier non trouvé"?**
- Vérifiez le chemin (Windows utilise `\`)
- Exemple: `C:\Users\chris\Desktop\Mes_Creations_Canva`

**"Aucune image trouvée"?**
- Vérifiez que vos fichiers sont en `.png`, `.jpg`, `.jpeg`, `.webp` ou `.gif`
- Les majuscules comptent! (`.PNG` peut ne pas être détecté)

**Galerie vide après refresh?**
- Lancez d'abord le script
- Rafraîchissez votre navigateur (F5)

---

## 📊 Formats supportés

Tous ces formats Canva sont acceptés:
- 📱 TikTok (9:16)
- 📸 Instagram (1:1)
- 🖼️ Paysage (16:9)
- 📄 Portrait (9:16)
- ✅ PNG, JPG, WEBP, GIF

---

**Questions?** Consultez le code du composant dans:
```
src/app/components/creative-gallery.tsx
```
