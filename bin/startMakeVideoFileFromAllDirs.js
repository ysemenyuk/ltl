import fs from "fs";
import path from "path";

import {
  getDirsPathsFromOneDir,
  getFilesPathsFromManyDirs,
} from "../funcs/getPaths.js";

import copyFilesForVideo from "../funcs/copyFilesForVideo.js";
import makeVideoSpawn from "../funcs/makeVideoSpawn.js";

import { cam3 } from "../cameras.js";

const fsp = fs.promises;

const { pathToImagesDir, pathToCamDir } = cam3;

const videoFileName = "full-video";

const time = 60;
const fps = 25;

const pathToSrcDir = path.join(pathToImagesDir);
const pathToOutDir = path.join(pathToCamDir);
const pathToTmpDir = path.join(pathToCamDir, "tmp-for-full-video");

fsp
  .rmdir(pathToTmpDir, { recursive: true })
  .then(() => fsp.mkdir(pathToTmpDir))
  .then(() => getDirsPathsFromOneDir(pathToSrcDir))
  .then((dirsPaths) => getFilesPathsFromManyDirs(dirsPaths))
  .then((filesPaths) => copyFilesForVideo(filesPaths, pathToTmpDir, time, fps))
  .then(() => makeVideoSpawn(pathToTmpDir, pathToOutDir, videoFileName))
  .catch((e) => console.log(e.message));

// node bin/startMakeVideoFileFromAllDirs.js
