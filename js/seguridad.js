import {
  getAuth,
  getFirestore
} from "../bibliotecas/coneccion.js";
import {
  muestraError
} from "../bibliotecas/funciones.js";

const firestore = getFirestore();
const daoUsuario = firestore.collection("Usuario");

export async function iniciaSesión() 
{
  /** Tipo de autenticación de
   * usuarios. En este caso es con
   * Google.
   * @type {import(
      "../lib/tiposFire.js").
      GoogleAuthProvider} */
  const provider = new firebase.auth.GoogleAuthProvider();
  /* Configura el proveedor de
   * Google para que permita
   * seleccionar de una lista. */
  provider.setCustomParameters({ prompt: "select_account" });
  await getAuth().signInWithRedirect(provider);
}

export async function terminaSesión() 
{
  try {
    await getAuth().signOut();
  } catch (e) {
    muestraError(e);
  }
}

