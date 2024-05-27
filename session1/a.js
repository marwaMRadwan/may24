
// let x =8 

// while(true){
//     let x = 7
//     break
// }

// console.log(x)

// var z =3

// function test(){
//     var z =9
// }
// test()
// console.log(z)
// var d = 8
// var d = 0


// function test( callback ){
//     (function z (){
//         callback(9)
//     })()
// }

// test( function(z){

// } )
const log = console.log
// arr = [1,4,2,30,4]

// arr.forEach((element, index, a) => {
//     // log(element, ' - ', index )
//     log(`hello my ele = ${element} and its index =  ${index}`)
// });

// let z = arr.map(function(element, index)  {
//     // log(element, ' - ', index )
//     log(`hello my ele = ${element} and its index =  ${index}`)
//     return element
// });
// console.log(z)
// arr = [1,4,2,30,4]

// let filtered = arr.findIndex(el => el>=4)
// log(filtered)
// f1()

// function f1(){
//     console.log("hello");
// }


// const myf2 = function(){
//     console.log("test 1")
// }

// myf2()

// const f3 = () => {
//     console.log(this)
// }
// f3()

// const myFun = (val) =>{
//     return {
//         val,
//         add: ()=> log(val+5),
//         sub: ()=> log(val-5)
//     }
// }

// let f1 = myFun(5)
// log(f1)
// f1.add()
// f1.sub()
// f1.val

// let f5=myFun(8)

// setTimeout(()=> {log("1")}, 3000)
// setTimeout(()=> {log("2")}, 1000)
// setTimeout(()=> {log("3")}, 1500)
// setTimeout(()=> {log("4")}, 2500)

const myPro = (val) =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            if(val>5) resolve("tmam")
            else reject("my error")
        }, 1500)
    }
    )
}

// console.log(myPro(6))

// myPro(4)
// .then((res, err)=>{
//     log(res)
//     // else log("there is an error")
// })
// .catch(err=> log(err))
// console.log("test")

// async function myCall(){
// const myCall = async function() {
// const myCall = async()=>{
//     try{
//       const data = await myPro(10)
//       log(data)  
//       log("test")
//     }
//     catch(err){
//         log(err)
//     }
// }

// myCall()









