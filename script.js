let arr = [
  4,
  5,
  -5556,
  155,
  640,
  "15x",
  6789,
  -5564,
  478,
  654,
  "obuolys",
  789,
  -51,
  55,
  -222,
  0,
  -357,
  -56,
  "trylika",
  444,
  7778,
  4154,
  4751,
];

// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// console.log(arr);

// 1.1. Pašalinti pirmą masyvo narį.
let task11 = arr.shift();
console.log(task11);

// 1.2. Pašalinti paskutinį masyvo narį.
let task12 = arr.pop();
console.log(task12);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let task13 = arr.splice(11, 1);
console.log(task13);

// 1.4. Pašalinti priešpaskutinį masyvo narį.
let task14 = arr.splice(21, 1);
console.log(task14);

// 1.5. Pašalinti antrą masyvo narį.
let task15 = arr.splice(1, 1);
console.log(task15);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
let task16 = arr.splice(6, 2);
console.log(task16);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
let task17 = arr.splice(3, 3);
console.log(task17);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
let task18 = arr.splice(2, 1, 888);
console.log(task18);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
let task19 = arr.splice(9, 1, 33, 789, 6543);
console.log(task19);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
let task110 = arr.splice(22, 1, 321, 654, 987);
console.log(task110);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
let task111 = arr.splice(1, 0, 11);
console.log(task111);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
let task112 = arr.splice(13, 0, 1);
console.log(task112);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
let task113 = arr.splice(22, 0, -1);
console.log(task113);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
let task114 = arr.splice(0, 0, 1, 2, 3);
console.log(task114);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
let task115 = arr.splice(23, 0, -333, -321, -312);
console.log(task115);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
let task116 = arr.splice(11, 1, 0);
console.log(task116);

// 1.17 Pašalinti pirmą masyvo narį.
let task117 = arr.shift();
console.log(task117);

// 1.18 Pašalinti paskutinį masyvo narį.
let task118 = arr.pop();
console.log(task118);

// 1.19. Į masyvo pradžią pridėti žodį "start".
let task119 = arr.unshift("start");
console.log(task119);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
let task120 = arr.push("end");
console.log(task120);

///['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr);
