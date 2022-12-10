function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FgPMX0mLv/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        var random_no_red = Math.floor(Math.random() * 255) + 1;

        var random_no_blue = Math.floor(Math.random() * 255) + 1;

        var random_no_green = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_no_red + ", " + random_no_green + ", " + random_no_blue + ")";

        document.getElementById("result_accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_accuracy").style.color = "rgb(" + random_no_red + ", " + random_no_green + ", " + random_no_blue + ")";

        if (results[0].label == "cat") {
            document.getElementById("alien1").src = "cat.gif";
        } else if (results[0].label == "crow") {
            document.getElementById("alien1").src = "crow.gif";
        } else if(results[0].label == "cow") {
            document.getElementById("alien1").src = "cow.gif";
        }
        else{
            document.getElementById("alien1").src = "baby.gif";
        }
    }
}