// 逆向中偶有见到，hook 常用

// apply,重定义指定对象。参数数组传递

// output

let person = {
    fullInfo: function (city, country) {
        return this.name + "-" + this.age + "-" + country + "-" + city
    }
};


let person1 = {
    name: "jor",
    age: "25"
};

console.log(person.fullInfo.apply(person1, ["osle", "norway"]));

// call 重定义指定对象，可以直接传参
let person2 = {
    fullInfo: function (city, country) {
        return this.name + "-" + this.age + "-" + country + "-" + city;
    }
};

let person3 = {
    name: "jor",
    age: "25"
};

console.log(person.fullInfo.call(person3, "Oslo", "Norway"));