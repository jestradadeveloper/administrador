export default function authHeader() {
  try {
    const token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token")).token
      : "";
    return {
      Authorization: "" + token,
    };
  } catch (error) {
    return {
      Authorization: "",
    };
  }
}
