import { createElement } from "../lib/elements.js";
import styles from "./searchComponent.module.css";

export default function createSearchElement(onSubmit) {
  let timeoutId;
  const textInput = createElement("input", {
    placeholder: "Find a character",
    className: styles.input,
    oninput: () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSubmit(textInput.value);
      }, 300);
    },
  });

  const submitButton = createElement(
    "button",
    {
      className: styles.submitButton,
      type: "submit",
    },
    ["Search"]
  );
  const searchBar = createElement(
    "form",
    {
      className: styles.search,
      onsubmit: (event) => {
        event.preventDefault();
        onSubmit(textInput.value);
      },
    },
    [textInput, submitButton]
  );
  return searchBar;
}
