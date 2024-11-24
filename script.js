// Initialize EmailJS with your Public Key
emailjs.init("36kfmjQJJ13t0fg4x");  // Your public key

// Handle form submission
document.getElementById('loveNoteForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the values from the form fields
  const senderName = document.getElementById('senderName').value;
  const partnerEmail = document.getElementById('partnerEmail').value;
  const loveNote = document.getElementById('loveNote').value;

  // Send the data to EmailJS
  emailjs.send("service_48ii39g", "template_mdmjwr8", {
    loveNote: loveNote,
    senderName: senderName,
    partnerEmail: partnerEmail
  })
  .then(() => {
    // If the email is successfully sent
    document.getElementById('confirmationMessage').innerText = "Love note sent successfully!";
  })
  .catch((error) => {
    // If there is an error, log it and show a message
    console.error("EmailJS Error: ", error);
    document.getElementById('confirmationMessage').innerText = "Failed to send the love note. Please try again.";
  });
});
