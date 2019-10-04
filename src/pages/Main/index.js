import React, { Component } from "react";
import { Title, ReadingList } from "./styles.js";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    mangas: []
  };

  async componentDidMount() {
    const response = await api.get("mangalist");
    this.setState({ mangas: response.data });
  }
  render() {
    const { mangas } = this.state;
    return (
      <>
        <Title>Main list </Title>
        <ReadingList>
          {mangas.map(manga => (
            <li>
              <img alt="fofo" src="http://lorempixel.com/250/400/animals/1/" />
              <strong>Boku no Code Academia</strong>
            </li>
          ))}
        </ReadingList>
      </>
    );
  }
}
