window.onload = function(){ 

    var h = new Image();
    h.src="img/bob-ross-promojpg.jpg" ;
    var back = document.getElementById('back');
    back.width = 400;
    back.height = 300;
    back.getContext('2d').drawImage(h,0,0,back.width,back.height); 
    var front = document.getElementById('front');
    front.width = 400;
    front.height = 300;
    var ctx = front.getContext('2d');
    var f = new Image();
    f.src= "img/bob-ross-promojpg.jpg";
    ctx.drawImage(f,0,0,front.width,front.height); 
};

function futo(event){

    //alert("here");
    event = event || window.event; // IE-ism
    var posX = event.clientX;
    var posY = event.clientY; 
    posX = posX - 10;
    posY = posY - 10;
    var pos = "X: " + posX + " Y: " + posY;
        var back = document.getElementById('back');
    var front = document.getElementById('front');
    var backimage = back.getContext('2d').getImageData(0,0,back.width,back.height);
    var frontimage = front.getContext('2d').getImageData(0,0,front.width,front.height);
    var index = (posY * 4 * front.width) + (posX * 4);
    for(var i = 0; i < 30; i++){
        for(var j = 0; j < 30; j++){
            frontimage.data[index] = backimage.data[index];
            frontimage.data[index+1] = backimage.data[index+1];
            frontimage.data[index+2] = backimage.data[index+2];
            frontimage.data[index+3] = backimage.data[index+3];
            index = index + 4;
        }
        index = index + (4 * front.width) - 120;
    }
    front.getContext('2d').putImageData(frontimage,0,0);
}