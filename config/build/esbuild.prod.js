const ESBuild = require('esbuild');
const path = require('path');
const config = require('./esbuild.config');

ESBuild.build(config).catch((err) => console.error(err));