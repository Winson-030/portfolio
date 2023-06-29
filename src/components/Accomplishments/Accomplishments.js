import React from "react";

import { Section, SectionDivider, SectionTitle } from "@/styles/GlobalComponents";
import { BoxNum, BoxText, Boxes, Box } from "./AccompolishmentsStyles";




const data = [
    { number: 1, text: 'Github PR I contributed', },
    { number: 2, text: 'Open Source Projects' },
    { number: 300, text: 'People I helped to solve network and device issues', },
    { number: 600, text: 'Days of programming career', },
];


const Accomplishments = () => (

    <Section>
        <SectionTitle>
            Personal Achievements
        </SectionTitle>
        <Boxes>
            {data.map((card,index) => (
            <Box key={index}>
                <BoxNum>{`${card.number}+`}</BoxNum>
                <BoxText>{card.text}</BoxText>
            </Box>
            ))}
        </Boxes>
        <SectionDivider />
    </Section>
);



export default Accomplishments;