const products = [];

document.getElementById('addProductBtn').addEventListener('click', addProduct);
document.getElementById('sortPriceBtn').addEventListener('click', () => sortProducts('price'));
document.getElementById('sortRatingBtn').addEventListener('click', () => sortProducts('rating'));

const priceGraphCtx = document.getElementById('priceGraph').getContext('2d');
const ratingGraphCtx = document.getElementById('ratingGraph').getContext('2d');

let priceChart = new Chart(priceGraphCtx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Price',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let ratingChart = new Chart(ratingGraphCtx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Rating',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5
            }
        }
    }
});

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && price && rating) {
        products.push({ name, price, rating });
        updateGraphs();
        clearInputs();
    } else {
        alert("Please fill out all fields.");
    }
}

function updateGraphs() {
    // Clear existing data
    priceChart.data.labels = [];
    priceChart.data.datasets[0].data = [];

    ratingChart.data.labels = [];
    ratingChart.data.datasets[0].data = [];

    // Populate new data
    products.forEach(product => {
        priceChart.data.labels.push(product.name);
        priceChart.data.datasets[0].data.push(product.price);

        ratingChart.data.labels.push(product.name);
        ratingChart.data.datasets[0].data.push(product.rating);
    });

    // Update charts
    priceChart.update();
    ratingChart.update();
}

function sortProducts(key) {
    products.sort((a, b) => a[key] - b[key]);
    updateGraphs();
}

function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRating').value = '';
}
