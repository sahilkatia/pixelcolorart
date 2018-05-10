
'use strict'


// get height of the grid by the user
function getHeight(){
  var gridHeight =  document.getElementById('inputHeight').value;
  return gridHeight;
}

//get width of the grid by the user
function getWidth(){
 var gridWidth =  document.getElementById('inputWidth').value;
  return gridWidth;
}


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var height = getHeight();
  var width = getWidth();
  var dimensions = "height is "+height +"width is" + width;
  draw(width,height);

}

// stop refreshing 
$('#submit').click(function(e){
e.preventDefault();
})

// Stop clicking  again and again on submit button
$(document).ready(function () {
$("#submit").one('click', function (event) {  
event.preventDefault();
$(this).prop('disabled', true);
     });
});


// Draw a table based on the values
function draw(width, height){
	for(let i = 0; i < height; i++){
		 $("#submit").click(function(){
        $("table").append("<tbody><tr></tr></tbody>");
    });
  
	}
    
  	for(let j = 0; j < width; j++){
       $("#submit").click(function(){
        $("tr").append("<td></td>");

        clickCell();
        

      });
    }

}


// on click of cell
function clickCell(){
  
 $('#pixelCanvas').on('click', 'td', function() {
$(this).css("background-color", colorValue);

});
    }



//Get the selected color value 
var colorValue;
function getColorValue(){
colorValue = document.getElementById('colorPicker').value;
 }

