import React from "react";
import { Container } from "react-bootstrap";
import AddItems from "./components/AddItems";
import ListItems from "./components/ListItems";

import "./App.css";

function App() {
  return (
    <Container>
      <AddItems />
      <ListItems />
    </Container>
  );
}

export default App;
