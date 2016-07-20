const Cylon = require('cylon')
const serialPort = '' //Adicione a sua porta serial aqui

Cylon
	.robot({name: 'desiRobot'})
	.connection( 'arduino', {adaptor: 'firmata', port: serialPort})
	.device( 'led', {driver: 'led', pin: 13})
	.on('ready', function(my) {
		my.led.toggle();
	});

Cylon.start();