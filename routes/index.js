

var api = require('./api');
var render = require('./render');


module.exports = app => {
    app.use(api);
    app.use(render);
};
