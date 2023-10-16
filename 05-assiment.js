// 5. URL validation.

function validatedURL(url) {
    const urlPattern = /^(http:\/\/|https:\/\/)[\w\d\-._~:/?#[\]@!$&'()*+,;=]+$/;

    if (urlPattern.test(url)) {
        console.log(`"${url}" is a valid URL.`);
    } else {
        console.log(`"${url}" is not a valid URL.`)
    }
}

validatedURL("http://www.exmple.com");
validatedURL("https://subdomain.example.org");
validatedURL("fpt://invalide.url");