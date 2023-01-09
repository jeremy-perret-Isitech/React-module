export const findLargestNumber = (numberArray: number[]): number => Math.max(...numberArray);
export const sortWords = (stringArray: string[]): string[] => stringArray.sort();
export const countOccurrences = (word: string, letter: string): number => {
    let occurence: number = 0;
    for (const value of word) {
        if (value === letter) {
            occurence += 1;
        }
    }
    return occurence;
}
export const flattenArray = (arrayObject: [any][any]): any[] => {
    return [...arrayObject].flat();
}
export const removeDupes = (numberArray: number[]): number[] => {
    let newArray: number[] = [];
    numberArray.forEach(number => { if (!newArray.includes(number)) { newArray.push(number) } });
    return newArray;
}
export const swapVariables = (x: any, y: any): [any, any] => {
    const a = x;
    return [x = y, a];
}
export const parseObject = (object: Object): Object => Object.values(object);
export const mergeObjects = (object1: Object, object2: Object): Object => Object.assign({ ...object1, ...object2 });
export const sumArray = (object: number[]): number => object.reduce((number1, number2) => number1 + number2);
export const sortObject = (object: any) => Object.keys(object)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: object[key]
    }), {})


console.log('findLargestNumber :');
console.log('Given : [77, 2, 89, 32]');
console.log('Expected : 89');
console.log(findLargestNumber([77, 2, 89, 32]));
console.log('');
console.log('sortWords :');
console.log('Given : ["Hello", "Velo", "Arbre"]');
console.log('Expected : ["Arbre", "Hello", "Velo"]');
console.log('sortWords : ', sortWords(["Hello", "Velo", "Arbre"]));
console.log('');
console.log('countOccurrences :');
console.log('Given : "Count \'r\' in this phrase, and another r", "r"');
console.log('Expected : 4');
console.log('countOccurrences : ', countOccurrences("Count 'r' in this phrase, and another r", "r"));
console.log('');
console.log('flattenArray :');
console.log('Given : [12, "Hello", [4]]');
console.log('Expected : [12, "Hello", 4]');
console.log('flattenArray : ', flattenArray([12, "Hello", [4]]));
console.log('');
console.log('removeDupes :');
console.log('Given : [11, 34, 23, 4, 89, 34, 22, 22, 11]');
console.log('Expected : [11, 34, 23, 4, 89, 22]');
console.log('removeDupes : ', removeDupes([11, 34, 23, 4, 89, 34, 22, 22, 11]));
console.log('');
console.log('parseObject :');
console.log('Given : { a: 1, b: 2, c: 3 }');
console.log('Expected : [1, 2, 3]');
console.log('parseObject : ', parseObject({ a: 1, b: 2, c: 3 }));
console.log('');
console.log('mergeObjects :');
console.log('Given : { a: 1, b: 2 }, { c: 3, d: 4 }');
console.log('Expected : {a: 1, b: 2, c: 3, d: 4}');
console.log('mergeObjects : ', mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log('');
console.log('sumArray :');
console.log('Given : [1, 2, 3, 4]');
console.log('Expected : 10');
console.log('sumArray : ', sumArray([1, 2, 3, 4]));
console.log('');
console.log('sortObject :');
console.log('Given : { b: 2, a: 1, c: 3 }');
console.log('Expected : { a: 1, b: 2, c: 3 }');
console.log('sortObject : ', sortObject({ b: 2, a: 1, c: 3 }));

