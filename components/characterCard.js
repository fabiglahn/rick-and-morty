import { createElement } from "../lib/elements.js";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  name,
  subtitle,
  location,
  firstseen,
}) {
  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", { src: "../assets/Ethan.jpeg" }),
      createElement("h2", { className: styles.h2, textContent: name }),
      createElement("h3", { className: styles.h3, textContent: subtitle }),
      createElement("span", { className: styles.cardText }, [
        "Last known location:",
      ]),
      createElement("p", {
        className: styles.cardSmallText,
        textContent: location,
      }),
      createElement("span", { className: styles.cardText }, ["First seen in:"]),
      createElement("p", {
        className: styles.cardSmallText,
        textContent: firstseen,
      }),
    ]
  );
  return characterCard;
}

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
