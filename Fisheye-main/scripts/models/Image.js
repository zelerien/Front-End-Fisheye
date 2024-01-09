import Media from "./Media.js";

export default class Image extends Media {
  constructor(data, width, height) {
    super(data);
    this.image = data.image;
    this.width = width;
    this.height = height;
  }
}
