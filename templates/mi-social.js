class MiSocial extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            '<ul class="soial-icons"><li><a href="https://www.facebook.com/garedmx"><i class="fa fa-facebook"></i></a></li><li><a href="https://twitter.com/gared_mx"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/in/edgar-francisco-santana-murillo-54b71a84/"><i class="fa fa-linkedin"></i></a></li></ul><br><div class="white-button"><button type="button" name="terminarSesión"> Terminar Sesión </button></div>';
    }
}

customElements.define("mi-social", MiSocial);
