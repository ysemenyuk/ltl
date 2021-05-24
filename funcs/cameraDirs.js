import fs from "fs";

const fsp = fs.promises;

const makeDirsForCamera = (camera) => {
  console.log("makeDirsForCamera - ", camera);

  const { pathToCamDir, pathToImagesDir, pathToVideosDir, pathToLogFile } =
    camera;

  return fsp
    .mkdir(pathToCamDir)
    .then(() => fsp.mkdir(pathToImagesDir))
    .then(() => fsp.mkdir(pathToVideosDir))
    .then(() => fsp.writeFile(pathToLogFile, "log file \n"))
    .catch((e) => console.log(`catch makeDirsForCamera error: ${e.message}`));
};

const removeDirsForCamera = (camera) => {
  console.log("removeDirsForCamera - ", camera);

  const { pathToCamDir } = camera;

  return fsp
    .rmdir(pathToCamDir, { recursive: true })
    .catch((e) => console.log(`catch removeDirsForCamera error: ${e.message}`));
};

export { makeDirsForCamera, removeDirsForCamera };
