// import { el, setChildren } from "redom";
import { el, setChildren } from '../node_modules/redom/dist/redom.es.js';

const CardRe = () => {
    const creditCard = el('div', el('p', 'Credit card...'));

    return el('div', { className: 'wrapper' }, [el('p', 'Secure Checkout'), creditCard]);
};

setChildren(document.body, CardRe());