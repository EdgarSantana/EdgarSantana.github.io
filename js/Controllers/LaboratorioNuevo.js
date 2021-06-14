import {
  getAuth,
  getFirestore
} from "../../bibliotecas/coneccion.js";
import {
  getString,
  muestraError
} from "../../bibliotecas/funciones.js";
import {
  subeStorage
} from "../../bibliotecas/storage.js";
import {
  muestraLaboratorios
} from "../navegacion.js";
import {
  tieneRol
} from "../seguridad.js";

const daoLaboratorio = getFirestore().collection("Laboratorio");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,["SuperAdmin"])) 
  {
    forma.addEventListener("submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData = new FormData(forma);
    const foto = formData.get("foto");
    const nombre = getString(formData, "nombre").trim();  
    const direccion = getString(formData, "direccion").trim();
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
      nombre,
      direccion
    };
    var guardado= await daoLaboratorio.add(modelo);
    await subeStorage(guardado.id, foto);
    muestraLaboratorios();
  } catch (e) {
    muestraError(e);
  }
}



