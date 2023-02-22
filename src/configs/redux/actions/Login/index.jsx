import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const res = await axios.post(
      `https://bett16uscrud.vercel.app/users/login`,
      data
    );
    const user = res.data.data;
    localStorage.setItem("token", user.token);
    dispatch({ type: "USER_LOGIN_SUCCESS" });
    Swal.fire("Success", "Login user success", "success");
    navigate("/home");
  } catch (err) {
    console.log("Login user error", err);
    Swal.fire("Warning", "Login user failed", "error");
  }
};
