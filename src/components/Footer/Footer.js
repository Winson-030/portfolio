import React, { useContext } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SiLeetcode } from 'react-icons/si';
import { language ,customUrl} from '@/i18n';
import { Context } from '../Context';
const Footer = () => {
  const { isEng } = useContext(Context);
  const lang = language(isEng);

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{lang.footer.website}</LinkTitle>
          <LinkItem href={customUrl.website_url}>{lang.footer.websitedesc}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{lang.footer.email}</LinkTitle>
          <LinkItem href={customUrl.email_url}>
            {lang.footer.emaildesc}
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{lang.footer.github}</LinkTitle>
          <LinkItem href={customUrl.github_url}>
           {lang.footer.githubdesc}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{lang.footer.slogan}</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={customUrl.github_url}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={customUrl.linkdin_url}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={customUrl.leetcode_url}>
            <SiLeetcode size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;