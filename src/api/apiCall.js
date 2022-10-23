import axios from "axios";

let credss;
export const signup = body => {
    return axios.post('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/users', body,{ auth: credss });
};
export const login = creds => {
    console.log(creds);
    credss=creds;
    return axios.post('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/auth', {}, { auth: creds });
};
export const haberGonder = body => {
    return axios.post('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/mevzuat', body,{ auth: credss });
};

export const mevzuats = body => {
    return axios.get('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/mevzuat');
};

export const deleteMevzuat = id => {
    return axios.delete(`http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/mevzuat/${id}`,{ auth: credss });
};

///makale api

export const makaleGonder = body => {
    return axios.post('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/makale', body,{auth:credss});
};

export const makaleler = body => {
    return axios.get('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/makale');
};

export const deleteMakale = id => {
    return axios.delete(`http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/makale/${id}`,{auth:credss});
};

////////kitap
export const kitapGonder = body => {
    return axios.post('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/kitap', body,{auth:credss});
};

export const kitaplar = body => {
    return axios.get('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/kitap');
};

export const deleteKitap = id => {
    return axios.delete(`http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/kitap/${id}`,{auth:credss});
};

////Vergi
export const vergiGonder = body => {
    return axios.post('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/vergi', body,{auth:credss});
};

export const vergiler = body => {
    return axios.get('http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/vergi');
};

export const deleteVergi= id => {
    return axios.delete(`http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/vergi/${id}`,{auth:credss});
};


export const tokenlist= tip=> {
    return axios.get(`http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/tokenlist/${tip}`);
};
export const token= id => {
    return axios.get(`http://muhapi-env.eba-bpfztqmp.eu-south-1.elasticbeanstalk.com/api/token/${id}`);
};

