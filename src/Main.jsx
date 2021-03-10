import React from "react";
import { Container, Box } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Box component="main" my={4}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Box>
    </Container>
  );
};

export default Main;
