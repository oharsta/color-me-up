var paper = Snap("#svg");

(function start() {
    paper.circle(Math.random() * screen.width, Math.random() * screen.height, Math.random() * 500 )
         .attr({fill: '#' + Math.random().toString(16).substring(4)})
         .animate({r: Math.random() * 200}, 500);  
    setTimeout(start, 500);
})();
