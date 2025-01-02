const fs = require("fs");
const path = require("path");

const directoryPath = "./TeamProfile/2k23"; // Replace this with your directory path

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

    // Extract the desired part of the filename
    const match = file.match(/- (.+)\.jpg$/i);
    if (match) {
      const newFileName = match[1].toLowerCase().replace(/\s+/g, "-") + ".jpg";
      const newFilePath = path.join(directoryPath, newFileName);

      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error(`Error renaming file ${filePath}:`, err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    } else {
      console.log(`Skipping file ${file}, no match found.`);
    }
  });
});
