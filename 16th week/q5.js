function checkurl(url){
    const regex = /^(https?:\/\/)[\w\d-]+(\.[\w\d-]+)+$/i;
    return regex.test(url);
}


let urlList =[

    " https://www.example.com ",
    "http://subdomain.example.com",
    " https://www.google.com ",
    " http://www.github.com ",
    " https://www.youtube.com",
    "ftp://example.com",
    " http://www.stackoverflow.com         ",
    " https://www.linkedin.com",
    " https://www.microsoft.com ",
    "https://123.456",

    

];

urlList.forEach(url =>{
    if(checkurl(url)){
        console.log(`${url}    ------------- is a valid URl`);
    }
    else{
        console.log(`${url}     ============= is not a valid URl`);
    }
})

