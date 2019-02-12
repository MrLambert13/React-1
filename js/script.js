'use strict';


/**
 *Первое задание:
 * Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
 * callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback.
 * Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции.
 * @param times
 * @param callback
 */
function loop(times = 0, callback = null) {
    if (callback) {
        for (let i = 0; i < times; i++) {
            callback.call()
        }
    }
}

let call = function () {
    console.log('вызов переданной функции')
};

loop(5, call);


/**
 *Второе задание
 * @param param1
 * @param param2
 * @returns {{params: string, square: string}}
 */
function calculateArea(param1, param2) {
    let obj = {params: '', figure: 'Прямоугольник', square: ''};
    let count_square = param1 * param2;
    let inputParams = '';
    inputParams = String(param1) + ',' + String(param2);
    obj.params = inputParams;
    obj.square = count_square;
    console.log(obj);
    return obj
}

calculateArea(6, 2);


class Human {
    constructor(name, age, dateOfBirth ){
        this.name = name;
        this.age = age;
        this.dateOfBirth  = dateOfBirth ;
    }
     displayInfo(){
        console.log(this.name, this.age, this.dateOfBirth, )
    }

}
class Employee extends Human{
    constructor(name, age, dateOfBirth, salary, department ){
        super(name, age, dateOfBirth,);
        this.salary = salary;
        this.department = department;
    }
    displayInfo(salary,department){
        console.log(this.name, this.age, this.dateOfBirth, this.salary, this.department )
    }
}

class Developer extends Employee{

}
class Manager extends Employee{

}

let hu = new Human('test', 23, 43453);
hu.displayInfo();
let ee = new Employee('test', 23, 43453, 500,'depart');
ee.displayInfo();