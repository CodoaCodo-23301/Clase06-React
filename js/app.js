import Button from "./components/button.js";
import Input from "./components/input.js";
import { mySuperArrayOfString, myArrayInput } from "./components/datos.js";
import Video from "./components/video.js";

let FilterArray = myArrayInput.filter(element => element != "Password");

function RenderButton(text) {
    let myButton = new Button ("app", text);
    myButton.render();
}

function RenderInput(text) { 
    let myInput = new Input ("app", text)
    myInput.render();
}

mySuperArrayOfString.forEach(element => {
    RenderButton(element)
})

FilterArray.forEach(function (element) {
    RenderInput(element);
});

let myVideo= new Video("app","./media/Penal_Montiel.mp4",540,405)
myVideo.render()
