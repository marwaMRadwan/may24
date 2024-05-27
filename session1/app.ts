// a:any = 5
// a ="jhsdj"

// let var
// var x = 5
// var x =79
// var x = 89

// let a = 5
// a = 8

// var x =8 

// while(true){
//     var x = 7
//     break
// }

// console.log(x)

// let myVar : string

// myVar = false


// let myArr : string[]

// myArr = [] 
// myArr.push( "8" )

// let myTuple : [ string , number, boolean ]

// myTuple = ["marwa", 39, false ]


// let user = {
//     name: "marwa",
//     age: 39,
//     status: true
// }


// user.name 

// user["name"]

// let user : {
//     name:string, 
//     age: number, 
//     status?: boolean,
//     subjects: string[]
//      }
// user = { 
//     name:"aa",
//     age: 9, 
//     subjects: []
    
// }


// let data : string | number
// data = 5
// data= "asgh"

// let myData : string|number []
// myData = [5,"m"]

// type marwa = string|number
// let myData1 : marwa[] = [ 5, "hello", 897, "ghfhas" ]

// type myType = [ string , number]
// let d : myType[] = [
//     ["hgsg", 8],
//     ["jhgj", 78]
// ]

// enum Months { "jan"=15, "feb"=25, "mar"=35, "apr"}

// console.log(Months["jan"])

// control statements
// if
// let x:number = 10
// if(x<10){

// }
// else if(x===10){

// }
// else{

// }
// switch
// let month:number = 5
// switch(month){
//     case 1:
//         break
//     case 2:
//         break
//     default:
//         console.log("no dat")
// }
// for
for(let i= 0; i< 10; i+=3){

}

// while
let i =0
// while(true){
//     if(i>10) break
//     i+=3
// }

// do while
// do{

// }while(false)

//break

//continue

// foreach filter map find
// let arr = [1,2,3,4,5]
// arr.forEach(
//     function (el){
//         console.log(el)
//     }
// )

// function Car(palteNum: string, model:string){
//     this.palteNum = palteNum
//     this.model = model
// }
// Car.prototype.show = function(){

// }
// let c = new Car("as", "ijhk")


class Car1{
    palteNum : string
    model : string
    constructor(p:string, m:string){
        this.palteNum = p
        this.model = m
    }
    show(){
        console.log(`${this.palteNum} - ${this.model}`)
    }
}
interface User{
    id: number|string // any
    name:string
    status?:boolean
}

let u : User = {name:"te", id:5}




















