import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    borderWidth: 1,
    height: 24
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    borderWidth: 2,
    height: 36
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <NativeInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height':styles.height + 'px',
          '--border-width': styles.borderWidth + "px",
          '--font-size': styles.fontSize/16 + "rem"
        }}
      ></NativeInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

const NativeInput = styled.input`
  padding-left: var(--height);
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;  
  height: var(--size);
`;

export default IconInput;