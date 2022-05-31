export function homePage() {
    console.log('This is home page');
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    const title = document.createElement('div');
    const subtitle = document.createElement('h5');
    const homePage = document.createElement('div');
    const description = document.createElement('div');

    title.textContent = `At Lola's`;
    title.classList.add('title');
    
    subtitle.textContent = 'restaurant';
    subtitle.classList.add('subtitle');
    
    homePage.classList.add('home-page');
    description.classList.add('description');
    description.textContent = `At Lola's specializes in delicious food featuring fresh ingredients and masterful preparation by the Lola culinary team. Whether you're ordering a multi-course meal or grabbing a drink and pizza at the bar, Lola's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.`;

    content.appendChild(title);
    content.appendChild(subtitle);
    body.appendChild(homePage);
    homePage.appendChild(description);
}