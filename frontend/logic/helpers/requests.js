export const URL = "http://localhost:5000/";
export const REGURL = URL + "registration";
export const LOGURL = URL + "login";

export const createOptions = (body) => {
    const result = {
       method: "POST",
       headers: { "Content-Type": "application/json", Authorization: document.cookie.split("=")[1]},
       body: JSON.stringify(body)
   }
   return result;
}
export const getRequest = async (url) => {
    const headers = { Authorization: document.cookie.split("=")[1] }
    try {
        const options = {
            method: 'GET',
            headers: headers
        };
        const answer = await fetch(url, options);
        return answer.json();
    } catch (e) {}
};

export const postRequest = async (url, options) => {
    const answer = await fetch(url, options)
    return answer.json()
}
export const deleteRequest = async (url) => {
    const headers = { Authorization: document.cookie.split("=")[1] }
    try {
        const options = {
            method: 'DELETE',
            headers: headers
        };
        const answer = await fetch(url, options);
        return answer.json();
    } catch (e) {}
}
