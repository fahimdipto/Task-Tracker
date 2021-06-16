
const response = (message,route)=>{
    const msg = {
        message,
        timestamp: new Date().getTime(),
        route
    }
    return msg;
}
module.exports= response;