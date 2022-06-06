export function contactPage() {
    console.log('This is contact page');

    const content = document.getElementById('content');

    content.replaceChildren();

    const contactAllWrap = document.createElement('div');
    const contactTitle = document.createElement('div');
    const contactWrap = document.createElement('div');

    contactTitle.textContent = 'Contact';
    contactTitle.classList.add('contact-title');
    contactWrap.classList.add('contact-wrap');
    contactAllWrap.classList.add('contact-all-wrap');

    content.appendChild(contactAllWrap);
    contactAllWrap.appendChild(contactTitle);
    contactAllWrap.appendChild(contactWrap);
    
    const number = document.createElement('p');
    const mail = document.createElement('p');
    const address = document.createElement('p');

    number.textContent = 'Phone: 1234-567-890';
    mail.textContent = 'Mail: sendamail@gmail.com';
    address.textContent = 'Location: Hollywood Boulevard 42, Los Angeles, USA';

    contactWrap.appendChild(number);
    contactWrap.appendChild(mail);
    contactWrap.appendChild(address);

}