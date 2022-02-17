import React from 'react';
import ContactForm from '../ContactForm'
import { AboutContainer } from '../About/AboutSection';
import { FormContainer, Map, Gradient, ContactCol, FormRow, IconContainer, IconCol, IconRow, InfoPart } from './ContactSection';

const Contact = () => {
  return(
    <>
        <AboutContainer className='container'>
            <FormContainer>
                <FormRow>
                    <ContactCol md={6}>
                        <Gradient>
                            <ContactForm />
                        </Gradient>
                    </ContactCol>
                    <ContactCol md={6}>
                        <Map  
                            title="map"
                            src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Myriques%20Street%2C%20Saint-Hubert%2C%20Canada&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/>
                    </ContactCol>
                </FormRow>
            </FormContainer>
            {/* <IconRow>
                <IconCol md={4}>
                    <InfoPart>
                        <IconContainer>
                            <p>Hey</p>
                        </IconContainer>
                    </InfoPart>
                </IconCol>
            </IconRow> */}
        </AboutContainer>
    </>
  );
};

export default Contact;