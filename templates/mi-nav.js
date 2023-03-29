class MiNav extends HTMLElement {
    connectedCallback() {
        var menusss = location.pathname.split('/');
        var long = menusss.length - 1;
        var pag_index = "";
        var pag_banco = "";
        var compa = menusss[long];
        switch (compa) {
            case "index.html":
                pag_index = 'class="active"';
                break;
            case "banco.html":
                pag_banco = 'class="active"';
                break;
        }
        this.innerHTML = /* html */
            '<ul class="main-menu"><li ' + pag_index + '><a href="index.html"> Inicio </a></li><li ' + pag_banco + '><a href="bancos.html"> Bancos </a></li></ul>';
        this.ul = this.querySelector("ul");

    }
}

customElements.define("mi-nav", MiNav);
