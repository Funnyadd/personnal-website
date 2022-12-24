import React from 'react';
// import ContactForm from '../ContactForm'
import { AboutContainer } from '../About/AboutSection';
import { useStaticQuery, graphql } from "gatsby"
import { 
    // FormContainer, Map, Gradient, ContactCol, FormRow, 
    IconContainer, IconCol, IconRow, InfoPart, Info, InfoTitle, InfoLink, InfoLinkContainer, Icon } from './ContactSection';

const Contact = () => {
    const { strapiMyContact } = useStaticQuery(graphql`
        query {
            strapiMyContact {
                contacts {
                  title
                  value
                  textValue
                  source
                }
              }
        }
    `)
  return(
    <>
        <AboutContainer className='container'>
            <IconRow>
                {strapiMyContact.contacts.map((c, index) => {
                    var text = c.textValue;
                    if (c.textValue.includes("@")) {
                        text = text.slice(0, text.indexOf("@")) + 
                               "\u200B" + 
                               text.slice(text.indexOf("@"))
                    }
                    return(
                        <IconCol key={index} md={4}>
                            <InfoPart>
                                <IconContainer>
                                    <Icon src={c.source} alt={c.title}></Icon>
                                </IconContainer>
                                <Info>
                                    <InfoTitle>{c.title}</InfoTitle>
                                    <InfoLinkContainer>
                                        <InfoLink href={c.value}>{text}</InfoLink>
                                    </InfoLinkContainer>
                                </Info>
                            </InfoPart>
                        </IconCol>
                    )
                })}
            </IconRow>
        </AboutContainer>
    </>
  );
};

export default Contact;