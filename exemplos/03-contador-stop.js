const five = require('johnny-five');
const placa = new five.Board();

placa.on('ready', () => {
  const led = new five.Led(13);
  var contador = 0;
  const maxVezes = 10;

  led.blink(500, () => {
    contador++;
    console.log(`Atualizei ${contador} vezes`);
    if (contador >= maxVezes) {
      console.log('Pare de piscar agora');
      led.stop();
    }
  });
});
