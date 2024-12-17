var spin = require('spinnies')

var spinner = { 
"interval": 500,
"frames": [
"",
"BO",
"BOT ",
"BOT by Fer",
"BOT by naz",
"BOT by er",
"BOT by Fernazer",
"BOT by Fernazer",
"BOT by SC BOT WA",
"BOT ",
"BO",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}