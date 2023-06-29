import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
       Hola! <br />
          Welcome To My Website
        </SectionTitle>
        <SectionText>
        I am Winson Lee, a full-stack developer currently living in Guangzhou,China. Also a big fan of Linux and I <strong>LOVE</strong> open-source software and community. Outside of programming I work as a model in a art academy. <i> Now I am looking for a job as a software developer, ideally working remotely.</i> Resume is below, feel free to contact me via email if you are interested.
        </SectionText>
       <Link href='https://youtube.com'><Button onClick={props.handleClick}>Resume</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;