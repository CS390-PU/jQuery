console.log("Script Loaded");

function btnAlert () {
    alert ("Button " + this.id + " Alert");
}

document.getElementById("btnButton1").onclick = btnAlert;
document.getElementById("btnButton2").addEventListener ('click', btnAlert);
$("#btnButton3").on("click", btnAlert);
$("#btnButton4").click(btnAlert);


let $img = $("img");

$("#show-btn").click(function() {
   $img.show("normal");
});

$("#hide-btn").click(function() {
   $img.hide("normal");
});

$("#toggle-btn").click(function() {
   $img.toggle("normal");
});

$("#fadein-btn").click(function() {
   $img.fadeIn("normal");
});

$("#fadeout-btn").click(function() {
   $img.fadeOut("normal");
});