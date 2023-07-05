import React from "react";
import styled from "styled-components/macro";
import { getInputSelectConfig, getInputTextConfig } from "../../inpuTextConfig";
import TextInput from "../../../../reusable-ui/TextInput";
import SelectInput from "../../../../reusable-ui/SelectInput";

export const Inputs = React.forwardRef(
  ({ productSelected, onChange, onBlur }, ref) => {
    const inputTexts = getInputTextConfig(productSelected);
    const inputSelects = getInputSelectConfig(productSelected);
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
              className={input.className}
            />
          );
        })}
        {inputSelects.map((inputSelect) => {
          return (
            <SelectInput
              {...inputSelect}
              key={inputSelect.id}
              onChange={onChange}
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
  grid-template-areas:
    "title title title"
    "image-source image-source image-source"
    "price is-available is-publicised";
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 12px;
  grid-column-gap: 8px;

  .title {
    grid-area: title;
  }
  .image-source {
    grid-area: image-source;
  }
  .price {
    grid-area: price;
  }
  .is-available {
    grid-area: is-available;
  }
  .is-publicised {
    grid-area: is-publicised;
  }
`;
