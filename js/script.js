console.log("Script Loaded");

function btnAlert () {
    alert ("Button " + this.id + " Alert");
}

document.getElementById("btnButton1").onclick = btnAlert;
document.getElementById("btnButton2").onclick = btnAlert;
$("#btnButton3").on("click", btnAlert);
$("#btnButton4").click(btnAlert);