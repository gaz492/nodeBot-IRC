'use strict';
const nconf = require('nconf');
nconf.argv().env();
// Get/Read Config
function getConfigFile() {
    var configOverride = './config/config.user.json',
        defaultConfig = './config/config.default.json';
    return require('fs').existsSync(configOverride) ? configOverride : defaultConfig;
};
nconf.file({ file: getConfigFile() });
module.exports = nconf;