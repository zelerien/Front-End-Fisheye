// import only once and rename
import { default as Image } from "../models/Image.js";
import { default as Video } from "../models/Video.js";

// Utilize the built-in 'Map' to optimize
const mediasFactory = new Map([
  ["image", Image],
  ["video", Video],
]);

export default class MediasFactory {
  constructor(data) {
    const MediaClass = mediasFactory.get(this.determineType(data));

    if (!MediaClass) {
      throw "Unknown data type";
    }

    return new MediaClass(data);
  }

  determineType(data) {
    if (data.image) {
      return "image";
    }
    if (data.video) {
      return "video";
    }
    return null;
  }
}
