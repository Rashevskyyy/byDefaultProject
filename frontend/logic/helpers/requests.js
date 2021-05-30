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


// export function getRequest(url){
//         // const token = getCookie("token");
//         return (fetch (url, {
//                 method: "GET",
//                 // headers: {
//                 //     // "Authorization": `Bearer ${token}`
//                 // }
//             }));
//     }
//     getRequest('http://localhost:2282').then(
//         function (data){
//             data = data.json(); //с json строки в нормальный массив объектов || data = JSON.parse(data);
//             data.response //можно передать в функцию отрисовки

//         }
//     )

// export function postRequest(url, body){
//     // const token = getCookie("token");
//     return (fetch (url, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json; charset=utf-8",
//                 // "Authorization": `Bearer ${token}`
//             },
//             body: JSON.stringify(body)
//         }));
 
// }
// export function putRequest(url, body){
//     // const token = getCookie("token");
//     return (fetch (url, {
//             method: "PUT", // "DELETE" body не объязательно
//             headers: {
//                 "Content-type": "application/json; charset=utf-8",
//                 // "Authorization": `Bearer ${token}`
//             },
//             body: JSON.stringify(body)
//         }));
 
// }
