
const errorresponse = (message,err)=>{
    const msg = {
        message,
        timestamp: new Date().getTime(),
        err
    }
    return msg;
}
module.exports= errorresponse;