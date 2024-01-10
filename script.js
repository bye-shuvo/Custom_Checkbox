function rightshift() {
    document.getElementById("circle_left").style.visibility = "hidden";
    document.getElementById("circle_right").style.visibility = "visible";
    document.body.style.backgroundImage = "url(night_bg.jpg)";
    document.getElementById("custom_checkbox").style.backgroundImage = "url(night_cloud.jpg)";
}

function leftshift() {
    document.getElementById("circle_left").style.visibility = "visible";
    document.getElementById("circle_right").style.visibility = "hidden";
    document.body.style.backgroundColor = "white" ;
    document.body.style.backgroundImage = "url(day.jpg)";
    document.getElementById("custom_checkbox").style.backgroundImage = "url(cloud.jpg)"
}