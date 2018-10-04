var CactusMQ = require("./node-client");
var cactusmq = new CactusMQ({
    publishKey: {YOUR_PUBLISH_KEY},
    subscribeKey: {YOUR_SUBSCRIBE_KEY},
    onMessage: (data) => {
        //do something...
        console.log(data);
    },
    onPublish: (error, response, body) => {
        //do something...
        console.log(body);
    }
});
