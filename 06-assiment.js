// 6. LinkedIn Profile URL Validator.

function validateLinkedInURL(url) {
    const LinkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (LinkedInPattern.test(url)) {
        console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`"${url}" is not a valid LinkdinId profile URl`);
}
}

validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInURL("https://www.linkedin.com/in/mary_smith");
validateLinkedInURL("https://www.linkedin.com/in/user-name-123");
validateLinkedInURL("https://www.linkedin.com/in/invalid!profile");