// let id = 5; /* This is Javascript decleration */ 

/*Basic Types */
let id:number =5;
// console.log("ID : " + id)
let campany: string ='New coding'
let isPublished: boolean =true
let x: any = ' Hello '
let ids: number[] =[1, 2, 3, 4, 5]
let arr : any[] = [1, true, 'Hello']


// Tuple
let person: [number, string, boolean] =[1, 'Brad', true] // same order

//Tuble Array
let employee:[number, string][]
employee=[
    [1, 'Lee'],
    [2, 'Liz'],
    [3, 'Kim']

]
// console.log(employee)

//Union
let pid:string | number
pid:'22'

//Enum

enum Direction1{
    Up=1,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)
console.log(Direction1.Down)
console.log(Direction1.Left)

enum Direction2{
    Up='Up',
    Down='Down',
    Left='Left',
    Right='Right'
}
console.log(Direction2.Up)
console.log(Direction2.Down)
console.log(Direction2.Left)

//Objects

type User ={
    id:number,
    name:string
}
// const user:{
//     id:number,
//     name:string
// } = {
//     id:1,
//     name:'Dilek'
// }

const user:User = {
    id:1,
    name:'Ipek'
}

//Type Assertion

let cid: any =1
// let custemerId = <number>cid
let custemerId = cid as number


//Functon

function addNum(x: number, y:number):number{
    return x + y
}
console.log(addNum(5,5))


//void

function log(message: string | number):void {
    console.log(message)
}

log('Hello')


//Inter faces
interface UserInterface{
    id:number,
    name:string,
    age?:number   // ? the mean optional
}

const user1:UserInterface = {
    id:1,
    name:'Ipek'
}

interface MathFunc {
    (x:number, y:number):number
}

const add: MathFunc = (x:number, y:number): number => x+y
const sub: MathFunc = (x:number, y:number): number => x-y


interface PersonInterface {
    id:number
    name:string
    register():string
}

//Classes

class Person implements PersonInterface{
    id:number
    name:string

//     constructor(){
// console.log(123)
//     }
// }

constructor(id:number, name:string){
    this.id =id
    this.name = name
  
        }
        register(){
            return `${this.name} is now registered`
            
        }
    }

const brand = new Person(2, 'Melek')
const mike = new Person(3, 'Sertug')

console.log(brand,  mike)

//Subclasses
class Employee extends Person {
    position: string

    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position =position

    }
}

const emp = new Employee(3, 'Abd', 'Developer')

console.log(emp.name)

//Generic
function getArray(item: any[]):any[]{
    return new Array().concat(item)
}

let numarray = getArray([1,2,3,4])
let strArray =getArray(['Ayse','Fatma','Kim'])

numarray.push('Hello')

console.log(numarray)