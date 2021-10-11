Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:10
});
var camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
 Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="source" src="'+data_uri+'">';   
 });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3t4vuOMxq/model.json ',modelLoaded);
// When the model is loaded 
function modelLoaded() { 
console.log('Model Loaded!'); 
}
function check(){
    var img=document.getElementById("source");
    classifier.classify(img,gotResult);
}
// A function to run when we get any errors and the results 
function gotResult(error, results) {
    if(error){  
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_result_object").innerHTML = results[0].label;
        document.getElementById("accuracy_result_object").innerHTML = results[0].confidence.toFixed(3);
    }
}