const apiURL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const apiCall = async(callback) => {
    try{
        // let data = await fetch(apiURL)
        // let result = await data.json()
        let result = await await fetch(apiURL).json()
        callback(result, null)
    }
    catch(e){
        callback(null,e.message)
    }
}


// console.log(apiCall())

apiCall( (res, err)=>{
    if(res) return console.log(res)
    console.log(err)
} )
