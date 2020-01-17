require('dotenv/config');

module.export = function() {
    for (let i = 2; i < process.argv.length; i++) {
        
        const arg = process.argv[i];
        
        const [ key, value ] = arg.split('=').map(a => a.trim());

        process.env[key.toUpperCase()] = value;

    }
}();