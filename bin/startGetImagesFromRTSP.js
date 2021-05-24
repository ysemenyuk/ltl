import getImagesByTimeRTSP from "../funcs/getImagesByTimeRTSP.js";

import { cam3 } from "../cameras.js";

console.log("getImagesByTimeRTSP cam3 - ", cam3);

setInterval(() => getImagesByTimeRTSP(cam3), cam3.jpegCreateInterval);

// node bin/startGetImagesFromRTSP.js
