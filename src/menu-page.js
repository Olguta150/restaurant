export function menuPage() {
    console.log('This is contact-page');
    const content = document.getElementById('content');
    const allWrap = document.createElement('div');
    const wrap = document.createElement('div');

    content.classList.add('cp-content');
    allWrap.classList.add('all-wrap');
    wrap.classList.add('wrap');

    content.appendChild(allWrap);
    
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';
    allWrap.appendChild(menuTitle);

    allWrap.appendChild(wrap);

    
    const boxOne = document.createElement('div');
    boxOne.classList.add('box', 'box1');
    const titleOne = document.createElement('div');titleOne.classList.add('item-title');
    titleOne.textContent = 'Caesar Salad';
    const underlineOne = document.createElement('div');
    underlineOne.classList.add('underline');
    const priceOne = document.createElement('div');
    priceOne.classList.add('price-item');
    priceOne.textContent = '$7.99';
    wrap.appendChild(boxOne);
    boxOne.appendChild(titleOne);
    boxOne.appendChild(underlineOne);
    boxOne.appendChild(priceOne);
    
    const boxTwo = document.createElement('div');
    boxTwo.classList.add('box', 'box2');
    const titleTwo = document.createElement('div');titleTwo.classList.add('item-title');
    titleTwo.textContent = 'Steak';
    const underlineTwo = document.createElement('div');
    underlineTwo.classList.add('underline');
    const priceTwo = document.createElement('div');
    priceTwo.classList.add('price-item');
    priceTwo.textContent = '$11.99';
    wrap.appendChild(boxTwo);
    boxTwo.appendChild(titleTwo);
    boxTwo.appendChild(underlineTwo);
    boxTwo.appendChild(priceTwo);

    const boxThree = document.createElement('div');
    boxThree.classList.add('box', 'box3');
    const titleThree = document.createElement('div');titleThree.classList.add('item-title');
    titleThree.textContent = 'French Fries';
    const underlineThree = document.createElement('div');
    underlineThree.classList.add('underline');
    const priceThree = document.createElement('div');
    priceThree.classList.add('price-item');
    priceThree.textContent = '$7.99';
    wrap.appendChild(boxThree);
    boxThree.appendChild(titleThree);
    boxThree.appendChild(underlineThree);
    boxThree.appendChild(priceThree);

    const boxFour = document.createElement('div');
    boxFour.classList.add('box', 'box4');
    const titleFour = document.createElement('div');titleFour.classList.add('item-title');
    titleFour.textContent = 'Pizza quattro formaggi';
    const underlineFour = document.createElement('div');
    underlineFour.classList.add('underline');
    const priceFour = document.createElement('div');
    priceFour.classList.add('price-item');
    priceFour.textContent = '$10.99';
    wrap.appendChild(boxFour);
    boxFour.appendChild(titleFour);
    boxFour.appendChild(underlineFour);
    boxFour.appendChild(priceFour);

    const boxFive = document.createElement('div');
    boxFive.classList.add('box', 'box5');
    const titleFive = document.createElement('div');titleFive.classList.add('item-title');
    titleFive.textContent = 'Grilled Cheese Sandwich';
    const underlineFive = document.createElement('div');
    underlineFive.classList.add('underline');
    const priceFive = document.createElement('div');
    priceFive.classList.add('price-item');
    priceFive.textContent = '$4.99';
    wrap.appendChild(boxFive);
    boxFive.appendChild(titleFive);
    boxFive.appendChild(underlineFive);
    boxFive.appendChild(priceFive);

    const boxSix = document.createElement('div');
    boxSix.classList.add('box', 'box6');
    const titleSix = document.createElement('div');titleSix.classList.add('item-title');
    titleSix.textContent = 'Bacon Coli Baked Australian Beef';
    const underlineSix = document.createElement('div');
    underlineSix.classList.add('underline');
    const priceSix = document.createElement('div');
    priceSix.classList.add('price-item');
    priceSix.textContent = '$40';
    wrap.appendChild(boxSix);
    boxSix.appendChild(titleSix);
    boxSix.appendChild(underlineSix);
    boxSix.appendChild(priceSix);

    const boxSeven = document.createElement('div');
    boxSeven.classList.add('box', 'box7');
    const titleSeven = document.createElement('div');titleSeven.classList.add('item-title');
    titleSeven.textContent = 'Gourmet Mushroom Risotto';
    const underlineSeven = document.createElement('div');
    underlineSeven.classList.add('underline');
    const priceSeven = document.createElement('div');
    priceSeven.classList.add('price-item');
    priceSeven.textContent = '$40';
    wrap.appendChild(boxSeven);
    boxSeven.appendChild(titleSeven);
    boxSeven.appendChild(underlineSeven);
    boxSeven.appendChild(priceSeven);
}