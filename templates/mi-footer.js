class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
        `<p>
            Copyright 2020 Edgar Francisco Santana Murillo<br>
            Secuencia: 3NV41<br>
            Boleta: 2006030893
        </p>`;
    }
}

customElements.define("mi-footer", MiFooter);
