const five = require('johnny-five');
const placa = new five.Board();

placa.on('ready', () => {
  const ldr = new five.Sensor('A3');
  ldr.on('change', function () {
      const valorLdr = Math.round(this.value);
      console.log(valorLdr);
    });
});
