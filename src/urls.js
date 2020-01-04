
let urls

let env = 1; //working environment

if(env === 1){ //development env
    urls = {
        BASE_URL  : "http://localhost:3010"
    }
}

if(env === 2){ //production environment
    urls = {
        BASE_URL : ""
    }
}

export default urls