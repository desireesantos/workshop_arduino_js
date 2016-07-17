var five = require("johnny-five");
var placa = new five.Board();

placa.on("ready", function() {

  var button = new five.Button(2);

  //Descubra o estado de cada botão
  button.on("hold", function() {
    console.log( "Button XXX" );
  });

  button.on("press", function() {
    console.log( "Button XXXX" );
  });

  button.on("release", function() {
    console.log( "Button XXX" );
  });
});