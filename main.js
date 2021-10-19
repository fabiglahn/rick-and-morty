import "./style.css";
import { createElement } from "./lib/elements.js";
import createCharacterCard from "./components/characterCard";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "THE RICK & MORTY API",
    }),
  ]);

  const mainElement = createElement("main", { className: "main" }, [
    createCharacterCard({
      name: "Ethan",
      subtitle: "Unknown - Human",
      location: "Earth (C-137)",
      firstseen: "Anatomy Park",
    }),
    createCharacterCard({
      name: "Evil Beth Clone",
      subtitle: "Dead - Human",
      location: "Earth (C-137)",
      firstseen: "Meeseeks and Destroy",
    }),
  ]);

  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", { textContent: "Footer content" }),
  ]);

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
