/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { DiReact } from 'react-icons/di';
import { FaDocker, FaJava } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Context } from '../Context';
import language from '@/i18n';
const Technologies = () => {

  const { isEng } = useContext(Context);
  const lang = language(isEng)

  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>{lang.header.technologies}</SectionTitle>
      <SectionText>
        {lang.technologiesDesc}
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="5rem" />
          </picture>
          <ListContainer>
            <ListTitle>{lang.frontend.title}</ListTitle>
            <ListParagraph>
              {lang.frontend.desc}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <FaJava size="5rem" />
          </picture>
          <ListContainer>
            <ListTitle>{lang.backend.title}</ListTitle>
            <ListParagraph>
              {lang.backend.desc}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <FaDocker size="5rem" />
          </picture>
          <ListContainer>
            <ListTitle>{lang.devops.title}</ListTitle>
            <ListParagraph>
              {lang.devops.desc}
            </ListParagraph>
          </ListContainer>
        </ListItem>

      </List>
      <SectionDivider colorAlt />
    </Section>
  )
}


export default Technologies;