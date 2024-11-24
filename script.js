// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY');  // Replace with your actual Public Key from EmailJS

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
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
      console.log('Success!', response);
      document.getElementById('responseMessage').innerText = 'Love note sent successfully!';
      form.reset();  // Reset the form after submission
    }, function(error) {
      console.error('Failed to send love note:', error);
      document.getElementById('responseMessage').innerText = 'Failed to send the love note. Please try again.';
    });
});
