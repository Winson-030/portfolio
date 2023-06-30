import React,{useContext} from "react";

import { Section, SectionDivider, SectionTitle } from "@/styles/GlobalComponents";
import { BoxNum, BoxText, Boxes, Box } from "./AccompolishmentsStyles";

import language from "@/constants/constants";
import { Context } from '../Context';



const Accomplishments = () => {
    const { isEng } = useContext(Context);
    const lang = language(isEng)
    const data = lang.data;
    return (
        <Section>
        <SectionTitle>
           {lang.achievements}
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
    )
}

   




export default Accomplishments;