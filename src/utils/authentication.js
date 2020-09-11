import { URL_API_AUTH } from "./apiUrlAuth";
import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(sessionStorage.getItem("currentUser"))
);

const currentAlphaSubject = new BehaviorSubject(
  JSON.parse(sessionStorage.getItem("currentAlpha"))
);

export const authenticationService = {
  login,
  logout,
  userout,
  userData,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
  currentAlpha: currentAlphaSubject.asObservable(),
  get currentAlphaValue() {
    return currentAlphaSubject.value;
  },
};
/**
 * @param  {string} email
 * @param  {string} password
 */
function login(email, password) {
  const url = `${URL_API_AUTH}/login`;
  var data = { email: email, password: password };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then((res) => {
      if (res.status === 401) {
        authenticationService.userout();
        throw new Error(
          "El correo electrónico o la contraseña son incorrectos"
        );
      }
      return res.json();
    })

    .then((response) => {
      sessionStorage.setItem("currentUser", JSON.stringify(response));
      //sessionStorage.setItem("role", JSON.stringify(response.items.role));

      currentUserSubject.next(response.items);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
      const fail = {
        error,
        status: 401,
      };
      return fail;
    });
}
/**
 * @param  {string} token
 */
// function isAdmin(token) {
//   const url = `${URL_API_AUTH}/admin/validate/role-report`;
//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => {
//       if (res.status === 401 || res.status === 406) {
//         const user = authenticationService.currentUserValue;
//         authenticationService.logout(user.token);
//         window.location.href = "/";
//       } else {
//         return res.json();
//       }
//     })
//     .then((response) => {
//       sessionStorage.setItem(
//         "currentAlpha",
//         JSON.stringify(response.items.is_admin)
//       );
//       currentAlphaSubject.next(response.items.is_admin);
//       return response.items.is_admin;
//     })
//     .catch((error) => {
//       const fail = {
//         error,
//         status: 401,
//       };
//       return fail;
//     });
// }
/**
 * @param  {string} token
 */
function logout(token) {
  // remove user from local storage to log user out
  const url = `${URL_API_AUTH}/logout`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      sessionStorage.removeItem("currentUser");
      sessionStorage.removeItem("role");
    })

    .catch((error) => console.error("Error:", error));
}
/**
 * Remove all user data in the App
 */
function userout() {
  sessionStorage.removeItem("currentUser");
  sessionStorage.removeItem("role");
}

async function userData() {
  const currentUser = await authenticationService.currentUserValue;
  if (currentUser && currentUser.token) {
    return currentUser;
  } else {
    return {};
  }
}
