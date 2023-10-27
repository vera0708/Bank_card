// import { el, setChildren } from "redom";
// import axios from "axios";
// import Navigo from "navigo";
import { el, setChildren } from '../node_modules/redom/dist/redom.es.js';

const cardName = el('span', { className: 'card__name' }, 'John Doe')
const cardNumber = el('span', { className: 'card__number' }, 'xxxx xxxx xxxx xxxx');
const cardDate = el('span', { className: 'card__date' }, '04/24')
const CardRe = () => {
    const creditCard = el('div', { className: 'credit-card' },
        cardNumber,
        el('div', { className: 'card__personal' },
            cardName,
            cardDate
        ));

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

    const inputHolder = el('input', {
        className: 'input input__holder',
        type: 'text',
        name: 'holder',
        maxlength: 27,
        pattern: '[A-Za-z\s]+$',
        required: true
    });

    function holderSubmit() {
        inputHolder.addEventListener('input', () => {
            inputHolder.value = inputHolder.value.replace(/[^A-Za-z\s]+$/ig, '').toUpperCase();
            cardName.textContent = inputHolder.value.toUpperCase();
        });
    };

    const inputNumber = el('input', {
        className: 'input input__number',
        type: 'text',
        name: 'number',
        pattern: /[^0-9]/ig,
        maxlength: 19,
        title: 'enter 16 numbers',
        required: true
    });

    function numberSubmit() {
        inputNumber.addEventListener('input', () => {
            inputNumber.value = inputNumber.value.replace(/[^0-9]/ig, '');
            inputNumber.value = mask(inputNumber.value, 4, " ")
            cardNumber.textContent = inputNumber.value;
        });
    };

    const inputDate = el('input', {
        className: 'input input__date',
        type: 'text',
        name: 'date',
        pattern: /^\d{0,4}$/g,
        maxlength: 5,
        title: 'enter MMYY',
        required: true
    });

    function dateSubmit() {
        inputDate.addEventListener('input', () => {
            inputDate.value = inputDate.value.replace(/[^\d]/g, '');
            inputDate.value = mask(inputDate.value, 2, "/")
            cardDate.textContent = inputDate.value;
        });
    };

    const inputCvv = el('input', {
        className: 'input input__cvv',
        type: 'text',
        name: 'cvv',
        pattern: /^\d{0,3}$/g,
        maxlength: 3,
        title: 'enter 3 numbers only',
        required: true
    });

    function cvvSubmit() {
        inputCvv.addEventListener('input', () => {
            inputCvv.value = inputCvv.value.replace(/\D/g, '');
        });
    };

    const formCard = el('form', { className: 'form' },
        el('div', { className: 'form__input-wrap form__input-wrap_holder' },
            el('label', { className: 'form__label form__holder-label' }, 'Card Holder'),
            inputHolder,
            holderSubmit,
        ),
        el('div', { className: 'form__input-wrap form__input-wrap_number' },
            el('label', { className: 'form__label form__number-label' }, 'Card Number'),
            inputNumber,
            numberSubmit,
        ),
        el('div', { className: 'form__input-wrap form__input-wrap_date' },
            el('label', { className: 'form__label form__date-label' }, 'Card Expiry'),
            inputDate,
            dateSubmit,
        ),
        el('div', { className: 'form__input-wrap form__input-wrap_cvv' },
            el('label', { className: 'form__label form__cvv-label' }, 'CVV'),
            inputCvv,
            cvvSubmit,
        ),
        el('button', { className: 'form__button', type: 'submit' }, formSubmit, 'CHECK OUT')
    );

    const card = el('div', { className: 'card' },
        el('p', { className: 'secure' }, 'Secure Checkout'),
        creditCard,
        formCard);

    function formSubmit(el) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (inputHolder.value.indexOf(' ') === -1) {
                alert('Card Holder should comtain name and surname');
                return
            };
            const dateMMYY = inputDate.value;
            const dateYear = +dateMMYY.slice(3) + 2000;
            const dateMonth = +dateMMYY.slice(0, 2);

            if (dateMonth > 12) {
                alert('The month (in date) should be from 01 to 12');
                return
            };
            let today = new Date();
            let currentYear = today.getFullYear();
            let currentMonth = today.getMonth() + 1;

            if (dateYear < currentYear || dateYear === currentYear && dateMonth < currentMonth) {
                alert('Sorry, your card is expired');
                return
            };
            alert('Success, you card is validated');
            return
        });
    }
    return el('div', { className: 'wrapper' }, card);
};

setChildren(document.body, CardRe());
