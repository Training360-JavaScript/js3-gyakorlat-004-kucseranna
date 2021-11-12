const checkMac = (anyMac) => {
    const macRegExp = /^([0-9a-f]{2}[:-]){5}[0-9a-f]{2}$/i;
    return anyMac.match(macRegExp) ? true : false;
};
export default checkMac;



/*0.set up everything according to requirements
1. name parameter
2. MAC: 12 hexadecimal digits
3. nums0-9, chars a-f, case sensitive!
4. (2 digits + :)*5 + 2 digits more /i
5. return w/
6. validate macentry
7. true or false - ternary*/