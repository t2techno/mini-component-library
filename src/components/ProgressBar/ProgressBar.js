/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4 
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4
  },
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper role="progressbar" 
      aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}
      style={{
        '--height': styles.height + 'px', 
        '--padding': styles.padding + 'px',
        '--border-radius': styles.borderRadius + 'px'
    }}>
      <ProgressTrim>
        <Progress value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Progress>
      </ProgressTrim>  
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height);
  border-radius: 4px;
  padding: var(--padding);
  overflow: hidden;
`;

const ProgressTrim = styled.div`
  height: 100%;
  width: 100%; 
  overflow: hidden;
  border-radius: 4px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${p => (p.value)}%;
  background-color: ${COLORS.primary};
`

export default ProgressBar;
