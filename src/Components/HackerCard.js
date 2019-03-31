import React from 'react';
import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';

export default class HackerCard extends React.Component {
  render() {
    return (
      <SDHackerCard>
        {this.props.data.total_saltiness_overall && <SDRowRank>{this.props.data.rank_saltiest_trolls}</SDRowRank>}
        {this.props.data.rank_lifetime_QTY_salty_comments && <SDRowRank>{this.props.data.rank_lifetime_QTY_salty_comments}</SDRowRank>}
        <SDRowCommentor>{this.props.data.commentor}</SDRowCommentor>
        <SDRowComments>123 Comments</SDRowComments>
        {this.props.data.count_saltiness_salty && <SDRowSaltiness>{this.props.data.count_saltiness_salty.toLocaleString()} salty comments</SDRowSaltiness>}
        {this.props.data.total_saltiness_overall && (
          <SDRowChart>
            <Progress id="SDProgressChart" percent={Math.abs(this.props.data.total_saltiness_overall.toFixed(2))} error />
          </SDRowChart>
        )}
        {this.props.data.total_saltiness_overall && <SDRowSaltiness>{this.props.data.total_saltiness_overall.toFixed(2)}</SDRowSaltiness>}
      </SDHackerCard>
    );
  }
}

const SDHackerCard = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SDRowRank = styled.div`
  width: 10%;
`;

const SDRowCommentor = styled.div`
  width: 20%;
`;

const SDRowComments = styled.div`
  width: 20%;
`;

const SDRowSaltiness = styled.div`
  width: 5%;
`;

const SDRowChart = styled.div`
  width: 20%;
  height: 30%;
  margin: 0;
  .ui.progress .bar {
    height: inherit;
    min-width: 0;
    border-radius: 0 10px 10px 0px;
  }
  .ui.progress {
    background-color: #f8f9fa;
  }
  #SDProgressChart {
    margin: 0;
    font-size: 1rem;
    border-radius: 10px;
    height: 100%;
  }
`;
