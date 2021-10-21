import { createElement } from "../lib/elements.js";
import styles from "./searchComponent.module.css";

export default function createSearchElement(onSubmit) {
  const textInput = createElement("input", {
    placeholder: "Find a character",
    className: styles.input,
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
