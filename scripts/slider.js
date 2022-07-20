arrayofUrl = ['../resources/norway.jpeg', '../resources/sweden.jpg', '../resources/queensland.jpg', '../resources/austria.jpg', '../resources/bucharest.jpg']
arryofNames = ["Norway", "Sweden", "Queensland", "Austria", "Bucharest"]
const container = document.getElementById("image");
const text = document.getElementById("placeName");
let counter = 0;
const next = () => {
    counter = counter % 4;
    container.style.content = "url(" + arrayofUrl[counter] + ")";
    console.log(arryofNames[counter])
    text.innerHTML = arryofNames[counter]
    counter++;    
}

next()
setInterval(next, 3000)