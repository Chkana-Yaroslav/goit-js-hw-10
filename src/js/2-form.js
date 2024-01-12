document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');

  
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    feedbackForm.elements['email'].value = email;
    feedbackForm.elements['message'].value = message;
  }

  
  feedbackForm.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
      
      const currentState = {
        email: feedbackForm.elements['email'].value.trim(),
        message: feedbackForm.elements['message'].value.trim()
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  
  feedbackForm.addEventListener('submit', function (event) {
   
    event.preventDefault();

   
    const emailValue = feedbackForm.elements['email'].value.trim();
    const messageValue = feedbackForm.elements['message'].value.trim();

    
    if (emailValue && messageValue) {
      
        const formData = {
            email: emailValue,
            message: messageValue,
        };

        console.log(formData);

    //   console.log('Email:', emailValue);
    //   console.log('Message:', messageValue);

      
      feedbackForm.reset();
      localStorage.removeItem('feedback-form-state');
    } else {
      
      console.log('Please fill in all required fields before submitting.');
    }
  });
});