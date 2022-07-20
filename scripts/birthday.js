const hider = () => {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("messege").style.display = 'none';
}
const hideImage = () => {
    document.getElementById("image").style.display = 'none';
    document.getElementById("submit").style.display = 'block';
}
var show = () => {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("messege").style.display = 'block';
}
var blueborder = () => { document.getElementById("inputbox").style.border = '1px solid deepskyblue'; }
hider();
setTimeout(hideImage, 5000)

document.getElementById("enter").addEventListener("click", show)

document.getElementById("inputbox").addEventListener("click", blueborder)