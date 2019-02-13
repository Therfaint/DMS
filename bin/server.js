/**
 * Created by therfaint- on 22/12/2018.
 */
const path = require('path');
global.__ROOT__ = path.resolve(__dirname, '../');
require('@babel/register');
require('@babel/polyfill');
require('../src/server');
