//-----Particle API stuff

//Defines a new particle object
var particle = new Particle(); 
		  
//Counts the number of events received - Each count represents 20 people 
var count = 0;
//Array containing all our images with html code
var imageArray =['<img id="sit1" class= "img-responsive" src="img/sit1.png">','<img id="sit2" class= "img-responsive" src="img/sit2.png">','<img id="sit3" class= "img-responsive" src="img/sit3.png">','<img id="sitclap" class= "img-responsive" src="img/sitclap.png">',]
		  
	      
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
             }
        });
});


////-----Images showing on click for testing

//var imageCounter = 0;
//
//$("body").click(function(){
//  var image;
//for(i=0;i<=imageArray.length; i++){
//    if(i==count){
//    image = imageArray[i];
//    }
//}
//   
//    $('#ghostImage').append(image);
//
//    count += 1;
//})

