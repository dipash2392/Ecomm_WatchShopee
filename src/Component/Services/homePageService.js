import axios from 'axios';

export default function Products(){
    return axios.get("http://localhost:3000/products").then(resp => resp.data);
}

