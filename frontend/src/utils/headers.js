export default function authHeader() {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")).token
    : "";
  return {
    Authorization: "" + token,
  };
}
