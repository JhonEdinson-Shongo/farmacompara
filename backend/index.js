const app = require("./app.js");

app.listen(app.get('port'), () => {
    console.log('listing from port ' + app.get('port'));
})