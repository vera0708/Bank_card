// import { el, setChildren } from "redom";
import { el, setChildren } from '../node_modules/redom/dist/redom.es.js';

const CardRe = () => {
    const creditCard = el('div', { className: 'credit-card' },
        el('span', { className: 'card__number' }, 'xxxx xxxx xxxx xxxx'),
        el('div', { className: 'card__personal' },
            el('span', { className: 'card__name' }, 'John Doe'),
            el('span', { className: 'card__date' }, '04/24')
        ));

    const formInput = (nameBlock, nameText) =>
    (el('div', { className: `form__input-wrap form__input-wrap_${nameBlock}` },
        el('label', { className: `form__label form__${nameBlock}-label` }, `${nameText}`),
        el('input', { className: `input input__${nameBlock}`, type: "text" })
    ));

    const formCard = el('form', { className: 'form' },
        formInput('holder', 'Card Holder'),
        formInput('number', 'cardNumber'),
        formInput('date', 'Card Expiry'),
        formInput('cvv', 'CVV'),
        el('button', { className: 'form__button' }, 'CHECK OUT')
    );
    /*   
    */

    const card = el('div', { className: 'card' },
        el('p', { className: 'secure' }, 'Secure Checkout'),
        creditCard,
        formCard);
    return el('div', { className: 'wrapper' }, card);
};

setChildren(document.body, CardRe());