const os = require('os');

console.log('Операционная система', os.platform())

console.log('Архитектура проц:', os.arch())

console.log('Ифа по процессорам:', os.cpus())

console.log('Свободная памать', os.freemem())

console.log('Всего памяти', os.totalmem())

console.log('Домашнаяя директория:', os.homedir())

console.log('Время работы системы:', os.uptime())
