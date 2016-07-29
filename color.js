var element = document.getElementById("#hero");
var chars = ['0123456789ABCDEF'].split("");

var randomColor = function () {
    var color = "#";
    
    for (var i = 0; i < 6; i++)
        color += chars[Math.floor(Math.random() * 16)];
    return color;
};

setInterval(function(){
    element.css.background.colorss = randomColor();
}, 1500);