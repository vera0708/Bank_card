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
    holder.placeholder = "Surname Name";
    formInputHolder.append(holderLabel, holder);

    const formInputNumber = document.createElement('div');
    formInputNumber.classList.add('form__input-wrap', 'form__input-wrap_number');

    const numberLabel = document.createElement('label');
    numberLabel.classList.add('form__label', 'form__number-label');
    numberLabel.textContent = 'Card Number';

    const number = document.createElement('input');
    number.classList.add('input', 'input__number');
    number.type = 'text';
    number.name = 'number';
    form.setAttribute('id', 'cardNumber');
    number.required = true;
    number.placeholder = "Card Number";
    formInputNumber.append(numberLabel, number);

    const formInputDate = document.createElement('div');
    formInputDate.classList.add('form__input-wrap', 'form__input-wrap_date');

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('form__label', 'form__date-label');
    dateLabel.textContent = 'Card Expiry';

    const date = document.createElement('input');
    date.classList.add('input', 'input__date');
    date.type = 'text';
    date.name = 'date';
    date.required = true;
    formInputDate.append(dateLabel, date);

    const formInputCvv = document.createElement('div');
    formInputCvv.classList.add('form__input-wrap', 'form__input-wrap_cvv');

    const cvvLabel = document.createElement('label');
    cvvLabel.classList.add('form__label', 'form__cvv-label');
    cvvLabel.textContent = 'CVV';

    const cvv = document.createElement('input');
    cvv.classList.add('input', 'input__cvv');
    cvv.type = 'text';
    cvv.name = 'cvv';
    cvv.required = true;
    formInputCvv.append(cvvLabel, cvv);
    /* <button class=""></button>
     */

    const formBtn = document.createElement('button');
    formBtn.classList.add('form__button');
    formBtn.textContent = 'CHECK OUT';
    formBtn.type = 'submit';

    form.append(formInputHolder, formInputNumber, formInputDate, formInputCvv, formBtn);

    card.append(secure, creditCard, form);

    wrapper.append(card);
    document.body.append(wrapper);
};

/*
 <div class="wrapper">
    <div class="card">
      </div>

      <form action="#" class="form" id="form">

      
      </form>
    </div>
  </div> 
 */