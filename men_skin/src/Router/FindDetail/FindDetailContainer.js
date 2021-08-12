import React from "react";
import _ from 'lodash'
import FindDetailPresenter from "./FindDetailPresenter";

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numresult: props.match.params.num
    }
    console.log(props.match)

  }
  
  render() {
    return <FindDetailPresenter numresult = {this.state.numresult} />;
  }
}
