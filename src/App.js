import React from "react";
// import Particles from "react-particles-js";
import { Component } from "react";
import Clarifai from "clarifai";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Navigation/Logo/Logo";
import Rank from "./Components/Navigation/Rank/Rank";
import FaceRecognition from "./Components/Navigation/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./Components/Navigation/ImageLinkForm/ImageLinkForm";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "2247f7292296424f8349d58c8b792d7d",
});

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ image: this.state.input });
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        "29d5fef0229a4936a607380d7ef775dd",
        "https://images.pexels.com/photos/1804035/pexels-photo-1804035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
  };

  render() {
    return (
      <div className="App">
        {/* <Particles className="particles" params={particlesOptions} /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.image} />
      </div>
    );
  }
}
export default App;
