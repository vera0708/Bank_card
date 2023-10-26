export const Card = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const card = document.createElement('div');
    card.classList.add('card');

    const secure = document.createElement('p');
    secure.classList.add('secure');
    secure.textContent = 'Secure Checkout';

    const creditCard = document.createElement('div');
    creditCard.classList.add('credit-card');

    const cardNumber = document.createElement('span');
    cardNumber.classList.add('card__number');
    cardNumber.textContent = 'xxxx xxxx xxxx xxxx';

    const cardPersonal = document.createElement('div');
    cardPersonal.classList.add('card__personal');

    const cardName = document.createElement('span');
    cardName.classList.add('card__name');
    cardName.textContent = 'John Doe';
    const cardDate = document.createElement('span');
    cardDate.classList.add('card__date');
    cardDate.textContent = '04/24';

    cardPersonal.append(cardName, cardDate);

    creditCard.append(cardNumber, cardPersonal);

    const form = document.createElement('form');
    form.classList.add('form');
    form.setAttribute('id', 'form');

    // держатель карты
    const formInputHolder = document.createElement('div');
    formInputHolder.classList.add('form__input-wrap', 'form__input-wrap_holder');

    const holderLabel = document.createElement('label');
    holderLabel.classList.add('form__label', 'form__holder-label');
    holderLabel.textContent = 'Card Holder';

    const holder = document.createElement('input');
    holder.classList.add('input', 'input__holder');
    holder.type = 'text';
    holder.name = 'holder';
    holder.required = true;
    // holder.pattern = "[A-Za-z\s]+$";

    formInputHolder.append(holderLabel, holder);

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

    // номер карты
    const formInputNumber = document.createElement('div');
    formInputNumber.classList.add('form__input-wrap', 'form__input-wrap_number');

    const numberLabel = document.createElement('label');
    numberLabel.classList.add('form__label', 'form__number-label');
    numberLabel.textContent = 'Card Number';

    const number = document.createElement('input');
    number.classList.add('input', 'input__number');
    number.type = 'text';
    number.name = 'number';
    number.setAttribute('id', 'cardNumber');
    number.pattern = "[0-9]";
    number.title = 'enter 16 numbers';
    number.setAttribute('maxlength', 19);
    number.required = true;
    formInputNumber.append(numberLabel, number);

    number.addEventListener('input', () => {
        number.value = number.value.replace(/[^0-9]/ig, '');
        number.value = mask(number.value, 4, " ")
        cardNumber.textContent = number.value;
    });

    // дата карты
    const formInputDate = document.createElement('div');
    formInputDate.classList.add('form__input-wrap', 'form__input-wrap_date');

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('form__label', 'form__date-label');
    dateLabel.textContent = 'Card Expiry';

    const date = document.createElement('input');
    date.classList.add('input', 'input__date');
    date.type = 'text';
    date.pattern = /^\d{0,4}$/g;
    date.setAttribute('maxlength', 5);
    date.title = 'enter MMYY';
    date.required = true;

    formInputDate.append(dateLabel, date);

    date.addEventListener('input', () => {
        date.value = date.value.replace(/[^\d]/g, '');
        date.value = mask(date.value, 2, "/")
        cardDate.textContent = date.value;
    });

    // cvv код
    const formInputCvv = document.createElement('div');
    formInputCvv.classList.add('form__input-wrap', 'form__input-wrap_cvv');

    const cvvLabel = document.createElement('label');
    cvvLabel.classList.add('form__label', 'form__cvv-label');
    cvvLabel.textContent = 'CVV';

    const cvv = document.createElement('input');
    cvv.classList.add('input', 'input__cvv');
    cvv.type = 'text';
    cvv.name = 'cvv';
    cvv.pattern = /^\d{0,3}$/g;
    cvv.setAttribute('maxlength', 3);
    cvv.title = 'enter 3 numbers only'
    cvv.required = true;

    formInputCvv.append(cvvLabel, cvv);

    cvv.addEventListener('input', () => {
        cvv.value = cvv.value.replace(/\D/g, '');
    });

    const formBtn = document.createElement('button');
    formBtn.classList.add('form__button');
    formBtn.textContent = 'CHECK OUT';
    formBtn.type = 'submit';

    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (holder.value.indexOf(' ') === -1) {
            alert('Card Holder should comtain name and surname');
            return
        };
        const dateMMYY = date.value;
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
        return
    });

    form.append(formInputHolder, formInputNumber, formInputDate, formInputCvv, formBtn);

    card.append(secure, creditCard, form);

    wrapper.append(card);
    document.body.append(wrapper);
};