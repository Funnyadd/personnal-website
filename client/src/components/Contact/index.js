import React from 'react';
// import ContactForm from '../ContactForm'
import { AboutContainer } from '../About/AboutSection';
import { 
    // FormContainer, Map, Gradient, ContactCol, FormRow, 
    IconContainer, IconCol, IconRow, InfoPart, Info, InfoTitle, InfoLink, InfoLinkContainer, Icon } from './ContactSection';

const Contact = () => {
  return(
    <>
        <AboutContainer className='container'>
            {/* <FormContainer>
                <FormRow>
                    <ContactCol md={6}>
                        <Gradient>
                            <ContactForm />
                        </Gradient>
                    </ContactCol>
                    <ContactCol md={6}>
                        <Map  
                            title="map"
                            src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Saint-Hubert%2C%20Canada&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed"/>
                    </ContactCol>
                </FormRow>
            </FormContainer> */}
            <IconRow>
                <IconCol md={4}>
                    <InfoPart>
                        <IconContainer>
                            <Icon src="./icons-contact/email.png" alt="email"></Icon>
                        </IconContainer>
                        <Info>
                            <InfoTitle>Email</InfoTitle>
                            <InfoLinkContainer>
                                <InfoLink href='mailto:mihajlovicadam@gmail.com'>mihajlovicadam&#8203;@gmail.com</InfoLink>
                            </InfoLinkContainer>
                        </Info>
                    </InfoPart>
                </IconCol>
                <IconCol md={4}>
                    <InfoPart>
                        <IconContainer>
                            <Icon src="./icons-contact/phone.png" alt="phone"></Icon>
                        </IconContainer>
                        <Info>
                            <InfoTitle>Phone</InfoTitle>
                            <InfoLinkContainer>
                                <InfoLink href='tel:5145169166'>(514) 516-9166</InfoLink>
                            </InfoLinkContainer>
                        </Info>
                    </InfoPart>
                </IconCol>
                <IconCol md={4}>
                    <InfoPart>
                        <IconContainer>
                            <Icon src="./icons-contact/map.png" alt="map"></Icon>
                        </IconContainer>
                        <Info>
                            <InfoTitle>Address</InfoTitle>
                            <InfoLinkContainer>
                                <InfoLink href='https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Saint-Hubert%2C%20Canada&amp;ie=UTF8&amp;t=&amp;iwloc=B'>Saint-Hubert Quebec, Canada</InfoLink>
                            </InfoLinkContainer>
                        </Info>
                    </InfoPart>
                </IconCol>
            </IconRow>
        </AboutContainer>
    </>
  );
};

export default Contact;