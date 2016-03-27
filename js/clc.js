//-----Particle API stuff

	  //Defines a new particle object
		  var particle = new Particle(); 
		  
		  //Counts the number of events received - Each count represents 20 people 
		  var count = 0;
		  
	      particle.getEventStream({ deviceId: '28001c001647343337363432', name:'Motion-Detected', auth: '057fe60aff7c3d43c02d35f072514251ddc2e8c1'   }).then(function(stream) {
          stream.on('Motion-Detected', function(data) {
        
		     if (data.name=="Motion-Detected"){
                 var image;
                 switch(count){
                    case 0: image = '<img id="sit3" class= "img-responsive" src="img/sit3.png">';
                    break;
                         
                    case 1: image = '<img id="sitclap" class= "img-responsive" src="img/sitclap.png">';
                    break;
                         
                    case 2: image = '<img id="sit1" class= "img-responsive" src="img/sit1.png">';
                    break;
                         
                    case 3: image = '<img id="sit2" class= "img-responsive" src="img/sit2.png">';
                    break;
                         
                    default: console.log("no image");
                }

                 //adding images into the ghostImage div
                 $('#ghostImage').append(image);
                 
                 
				 count = count+1;
             }
	 
  });
});


////-----Images showing on click for testing
//
//var imageCounter = 0;
//
//$("body").click(function(){
//  
//switch(imageCounter){
//    case 0: var image = '<img id="sit3" class= "img-responsive" src="img/sit3.png">';
//    break;
//    case 1: var image = '<img id="sitclap" class= "img-responsive" src="img/sitclap.png">';
//    break;
//    case 2: var image = '<img id="sit1" class= "img-responsive" src="img/sit1.png">';
//    break;
//    case 3: var image = '<img id="sit2" class= "img-responsive" src="img/sit2.png">';
//    break;
//    default: console.log("no image");
//}
//   
//    $('#ghostImage').append(image);
//
//    imageCounter += 1;
//})

