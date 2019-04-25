const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Show in console a multiply table', opts)
    .command('create', 'Create a file with a multiply table', opts)
    .help()
    .argv;

module.exports = {
    argv
}