import styled, { keyframes } from "styled-components"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const MoveUpDown = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
`

export const ArrowContainer = styled.a`
    height: 10vh;
`

export const ArrowIcon = styled(MdOutlineKeyboardDoubleArrowDown)`
    animation: ${MoveUpDown} 2s infinite;
`