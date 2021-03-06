import React from "react";

import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.LoginBtnClick = this.LoginBtnClick.bind(this);
    this.state = {
      email: "",
      password: "",
      disabled: true,
    };
  }

  LoginBtnActive = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };
  SetId = (e) => {
    this.setState({ id: e.target.value }, () => {
      this.LoginBtnActive();
    });
  };
  SetPw = (e) => {
    this.setState({ password: e.target.value }, () => {
      this.LoginBtnActive();
    });
  };
  componentDidMount() {
    if (this.props.location.props) {
      this.setState(
        {
          email: this.props.location.props.email,
          password: this.props.location.props.password,
        },
        () => {
          this.LoginBtnActive();
        }
      );
    }
  }
  LoginBtnClick = () => {
    return this.props
      .loginRequest(this.state.email, this.state.password)
      .then(() => {
        // console.log(this.props);
        if (this.props.status === "SUCCESS") {
          alert("로그인 되었습니다");
          this.props.history.push("/");
          return true;
        } else {
          alert("회원정보가 일치하지 않습니다");
          return false;
        }
      });
  };

  render() {
    const { email, password, disabled } = this.state;
    return (
      <LoginPresenter
        email={email}
        password={password}
        disabled={disabled}
        LoginBtnClick={this.LoginBtnClick}
        SetId={this.SetId}
        SetPw={this.SetPw}
      />
    );
  }
}
