1. Install as dev dependency

`npm add -D sedmax-dev-kit`

2. Add command to your scripts

`start: npx sedmax serve`

3. If you want auto browser opening, add line to your scripts

`prestart: start chrome YOUR_AWESOME_APP_URL`

4. Run your command

`npm start`

5. If you have trouble through or want to customize just look at help commands. Options supported as cli flags and fall back to package.json fields

`sedmax --help`

`sedmax serve --help`

There is such output:

| flag      | shortcut | description              |    type   |              demand             |
|-----------|:--------:|--------------------------|:---------:|:-------------------------------:|
| --version |    -v    | Show version number      | [boolean] |         [default: false]        |
| --help    |    -h    | Show help                | [boolean] |         [default: false]        |
| --name    |    -n    | (pkg.json).name          |  [string] |            [required]           |
| --entry   |    -e    | (pkg.json).main          |  [string] |            [required]           |
| --proxy   |    -x    | (pkg.json).config.proxy  |  [string] |            [required]           |
| --port    |    -p    | (pkg.json).config.port   |  [number] |          [default: 80]          |
| --public  |    -b    | (pkg.json).config.public |  [string] |   [default: "/sedmax/web/ui/"]  |
| --temp    |    -t    | (pkg.json).config.temp   |  [string] | [default: "./.temp/index.html"] |


TODO:

[x] Server under parcel bundler to remote development for any sedmax module

[ ] [WIP] Configs detection and creation

[ ] [WIP] Validate configs

