
// type a1 = number
// type a2 = string;
// type a3 = boolean;
// type a4 = a1 extends number ? number:a2 extends string ? string: undefined 


// type sheikh = {
//     wife1: string;
//     wife2: string;
// }

// type propery<T> = T extends {wife1:string} ? true : false

// type checkWife = propery<sheikh>


// type bandhobi = "monica" | "rachel" | "phobi";

// type removeBandhobi<T,K> = T extends K ? never : T

// type currentBandhobi = removeBandhobi<bandhobi, "rachel">