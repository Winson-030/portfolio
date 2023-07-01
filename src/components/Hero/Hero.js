import React, { useContext } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';
import { Context } from '../Context';

import language from '@/i18n';

const Hero = (props) => {

  const { isEng } = useContext(Context)
  const lang = language(isEng)


  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>

            {lang.intro.title}
          </SectionTitle>
          <SectionText>
            {lang.intro.desc}
          </SectionText>
          <Link href={lang.resumeURL}><Button>{lang.intro.resume}</Button></Link>
        </LeftSection>
      </Section>
    </>
  )
};


export default Hero;