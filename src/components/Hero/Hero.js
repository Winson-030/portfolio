import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        I am Winson Lee <br />
          Welcome To My Website
        </SectionTitle>
        <SectionText>
        I am a full-stack developer currently living in Guangzhou,China. Also a big fan of Linux and I LOVE open-source software and community. Outside of programming I work as a model in a art academy. <i>I am looking for a job as a software developer, ideally working remotely.</i> Resume is below, feel free to contact me via email if you are interested.
        </SectionText>
        <Button onClick={props.handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;