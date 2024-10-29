import { Track } from "./Track.ts";
import "./types.d.ts";

window.opendaw = {
  tracks: [],
};

const colorPallete = {
  text: "#fffcf2",
  lightgray: "#ccc5b9",
  darkgray: "#403d39",
  bg: "#252422",
  orange: "#eb5e28",
};

document.body.style.backgroundColor = colorPallete.bg;

const supportedAudioMimeTypes = ["audio/wav"];

function setupDragDrop() {
  window.addEventListener("dragenter", (event) => {
    // TODO: show a dropzone
  });

  window.addEventListener("dragleave", (event) => {
    // TODO: hide the dropzone
  });

  window.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  window.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedItems = event.dataTransfer?.items ?? [];

    Array.from(draggedItems).forEach((item) => {
      if (item.kind === "file" && supportedAudioMimeTypes.includes(item.type)) {
        const file = item.getAsFile();

        if (file) {
          createTrackFromDroppedFile(file);
        }
      }
    });
  });
}

setupDragDrop();

function createTrackFromDroppedFile(file: File) {
  const track = new Track();
  track.setFile(file);
  window.opendaw.tracks.push(track);
}
