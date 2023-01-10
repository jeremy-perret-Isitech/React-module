import styles from './BodyComponent.module.css';
import React, { Fragment } from "react"
import { Accordion } from '../../../shared/ressources/common/Accordion/Accordion/Accordion';
import { QuestionCourseComponent } from '../../QuestionCourse/QuestionCourseComponent';
import { questionCourseData } from '../../QuestionCourse/QestionCourseData';
import { expensesData } from '../../ExpensesComponent/ExpensesData';
import { ExpensesComponent } from '../../ExpensesComponent/ExpensesComponent';
import { AccordionBody } from '../../../shared/ressources/common/Accordion/AccordionBody/AccordionBody';
import { AccordionHead } from '../../../shared/ressources/common/Accordion/AccordionItem/AccordionHead';

export const BodyComponent = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <Accordion expended>
                    <AccordionHead>
                        <h1>Question course</h1>
                    </AccordionHead>
                    <AccordionBody expended>
                        <QuestionCourseComponent questionCourseData={questionCourseData} />
                    </AccordionBody>
                </Accordion>
                <Accordion>
                    <AccordionHead>
                        <h1>Expenses</h1>
                    </AccordionHead>
                    <AccordionBody>
                        <ExpensesComponent expensesData={expensesData} />
                    </AccordionBody>
                </Accordion>
            </div>
        </Fragment>
    )
}