prediction_1= " ";
prediction_2= " ";


Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.Attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
}
console.log('ml5version:' , ml5.version);

classifier=ml5.classifier('https://teachablemachine.withgoogle.com/models/EjpY5jsmJ/model.json',modelloaded);

function modelloaded(){
    console.log(modelloaded);
}

function check(){
    img= document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function speak(){

}

function gotResult(error,results){
    
}
