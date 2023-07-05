import React from "react";
import styled from "styled-components";
import ImagePreview from "../../ImagePreview";
import { theme } from "../../../../../../theme";
import Inputs from "./Inputs";

export default function Form({
  productSelected,
  onChange,
  handleClickOutside,
  inputTitleRef,
  children,
  onSubmit,
}) {
  return (
    <FormStyled action="submit" onSubmit={onSubmit}>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="inputs-container">
        <Inputs
          productSelected={productSelected}
          onChange={onChange}
          inputTitleRef={inputTitleRef}
          onBlur={handleClickOutside}
          ref={inputTitleRef}
        />
        <div className="form-footer">{children}</div>
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: auto;
  width: 70%;
  grid-column-gap: 20px;
  padding-left: 73px;
  padding-top: 30px;
  .form-footer {
    padding-top: 13px;
  }
`;
