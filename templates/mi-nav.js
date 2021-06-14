import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../bibliotecas/coneccion.js";
import {
  muestraError
} from "../bibliotecas/funciones.js";

class MiNav extends HTMLElement {
  connectedCallback() {
      var menusss=location.pathname.split('/');
      var long=menusss.length - 1;
      var activo="";
      var compa=menusss[long];
        if(compa=="index.html")
            activo='class="active"';
        this.innerHTML = /* html */
            '<ul class="main-menu"><li '+activo+'><a href="index.html"> Inicio </a></li></ul>';
        this.ul = this.querySelector("ul");
        getAuth().onAuthStateChanged(usuario => this.cambiaUsuario(usuario,compa),muestraError);
  }

  /**
   * @param {import(
      "../lib/tiposFire.js").User}
      usu */
    async cambiaUsuario(usu,compa) {
        var pag_suc="";
        var pag_per="";
        var pag_lab="";
        switch (compa){
            case "sucursales.html":
                pag_suc='class="active"';
            break;
            case "personales.html":
                pag_per='class="active"';
            break;
            case "laboratorios.html":
                pag_lab='class="active"';
            break;
        }
        if (usu && usu.email) 
        {
            let html = "";
            const roles = await cargaRoles(usu.email);

            if (roles.has("SuperAdmin")) 
            {
                html += /* html */
                '<li '+pag_suc+'><a href="sucursales.html"> Sucursales </a></li><li '+pag_per+'><a href="personales.html"> Personal </a></li><li '+pag_lab+'><a href="laboratorios.html"> Laboratorios </a></li>';
            }

            if (roles.has("Doctor")) 
            {
            html += /* html */
                `<li>
                    <a href="#"> Consulta </a>
                </li>`;
            }

            if (roles.has("Laboratorio")) 
            {
            html += /* html */
                `<li>
                    <a href="ot.html"> Orden de Trabajo </a>
                </li>`;
            }

            if (roles.has("Paciente")) 
            {
            html += /* html */
                `<li>
                    <a href="expediente.html"> Mi Expediente </a>
                </li>`;
            }
            
            this.ul.innerHTML += html;
        }
    }
}

customElements.define("mi-nav", MiNav);
