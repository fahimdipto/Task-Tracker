import axios from "axios";
const BASE_URL= "http://localhost:5000/"
const instance = axios.create({baseURL:BASE_URL})

export const getUser = async () =>{
    return await instance.get(`users`);
}