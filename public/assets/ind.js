const fs = require("fs");
const path = require("path");

const directoryPath = "./public/assets/TeamProfile/Founding-Members"; // Replace this with your directory path
const newDirectoryPath = "./public/assets/TeamProfile/Heads-CCs/Heads-CCs-min"; // Replace this with your directory path

fs.readdir(newDirectoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const oldFilePath = path.join(newDirectoryPath, file);
    const newFileName = file.replace(/(\.[\w\d_-]+)$/i, "-min$1");
    const newFilePath = path.join(newDirectoryPath, newFileName);

    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming file ${oldFilePath}:`, err);
      } else {
        console.log(`File ${oldFilePath} renamed to ${newFilePath}`);
      }
    });
  });
});
