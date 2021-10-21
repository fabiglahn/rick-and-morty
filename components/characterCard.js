import { createElement } from "../lib/elements.js";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  image,
  name,
  status,
  species,
  location,
  episode,
}) {
  const firstEpisode = episode[0];

  const firstEpisodeElement = createElement("p", { textContent: firstEpisode });

  const lastLocation = location[0];

  const lastLocationElement = createElement("p", {
    className: styles.cardSmallText,
    textContent: location.name,
  });

  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", {
        className: styles.img,
        src: image,
        alt: "",
      }),
      createElement("h2", { className: styles.h2, textContent: name }),
      createElement("h3", {
        className: styles.h3,
        textContent: status + " - " + species,
      }),
      createElement("span", { className: styles.cardText }, [
        "Last known location:",
      ]),
      lastLocationElement,
      /* createElement("p", {
        className: styles.cardSmallText,
        textContent: location.name,
      }), */
      createElement("span", { className: styles.cardText }, ["First seen in:"]),
      firstEpisodeElement,
    ]
  );

  fetch(lastLocation)
    .then((response) => response.json())
    .then((body) => {
      lastLocationElement.textContent = body.name;
    });

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstEpisodeElement.textContent = body.name;
    });

  return characterCard;
}

/*Variable 1 + “and” + Variable 2*/

/* const cardImg = createElement("img", { src: "../assets/Ethan.jpeg" });

const cardHeader = createElement("h2", { className: styles.h2 }, ["Ethan"]);
const cardSubtitle = createElement("h3", { className: styles.h3 }, [
  "Unknown - Human",
]);
const cardLocation = createElement("span", { className: styles.cardText }, [
  "Last known location:",
  createElement("p", { className: styles.cardSmallText }, ["Earth (C-137)"]),
]);
const cardSeen = createElement("span", { className: styles.cardText }, [
  "First seen in:",
  createElement("p", { className: styles.cardSmallText }, ["Anatomy Park"]),
]); */
