const five = require('johnny-five');
const placa = new five.Board();

placa.on('ready', () => {
  var limite = 0; //Ajuste o limite
  const ldr = new five.Sensor('A3');
  const led = new five.Led(13);

  ldr
    .scale(0, 255)
    .on('change', function () {
      const valorAtual = Math.round(this.value);

      if (valorAtual > limite) { 
        console.log('Acende Led');
        //adicionar código para acender led;
      }

      if (valorAtual < limite) { 
        console.log('Apagar Led');
        //adicionar código para apagar led;
      }

    });
});
