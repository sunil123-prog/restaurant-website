$(document).ready(function(){
    $('#bookingForm').submit(function(e){
        e.preventDefault();
        if (this.checkValidity() === false) {
            e.stopPropagation();
            displayValidationErrors();
        } else {
            $('#successModal').modal('show');
            // You can proceed with form submission here
        }
        $(this).addClass('was-validated');
    });
    
    $('#bookingForm input').on('input', function() {
        $(this).removeClass('is-invalid');
        $(this).next('.invalid-feedback').hide();
    });
});

function displayValidationErrors() {
    $('#validationErrors').empty();
    $('#bookingForm input').each(function() {
        if (!this.validity.valid) {
            $(this).addClass('is-invalid');
            var fieldName = $(this).attr('name');
            $('#validationErrors').append('<li>' + fieldName + ' is required.</li>');
        }
    });
    $('#validationModal').modal('show');
}
