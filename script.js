// Initialize EmailJS with your Public Key
emailjs.init("36kfmjQJJ13t0fg4x");

// Handle form submission
document.getElementById('loveNoteForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const senderName = document.getElementById('senderName').value;
  const partnerEmail = document.getElementById('partnerEmail').value;
  const loveNote = document.getElementById('loveNote').value;

  // Send email using EmailJS
  emailjs.send("service_48ii39g", "template_mdmjwr8", {
    loveNote: loveNote,
    senderName: senderName,
    partnerEmail: partnerEmail
  })
  .then(function(response) {
    document.getElementById('confirmationMessage').innerText = "Love note sent successfully!";
  }, function(error) {
    document.getElementById('confirmationMessage').innerText = "Failed to send the love note. Please try again.";
  });
});
