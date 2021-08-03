import React from "react";

import FindPresenter from "./FindPresenter";

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewURL: "",
    };
  }

  handleFileOnChange = (event) => {
    if (this.state.previewURL !== "") {
      this.setState({
        file: "",
        previewURL: "",
      });
    } else {
      event.preventDefault();
      let reader = new FileReader();
      let file = event.target.files[0];
      //let imgData = "";
      // console.log(file);
      reader.onloadend = () => {
        localStorage.setItem("imgURL", reader.result);
        this.setState({
          file: file,
          previewURL: reader.result,
        });
      };
      

      reader.readAsDataURL(file);
      
    }
  };

  change_image = () => {
    if (this.state.file === "") {
      return (this.state.previewURL)
    } else {
      return (this.state.previewURL)

    }


  };

  render() {
    return (
      <FindPresenter
        file={this.state.file}
        handleFileOnChange={this.handleFileOnChange}
        previewURL={this.state.previewURL}
      />

    );

  }
}
