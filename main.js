function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(600/x);
};

function clearGrid(){
    $(".grid").remove();
}; 

function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});

function changeGridColor(e) {
    let color = `rgb(${[0, 0, 0].map(channel => {
      return Math.floor(Math.random() * 256);
    }).join(',')})`
    Object.assign(e.target.style, {
      backgroundColor : color,
      opacity : 0.25
    });
  }
