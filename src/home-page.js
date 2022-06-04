export function homePage() {
    console.log('This is home page');
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    const title = document.createElement('div');
    const subtitle = document.createElement('h5');
    const homePage = document.createElement('div');
    const description = document.createElement('div');
    const programme = document.createElement('div');
    const hours = document.createElement('div');
    const footer = document.createElement('div');
    const a = document.createElement('a');

    const newUl = document.createElement('ul');
    const firstLi = document.createElement('li');
    const secondLi = document.createElement('li');
    const thirdLi = document.createElement('li');
    const fourthLi = document.createElement('li');
    const fifthLi = document.createElement('li');
    const sixthLi = document.createElement('li');
    const seventhLi = document.createElement('li');

    content.classList.add('hp-content');

    title.textContent = `At Lola's`;
    title.classList.add('title');
    
    subtitle.textContent = 'restaurant';
    subtitle.classList.add('subtitle');
    
    homePage.classList.add('home-page');
    description.classList.add('description');
    description.textContent = `At Lola's specializes in delicious food featuring fresh ingredients and masterful preparation by the Lola's culinary team. Whether you're ordering a multi-course meal or grabbing a drink and pizza at the bar, Lola's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.`;

    programme.classList.add('programme');
    hours.textContent = 'Hours';
    hours.classList.add('hours');

    firstLi.textContent = 'Monday: 9am - 10pm';
    secondLi.textContent = 'Tuesday: 9am - 10pm';
    thirdLi.textContent = 'Wednesday: 9am - 10pm';
    fourthLi.textContent = 'Thursday: 9am - 10pm';
    fifthLi.textContent = 'Friday: 10am - 11pm';
    sixthLi.textContent = 'Saturday: 11am - 11pm';
    seventhLi.textContent = 'Sunday: 11am - 11pm';

    footer.classList = 'footer';
    a.textContent = `Background image created by 
    Nick Karvounis`;
    a.href = 'https://unsplash.com/photos/Ciqxn7FE4vE';

    content.appendChild(title);
    content.appendChild(subtitle);
    body.appendChild(homePage);
    homePage.appendChild(description);
    homePage.appendChild(programme);
    programme.appendChild(hours);
    programme.appendChild(newUl);
    newUl.appendChild(firstLi);
    newUl.appendChild(secondLi);
    newUl.appendChild(thirdLi);
    newUl.appendChild(fourthLi);
    newUl.appendChild(fifthLi);
    newUl.appendChild(sixthLi);
    newUl.appendChild(seventhLi);
    homePage.appendChild(footer);
    footer.appendChild(a);
}