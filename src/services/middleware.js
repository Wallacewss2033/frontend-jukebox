import api from "./api";

const auth = (to, from, next) => {
    
    api.get('/check').then(() => {
        next();
    }).catch(() => {
        console.log('aqui')
        next('/login');
    })
};

export default auth;