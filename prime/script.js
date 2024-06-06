function checkPrime() {
    var num = document.getElementById('numberInput').value;
    var isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById('result').innerHTML = num + " is a prime number.";
    } else {
        document.getElementById('result').innerHTML = num + " is not a prime number.";
    }
}
