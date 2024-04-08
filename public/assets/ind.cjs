const fs = require("fs");
const path = require("path");

const directoryPath = "./public/assets/TeamProfile/Founding-Members"; // Replace this with your directory path
const newDirectoryPath = "./public/assets/TeamProfile/Heads-CCs/Heads-CCs-min"; // Replace this with your directory path

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / 1024.0 / 1024; // Convert bytes to MB
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const fileSize = getFileSize(filePath);
    // const resolution = getImageResolution(filePath);
    console.log(`${file}: ${fileSize.toFixed(2)} MB`);
  });
});

// const newFileName = file.replace(/(\.[\w\d_-]+)$/i, "-min$1");
// const newFilePath = path.join(newDirectoryPath, newFileName);

// fs.rename(oldFilePath, newFilePath, (err) => {
//   if (err) {
//     console.error(`Error renaming file ${oldFilePath}:`, err);
//   } else {
//     console.log(`File ${oldFilePath} renamed to ${newFilePath}`);
//   }
// });
