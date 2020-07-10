const app = require("./app.js");
require('./database');

app.listen(app.get('port'), () => {
    console.log('listing from port ' + app.get('port'));
})