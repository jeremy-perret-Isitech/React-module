import { findLargestNumber, sortWords, countOccurrences, flattenArray, removeDupes, parseObject, mergeObjects, sumArray, sortObject } from '../../shared/utils/common/calcNumber';

export const questionCourseData: Question[] = [
    {
        id: 1,
        title: "findLargestNumber",
        given: "Given : [77, 2, 89, 32]",
        expected: "Expected : 89",
        result: "Found : " + findLargestNumber([77, 2, 89, 32]).toString()
    },
    {
        id: 3,
        title: "sortWords",
        given: "Given : [\"Hello\", \"Velo\", \"Arbre\"]",
        expected: "Expected : [\"Arbre\", \"Hello\", \"Velo\"]",
        result: "Found : " + sortWords(["Arbre", "Hello", "Velo"]).toString()
    },
    {
        id: 16,
        title: "countOccurrences",
        given: "Given : \"Count 'r' in this phrase, and another r.\"",
        expected: "Expected : 4",
        result: "Found : " + countOccurrences("Count 'r' in this phrase, and another r.", "r").toString()
    },
    {
        id: 6,
        title: "flattenArray",
        given: "Given : [12, \"Hello\", [4]]",
        expected: "Expected : \"12Hello4\"",
        result: "Found : " + flattenArray([12, "Hello", [4]]).toString()
    },
    {
        id: 8,
        title: "removeDupes",
        given: "Given : [11, 34, 23, 4, 89, 34, 22, 22, 11]",
        expected: "Expected : 11342348922",
        result: "Found : " + removeDupes([11, 34, 23, 4, 89, 34, 22, 22, 11]).toString()
    },
    {
        id: 44,
        title: "parseObject",
        given: "Given : {a: 1, b: 2, c: 3 }",
        expected: "Expected : \"1, 2, 3\"",
        result: "Found : " + parseObject({a: 1, b: 2, c: 3 }).toString()
    },
    {
        id: 7,
        title: "mergeObjects",
        given: "Given : { a: 1, b: 2 }, { c: 3, d: 4 }",
        expected: "Expected : {\"a\": 1,\"b\": 2,\"c\": 3,\"d\": 4}",
        result: "Found : " + JSON.stringify(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))
    },
    {
        id: 9,
        title: "sumArray",
        given: "Given : [1, 2, 3, 4]",
        expected: "Expected : 10",
        result: "Found : " + sumArray([1, 2, 3, 4]).toString()
    },
    {
        id: 77,
        title: "sortObject",
        given: "Given : { b: 2, a: 1, c: 3 }",
        expected: "Expected : {\"a\": 1,\"b\": 2,\"c\": 3 }",
        result: "Found : " + JSON.stringify(sortObject({ b: 2, a: 1, c: 3 }))
    }
]

export default interface Question {
    id: number,
    title: string,
    given: string,
    expected: string,
    result: string,
}