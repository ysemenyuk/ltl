import fs from "fs";
import path from "path";

import makeVideoSpawn from "../funcs/makeVideoSpawn.js";
import copyFilesForVideo from "../funcs/copyFilesForVideo.js";
import { getFilesPathsFromManyDirs } from "../funcs/getPaths.js";
import { makeTodayName } from "../funcs/utils.js";

import { cam3 } from "../cameras.js";

const fsp = fs.promises;

const { pathToImagesDir, pathToCamDir } = cam3;

// const dirName = '2021-03-16';
const dirName = makeTodayName(new Date());
const videoFileName = `${dirName}-video`;

const time = 60;
const fps = 25;

const pathToSrcDir = path.join(pathToImagesDir, dirName);
const pathToOutDir = path.join(pathToCamDir);
// const pathToOutDir = path.join(pathToVideosDir)
const pathToTmpDir = path.join(pathToCamDir, "tmp-for-oneDir-video");

fsp
  .rmdir(pathToTmpDir, { recursive: true })
  .then(() => fsp.mkdir(pathToTmpDir))
  .then(() => getFilesPathsFromManyDirs([pathToSrcDir]))
  .then((filesPaths) => copyFilesForVideo(filesPaths, pathToTmpDir, time, fps))
  .then(() => makeVideoSpawn(pathToTmpDir, pathToOutDir, videoFileName))
  .catch((e) => console.log(e.message));

// node bin/startMakeVideoFileFromOneDir.js
