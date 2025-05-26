import { expect, test } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    let result = 0;
    //    let romanNumber : string[]= ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    const romanNumberKey: { [key: string]: number } = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };

    // if (value === 'I') return 1;
    // if (value === 'IV') return 4;
    // if (value === 'V') return 5;
    // if (value === 'X') return 10;
    // if (value === 'L') return 50;
    // if (value === 'C') return 100;
    // if (value === 'D') return 500;
    // if (value === 'M') return 1000;

    for (let i = 0; i < value.length; i++) {
        // on prend ici le premier caratère 
        let romanNumberCurrent = romanNumberKey[value[i]];
        // ici le caractere suivant 
        let romanNumberNext = romanNumberKey[value[i+1]];

        // on compare les valeurs des deux caracteres 
        if(romanNumberCurrent < romanNumberNext){
            // si le caractere suivant est plus grand, on soustrait
            // par exemple I:1 et V:5 donc 5-1=4 
            result = romanNumberNext - romanNumberCurrent;
          i++;  
            
        }
        else {
            // sinon on ajoute la valeur du caractere actuelle 
            result +=romanNumberCurrent;
        }
     
    }

    return result;
  }
}

test.each([
  ['I', 1],
  ['II', 2],
  ['IV', 4],
  ['V', 5],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
])('%s should give %s', (input, expected) => {
  console.log(input, expected);
  expect(new RomanNumeral().of('I')).toBe(1);
  expect(new RomanNumeral().of('II')).toBe(2);
  expect(new RomanNumeral().of('IV')).toBe(4);
  expect(new RomanNumeral().of('V')).toBe(5);
  expect(new RomanNumeral().of('X')).toBe(10);
  expect(new RomanNumeral().of('L')).toBe(50);
  expect(new RomanNumeral().of('C')).toBe(100);
  expect(new RomanNumeral().of('D')).toBe(500);
  expect(new RomanNumeral().of('M')).toBe(1000);
});
