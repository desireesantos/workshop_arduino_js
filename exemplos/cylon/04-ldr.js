const Cylon = require('cylon')
const serialPort = ''  //Adicione a sua porta serial aqui


Cylon
	.robot({name: 'desiRobot'})
	.connection( 'arduino', {adaptor: 'firmata', port: serialPort})
	.device( 'sensor', {driver: 'analog-sensor', pin: 0, lowerLimit: 100, upperLimit: 900})
	.on('ready', function(my) {
		
		every((1).second(), function() {
	      analogValue = my.sensor.analogRead();
	      console.log('Analog value => ', analogValue);
	    });

	    my.sensor.on('lowerLimit', function(val) {
      		console.log("Lower limit reached!");
      		console.log('Analog value => ', val);
    	});

    	my.sensor.on('upperLimit', function(val) {
      		console.log("Upper limit reached!");
      		console.log('Analog value => ', val);
    	});

	});

Cylon.start();