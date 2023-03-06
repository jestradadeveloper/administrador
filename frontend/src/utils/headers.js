export default function authHeader() {
  return {
    Authorization: "" + JSON.parse(localStorage.getItem("token")).token,
  };
}
