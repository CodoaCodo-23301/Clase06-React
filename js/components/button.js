export default //Exportamos todo por defecto

class Button {
    constructor (parentID, text){
        this.parentID = parentID;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentID)
        let button = '<button>' + this.text + '</button>'
        myApp.innerHTML = button; //Vamos a escribir en HTML para que se dibuje un boton con el texto de this.text
    }
}