# Johnny-Five para controlar arduino


### Requisitos

1. Instale [Arduino IDE](https://www.arduino.cc/en/Main/Software)

2. Instale a versão mais atual do [nodejs](https://nodejs.org/en/). A versão instalada deve suportar actionscript 6.


### Johnny-Five e dependências

```
git clone
cd workshop_arduino_js
npm install
```

### Firmata Firmware

1. Abrir Arduino IDE
2. Conectar arduino Uno no USB do computador
3. IDE arduino menu: `Arquivo -> Exemplos` , `Firmata` e selecione `StandardFirmata`
4. Faça upload the `StandardFirmata` sketch para o Arduino
5. Execute os exemplos



## Executando os exemplos


Exemplo [Led - Pisca pisca](https://github.com/desireesantos/workshop_arduino_js/blob/master/exemplos/01-led-blink.js).

```
node examples/01-led-blink.js
```

```
node examples/02-led-pulse.js
```

Esse tutorial para controlar arduino programando em javascript tem como base os exemplos da [Lyza Danger Gardner](https://github.com/lyzadanger/jsot-johnny-five).
