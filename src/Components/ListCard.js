import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ListCard(props) {
  return (
    <SDListCard>
      <Link to={`/${props.linkDestination}`} style={{ textDecoration: 'none' }}>
        <SDCardIcons className={`${props.color} fas fa-stream`} />
        <SDCardHeading>{props.content}</SDCardHeading>
      </Link>
    </SDListCard>
  );
}

const SDListCard = styled.div`
  width: 30%;
  height: 50%;
  background-color: white;
  position: relative;
  cursor: pointer;
  .blue {
    color: #4263eb;
    background-color: #4263eb1a;
  }
  .green {
    color: #74b816;
    background-color: #74b8161a;
  }
  .orange {
    color: #f59f00;
    background-color: #f59f001a;
  }
`;

const SDCardIcons = styled.i`
  position: absolute;
  top: 15%;
  left: 10%;
  border-radius: 50%;
  padding: 10px;
`;

const SDCardHeading = styled.h3`
  position: absolute;
  bottom: 15%;
  left: 10%;
  font-weight: 400;
`;

export default ListCard;
