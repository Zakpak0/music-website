

    const authsignup = ({
        firstName, lastName, userName, email, password, confirmpassword}, 
        useFirstName, useLastName, useUserName, useEmail, usePassword, 
        useConfirmPassword, setInput, router) => {
    if (firstName.length < 1) {
        useFirstName("This field is required");
    } else {
        useFirstName(null);
    }
    if (lastName.length < 1) {
        useLastName("This field is required");
    } else {
        useLastName(null);
    }
    if (userName.length < 1) {
        useUserName("This field is required");
    } else {
        useUserName(null);
    }
    if (email.length < 1) {
        useEmail("This field is required");
    } else {
        useEmail(null);
    }
    if (password === confirmpassword) {
        if (password.length < 1) {
        usePassword("This field is required");
        } else {
        usePassword(null);
        }
    } else {
        usePassword("Your passwords do not match");
    }
    if (confirmpassword === password) {
        if (confirmpassword.length < 1) {
        useConfirmPassword("This field is required");
        } else {
        useConfirmPassword(null);
            console.log('Something is Right');
        if(
            firstName.length === 0 ||
            lastName.length === 0 ||
            userName.length === 0 ||
            email.length === 0
        ){
            alert("Something Is Wrong");
        } else {
                setInput({
                    firstName: "",
                    lastName: "",
                    userName: "",
                    email: "",
                    password: "",
                    confirmpassword: ""
            })
            router.push("/menu");
        }
        }
    } else {
        useConfirmPassword("Your passwords do not match");
    }
};

const authsignin = ({
        userName, password}, 
        useUserName, usePassword, 
        setInput, router) => {
    if (userName.length < 1) {
        useUserName("This field is required");
    } else {
        useUserName(null);
    }
    if (password) {
        if (password.length < 1) {
        usePassword("Please enter your password");
        } else {
        usePassword(null);
            console.log('Something is Right');
        if(
            userName.length === 0
        ){
            alert("Something Is Wrong");
        } else {
                setInput({
                    userName: "",
                    password: "",
                });
                router.push("/menu");
            }
        }
    } else {
        usePassword("Your password is incorrect");
    }
};

    export {authsignup, authsignin}