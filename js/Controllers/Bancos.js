import {
  getAuth,
  getFirestore
} from "../../bibliotecas/coneccion.js";
import {
  cod,
  muestraError
} from "../../bibliotecas/funciones.js";

/** @type {HTMLUListElement} */
const lista = document.querySelector("#lista");
let pag=1;
getAuth().onAuthStateChanged(protege, muestraError);

const less = document.getElementById("pagless");
less.onclick= function(){
  if(pag !=1){
    pag --;
    GetBancos();
  }else{
    alert("SIN DATOS");
    throw new Error("Sin Datos");
  }
};

const plus = document.getElementById("pagplus");
plus.onclick= function(){
  pag ++;
  GetBancos();
};

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  GetBancos();
}

function GetBancos(){
  const url = "https://sandbox.belvo.com/api/institutions/?page="+pag;
  const secretId = '10d590d1-c895-4711-8867-7dbedddb9b84';
  const secretPassword = '72@E_5XQEAVxj0LseVv8HP#oStCzo3pVMTJdUK3xwHKlZ5q8YrM9Fqz95#I6ga5q';
  const headers = new Headers();
  headers.append('Authorization', `Basic ${btoa(`${secretId}:${secretPassword}`)}`);


  fetch(url, { headers })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      pag --;
      alert("SIN DATOS");
      throw new Error("Sin Datos");
    }
  })
  .then(data => listar_bancos(data))
  .catch(error => console.error(error));
}

function listar_bancos(vec){
  let html = '';
  vec.results.forEach(function(data){
    let accion='<a class="btn btn-info" href="movimientos.html?code='+data.code+'">Movimientos</a>';
    html += '<tr><th scope="row">'+data.code+'</th><td>'+data.name+'</td><td>'+data.display_name+'</td><td>'+data.type+'</td><td>'+data.country_code+'</td><td>'+data.website+'</td><td>'+data.status+'</td><td>'+accion+'</td></tr>';
  });
  lista.innerHTML = html;
}
