import "./style.css";
import { createElement } from "./lib/elements.js";
import createCharacterCard from "./components/characterCard";
import fetchCharacters from "./lib/fetchCharacter";
import createSearchElement from "./components/searchComponent";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const searchBar = createSearchElement(handleSubmit);

  async function handleSubmit(searchQuery) {
    const url = "https://rickandmortyapi.com/api/character/?name=";
    const characterSearch = await fetchCharacters(url + searchQuery);
    const searchCards = characterSearch.map((currywurst) =>
      createCharacterCard(currywurst)
    );
    mainElement.prepend(searchCards[0]);
    //fetch specific from API
    //Add new characterCards to main element
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
