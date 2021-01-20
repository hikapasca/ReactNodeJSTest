import Swal from "sweetalert2";
export const loginUser = (data, history) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.access_token);
        history.push("/");
        Swal.fire({
          icon: "success",
          title: "Success Login",
        });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          if (JSON.parse(errorMessage).message) {
            Swal.fire({
              icon: "error",
              text: JSON.parse(errorMessage).message,
            });
          }
        });
      });
  };
};

export const registerUser = (data, history) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/Register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((response) => {
        history.push("/login");
        Swal.fire({
          icon: "success",
          title: "Success Register",
        });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          if (JSON.parse(errorMessage).message) {
            Swal.fire({
              icon: "error",
              text: JSON.parse(errorMessage).message,
            });
          }
        });
      });
  };
};
