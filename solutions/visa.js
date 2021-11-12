const checkVisa = creditCardNumber => {
    const cardRegExp = /^4\d{15}/;
    return creditCardNumber.match(cardRegExp) ? true : false;
}


export default checkVisa;

/* 0. set up all according to requirements
1. name parameter
2. regex: numbers only. ^, $
3. have to start with number four 4
4. followed by numbers only 15times {15}
5. return w/
6. validate ccnumber
7. true or false - ternary*/

