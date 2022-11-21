import { BsPersonCircle } from 'react-icons/bs'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import styled from 'styled-components';
import { theme } from '../../../theme';


export default function Icon({iconName, iconClassName}) {

    switch (iconName) {
        case 'BsPersonCircle':
                return (
                    <IconStyled>
                        <span className={iconClassName}>
                            <BsPersonCircle />
                        </span>
                    </IconStyled>
                )
        case 'MdOutlineKeyboardArrowRight':
            return (
                <IconStyled>
                    <span className={iconClassName}>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                </IconStyled>
            )
        default:
            break;
    }
}

const IconStyled = styled.div`
    .button-submit-icon {
        display:block;
        font-size: ${theme.fonts.P3};
        padding-top:8px;
        padding-left: 8px;
    }
    .userPanel-icon {
        font-size: 43px;
        color:${theme.colors.greyDark};
        @media ${theme.devices.tablet} {
            font-size:${theme.fonts.P4};
        }
        @media ${theme.devices.mobileL} {
            font-size:${theme.fonts.P4};
        }
        @media ${theme.devices.mobileM} {
            font-size:${theme.fonts.P3};
        }
    }
`