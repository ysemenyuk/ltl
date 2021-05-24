import getImagesBytime from "../funcs/getImagesByTime.js";

import { cam3 } from "../cameras.js";

console.log("getImagesByTime cam3 - ", cam3);

setInterval(() => getImagesBytime(cam3), cam3.jpegCreateInterval);

// node bin/startGetImages.js
