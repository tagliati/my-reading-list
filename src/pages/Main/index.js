import React from "react";
import { Title, ReadingList } from "./styles.js";

export default function Main() {
  return (
    <>
      <Title>Main list </Title>
      <ReadingList>
        <li>
          <img src="http://lorempixel.com/250/400/animals/1/" />
          <strong>Boku no Code Academia</strong>
        </li>
        <li>
          <img src="http://lorempixel.com/250/400/animals/2/" />
          <strong>Boku no Code Academia</strong>
        </li>
        <li>
          <img src="http://lorempixel.com/250/400/animals/3/" />
          <strong>Boku no Code Academia</strong>
        </li>
        <li>
          <img src="http://lorempixel.com/250/400/animals/4/" />
          <strong>Boku no Code Academia</strong>
        </li>
        <li>
          <img src="http://lorempixel.com/250/400/animals/5/" />
          <strong>Boku no Code Academia</strong>
        </li>
        <li>
          <img src="http://lorempixel.com/250/400/animals/1/" />
          <strong>Boku no Code Academia</strong>
        </li>
      </ReadingList>
    </>
  );
}
