const checkIP = (ip2bChecked) => {
    const ipRegExp = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ip2bChecked.match(ipRegExp) ? true : false;
};
export default checkIP




/*0.set up everything according to requirements
1. name parameter
2. IP: four octets, separated by periods, between 0-255
3. [0-9] {3} + one more _and_ \.
4. one octet: 250-555 or 200-249 or 0-199 \.
5. repeat 3x, plus one more w/o .
6. return w/
7. validate IPentry
8. true or false - ternary*/