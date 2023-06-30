import React,{useContext} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SiLeetcode } from 'react-icons/si';
import language from '@/constants/constants';
import { Context } from '../Context';
const Footer = () => {
  const { isEng } = useContext(Context);
  const lang = language(isEng)

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{lang.footer.website}</LinkTitle>
          <LinkItem href="https://winson.dev">winson.dev</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{lang.footer.emial}</LinkTitle>
          <LinkItem href="mailto:mail@winson.dev">
            mail@winson.dev
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{lang.footer.github}</LinkTitle>
          <LinkItem href="https://github.com/Winson-030">
            @winson030
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{lang.footer.slogan}</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Winson-030">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/winson-dev">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.cn/u/winson-030">
          <SiLeetcode size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;