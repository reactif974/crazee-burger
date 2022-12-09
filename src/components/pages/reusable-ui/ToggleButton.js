import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components/macro";
import { theme } from "../../../theme";
import Toast from "./Toast";

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "DÉSACTIVER LE MODE ADMIN",
  labelIfUnchecked = "ACTIVER LE MODE ADMIN",
}) {
  useEffect(() => {
    if (!isChecked) {
      toast.dismiss();
    }
  }, [isChecked]);

  // Toast notify params
  const toastNotify = () => {
    toast.info("Mode admin activé!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
      theme: "dark",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <ToggleButtonStyled>
      <input
        type="checkbox"
        className="toggle"
        id="rounded"
        checked={isChecked}
        onChange={onToggle}
        onClick={!isChecked ? toastNotify : null}
      />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
      <Toast />
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.div`
  display: flex;
  margin-right: 50px;
  font-family: "Open Sans", sans-serif;
  input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${theme.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;
    }

    // the small round circle
    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;
    }

    // text inside the switch button (for checked and unchecked)
    &.toggle + label:after {
      /* border: 1px solid blue; */
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    // outside box
    &.toggle + label.rounded {
      border-radius: 30px;
    }

    // small circle
    &.toggle + label.rounded:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      background-color: ${theme.colors.background_dark};
      /* text-align: right; */
    }

    // text label when not checked
    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
    }

    // small circle when not checked
    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${theme.colors.primary};
    }

    // box container when checked
    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary};
    }

    // label text when checked
    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.dark};
      letter-spacing: 0px;
    }

    // small circle when checked
    &.toggle:checked + label:before {
      left: 162px;
      background-color: ${theme.colors.primary};
    }
  }
`;
