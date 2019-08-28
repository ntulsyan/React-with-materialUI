import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

import { muscles, exercises } from "../store";

const allMuscles = ["All"].concat(muscles);
const allExercises = Object.entries(
  exercises.reduce((exercises, exercise) => {
    let { muscles } = exercise;

    exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise];

    return exercises;
  }, {})
);

class App extends Component {
  state = {
    exercises,
    selectedExercise: null,
    selectedMuscle: 0
  };

  handleMuscleChange(event, muscle) {
    this.setState({ selectedMuscle: muscle });
  }

  getExercicesByMuscles() {
    if (this.state.selectedMuscle === 0) return allExercises;
    return allExercises.filter(
      exercise => exercise[0] === allMuscles[this.state.selectedMuscle]
    );
  }

  render() {
    let exercises = this.getExercicesByMuscles(this.state.selectedExercise);
    return (
      <Fragment>
        <Header />
        <Exercises
          exercises={exercises}
          selectedExercise={this.state.selectedExercise}
        />
        <Footer
          muscles={muscles}
          handleMuscleChange={this.handleMuscleChange.bind(this)}
          selectedMuscle={this.state.selectedMuscle}
        />
      </Fragment>
    );
  }
}

export default App;
