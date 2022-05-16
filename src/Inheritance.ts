interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
    constructor(data: IPersonData) {
        this._name = data.name;
        this._age = data.age;
        this._secondName = data.secondName;
    }
    getData(): IPersonData {
        let result: IPersonData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
        return result;
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;
    constructor(data: IStudentData) {
        super(data);
        this._phone = data.phone;
    }
    getData(): IStudentData {
        let result: IStudentData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
        return result;
    }
}
