const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function ticketPrice(category) {
  switch (category) {
    case 1:
      return 300;
    case 2:
      return 500;
    case 3:
      return 900;
    default:
      return 0;
  }
}
function maxTickets(budget, price) {
  let count = 0;
  while (budget >= price) {
    budget -= price;
    count++;
  }
  return count;
}

function printTicketResult(category, budget) {
  const price = ticketPrice(category);
  if (price === 0) {
    console.log('неизвестная категория');
    return;
  }
  const count = maxTickets(budget, price);
  console.log(`Категория ${category}, билет ${price} руб., бюджет ${budget} руб.: можно купить ${count} шт.`);
}

function deliveryPrice(distance, total) {
  if (total >= 3000) {
    return 0;
  } else if (distance <= 3) {
    return 0;
  } else if (distance <= 10) {
    return 200;
  } else {
    return 200 + (distance - 10) * 25;
  }
}

function printDelivery(distance, total) {
  const price = deliveryPrice(distance, total);
  console.log(`Расстояние ${distance} км, заказ ${total} руб.: доставка ${price} руб.`);
}

function printSteps(height) {
  let builtCount = 0;

  for (let i = 1; i <= height; i++) {
    if (i === 4) {
      continue; // 
    }
    console.log(`Ступень ${i}`);
    builtCount++;
    if (i === 10) {
      console.log('Дальше лестница не построена');
      break; // 
    }
  }
  console.log(`Всего построено: ${builtCount}`);
}

console.log('Выберите задачу:');
console.log('1 — билетная касса');
console.log('2 — доставка заказа');
console.log('3 — лестница');
console.log('Ваш выбор:');
rl.on('line', (input) => {
  const choice = parseInt(input, 10);

  switch (choice) {
    case 1:
      rl.question('Категория билета: ', (categoryInput) => {
        const category = parseInt(categoryInput, 10);
        rl.question('Бюджет: ', (budgetInput) => {
          const budget = parseInt(budgetInput, 10);
          printTicketResult(category, budget);
          rl.close();
        });
      });
      break;

    case 2:
      rl.question('Расстояние: ', (distanceInput) => {
        const distance = parseInt(distanceInput, 10);
        rl.question('Сумма заказа: ', (totalInput) => {
          const total = parseInt(totalInput, 10);
          printDelivery(distance, total);
          rl.close();
        });
      });
      break;

    case 3:
      rl.question('Высота лестницы: ', (heightInput) => {
        const height = parseInt(heightInput, 10);
        printSteps(height);
        rl.close();
      });
      break;

    default:
      console.log('такой задачи нет');
      rl.close();
  }
});