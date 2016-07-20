const Cylon = require('cylon')
const serialPort = ''  //Adicione a sua porta serial aqui


Cylon
	.robot({name: 'desiRobot'})
	.connection( 'arduino', {adaptor: 'firmata', port: serialPort})
	.device( 'button', {driver: 'button', pin: 2})
	.on('ready', function(my) {
		
		my.button.on('push', function() {
      		console.log("Button pushed!");
   		 });
	});

Cylon.start();