import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

// add todo EventListener
button.addEventListener(

  'click',

  () => {

    // Ukoliko je input prazan - prekini izvrsavanje
    if (!input.value.trim()) return;

    // Kreiram payload
    const payload = { label: input.value, complete: false };

    console.log(payload);

    // resetujem input
    input.value = '';
  },

  false
  
);

todoList.addEventListener('click', function (event) {

  const target = event.target as HTMLButtonElement;

  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }

});
