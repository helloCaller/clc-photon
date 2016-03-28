//-----Particle API stuff

//Defines a new particle object
var particle = new Particle(); 
		  
//Counts the number of events received - Each count represents 20 people 
var count = 0;
//Array containing all our images with html code
var imageArray =['<img id="1" class= "img-responsive" src="img/sit1.png">','<img id="2" class= "img-responsive" src="img/sit2.png">','<img id="3" class= "img-responsive" src="img/sit3.png">','<img id="4" class= "img-responsive" src="img/sitclap.png">']

	      
particle.getEventStream({ deviceId: '28001c001647343337363432', name:'Motion-Detected', auth: '057fe60aff7c3d43c02d35f072514251ddc2e8c1'   }).then(function(stream) {
          stream.on('Motion-Detected', function(data) {
                if (data.name=="Motion-Detected"){
                 var image;
                    for(i=0;i<=imageArray.length; i++){
                        if(i==count){
                        image = imageArray[i];
                        }
                    }
                //adding images into the ghostImage div
                 $('#ghostImage').append(image);
                //increasing count
                  count = count+1;
                //removeImage function defined below
                     removeImage();

             }
        });
});


////-----Images showing on click for testing
//$("body").click(function(){
//    var image;
//    var imageIndex;
//    for(i=0;i<=imageArray.length; i++){
//        if(i==count){
//        image = imageArray[i];
//        imageIndex = i+1;
//        }
//    }
//   //slot image into ghostImage div
//    $('#ghostImage').append(image);
//    //create fade in for the new image 
//    $('#ghostImage img:nth-child('+imageIndex+')').hide().fadeIn(1000);
//    
//
//    count += 1;
//    removeImage();
//
//})



//remove images after a minute from when created one by one
function removeImage(){
   
    if(count>0){
        console.log("count not 0");
        setTimeout(function(){   
            for(i=0; i<=imageArray.length; i++){
                if(i==count){
                    $('#ghostImage img:nth-child('+i+')').remove();
                    break;
                    }
                }
         

        count -= 1;
    },60000)
};
}
