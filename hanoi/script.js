function hanoi (q, from, to, buf){
    if(q!==0){
hanoi(q-1, from, buf, to);
console.log(` ${from} >>> ${to}`);
hanoi(q-1, buf, to, from);
    }
}
hanoi(3, 1, 3, 2);