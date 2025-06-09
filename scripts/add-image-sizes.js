const fs = require("fs-extra");
const probe = require("probe-image-size");
const path = require("path");

const dataPath = path.join(__dirname, "../src/data/project.json");
const publicDir = path.join(__dirname, "../public");

async function addImageSizes() {
  const projects = await fs.readJSON(dataPath);

  const updated = await Promise.all(
    projects.map(async (project) => {
      const updatedImages = await Promise.all(
        project.images.map(async (imgPath) => {
          const imagePath = typeof imgPath === "string" ? imgPath : imgPath.src;
          const fullPath = path.join(publicDir, imagePath);
          const stream = fs.createReadStream(fullPath);
          const { width, height } = await probe(stream);
          return { src: imagePath, width, height };
        })
      );

      return { ...project, images: updatedImages };
    })
  );

  await fs.writeJSON(dataPath, updated, { spaces: 2 });
  console.log("✅ Image sizes added to project.json");
}

addImageSizes();
