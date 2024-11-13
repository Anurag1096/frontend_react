import axios from'axios';

// Create an Axios instance

const auth =axios.create({
    baseURL:"http://127.0.0.1:8000",
})


// Set up an interceptor to include the token

auth.interceptors.request.use((config)=>{
  
    const token =localStorage.getItem('token');

    if(token){
        config.headers["Authorization"]=`Bearer ${token}`;

    }
    return config;

},(error)=>{

    return Promise.reject(error);
}
);
// To use it just call it like auth.post,auth.get in the scice for api calls.
export default auth;