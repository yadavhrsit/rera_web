import React from 'react'
import { SectionContainer, SectionHeading, CardContentsWrapper, CardsGrid } from './styledComponents/StyledComponents'
import FaqItem from './FaqItem';

function FaqSection() {

    const Questions = [
        {
            question: 'Question 1',
            answer: 'Answer 1',
        },
        {
            question: 'Question 2',
            answer: 'Answer 2',
        },
        {
            question: 'Question 3',
            answer: 'Answer 3',
        },
        {
            question: 'Question 4',
            answer: 'Answer 4',
        },
        {
            question: 'Question 5',
            answer: 'Answer 5',
        },
        {
            question: 'Question 6',
            answer: 'Answer 6',
        },
        {
            question: 'Question 7',
            answer: 'Answer 7',
        },
        {
            question: 'Question 8',
            answer: 'Answer 8',
        },
        {
            question: 'Question 9',
            answer: 'Answer 9',
        },
        {
            question: 'Question 10',
            answer: 'Answer 10',
        },
    ];


    return (
        <SectionContainer greyBackground>
            <SectionHeading sx={{ mb: 3 }}>Frequently Asked Questions</SectionHeading>
            {
                Questions.map(({ question, answer }, index) => (
                    <FaqItem index={index} question={question} answer={answer} />
                ))
            }
        </SectionContainer>
    )
}

export default FaqSection