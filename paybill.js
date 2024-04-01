$(document).ready(function(){
    let items = [];

    $('#addItemBtn').click(function(){
        let itemName = $('#itemName').val().trim();
        let itemPrice = parseFloat($('#itemPrice').val());
        let quantity = parseInt($('#quantity').val());

        if (itemName === '' || isNaN(itemPrice) || isNaN(quantity) || itemPrice <= 0 || quantity <= 0) {
            alert('Please fill in valid item details.');
            return;
        }

        items.push({ name: itemName, price: itemPrice, quantity: quantity });

        // Clear input fields
        $('#itemName').val('');
        $('#itemPrice').val('');
        $('#quantity').val(1);

        displayBillItems();
    });

    $('#calculateBtn').click(function(){
        let totalAmount = 0;
        items.forEach(function(item){
            totalAmount += item.price * item.quantity;
        });
        $('#totalAmount').val(totalAmount.toFixed(2));
    });

    function displayBillItems() {
        $('#itemsList').empty();
        items.forEach(function(item){
            $('#itemsList').append('<li>' + item.name + ' - $' + item.price.toFixed(2) + ' x ' + item.quantity + '</li>');
        });
    }
});
