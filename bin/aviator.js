
/**
 * Everything starts here.
 */

var app = require('../');

app.listen(3000);
console.log("Golden-Wings website started on port %d in %s mode", app.address().port, app.settings.env);
