import fs from "fs";
import path from "path";

import {
  makeDirsPathsFromOneDir,
  makeFilesPathsFromManyDirs,
} from "../funcs/makePaths.js";

import copyFilesForVideo from "../funcs/copyFilesForVideo.js";
import makeVideoSpawn from "../funcs/makeVideoSpawn.js";

import { cam3 } from "../cameras.js";

const fsp = fs.promises;

const { pathToImagesDir, pathToCamDir } = cam3;

const pathToSrcDir = path.join(pathToImagesDir);
const pathToTmpDir = path.join(pathToCamDir, "tmp-for-TEST-video");

const videoFileName = "TEST-video";

const time = 30;

fsp
  .rmdir(pathToTmpDir, { recursive: true })
  .then(() => fsp.mkdir(pathToTmpDir))
  .then(() => makeDirsPathsFromOneDir(pathToSrcDir))
  .then((dirsPaths) => makeFilesPathsFromManyDirs(dirsPaths))
  .then((filesPaths) => copyFilesForVideo(filesPaths, pathToTmpDir, time))
  .then(() => makeVideoSpawn(pathToTmpDir, pathToCamDir, videoFileName))
  .catch((e) => console.log(e.message));
