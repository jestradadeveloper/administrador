export default function authHeader() {
  return { Authorization: "" + localStorage.getItem("token") };
}
