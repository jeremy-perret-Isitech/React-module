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

