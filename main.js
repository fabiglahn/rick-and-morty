import "./style.css";
import { createElement } from "./lib/elements.js";
import { createCardComponent } from "./lib/card";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "THE RICK & MORTY API",
    }),
  ]);

  const mainElement = createElement("main", { className: "main" }, [
    createElement("p", { textContent: "Still developing..." }),
  ]);

  const cardComponent = createCardComponent();

  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", { textContent: "Footer content" }),
  ]);

  appElement.append(headerElement, mainElement, cardComponent, footerElement);
}

renderApp();
