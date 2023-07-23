import React from "react";
import { Container } from "./App.styles";
import LeftSide from "./components/leftside/LeftSide";
import Form from "./components/rightside/Form";
function App() {
  return (
    <Container>
      <LeftSide />
      <Form />
    </Container>
  );
}

export default App;
