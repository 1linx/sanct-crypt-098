// default values
var noiseTextColor = "orangered";
var messageTextColor = "white";
var charLimit = 1000;
var loadTime = 3000;

var selectChar = "";
var item = [];

var numUsers = 0;

$(document).ready(function() {
    // Add random characters
    seedDefaultText(charLimit);
    
    // var codeBox = document.getElementById("text-scramble3");


    messageCodeTimeoutLoop();
    function messageCodeTimeoutLoop() {
        setTimeout(function () {

            var codeBox = document.getElementById("text-scramble3");
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
            messageCodeTimeoutLoop();
        }, 150);
    }

    // This controls all the decorative, unused lines of scrawling code.
    decorativeCodeTimeoutLoop1();
    function decorativeCodeTimeoutLoop1() {
        setTimeout(function () {
            
            var codeBox1 = document.getElementById("text-scramble1");

            codeBox1.removeChild(codeBox1.childNodes[codeBox1.childElementCount]);

            
            var whiteTextElem1 = document.createElement("span");

            whiteTextElem1.style.color = noiseTextColor;

            var messageTextNode1 = document.createTextNode(randomChar(1));
            
            whiteTextElem1.appendChild(messageTextNode1);

            codeBox1.insertBefore(whiteTextElem1, codeBox1.firstElementChild);
           
            decorativeCodeTimeoutLoop1();
        }, diceRoll(1,200,400));
    }


    decorativeCodeTimeoutLoop2();
    function decorativeCodeTimeoutLoop2() {
        setTimeout(function () {
            
            var codeBox2 = document.getElementById("text-scramble2");

            codeBox2.removeChild(codeBox2.childNodes[codeBox2.childElementCount]);

            
            var whiteTextElem2 = document.createElement("span");

            whiteTextElem2.style.color = noiseTextColor;

            var messageTextNode2 = document.createTextNode(randomChar(1));
            
            whiteTextElem2.appendChild(messageTextNode2);

            codeBox2.insertBefore(whiteTextElem2, codeBox2.firstElementChild);
           
            decorativeCodeTimeoutLoop2();
        }, diceRoll(1,150,250));
    }

    
    decorativeCodeTimeoutLoop4();
    function decorativeCodeTimeoutLoop4() {
        setTimeout(function () {
            
            var codeBox4 = document.getElementById("text-scramble4");

            codeBox4.removeChild(codeBox4.childNodes[codeBox4.childElementCount]);

            
            var whiteTextElem4 = document.createElement("span");

            whiteTextElem4.style.color = noiseTextColor;

            var messageTextNode4 = document.createTextNode(randomChar(1));
            
            whiteTextElem4.appendChild(messageTextNode4);

            codeBox4.insertBefore(whiteTextElem4, codeBox4.firstElementChild);
           
            decorativeCodeTimeoutLoop4();
        }, diceRoll(1,150,250));
    }

    decorativeCodeTimeoutLoop5();
    function decorativeCodeTimeoutLoop5() {
        setTimeout(function () {
            
            var codeBox5 = document.getElementById("text-scramble5");

            codeBox5.removeChild(codeBox5.childNodes[codeBox5.childElementCount]);

            
            var whiteTextElem5 = document.createElement("span");

            whiteTextElem5.style.color = noiseTextColor;

            var messageTextNode5 = document.createTextNode(randomChar(1));
            
            whiteTextElem5.appendChild(messageTextNode5);

            codeBox5.insertBefore(whiteTextElem5, codeBox5.firstElementChild);
           
            decorativeCodeTimeoutLoop5();
        }, diceRoll(1,200,400));
    }


    // this brings in the page after load screen.
    setTimeout(function(){
        $('body').addClass('loaded');
    }, loadTime);
 
});

function seedDefaultText(int) {
    var x = 0;
        do {
            var noiseTextElem1 = document.getElementById("text-scramble1");
            var noiseTextElem2 = document.getElementById("text-scramble2");
            var noiseTextElem3 = document.getElementById("text-scramble3");
            var noiseTextElem4 = document.getElementById("text-scramble4");
            var noiseTextElem5 = document.getElementById("text-scramble5");

            var noiseTextNode1 = document.createElement("span");
            var noiseTextNode2 = document.createElement("span");
            var noiseTextNode3 = document.createElement("span");
            var noiseTextNode4 = document.createElement("span");
            var noiseTextNode5 = document.createElement("span");

            noiseTextNode1.style.color = noiseTextColor;
            noiseTextNode2.style.color = noiseTextColor;
            noiseTextNode3.style.color = noiseTextColor;
            noiseTextNode4.style.color = noiseTextColor;
            noiseTextNode5.style.color = noiseTextColor;

            var noiseTextNodeContents1 = document.createTextNode(randomChar(1));
            var noiseTextNodeContents2 = document.createTextNode(randomChar(1));
            var noiseTextNodeContents3 = document.createTextNode(randomChar(1));
            var noiseTextNodeContents4 = document.createTextNode(randomChar(1));
            var noiseTextNodeContents5 = document.createTextNode(randomChar(1));
            
            noiseTextNode1.appendChild(noiseTextNodeContents1);
            noiseTextNode2.appendChild(noiseTextNodeContents2);
            noiseTextNode3.appendChild(noiseTextNodeContents3);
            noiseTextNode4.appendChild(noiseTextNodeContents4);
            noiseTextNode5.appendChild(noiseTextNodeContents5);

            noiseTextElem1.insertBefore(noiseTextNode1, noiseTextNodeContents1.firstElementChild);
            noiseTextElem2.insertBefore(noiseTextNode2, noiseTextNodeContents2.firstElementChild);
            noiseTextElem3.insertBefore(noiseTextNode3, noiseTextNodeContents3.firstElementChild);
            noiseTextElem4.insertBefore(noiseTextNode4, noiseTextNodeContents4.firstElementChild);
            noiseTextElem5.insertBefore(noiseTextNode5, noiseTextNodeContents5.firstElementChild);

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

// $('#diceBtns').submit(function(e){
//     e.preventDefault();

//     var rollResult = "Rolled: " + diceRoll(1,1,6);

//     $.ajax({
//         url:'/post/',
//         type:'post',
//         data:"msg=" + rollResult,
//         success:function(){
//             //whatever you wanna do after the form is successfully submitted
//             socket.emit('chat message', rollResult);
//             return false;
//         }
//     });
// });



//scroll fixes, to be completed.
// var objDiv = document.getElementById("messages");
// objDiv.scrollTop = objDiv.scrollHeight;

var socket = io();

$('#msgForm').submit(function(e){
    e.preventDefault();
    socket.emit('chat message', $('#msg').val());
    $('#msg').val('');
    // $.ajax({
    //     url:'/post/',
    //     type:'post',
    //     data:$('#msgForm').serialize(),
    //     success:function(){
    //         //whatever you wanna do after the form is successfully submitted
    //         socket.emit('chat message', $('#msg').val());
    //         $('#msg').val('');
    //         return false;
    //     }
    // });
});



/* Socket IO stuff, keep separate. */
socket.on('chat message', function(msg){   
    processItem(msg);
});


// socket.on('user connected', function(msg){   
//     console.log("user joined");
//     numUsers += 1;
//     console.log('Users: ' + numUsers);
    
    
//     var textScrawlDiv = document.getElementById("textscrawl");

//     var newNoiseDiv = document.createElement("div");

//     var newNoiseSpan = document.createElement("span");

//     newNoiseSpan.style.color = "blue";

//     var newNoiseTextNodeContents = document.createTextNode(randomChar(1000));
    
//     newNoiseSpan.appendChild(newNoiseTextNodeContents);

//     newNoiseDiv.appendChild(newNoiseSpan);

//     textScrawlDiv.insertBefore(newNoiseDiv, textScrawlDiv.children[3]);

// });