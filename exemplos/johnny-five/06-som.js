var five = require("johnny-five");
var placa = new five.Board();

placa.on("ready", function() {

  var piezo = new five.Piezo(3);
  piezo.play({

// Song é composto por um conjunto de pares de notas e batidas
// O primeiro argumento é a nota (null significa "nenhuma nota")
// O segundo argumento é o período de tempo (batida) da nota (ou não-nota)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["A4", 1 / 4],
      [null, 1 / 4],
      ["A4", 1],
      ["G4", 1],
      [null, 1 / 2],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["G4", 1 / 4],
      [null, 1 / 4],
      ["G4", 1],
      ["F4", 1],
      [null, 1 / 2]
    ],
    tempo: 100
  });
});