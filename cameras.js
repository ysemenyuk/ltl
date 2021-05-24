import path from "path";

const pathToApp = path.resolve("../");

const makeCamera3 = () => {
  const pathToCamDir = path.join(pathToApp, "camera3");
  const pathToImagesDir = path.join(pathToCamDir, "images");
  const pathToVideosDir = path.join(pathToCamDir, "videos");
  const pathToLogFile = path.join(pathToCamDir, "camera3-log.txt");

  return {
    name: "camera3",
    // jpegCreateUrl:
    //   "http://admin:qwer1234@192.168.1.64/ISAPI/Streaming/Channels/101/picture?snapShotImageType=JPEG",
    // jpegCreateRtspUrl:
    //   "rtsp://admin:qwer1234@192.168.1.64:554/ISAPI/Streaming/Channels/101",
    jpegCreateUrl:
      "http://admin:qwer1234@93.188.47.252:8080/ISAPI/Streaming/Channels/101/picture?snapShotImageType=JPEG",
    jpegCreateRtspUrl:
      "rtsp://admin:qwer1234@93.188.47.252:554/ISAPI/Streaming/Channels/101",
    jpegCreateInterval: 1000 * 10,
    jpegCreateStartTime: "08-00",
    jpegCreateStopTime: "20-00",
    pathToCamDir,
    pathToImagesDir,
    pathToVideosDir,
    pathToLogFile,
  };
};

export const cam3 = makeCamera3();
