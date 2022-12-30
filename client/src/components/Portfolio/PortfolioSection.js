import styled from "styled-components"

export const PortfolioContainer = styled.div`
    .slick-slide {
        display: block;
        margin: 0px 0 70px 0px;
    }

    .slick-dots {
        bottom: 0;

        li button:before,
        .slick-dots li.slick-active button:before {
            color: #04e5e5;
        }
    }
`
