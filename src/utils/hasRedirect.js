export default function hasRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirecTo = urlParams.get("redirectTo");
  return redirecTo;
}
