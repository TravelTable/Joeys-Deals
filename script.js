// Load items from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.querySelector('.shop-items');
        data.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>Price: ${item.price} BTC</p>
                <p>${item.description}</p>  <!-- Display the description here -->
                <button onclick="buyWithBitcoin(${item.price})">Buy with Bitcoin</button>
            `;
            itemsContainer.appendChild(itemElement);
        });
    });

// Handle Bitcoin payment
function buyWithBitcoin(amount) {
    const bitcoinAddress = "bc1q5320lv7cnnaz3e4nxm8rlfzzddwslnnaesyyvp"; // Replace with your Bitcoin address
    const paymentUrl = `bitcoin:${bitcoinAddress}?amount=${amount}`;
    window.location.href = paymentUrl;
}
