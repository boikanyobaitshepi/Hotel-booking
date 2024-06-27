// const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
// const city = 'London';
// const apiKey = 'd84fde2f47ee96ab177a90116b5647ee';

// fetch(`${api}?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     const temperature = data.main.temp;
//     const description = data.weather[0].description;
//     document.getElementById('city').innerText = city;
//     document.getElementById('temperature').innerText = `${temperature}°C`;
//     document.getElementById('description').innerText = description;
//   });

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { title: "Grilled Salmon", price: "$15.99", description: "Delicious grilled salmon with a side of vegetables." },
        { title: "Shrimp Boil", price: "$18.99", description: "A hearty shrimp boil with potatoes, corn, and sausage." },
        { title: "Lobster Roll", price: "$22.99", description: "Classic lobster roll served with crispy fries." }
    ];

    const menuContainer = document.getElementById('menu-items');

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const price = document.createElement('p');
        price.textContent = item.price;
        
        const description = document.createElement('p');
        description.textContent = item.description;

        menuItemDiv.appendChild(title);
        menuItemDiv.appendChild(price);
        menuItemDiv.appendChild(description);

        menuContainer.appendChild(menuItemDiv);
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you for contacting us, ${name}! We will get back to you at ${email}.`);
        
        contactForm.reset();
    });
});
