var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required*";
        return false;
      }

      // old code
      
    if (!name.match(/^[a-zA-Z]/)) {
        nameError.innerHTML = "Name is required*"; 
        return false;
      }
//       if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
//         nameError.innerHTML = "Write Full Name*";
//         return false;
//       }
//       //nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
//       nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//   return true;
// }
 // new code 

 if(name.length > 2){
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return false;

 }
}



function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
      emailError.innerHTML = "Email is required";
      return false;
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
      emailError.innerHTML = "Wrong email format";
      return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  function validateSubject() {
    var subject = document.getElementById('contact-subject').value;
    if(subject.length == 0 ){
        subjectError.innerHTML = "Subject is required";
    }
    else{
        subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    }
  }
  function validateMessage(){
    var message = document.getElementById('contact-message').value;
    if(message.length == 0 ){
        messageError.innerHTML = "Subject is required";
        return false;
    }
    else{
        messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true; 
    }
  }
//   function validateMessage(){
//     var  message = document.getElementById('contact-message').value;
//     if(message.length == 0){
//         messageError.innerHTML = "Message is required"

//     }
//     else{
//         messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'


//     }
    
//   }

// function validateMessage() {
//     let message = document.getElementById('message-con').value;
//     let messageError = document.getElementById('message-error');

//     if (message.trim().length === 0) {
//         messageError.innerHTML = "Message is required";
//     } else {
//         // Assuming you want to display a checkmark icon
//         messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     }
// }




  function validateForm() {
    if (!validateName() ||validateSubject() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'One or more fields have an error. Please check and try again.';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return true;
    }
}

