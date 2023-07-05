import React from "react";
import styled from "styled-components";
import ImagePreview from "../../ImagePreview";
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

      <Inputs
        productSelected={productSelected}
        onChange={onChange}
        inputTitleRef={inputTitleRef}
        onBlur={handleClickOutside}
        ref={inputTitleRef}
      />
      <div className="form-footer">{children}</div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 70% 1fr;
  height: auto;
  width: 70%;
  grid-column-gap: 20px;
  padding-left: 73px;
  padding-top: 30px;
  .form-footer {
    display: grid;
    position: relative;
    top: 23px;
    grid-area: 2 / 2 / 3 / 3;
    align-items: center;
  }
`;
