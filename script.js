let cart = [];
function addToCart(product) {
    cart.push(product);
    alert(product + ' has been added to your cart!');
    console.log('Cart: ', cart);
}
document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! Your message has been sent.");
        document.querySelector('#contact form').reset();

    } else {
        alert("Please fill in all fields.");
    }
});



