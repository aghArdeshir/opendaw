export class Track {
  private file: File;
  private blob: string;

  constructor() {}

  setFile(file: File) {
    this.file = file;
    this.blob = URL.createObjectURL(file);
  }

  play() {
    const audio = new Audio(this.blob);
    audio.play();
  }
}
