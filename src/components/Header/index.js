import React from "react";

import { Container, Editions } from "./styles";

export default function Header() {
  return (
    <Container>
      <Editions to="/cart">
        <div>
          <strong>19 não lidos</strong>
        </div>
      </Editions>
    </Container>
  );
}
