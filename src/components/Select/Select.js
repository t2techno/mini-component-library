import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <SelectedValue>{displayedValue}</SelectedValue>
      <IconWrapper style={{'--size': 24+'px'}}>
        <DownArrow id={"chevron-down"} size={24}></DownArrow>
      </IconWrapper>
    </Wrapper>
  );
};

const HiddenSelect = styled.select`
  position: absolute;
  appearance: none;
  -webkit-appearance: none;

  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  width: min-content;

  ${HiddenSelect}:focus & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectedValue = styled.p`
  white-space: nowrap;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const DownArrow = styled(Icon)`
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;  
  pointer-events: none;
`;

export default Select;
