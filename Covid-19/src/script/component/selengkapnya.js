class seleng extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `<div class="row justify-content-start fixed-bottom mb-5">
        <div class="col-4">
            <div class="text-center">
                <a href="https://covid19.go.id/" target="_blank" class="btn btn-primary">Lihat Selengkapnya &raquo;</a>
            </div>
        </div>
    </div>`;
    }
}

customElements.define('selengkapnya-header', seleng);