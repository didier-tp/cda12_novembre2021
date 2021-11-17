var x1,y1,x2,y2;

$( function(){
    console.log("ok");

    $("#mycanvas").on("mousedown" , (evt)=>{
       //mémoriser les coordonnées x1,y1
    })

    $("#mycanvas").on("mouseup" , (evt)=>{
         //mémoriser les coordonnées x2,y2
         //on dessine une ligne de x1,y1 vers x2,y2
         let eltCanvasDom = $("#mycanvas").get(0);
         var ctx = eltCanvasDom.getContext("2d");
          ctx.moveTo(15,15);
          ctx.lineTo(90,123);
          ctx.stroke();
    })

    $("#mycanvas").on("mousemove" , (evt)=>{
        //on affiche dans spanX et spanY les coordonnées evt...
    })

})