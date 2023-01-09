import styles from './BodyComponent.module.css';
import React, { Fragment } from "react"
import { Card } from '../../../shared/ressources/common/card/Card';
import { Grid } from '../../../shared/ressources/common/Grid/Grid';
import { findLargestNumber, sortWords, countOccurrences, flattenArray, removeDupes, parseObject, mergeObjects, sumArray, sortObject } from '../../../shared/utils/common/calcNumber';

export const BodyComponent = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <h1>Question course</h1>
                <Grid>
                    <Card hover-animated>
                        <h2>findLargestNumber</h2>
                        <span>Given : [77, 2, 89, 32]</span>
                        <span>Expected : 89</span>
                        <span>Result : {findLargestNumber([77, 2, 89, 32])}</span>
                    </Card>
                    <Card>
                        <h2>sortWords</h2>
                        <span>Given : ["Hello", "Velo", "Arbre"]</span>
                        <span>Expected : ["Arbre", "Hello", "Velo"]</span>
                        <span>Result : {sortWords(["Hello", "Velo", "Arbre"])}</span>
                    </Card>
                    <Card>
                        <h2>countOccurrences</h2>
                        <span>Given : "Count 'r' in this phrase, and another r."</span>
                        <span>Expected : 4</span>
                        <span>Result : {countOccurrences("Count 'r' in this phrase, and another r.", "r")}</span>
                    </Card>
                    <Card>
                        <h2>flattenArray</h2>
                        <span>Given : [12, "Hello", [4]]</span>
                        <span>Expected : [12, "Hello", 4]</span>
                        <span>Result : {flattenArray([12, "Hello", [4]])}</span>
                    </Card>
                    <Card>
                        <h2>removeDupes</h2>
                        <span>Given : [11, 34, 23, 4, 89, 34, 22, 22, 11]</span>
                        <span>Expected : [11, 34, 23, 4, 89, 22]</span>
                        <span>Result : {removeDupes([11, 34, 23, 4, 89, 34, 22, 22, 11])}</span>
                    </Card>
                    <Card>
                        <h2>parseObject</h2>
                        <span>Given : {'{a: 1, b: 2, c: 3 }'}</span>
                        <span>Expected : [1, 2, 3]</span>
                        <span>Result : {parseObject({ a: 1, b: 2, c: 3 }).toString()}</span>
                    </Card>
                    <Card>
                        <h2>mergeObjects</h2>
                        <span>Given : {'{ a: 1, b: 2 }, { c: 3, d: 4 }'}</span>
                        <span>Expected : {'{ a: 1, b: 2, c: 3, d: 4 }'}</span>
                        <span>Result : {JSON.stringify(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))}</span>
                    </Card>
                    <Card>
                        <h2>sumArray</h2>
                        <span>Given : [1, 2, 3, 4]</span>
                        <span>Expected : 10</span>
                        <span>Result : {sumArray([1, 2, 3, 4])}</span>
                    </Card>
                    <Card>
                        <h2>sortObject</h2>
                        <span>Given : {'{ b: 2, a: 1, c: 3 }'}</span>
                        <span>Expected : {'{ a: 1, b: 2, c: 3 }'}</span>
                        <span>Result : {JSON.stringify(sortObject({ b: 2, a: 1, c: 3 }))}</span>
                    </Card>
                </Grid>
            </div>
        </Fragment>
    )
}