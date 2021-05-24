import path from "path";
import { exec } from "child_process";
import util from "util";

// import { logger } from "./utils.js";

const execp = util.promisify(exec);

// make video from all images in dir

const makeVideoFile = (pathToImages, pathToVideosDir, videoFileName) => {
  const pathToVideoFile = path.join(pathToVideosDir, `${videoFileName}.mp4`);

  console.log("star makeVideoFile -", new Date().toLocaleString());

  return execp(
    `ffmpeg -y -r 25 -i ${pathToImages}\\img-%06d.jpg -vcodec libx264 ${pathToVideoFile}`
  )
    .then(({ stdout, stderr }) => {
      console.log("stdout:", stdout);
      console.log("stderr:", stderr);
      console.log("close makeVideoFile -", new Date().toLocaleString());
    })
    .catch((e) => {
      console.lod("error:", e.message);
      console.log("error makeVideoFile -", new Date().toLocaleString());
    });
};

export default makeVideoFile;

// import { cam1 } from './settings.js';

// const { pathToImagesDir, pathToVideosDir, pathToLogFile } = cam1;
// const fileNname = '20210220';
// const imagesDirName = '20210220';
// const pathToImages = path.join(pathToImagesDir, imagesDirName);

// makeVideoFile(pathToImages, pathToVideosDir, filenName, pathToLogFile)

// startMakeVideoFileEveryDay(cam1)
