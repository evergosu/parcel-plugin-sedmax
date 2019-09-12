#!/usr/bin/env node

const serve = require('../dist/serve').default;
const yargs = require('yargs');

const serveOptions = {
  name: {
    alias: 'n',
    type: 'string',
    default: process.env.npm_package_name,
    demandOption: !process.env.npm_package_name,
    describe: '(pkg.json).name',
  },
  entry: {
    alias: 'e',
    type: 'string',
    default: process.env.npm_package_main,
    demandOption: !process.env.npm_package_main,
    describe: '(pkg.json).main',
  },
  proxy: {
    alias: 'x',
    type: 'string',
    default: process.env.npm_package_config_proxy,
    demandOption: !process.env.npm_package_config_proxy,
    describe: '(pkg.json).config.proxy',
  },
  port: {
    alias: 'p',
    type: 'number',
    default: process.env.npm_package_config_port || 80,
    describe: '(pkg.json).config.port',
  },
  public: {
    alias: 'b',
    type: 'string',
    default: process.env.npm_package_config_public || '/sedmax/web/ui/',
    describe: '(pkg.json).config.public',
  },
  temp: {
    alias: 't',
    type: 'string',
    default: './.temp/index.html',
    describe: '(pkg.json).config.temp',
  },
};

const argv = yargs
  .scriptName("sedmax")
  .usage('$0 <command> [options]')
  .command(
    "serve",
    "Start remote dev server",
    serveOptions,
    ({
      name,
      port,
      temp,
      entry,
      proxy,
      public,
    }) => serve({
      publicUrl: `${public}${name}`,
      entryPath: entry,
      proxyUrl: proxy,
      tempPath: temp,
      port: port,
    })
  )
  .command("create", "[WIP] Create whole dev env setup")
  .command("validate", "[WIP] Validate current env and suggest updates")
  .example("$0 serve", "[[Happy hacking!]]")
  .example("$0 create", "[[Whoa, you have fresh env]]")
  .example("$0 validate", "[[Whoops, you fall behind, time to updates]]")
  .help()
  .alias('help', 'h')
  .alias('version', 'v')
  .argv;
