import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: "",
    });
  }

  render() {
    
    return <HomePresenter />;
  }
}
