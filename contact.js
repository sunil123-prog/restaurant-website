$(document).ready(function () {
    $('#contactForm').submit(function (e) {
      e.preventDefault(); // Prevent default form submission
  
      // Show spinner and hide submit button
      $('#spinner').show();
      $('#submitBtn').prop('disabled', true);
  
      // Simulate form submission delay (remove this in actual implementation)
      setTimeout(function () {
        // Here you can perform your form submission via AJAX or any other method
        // After submission is completed, hide spinner and show success message
        $('#spinner').hide();
        $('#submitBtn').prop('disabled', false);
        alert('Thank you for your feedback!');
        // You can also redirect user or perform any other action here
      }, 2000); // Simulated delay of 2 seconds
    });
  });
  