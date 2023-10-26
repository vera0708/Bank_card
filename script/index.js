// import { el, setChildren } from "redom";
// import axios from "axios";
// import Navigo from "navigo";
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
        el('input', { className: `input input__${nameBlock}`, type: "text", name: `${nameBlock}`, required: true })
    ));

    const formCard = el('form', { className: 'form' },
        formInput('holder', 'Card Holder'),
        formInput('number', 'cardNumber'),
        formInput('date', 'Card Expiry'),
        formInput('cvv', 'CVV'),
        el('button', { className: 'form__button' }, 'CHECK OUT')
    );

    const card = el('div', { className: 'card' },
        el('p', { className: 'secure' }, 'Secure Checkout'),
        creditCard,
        formCard);
    return el('div', { className: 'wrapper' }, card);

    const holder = formInput('holder', 'Card Holder');
    holder.addEventListener('input', () => {
        holder.value = holder.value.replace(/[^A-Za-z\s]+$/ig, '').toUpperCase();
        cardName.textContent = holder.value.toUpperCase();
    });

    const mask = (value, limit, separator) => {
        let output = [];
        for (let i = 0; i < value.length; i++) {
            if (i !== 0 && i % limit === 0) {
                output.push(separator);
            }
            output.push(value[i]);
        }
        return output.join("");
    };

    const number = formInput('number', 'cardNumber');
    number.setAttribute('pattern', '[0-9]');
    number.setAttribute('title', 'enter 16 numbers');
    number.setAttribute('maxlength', 19);
    number.addEventListener('input', () => {
        number.value = number.value.replace(/[^0-9]/ig, '');
        number.value = mask(number.value, 4, " ")
        cardNumber.textContent = number.value;
    });

    const date = formInput('date', 'Card Expiry');
    date.setAttribute('pattern', '/^\d{0,4}$/g');
    date.setAttribute('title', 'enter MMYY');
    date.setAttribute('maxlength', 5);
    date.addEventListener('input', () => {
        date.value = date.value.replace(/[^\d]/g, '');
        date.value = mask(date.value, 2, "/")
        cardDate.textContent = date.value;
    });

    const cvv = formInput('cvv', 'CVV');
    cvv.setAttribute('pattern', '/^\d{0,3}$/g');
    cvv.setAttribute('title', 'enter 3 numbers only');
    cvv.setAttribute('maxlength', 3);
    cvv.addEventListener('input', () => {
        cvv.value = cvv.value.replace(/\D/g, '');
    });
};

setChildren(document.body, CardRe());
