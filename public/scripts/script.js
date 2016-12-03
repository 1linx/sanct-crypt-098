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

  var socket = io();
  // socket.on('news', function (data) {
  //   console.log(data);
  // });

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

$('#msgForm').scrollTop = 50px;


  /* Socket IO stuff, keep separate. */
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
