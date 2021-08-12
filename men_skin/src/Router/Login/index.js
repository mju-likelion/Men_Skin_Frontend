import LoginContainer from "./LoginContainer";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/authentication";
const mapStateToProps = (state) => {
  return {
    status: state.authentication.login.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (id, pw) => {
      return dispatch(loginRequest(id, pw));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
