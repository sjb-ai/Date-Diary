// Initialize EmailJS with your public key
emailjs.init('36kfmjQJJ13t0fg4x');  // Use your Public Key from EmailJS

// Get form element
const form = document.getElementById('loveNoteForm');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission
  
  // Get form data
  const senderName = document.getElementById('senderName').value;
  const senderEmail = document.getElementById('senderEmail').value;
  const loveNote = document.getElementById('loveNote').value;

  // Create template parameters
  const templateParams = {
    senderName: senderName,
    senderEmail: senderEmail,
    loveNote: loveNote
  };

  // Send the email using EmailJS
  emailjs.send('service_48ii39g', 'template_mdmjwr8', templateParams)
    .then(function(response) {
      console.log('Success!', response);
      document.getElementById('responseMessage').innerText = 'Love note sent successfully!';
      form.reset();  // Reset the form after submission
    }, function(error) {
      console.error('Failed to send love note:', error);
      document.getElementById('responseMessage').innerText = 'Failed to send the love note. Please try again.';
    });
});
