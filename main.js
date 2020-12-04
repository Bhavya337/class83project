var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
color="black";
width_of_line=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");




canvas.addEventListener("mousedown", mouse_down );

function mouse_down(e){  mouseEvent="mouseDown" ;
}

canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e) {  mouseEvent="mouseUp" ;
}


canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e) {  mouseEvent="mouseLeave" ;
}


canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e) {  
curren_x_postion=e.clientX - canvas.offsetLeft; 
curren_y_postion=e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown"){
    ctx.beginPath(); 
ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line ; 
 console.log("x = " + lastpositionx + "y = " + lastpositiony);
ctx.moveTo ( lastpositionx,lastpositiony);
console.log("x = " + curren_x_postion + "y = " + curren_y_postion);
ctx.lineTo(curren_x_postion,curren_y_postion);
ctx.stroke();
}

 lastpositionx=curren_x_postion;
lastpositiony=curren_y_postion;


}





 function cleararea(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
     
 }
 var width=screen.width;
 var new_width=width-70;
 var new_height=screen.height-300;
 if( width<992){
     document.getElementById("myCanvas").width=new_width;
     document.getElementById("myCanvas").height=new_height;
     document.body.style.overflow="hidden";
 }















 canvas.addEventListener("touchstart", my_touchstart);
 
 function my_touchstart(e)
 {
     //Addictonal Activity start
     color = document.getElementById("color").value;
     width_line = document.getElementById("line_width").value;
     //Addictonal Activity ends

  
 }



 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e)
 {

      current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
      current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;

     console.log("Last position of x and y coordinates = ");
     console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
     ctx.moveTo(lastpositionofx, lastpositionofy);

     console.log("Current position of x and y coordinates = ");
     console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
     ctx.lineTo(current_position_of_x, current_position_of_y);
     ctx.stroke();
     

     lastpositionofx = current_position_of_x; 
     lastpositionofy = current_position_of_y;
 }