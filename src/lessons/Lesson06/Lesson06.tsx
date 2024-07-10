import {PageWrapper} from "./styles"


function Lesson06() {
  // два свпособа ініціалізаціі і обозначения типа
  let userFullname: string = "John";
  let hello = `Hello ${userFullname}`;

  // number
  let num: number = 100;
  num = 67.88;
  let num2: number = num / 0;
  //boolean
  let isActiv: boolean = true;
  isActiv = false;

  // array
  const animals: string[] = ["dog", "cat", "mouse"];

  //tupel - массив с различными типами данных

  const userArray: [string, number, string, string] = [
    "John",
    40,
    "bbb",
    "hhhh",
  ];

  // function (возвратные и не возвратные) 2 способо ініціалізаціі невозвратных функцій
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };

  sayHi(userFullname);

  const makeAlert: () => void = () => {
    alert("Hello");
  };

  // возвратные функціі

  const add = (a: number, b: number): number => {
    return a + b;
  };

  // типизация объектов через інтерфейсы. Інтерфейсы могут наследоваться.
  // чтобы сделать свойство необязательным, іспользуется знак ?
  interface Admin {
    isAdmin?: boolean;
  }

  interface User extends Admin {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
  }
  const user: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
  };
  // underfined может принимать значения только underfined

  // null может принимать значения только нал
  let empty: null = null;

  // any позволяет присвоить любой тип, уйти от типизациии

  let variable: any = "some string";
  variable = 1000;

  // type позволяет создавать своі тіпы // 11 - type
  type UserDataFromServer = User | undefined | null;
  let userDataFromServer: UserDataFromServer = user;
  userDataFromServer = undefined;
  userDataFromServer = null;
  // userDataFromServer = 190; // будет ошибка

  // Типизация обьектов
  type GlobalAnimalProps = {
    isAnimal: boolean;
  };
  //  - мы не можем наследовать типы
  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
  };

  // type Animal = {
  //   speed: string;
  // }

  type GlobalAnimal = GlobalAnimalProps & Animal;

  const animal1: GlobalAnimal = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  const animal2: GlobalAnimal = {
    isAnimal: true,
    type: "Lion",
    age: 8,
    color: "orange",
    isWild: true,
    speed: "74 km/h",
  };

  return <PageWrapper>Lesson06</PageWrapper>;
}

export default Lesson06;
