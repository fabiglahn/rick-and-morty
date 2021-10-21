import "./style.css";
import { createElement } from "./lib/elements.js";
import createCharacterCard from "./components/characterCard";
import fetchCharacters from "./lib/fetchCharacter";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "THE RICK & MORTY API",
    }),
  ]);

  const characters = await fetchCharacters();

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    "main",
    { className: "main" },
    characterCards
  );

  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", { textContent: "Footer content" }),
  ]);

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
