class navbar_header extends HTMLElement{
    connectedCallback(){
        this.render();
    }


    render(){
        this.innerHTML = `<div class="navbar navbar-expand navbar-light bg-light">
        <div class="nav navbar-nav">
            <a href="#" class="nav-item nav-link active"><i class="fa fa-fw fa-home"></i> Home</a>
        </div>
    </div>`
    }
}


customElements.define('navbar-header', navbar_header);