
const decrementButton = document.getElementById('decrement');
const counterSpan = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const shippingMessage = document.getElementById('shipping-message');
const stockMessage = document.getElementById('stock-message');


let counterValue = 0;


const updateCounterDisplay = () => {
    counterSpan.textContent = counterValue;

    
    decrementButton.disabled = counterValue === 0;

    
    if (counterValue === 10) {
        shippingMessage.textContent = "You have free shipping";
        shippingMessage.style.display = 'block';
    }

    
    if (counterValue === 20) {
        incrementButton.style.backgroundColor = 'red';
        stockMessage.textContent = "Out of stock";
        stockMessage.style.display = 'block';
    }

    
    if (counterValue === 9 || counterValue === 20) {
        shippingMessage.style.display = 'none';
    }
};


const increaseCounter = () => {
    counterValue++;
    updateCounterDisplay();
};


const decreaseCounter = () => {
    if (counterValue > 0) {
        counterValue--;
        updateCounterDisplay();
    }
};


const resetCounter = () => {
    counterValue = 0;
    incrementButton.style.backgroundColor = ''; 
    stockMessage.style.display = 'none'; 
    updateCounterDisplay();
};


incrementButton.addEventListener('click', increaseCounter);
decrementButton.addEventListener('click', decreaseCounter);
resetButton.addEventListener('click', resetCounter);


updateCounterDisplay();