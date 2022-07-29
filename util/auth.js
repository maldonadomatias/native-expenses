import axios from 'axios';

const API_KEY = "AIzaSyBYX044Qp_oxwA7Tg0BpVmI07DMREWSXM4";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const userData = {
    email: response.data.email,
    displayName: response.data.displayName,
    idToken: response.data.idToken,
  }

  return userData;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}