const Cylon = require('cylon')
const serialPort = '/dev/cu.usbmodem1421' //Adicione a porta serial aqui

Cylon
	.robot({name: 'desi'})
	.connection( 'arduino', {adaptor: 'firmata', port: serialPort})
	.device( 'led', {driver: 'led', pin: 13})
	.on('ready', function(my) {
		my.led.toggle();
	});


Cylon.start();