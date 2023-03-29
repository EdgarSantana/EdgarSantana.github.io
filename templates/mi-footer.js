class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
        `<p>
            Edgar Francisco Santana Murillo<br>
            Copyright 2023<br> 
            AMMPER - Test<br>
        </p>`;
    }
}

customElements.define("mi-footer", MiFooter);
