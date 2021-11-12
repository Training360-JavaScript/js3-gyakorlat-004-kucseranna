import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";


const checker = {
    rules: {
        checkVisa,
        checkIP,
        checkMac
    },
    validate(str, pattern) {
        if (pattern === "visa") {
            return this.rules.checkVisa(str);
        } else if (pattern === "ip") {
            return this.rules.checkIP(str);
        } else {
            return this.rules.checkMac(str);
        }
    },
};
export default checker

/* 0. set up all according to requirements
1. import all three
2. create rules property
3. create validation method
4. use if, else if, else + this (eventhough I don't really understand)
5. but Gergő showed us this way (this is where I lost)
6. run it for all three
7. relax, mission accomplished.*/