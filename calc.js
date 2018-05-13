var argv = require("yargs").agrv;

.help('--help', 'h')

.command('add', 'Additionne nombre1 par nombre2')
.alias('--add', 'add')

.command('sub', 'Soustrait nombre1 par nombre2')
.alias('--sub', 'sub')

.command('mult', 'Multiplie nombre1 par nombre2')
.alias('--mult', 'mult')

.command('div', 'Divise nombre1 par nombre2')
.alias('--div', 'div')

.agrv

