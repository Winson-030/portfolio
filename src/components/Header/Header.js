import Link from 'next/link';
import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiLeetcode, SiGoogletranslate } from 'react-icons/si';
import { Context } from '../Context';
import language from '@/i18n';

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
            <DiCssdeck size="5rem" /> <NavLink>Winson Lee</NavLink>
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
          <SiGoogletranslate size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/Winson-030">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/winson-dev">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>



      </Div3>
    </Container>
  )
};



export default Header;