function display(type,message){
let messagebook = document.getElementById('message')
messagebook.innerHTML += `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Message!</strong> ${message}
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
setTimeout(() => {
    messagebook.innerHTML =""; 
}, 2000);
}
console.log("this is form validation project");
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Phone = document.getElementById('phoneNo');
const Checkme = document.getElementById("checkme");
let validname = false;
let validemail = false;
let validphone = false;

Name.addEventListener('blur', () => {
    let regex = /^[a-zA-z]([0-9a-zA-z]){2,12}$/;
    let str = Name.value;
    // console.log(regex,str);
    if (regex.test(str)) {
        // console.log("Your name is valid");
     validname = true; 
       Name.classList.remove('is-invalid');
    }
    else {
        // console.log("Your name is not valid");
        validname = false;
        Name.classList.add('is-invalid');
    }
})
Email.addEventListener('blur', () => {
    let regex = /^([_\.\-0-9a-zA-z]+)@([_\.\-0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;
    let str = Email.value;
    // console.log(regex,str);
    if (regex.test(str)) {
        // console.log("Your Email is valid");
        Email.classList.remove('is-invalid');
        validemail = true;
    }
    else {
        // console.log("Your Email is not valid");
        validemail = false;

        Email.classList.add('is-invalid');
    }
})
Phone.addEventListener('blur', () => {
    let regex = /^[0-9]{10}$/;
    let str = Phone.value;
    // console.log(regex,str);
    if (regex.test(str)) {
        // console.log("Your Phone number is valid");
        Phone.classList.remove('is-invalid');
        validphone = true;
    }
    else {
        // console.log("Your phone number is not valid");
        Phone.classList.add('is-invalid');
        validphone = false;

    }
})


// console.log(messagebook);



let submit = document.getElementById('submit');
// console.log(submit);
submit.addEventListener('click', (e) => {
    console.log(validphone, validemail, validname);
    if (validname && validemail && validphone) {
        if (Checkme.checked == true) {
            // console.log("Your info  is valid");      
            Checkme.classList.remove('is-invalid');
            display('success', ' Your travel request has been successfully submitted.');
        }
        else {
            Checkme.classList.add('is-invalid');
            display('danger', 'Your travel request has not been successfully submitted.');
        }
    }

    else {
        if (Checkme.checked == true) {
            // console.log("Your info  is valid");      
            Checkme.classList.remove('is-invalid');
            display('danger', 'Your travel request has not been successfully submitted.');
        }
        else {
            Checkme.classList.add('is-invalid');
            display('danger', 'Your travel request has not been successfully submitted.');
        }
    }


    e.preventDefault();
})

