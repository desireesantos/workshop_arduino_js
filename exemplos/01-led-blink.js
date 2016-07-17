const five = require('johnny-five');
const placa = new five.Board();

placa.on('ready', () => {
  const ver = new five.Led(13);
  ver.blink(500);
});
