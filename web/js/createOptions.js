import { fetchNui } from "./fetchNui.js";

const optionsWrapper = document.getElementById("options-wrapper");

function onClick() {
  // when nuifocus is disabled after a click, the hover event is never released
  this.style.pointerEvents = "none";

  fetchNui("select", [this.targetType, this.targetId, this.zoneId]);
  // is there a better way to handle this? probably
  setTimeout(() => (this.style.pointerEvents = "auto"), 100);
}

export function createOptions(type, data, id, zoneId) {
  if (data.hide) return;

  const option = document.createElement("div");
  const iconElement = `<div class="icon-container"><i class="fa-fw ${data.icon} option-icon"></i></div>`;


  option.innerHTML = `${iconElement}<p class="option-label">${data.label}</p>`;
  option.className = "option-container";
  option.targetType = type;
  option.targetId = id;
  option.zoneId = zoneId;

  option.addEventListener("click", onClick);
  optionsWrapper.appendChild(option);
}

// const debugData = {
//   type: "exampleType",
//   data: {
//     hide: false,
//     icon: "fa-solid fa-car",
//     label: "Example Label",
//   },
//   id: "1",
//   zoneId: "zone-1",
// };

// const debugData2 = {
//   type: "exampleType",
//   data: {
//     hide: false,
//     icon: "fa-solid fa-hand",
//     label: "Example Label",
//   },
//   id: "1",
//   zoneId: "zone-1",
// };

// createOptions(debugData.type, debugData.data, debugData.id, debugData.zoneId);
// createOptions(debugData2.type, debugData2.data, debugData2.id, debugData2.zoneId);