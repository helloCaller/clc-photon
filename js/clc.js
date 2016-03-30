//---Global Variables-----
//Defines a new particle object
var particle = new Particle(); 
		  
//Counts the number of events received - Each ParticleTriggerCount represents 20 people 
var ParticleTriggerCount = 0;
//Array containing all our images with html code
var imageArray =['<img id="sit1" class= "img-responsive" src="img/sit1.png">','<img id="sit2" class= "img-responsive" src="img/sit2.png">','<img id="lookout" class= "img-responsive" src="img/lookout.png">','<img id="7" class= "img-responsive" src="img/crouch.png">','<img id="sitclap" class= "img-responsive" src="img/sitclap.png">','<img id="openlegs" class= "img-responsive" src="img/openlegs.png">','<img id="sit3" class= "img-responsive" src="img/sit3.png">','<img id="arabesque" class= "img-responsive" src="img/arabesque.png">','<img id="6" class= "img-responsive" src="img/feetup.png">','<img id="9" class= "img-responsive" src="img/armscrossed.png">','<img id="11" class= "img-responsive" src="img/lounge.png">'];


//set up a particle.getEventStream to listen for particle sending out a "Motion-Detected"	      
particle.getEventStream({ deviceId: '28001c001647343337363432', name:'Motion-Detected', auth: '057fe60aff7c3d43c02d35f072514251ddc2e8c1'   }).then(function(stream) {
    //once we're connected to the device
    //parse the info and look for "Motion-Detected"
          stream.on('Motion-Detected', function(data) {
              //if we hear that motion has been detected execute our function
                if (data.name=="Motion-Detected"){
                    var image;
                    var imageIndex;
                   
                    for(i=0;i<=imageArray.length; i++){//loop throught the array
                        if(i==ParticleTriggerCount){//if i is the same as our ParticleTriggerCount   
                        image = imageArray[i]; //grab the corresponding image in the imageArray
                        imageIndex = i+1; // this sets up our fade in and has to be +1 because the jquery below doesn't play nice, and starts from 1 in its counting scheme, not 0 
                        }
                    }
                //adding images into the ghostImage div
                $('#ghostImage').append(image);
                //create fade in for the new image     
                $('#ghostImage img:nth-child('+imageIndex+')').hide().fadeIn(1500);
                //increasing ParticleTriggerCount
                ParticleTriggerCount = ParticleTriggerCount+1;
                //removeImage function defined below
                removeImage();

             }
        });
});


////-----Images showing on click for testing
$("body").click(function(){
    var image;
    var imageIndex;
    var randomChoice = Math.floor((Math.random()*imageArray.length)+0);
    for(i=0;i<=imageArray.length; i++){
        if(i==ParticleTriggerCount){
        image = imageArray[i];
        imageIndex = i+1;
        }
    }
   //slot image into ghostImage div
    $('#ghostImage').append(image);
    //create fade in for the new image using a pretty nifty jquery selector
    $('#ghostImage img:nth-child('+imageIndex+')').hide().fadeIn(1500);
    

    ParticleTriggerCount += 1;
    removeImage();

})



//remove images after 24h from when created, one by one
function removeImage(){
   
    if(ParticleTriggerCount>0){ //if ParticleTriggerCount is bigger than 0
        
        setTimeout(function(){  //use the setTimeout to run the code once, at a delay of 24 hours. 
            for(i=0; i<=imageArray.length; i++){//loop through  an image array.length amount of times
                if(i==ParticleTriggerCount){
                    //remove that image
                    $('#ghostImage img:nth-child('+i+')').remove();
                    break;//break out of the loop so we don't remove all images
                    }
                }
         
            ParticleTriggerCount -= 1; //decrease ParticleTriggerCount by 1
    },86400000)//24 hours in milliseconds
};
}
