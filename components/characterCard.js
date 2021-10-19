import { createElement } from "../lib/elements.js";
import styles from "./characterCard.module.css";

const cardImg = createElement("img", { src: "../assets/Ethan.jpeg" });

const cardHeader = createElement("h1", { className: styles.h1 }, ["Ethan"]);
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
]);

export default function createCharacterCard() {
  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [cardImg, cardHeader, cardSubtitle, cardLocation, cardSeen]
  );
  return characterCard;
}
