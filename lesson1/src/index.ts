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


