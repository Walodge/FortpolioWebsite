// video loop
class TVideoLoop extends HTMLElement {
    connectedCallback(){
        this.innerHTML='';
    }
}
customElements.define("t-VideoLoop", TVideoLoop);