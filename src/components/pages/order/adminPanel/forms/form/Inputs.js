import React from "react";
import styled from "styled-components";
import { getInputTextConfig } from "../../inpuTextConfig";
import TextInput from "../../../../reusable-ui/TextInput";

export const Inputs = React.forwardRef(
  ({ productSelected, onChange, onBlur }, ref) => {
    const inputTexts = getInputTextConfig(productSelected);
    return (
      <InputsStyled>
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              key={input.id}
              Icon={input.Icon}
              name={input.name}
              value={input.value}
              onChange={onChange}
              placeholder={input.placeholder}
              variant={input.variant}
              ref={input.name === "title" ? ref : null}
              onBlur={onBlur}
            />
          );
        })}
      </InputsStyled>
    );
  }
);

export default Inputs;

const InputsStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
`;
