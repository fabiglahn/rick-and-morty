import { createElement } from "./elements.js";

export function createCardComponent() {
  const cardElement = createElement("div", {
    className: "card",
    textContent: "Character",
  });
  return cardElement;
}
