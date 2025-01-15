import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementsByClassName("eyeCircle")[0];

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      body.style.visibility = event.data.state ? "visible" : "hidden";
      return eye.classList.remove("eyeCircleHover");
    }

    case "leftTarget": {
      return eye.classList.remove("eyeCircleHover");
    }

    case "setTarget": {
      eye.classList.add("eyeCircleHover");

      if (event.data.options) {
        let delay = 0;
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            setTimeout(() => {
              createOptions(type, data, id + 1);
            }, delay);
            delay += 300;
          });
        }
      }

      if (event.data.zones) {
        let delay = 0;
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            setTimeout(() => {
              createOptions("zones", data, id + 1, i + 1);
            }, delay);
            delay += 300;
          });
        }
      }
    }
  }
});
