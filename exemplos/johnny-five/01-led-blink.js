const five = require('johnny-five');
const placa = new five.Board();

placa.on('ready', () => {
  const led = new five.Led(13);
  led.blink(500);
});
