
import { React, useContext } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import language from '@/i18n';
import { Context } from '../Context';


const Projects = () => {

  const { isEng } = useContext(Context);

  const lang = language(isEng);
  const projects = lang.projects;
  const card = lang.card;
  return (

    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>{lang.header.projects}</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>{card.stack}</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>{card.demo}</ExternalLinks>
                <ExternalLinks href={p.source}>{card.code}</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  )
}




export default Projects;