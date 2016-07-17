# Johnny-Five para controlar arduino


### Requisitos

1. Instale [Arduino IDE](https://www.arduino.cc/en/Main/Software)

2. Instale a versão mais atual do [nodejs]


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


[Hello, World](examples/01-hello.js) and [Modified Hello World](examples/02-hello-stop.js) don't require any wiring except plugging Arduino into USB on your computer.

```
node examples/01-hello.js
```

```
node examples/02-hello-stop.js
```

Esse tutorial para controlar arduino programando em javascript tem como base os exemplos da [Lyza Danger Gardner](git://github.com/lyzadanger/jsot-johnny-five.git).
