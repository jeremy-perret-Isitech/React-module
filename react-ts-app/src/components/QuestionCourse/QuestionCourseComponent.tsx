import { formatClassList } from '../../shared/utils/common/styles';
import styles from './QuestionCourseComponent.module.css';
import { Grid } from '../../shared/ressources/common/Grid/Grid';
import { Card } from '../../shared/ressources/common/Card/Card';
import Question from './QestionCourseData';
import { useState } from 'react';

export const QuestionCourseComponent = (props: any) => {
    const [gridData, setGridData] = useState(props.questionCourseData);
    const classList = [''];

    return (
        <div className={formatClassList(styles, classList)}>
            <Grid>
                {
                    gridData.map((question: Question) => (
                        <Card key={question.id}>
                            <h2>{question.title}</h2>
                            <span>{question.given}</span>
                            <span>{question.expected}</span>
                            <span>{question.result}</span>
                        </Card>
                    ))
                }
            </Grid>
        </div>
    )
}