const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function getCookies() {
    let res = "";
    // Progression 2: using setTimeout()
    setTimeout(() => {
        cookies.forEach((cookie) => {
            res += `${cookie.name}<br>`;
        });
        document.write(res);
    }, 1000);
}

//Progression 3: Create a function to creat cookies
function createCookies(newCookie,callback){
    setTimeout(() => {
        cookies.push(newCookie);
        callback()
    }, 2000);
}

// Progression 5: calling function
createCookies(newCookie,getCookies)