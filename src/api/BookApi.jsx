import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.googleapis.com'
})

export const getBookApi = (search) =>{
    return api.get(`/books/v1/volumes?q=${search}&key=AIzaSyBWpMC5auuTpnO8J0xDLKj_vu95ACMzQw8`)
}