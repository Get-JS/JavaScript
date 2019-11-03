const myObj = {name :"yjkwon07", changeValue : 0};

const proxy = new Proxy(myObj, {
    get : function(target, property, receiver) {
        console.log("get value");
        return target[property];
    },
    set : function(target, property, value) {
        console.log("set value");
        target['changeValue']++;
        target[property] = value;
    }
});
myObj.name = "go";
myObj.changeValue; // out: 0
myObj.name = "ggh";

proxy.name = "code";
proxy.changeValue; // out: 1
proxy.name = "cocoding";
proxy.changeValue; // out: 2

// 값을 보호
const proxy = new Proxy({name :"yjkwon07", changeValue : 0}, {
    get : function(target, property, receiver) {
        console.log("get value");
        return target[property];
    },
    set : function(target, property, value) {
        console.log("set value");
        target['changeValue']++;
        target[property] = value;
    }
});

proxy.name = "code";
proxy.changeValue;
proxy.name = "cocoding";
proxy.changeValue;

// Reflect
const proxy = new Proxy({name :"yjkwon07", changeValue : 0}, {
    get : function(target, property, receiver) {
        return Reflect.get(target, property);
    },
    set : function(target, property, value) {
        console.log("set value");
        target['changeValue']++;
        target[property] = value;
    }
});

proxy.name = "gogo";
proxy.name = "gogo2";
proxy.changeValue;
proxy.name;

// default value return 
const proxy = new Proxy({name :"yjkwon07", changeValue : 0}, {
    get : function(target, property, receiver) {
        return (property in target) ? target[property] : "anonymous"
    },
    set : function(target, property, value) {
        console.log("set value");
        target['changeValue']++;
        target[property] = value;
    }
});

proxy.name;
proxy.fddsfa;