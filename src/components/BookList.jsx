import React from "react";
import { Book } from "./Book";
import book1Img from "../assets/book1.jpg";
import book2Img from "../assets/book2.jpg";
import book3Img from "../assets/book3.jpg";
import book4Img from "../assets/book4.jpg";
import book5Img from "../assets/book5.jpg";

const DUMMYBOOKS = [
  {
    id: 1,
    image: book1Img,
    title: "The Chronicles of Aetheria",
    description:
      "A magical journey through the realm of Aetheria, where a young hero must unite the elemental tribes to save their world.",
    characters: [
      "Erynn Windwalker",
      "Kael the Flamekeeper",
      "Liora Starlight",
      "Tharok Ironfist",
      "Queen Celestine",
    ],
  },
  {
    id: 2,
    image: book2Img,
    title: "The Clockwork Codex",
    description:
      "In a steampunk universe, an ingenious inventor uncovers a lost codex that holds the secret to eternal energy—and dangerous truths.",
    characters: [
      "Felix Gearwright",
      "Lady Elara Brassforge",
      "Professor Gideon Vanquist",
      "Captain Horace Blacksteam",
      "Nina Cogswain",
    ],
  },
  {
    id: 3,
    image: book3Img,
    title: "Whispers of the Forgotten Forest",
    description:
      "A group of unlikely allies embarks on a quest to unveil the mysteries of a forest that holds ancient secrets—and unspeakable dangers.",
    characters: [
      "Rowan Sylvan",
      "Ivy Thistlewood",
      "Garrick Stoneheart",
      "Aeris Moonshade",
      "Elder Trevan",
    ],
  },
  {
    id: 4,
    image: book4Img,
    title: "The Shattered Crown",
    description:
      "A kingdom on the brink of war sees rival heirs battling for the throne, as alliances are forged and betrayals run deep.",
    characters: [
      "Princess Alara",
      "Prince Kieran",
      "General Dorian Steelblade",
      "Lady Mireya Shadowsong",
      "Seer Calyx",
    ],
  },
  {
    id: 5,
    image: book5Img,
    title: "Echoes of the Deep",
    description:
      "In an underwater city, a young explorer discovers an artifact that awakens a long-dormant sea deity threatening humanity's survival.",
    characters: [
      "Marin Tidehunter",
      "Captain Isla Wavebreaker",
      "Nereus the Forgotten",
      "Professor Corwin Abyssal",
      "Syris the Siren",
    ],
  },
];

const BookList = () => {
  function logFn(title, characters) {
    console.log(`Title of this book is ${title}`);
    console.log(`Stars of this show are: ${characters.join(", ")}.`);
  }

  return (
    <div className="book-list">
      {DUMMYBOOKS.map((book) => (
        <Book
          key={book.id}
          image={book.image}
          title={book.title}
          description={book.description}
          characters={book.characters}
          logFn={logFn}
        />
      ))}
    </div>
  );
};

export default BookList;
