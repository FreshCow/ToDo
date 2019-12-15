const body = document.querySelector("body");

const img_number = 6;

function handlelmgload(){
    console.log("finished loading");
}

function paintimage(imgnumber){
    const image = new Image();
    image.src = `images/${imgnumber + 1}.jpg`;
    image.classList.add("bgimage");
    body.prepend(image);
    image.addEventListener("loadend", handlelmgload);        
}

function genrandom(){
    const numner = Math.floor(Math.random() * img_number);
    return numner;
}

function init(){
    const randomnumber = genrandom();
    paintimage(randomnumber);
}

init();