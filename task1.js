const delay = ms => {
    return Promise.resolve(ms);
};

const logger = time => setTimeout(() => { console.log(`Resolved after ${time}ms`) }, time) ;


// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms