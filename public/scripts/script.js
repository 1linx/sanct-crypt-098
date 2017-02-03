// default values
var noiseTextColor = "orangered";
var messageTextColor = "white";
var charLimit = 1000;
var loadTime = 0;

var selectChar = "";
var item = [];


$(document).ready(function() {
    // Add random characters
    seedDefaultText(500);
    
    var codeBox = document.getElementById("text-scramble");


timeout();
    function timeout() {
        setTimeout(function () {

            var codeBox = document.getElementById("text-scramble");
            codeBox.removeChild(codeBox.childNodes[codeBox.childElementCount]);
            
            if (item.length > 0) {
                    
                var thisItem = item[item.length - 1]; 
                if (thisItem == " ") {
                    // thisItem = "\u00A0";
                    thisItem = "#";
                }
                
                var messageTextElem = document.createElement("span");
                messageTextElem.style.color = messageTextColor;

                var messageTextNode = document.createTextNode(thisItem);
                
                messageTextElem.appendChild(messageTextNode);
                codeBox.insertBefore(messageTextElem, codeBox.firstElementChild);
                item.pop(); 

            } else {

                var whiteTextElem = document.createElement("span");
                whiteTextElem.style.color = noiseTextColor;

                var messageTextNode = document.createTextNode(randomChar(1));
                
                whiteTextElem.appendChild(messageTextNode);
                codeBox.insertBefore(whiteTextElem, codeBox.firstElementChild);
            }
            timeout();
        }, 50);
    }

 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, loadTime);


 
});

function seedDefaultText(int) {
    var x = 0;
        do {
            var noiseTextElem = document.getElementById("text-scramble");
            var noiseTextNode = document.createElement("span");
            noiseTextNode.style.color = noiseTextColor;

            var noiseTextNodeContents = document.createTextNode(randomChar(1));
            
            noiseTextNode.appendChild(noiseTextNodeContents);
            noiseTextElem.insertBefore(noiseTextNode, noiseTextNodeContents.firstElementChild);
            x++;
        } while (x < int);

}


function processItem(str) {
    var str = "##" + str + "##";
    str = reverseText(str);
    str = str.split("");
    str.forEach(function(letter) {
        item.unshift(letter);        
    });
} 

function reverseText(string) {
    return string.split("").reverse().join("");
}



function randomChar(chars)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < chars; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



// dice roller
function diceRoll(number, min, max) {
    var diceRunningTotal = 0;
    // console.log("Rolling a D" + max);
  for (var numberOfRolls = 0; numberOfRolls < number; numberOfRolls++) {
    var aSingleDie = (Math.random() * ((max + 1) - min) + min);
    aSingleDie = Math.floor(aSingleDie);
    // console.log("You rolled a " + aSingleDie);
    diceRunningTotal += aSingleDie;
  }
  // console.log("running total is " + diceRunningTotal);

return diceRunningTotal;

}

function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}

$('#diceBtns').submit(function(e){
    e.preventDefault();

    var rollResult = "Rolled: " + diceRoll(1,1,6);

    $.ajax({
        url:'/post/',
        type:'post',
        data:"msg=" + rollResult,
        success:function(){
            //whatever you wanna do after the form is successfully submitted
            socket.emit('chat message', rollResult);
            return false;
        }
    });
});



//scroll fixes, to be completed.
// var objDiv = document.getElementById("messages");
// objDiv.scrollTop = objDiv.scrollHeight;

var socket = io();

$('#msgForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'/post/',
        type:'post',
        data:$('#msgForm').serialize(),
        success:function(){
            //whatever you wanna do after the form is successfully submitted
            socket.emit('chat message', $('#msg').val());
            $('#msg').val('');
            return false;
        }
    });
});



/* Socket IO stuff, keep separate. */
socket.on('chat message', function(msg){   
    processItem(msg);
});