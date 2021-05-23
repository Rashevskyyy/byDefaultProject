export const setCookie = (name, data) => {
    document.cookie = `${name}=${data}; max-age=3600`;
}
