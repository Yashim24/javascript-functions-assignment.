function validateUser(email) {
    if (!email) {
        console.log("Please provide your email");
        return;
    }

    console.log("Email accepted", email);
}
validateUser("");
validateUser("alwaysbagwam@gmail.com");
validateUser();