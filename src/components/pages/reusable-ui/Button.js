import styled from "styled-components"
import { theme } from "../../../theme"
import Icon from "./Icon"

export default function Button({text,type}) {
    return (
        <ButtonStyled>
            <button type={type} className="button_submit">
                {text}
                <Icon iconName="MdOutlineKeyboardArrowRight" iconClassName="button-submit-icon"/>
            </button>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
    .button_submit {
        width: 100%;
        height: 65px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border:none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.background_button_submit};
        color: ${theme.colors.white};
        font-family: 'Open Sans', sans-serif;
        font-size: ${theme.fonts.P1};
        font-weight: ${theme.weights.bold};
    }
`