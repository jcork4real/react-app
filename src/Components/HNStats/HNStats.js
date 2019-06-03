import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { withRouter } from 'react-router-dom';

//Import components
import LineChartDark from '../Chart/HNStatsLineChartDark';

//Import colors
import { dtWhiteFont, dtDarkBlue, ltBlackFont, ltWhite } from '../../colors.js';

//Default export, exported at the bottom with withRouter
function HackerPage(props) {
  return (
    <SDHackerPageEnvContainer>
      <SDHackerPageContainer>
        <SDHackerPageHeading>HN stats</SDHackerPageHeading>
        <LineChartDark />
      </SDHackerPageContainer>
    </SDHackerPageEnvContainer>
  );
}

//Theming
const textColor = theme('mode', {
  light: ltBlackFont,
  dark: dtWhiteFont
});

const backgroundColor = theme('mode', {
  light: ltWhite,
  dark: dtDarkBlue
});

//Styled components
const SDHackerPageEnvContainer = styled.div`
  /*themed*/
  color: ${textColor};
  background-color: ${backgroundColor};
  /*non-themed*/
  width: 100vw;
  height: auto;
  min-height: 90vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const SDHackerPageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div.focus,
  div:focus {
    outline: 0;
    box-shadow: none !important;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
`;

const SDHackerPageHeading = styled.div`
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0.05rem;
  margin: 5vh 0 0 0;
  padding: 70px 0 50px 0;
  text-align: center;
  @media (max-width: 600px) {
    margin: 5vh 0 0 0;
  }
`;

export default withRouter(HackerPage);