import Accordion from "react-bootstrap/Accordion"
import styled from "styled-components"

export const SemesterContainer = styled(Accordion.Item)`
    text-align: center;
    color: #fff;
    padding: 1px;
    background-color: #000 !important;
    border: 2px solid #212529;
    border-bottom: 0;
`

export const Title = styled(Accordion.Header)`
    text-align: left;
    align-items: center;
`

export const Courses = styled(Accordion.Body)`
`

export const ActiveSemester = styled.div`
    color: rgb(12, 148, 0);
    align-items: center;
`

export const InternshipSemester = styled.div`
    color: rgb(63, 142, 222);
    align-items: center;
`

export const SpecialSemesterSeperator = styled.div`
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    align-items: center;

    @media screen and (max-width: 550px) {
        visibility: hidden;
        width: 0;
        padding: 0;
    }
`