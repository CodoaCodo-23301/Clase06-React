export default //Exportamos todo por defecto

class Input {
    constructor (parentID, type){
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let newInput = document.getElementById(this.parentID)
        const myInputHTML = newInput.innerHTML + "<input type=" + this.type + ">";
        
        newInput.innerHTML = myInputHTML; //Vamos a escribir en HTML para que se dibuje un boton con el texto de this.text
    }
}