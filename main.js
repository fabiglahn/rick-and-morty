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

//Array Mapping for the CharacterCards
/*   const characters = [
    {
      imgSrc: "/assets/Ethan.jpeg",
      name: "Ethan",
      subtitle: "Unknown - Human",
      location: "Earth (C-137)",
      firstseen: "Anatomy Park",
    },
    {
      imgSrc: "/assets/Doopidoo.jpeg",
      name: "Doopidoo",
      subtitle: "Alive - Animal",
      location: "unknown",
      firstseen: "Close Rick-counters of the Rick Kid",
    },
    {
      imgSrc: "/assets/BabyPoopybutthole.jpeg",
      name: "Baby Poopybutthole",
      subtitle: "Alive - Poopybutthole",
      location: "unknown",
      firstseen: "The Rickchurian Mortydate",
    },
    {
      imgSrc: "/assets/MrsRefrigerator.jpeg",
      name: "Mrs. Refrigerator",
      subtitle: "Dead - Alien",
      location: "Earth (Replacement Dimension)",
      firstseen: "Total Rickall",
    },
  ]; */

/* [
  createCharacterCard({
    imgSrc: "/assets/Ethan.jpeg",
    name: "Ethan",
    subtitle: "Unknown - Human",
    location: "Earth (C-137)",
    firstseen: "Anatomy Park",
  }),
  createCharacterCard({
    imgSrc: "/assets/Ethan.jpeg",
    name: "Evil Beth Clone",
    subtitle: "Dead - Human",
    location: "Earth (C-137)",
    firstseen: "Meeseeks and Destroy",
  }),
]);*/
