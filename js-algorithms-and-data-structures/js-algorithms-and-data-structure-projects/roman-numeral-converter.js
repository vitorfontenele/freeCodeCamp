function convertToRoman(num) {
 let units = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'};
 let tens = {10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC'};
 let hundreds = {100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM'};
 let thousands = {1000: 'M', 2000: 'MM', 3000: 'MMM'};

 let groupOfNumbers = [thousands, hundreds, tens, units];
 let romanForm = "";
 let copyOfNum = num;
 for (let i = 0; i < groupOfNumbers.length; i++){
   let currentGroup = groupOfNumbers[i];
   let baseOfGroup = Object.keys(currentGroup)[0];
   let intPart = parseInt(copyOfNum/baseOfGroup) * baseOfGroup;
   let romanPart = groupOfNumbers[i][intPart];
   romanForm += (!Boolean(romanPart) ? "" : romanPart);
   copyOfNum = copyOfNum - intPart;
 }

 return romanForm;
}

convertToRoman(1996);