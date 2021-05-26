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
export const postRequest = async (url, options) => {
    const answer = await fetch(url, options)
    return answer.json()
}


