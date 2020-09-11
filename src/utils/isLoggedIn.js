import { authenticationService } from "./authentication";
export default function isLoggedIn() {
  if (authenticationService.currentUserValue) {
    return true;
  }
  return false;
}
