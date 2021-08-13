
import SingupContainer from "./SingupContainer";
import { connect } from "react-redux";
import { registerRequest } from "../../actions/authentication";
const mapStateToProps = (state) => {
  return {
    status: state.authentication.register.status,
    errorCode: state.authentication.register.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (email,password, username, age, skin_type) => {
      return dispatch(registerRequest(email,password, username, age, skin_type));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingupContainer);
