var paper = Snap("#svg");

(function start() {
    var svg = document.getElementById("svg");
    svg.style.width = window.innerWidth;
    svg.style.height = window.innerHeight;
    paper.circle(Math.random() * screen.width, Math.random() * screen.height, Math.random() * 500 )
         .attr({fill: '#' + Math.random().toString(16).substring(4)})
         .animate({r: Math.random() * 200}, 100);  
    setTimeout(start, 100);
})();
