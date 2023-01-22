class update_header extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `<div class="container">
        <div class="row mt-4">
            <div class="col-md-12">
                <div class="alert alert-primary" role="alert">
                    <strong>Update</strong> Data Virus Corona Indonesia
                </div>
            </div>
        </div>
    </div>`
    }
}

customElements.define('update-header', update_header);