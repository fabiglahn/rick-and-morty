import "./style.css";
import { createElement } from "./lib/elements.js";
import createCharacterCard from "./components/characterCard";
import fetchCharacters from "./lib/fetchCharacter";
import createSearchElement from "./components/searchComponent";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const searchBar = createSearchElement(handleSubmit);

  async function handleSubmit(searchQuery) {
    console.log(searchQuery);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const body = await response.json();
    const characters = body.results;
    const characterElements = characters.map((character) =>
      createCharacterCard(character)
    );
    console.log(characterElements);
    mainElement.innerHTML = "";
    mainElement.append(...characterElements);
  }

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

  appElement.append(searchBar, headerElement, mainElement, footerElement);
}

renderApp();
