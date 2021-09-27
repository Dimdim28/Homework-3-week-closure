'use strict';


const seqTest = (f) => {
    return (g) => {            // основной способ использования замыкания функций
        return g*2 + f;
        
}
}
console.log(seqTest(7)(5));

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x)))); // создаем сложную функцию f(g(x)) с передаваемыми параметрами-функциями f и g

let a = seq(x => x + 7)
   (x => x * 2)(5)    // вместо f  х = х + 7; вместо g х = 2 * х;  вместо х подставили 5
console.log(a);
module.exports = { seq };
