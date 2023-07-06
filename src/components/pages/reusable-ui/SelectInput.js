import styled from "styled-components";
import { theme } from "../../../theme";

export default function SelectInput({
  options,
  value,
  name,
  Icon,
  className,
  onChange,
  ...restProps
}) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select name={name} value={value} onChange={onChange} {...restProps}>
        {options.map(({ optionValue, label }) => (
          <option key={label} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  background-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex;
  }

  select {
    background-color: ${theme.colors.greyLight};
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`;
