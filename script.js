document.addEventListener('DOMContentLoaded', function() 
{
    // Initialize Pikaday for date picker
    new Pikaday({
      field: document.getElementById('date'),
      format: 'YYYY-MM-DD'
    });
  
    // Form validation
    const form = document.getElementById('reservationForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (form.checkValidity()) {
        alert('Reservation successfully submitted!');
        form.reset();
      } else {
        alert('Please fill out all required fields.');
      }
    });
}); 