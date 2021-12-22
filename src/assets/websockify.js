var websockify = require('@maximegris/node-websockify');

// Definir IP da máquina que deseja acessar
const target = '127.0.0.1::5900';

console.log(`Iniciando com o server: ${target}`);

websockify({  source: '127.0.0.1:8080', target: target});
