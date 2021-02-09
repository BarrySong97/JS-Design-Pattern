class Log {
    info= "some info";

}

const log = new Log();
let logProxy = new Proxy(log, {
    get: function(log ,key) {
        console.log("do something first");
        console.log(log.info);
    }
    
});


logProxy.info;