import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises
  };

  getExercicesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        let { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  render() {
    let exercises = this.getExercicesByMuscles();
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
