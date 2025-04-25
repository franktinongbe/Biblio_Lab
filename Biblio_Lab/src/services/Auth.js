import {jwtDecode} from "jwt-decode";

/**
 * Renvoie l'utilisateur associ  au token stock  dans le stockage local
 * (ou null si le token n'existe pas ou est invalide)
 *
 * @returns {Object|null}
 */
export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    return user;
  } catch (e) {
    return null;
  }
}
export default getUserFromToken;