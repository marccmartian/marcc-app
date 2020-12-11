import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FooterContact,
  FooterContainer,
  FooterCopy,
  FooterSocial,
  FooterSocialLink,
  FooterWrap,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <FooterContact>
          <div>
            <p>
              <MdEmail style={{ marginRight: ".5rem" }} />{" "}
              marvincarrascoc@yahoo.com
            </p>
            <p>
              <FaMapMarkerAlt style={{ marginRight: ".5rem" }} /> Lima, Perú
            </p>
          </div>
        </FooterContact>

        <FooterSocial>
          <FooterSocialLink
            href="https://www.linkedin.com/in/marvin-carrasco"
            target="_blank"
            className="linkedin"
          >
            <FaLinkedin />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://github.com/marccmartian"
            target="_blank"
            className="github"
          >
            <FaGithub />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://www.facebook.com/marvin.carrasco/"
            target="_blank"
            className="facebook"
          >
            <FaFacebook />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://www.instagram.com/marccmartian/"
            target="_blank"
            className="instagram"
          >
            <FaInstagramSquare />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://youtube.com/channel/UCgcMcl1HqbQ5a1mSWXo_whA"
            target="_blank"
            className="youtube"
          >
            <FaYoutube />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://twitter.com/MarccMartian"
            target="_blank"
            className="twitter"
          >
            <FaTwitter />
          </FooterSocialLink>
        </FooterSocial>
      </FooterWrap>
      <FooterCopy>
        <p>© Copyright {new Date().getFullYear()} All rights reserved</p>
        <p style={{ fontSize: ".8rem" }}>Marcc | Marvin Carrasco Cruz</p>
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
