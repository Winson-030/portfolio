import Link from 'next/link';
import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiGoogletranslate } from 'react-icons/si';
import { Context } from '../Context';
import { language, customUrl } from '@/i18n';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';



const Header = () => {
  const { isEng, setIsEng } = useContext(Context);

  const lang = language(isEng)

  const handleLang = () => {
    setIsEng(!isEng);
  }
  return (

    <Container>
      <Div1>
        <Link href="/">
          <div style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <DiCssdeck size="5rem" /> <NavLink>{lang.site_name}</NavLink>
          </div>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>{lang.header.projects}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>{lang.header.technologies}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>{lang.header.about}</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons onClick={handleLang}>
          <SiGoogletranslate />
        </SocialIcons>
        <SocialIcons href={customUrl.github_url}>
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons href={customUrl.linkdin_url}>
          <AiFillLinkedin />
        </SocialIcons>
      </Div3>
    </Container>
  )
};



export default Header;