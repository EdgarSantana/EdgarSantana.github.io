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
    GetMovimientos();
  }else{
    alert("SIN DATOS");
    throw new Error("Sin Datos");
  }
};

const plus = document.getElementById("pagplus");
plus.onclick= function(){
  pag ++;
  GetMovimientos();
};

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  GetMovimientos();
}

function GetMovimientos(){
  console.log("hola getmovimeintos = "+pag);
  const link = "0b0c9cf8-4eb2-4932-ac02-eb507860a6d5";
  const url = "https://sandbox.belvo.com/api/transactions/?link="+link+"&page="+pag;
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
  .then(data => listar_movimientos(data))
  .catch(error => console.error(error));
}

function listar_movimientos(vec){
  let html = '';
  let balance = '';
  vec.results.forEach(function(data){
    balance = data.account.balance.current+" / "+data.account.balance.available;
    html += '<tr><th scope="row">'+data.id+'</th><td>'+data.account.name+'</td><td>'+data.account.type+'</td><td>'+data.account.agency+'</td><td>'+data.account.number+'</td><td>'+balance+'</td><td>'+data.account.category+'</td><td>'+data.account.currency+'</td></tr>';
  });
  lista.innerHTML = html;
}
