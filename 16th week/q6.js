function validateLinkedInURL(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    
   return pattern.test(url);
}

// Example usage
const urlsToValidate = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/mary-jane_doe",
    "https://www.linkedin.com/in/bob-doe-123",
    "https://www.linkedin.com/in/user@invalid",
    "https://www.linkedin.com/in/short3",
    "https://www.linkedin.com/in/this-is-a-very-long-profile-id-that-exceeds-thirty-characters"
];

urlsToValidate.forEach(url => {
    if (validateLinkedInURL(url)) {
        console.log(`${url} ----------------------is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} ======================is not a valid LinkedIn profile URL.`);
    }
});
