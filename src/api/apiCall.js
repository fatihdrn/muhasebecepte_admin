import axios from "axios";

let credss;
export const signup = body => {
    return axios.post('http://localhost:8082/api/users', body,{ auth: credss });
};
export const login = creds => {
    console.log(creds);
    credss=creds;
    return axios.post('http://localhost:8082/api/auth', {}, { auth: creds });
};
export const haberGonder = body => {
    return axios.post('http://localhost:8082/api/mevzuat', body,{ auth: credss });
};

export const mevzuats = body => {
    return axios.get('http://localhost:8082/api/mevzuat');
};

export const deleteMevzuat = id => {
    return axios.delete(`http://localhost:8082/api/mevzuat/${id}`,{ auth: credss });
};

///makale api

export const makaleGonder = body => {
    return axios.post('http://localhost:8082/api/makale', body,{auth:credss});
};

export const makaleler = body => {
    return axios.get('http://localhost:8082/api/makale');
};

export const deleteMakale = id => {
    return axios.delete(`http://localhost:8082/api/makale/${id}`,{auth:credss});
};

////////kitap
export const kitapGonder = body => {
    return axios.post('http://localhost:8082/api/kitap', body,{auth:credss});
};

export const kitaplar = body => {
    return axios.get('http://localhost:8082/api/kitap');
};

export const deleteKitap = id => {
    return axios.delete(`http://localhost:8082/api/kitap/${id}`,{auth:credss});
};

////Vergi
export const vergiGonder = body => {
    return axios.post('http://localhost:8082/api/vergi', body,{auth:credss});
};

export const vergiler = body => {
    return axios.get('http://localhost:8082/api/vergi');
};

export const deleteVergi= id => {
    return axios.delete(`http://localhost:8082/api/vergi/${id}`,{auth:credss});
};


export const tokenlist= tip=> {
    return axios.get(`http://localhost:8082/api/tokenlist/${tip}`);
};
export const token= id => {
    return axios.get(`http://localhost:8082/api/token/${id}`);
};

