export default class Video {
    constructor(parentID, src, width, height){
        this.parentID = parentID;
        this.src = src;
        this.width = width;
        this.height = height;
    }

    render () {
        let newVideo = document.getElementById(this.parentID);
        
        let inputVideo = newVideo.innerHTML + '<video controls src=' + this.src + ' width= ' + this.width + ' height= ' + this.height + '></video>';

        newVideo.innerHTML = inputVideo;
    }

}