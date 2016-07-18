# Johnny-Five para controlar arduino
Material foi criado para workshop *Programando arduino com Javascript* utilizando o framework [Johnny-five](http://johnny-five.io/). 
[Slide](http://www.slideshare.net/desisant/programando-arduino-com-javascript-64092303)
utilizado na apresentação.

### Requisitos

1. Instale [Arduino IDE](https://www.arduino.cc/en/Main/Software)

2. Instale a versão mais atual do [nodejs](https://nodejs.org/en/). A versão instalada deve suportar actionscript 6.


### Johnny-Five e dependências

```
git clone git@github.com:desireesantos/workshop_arduino_js.git
cd workshop_arduino_js
npm install
```

### Firmata Firmware

1. Abrir Arduino IDE
2. Conectar arduino Uno no USB do computador
3. IDE arduino menu: `Arquivo -> Exemplos` , `Firmata` e selecione `StandardFirmata`
4. Faça upload the `StandardFirmata` sketch para o Arduino



## Executando os exemplos

Exemplo [Led pisca pisca](https://github.com/desireesantos/workshop_arduino_js/blob/master/exemplos/johnny-five/01-led-blink.js).

```
node exemplos/johnny-five/01-led-blink.js
```

```
node exemplos/johnny-five/02-led-pulse.js
```

Estou adicionando os mesmos exemplos utilizando o framework [cylon](https://cylonjs.com/). 

Esse tutorial para controlar arduino programando em javascript tem como base os exemplos utilizando johnny-five da [Lyza Danger Gardner](https://github.com/lyzadanger/jsot-johnny-five).
