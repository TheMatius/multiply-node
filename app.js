const argv = require('./config/yargs').argv;
const colors = require('colors');
const { createFile, listTable } = require('./multiplication/muliply');

let command = argv._[0];
let base = argv.base;
let limit = argv.limit;

switch (command) {
    case 'list':
        console.log('List');
        listTable(base, limit)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        break;
    case 'create':
        createFile(base, limit)
            .then(file => console.log(`File created ${file}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Invalid command.');
        break;
}

//console.log(process.argv);

console.log('Base: ', argv.base);
console.log('Límite ', argv.limit);
// let param = argv[2];
// let base = param.split('=')[1];