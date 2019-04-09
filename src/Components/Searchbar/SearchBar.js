import React, { useRef } from 'react';
import styled from 'styled-components';

import scale from '../../img/scale.png';

function SearchBar(props) {
  const usernameRef = useRef();
  const clearInput = () => {
    usernameRef.current.value = '';
  };
  return (
    <SDFormSearchBar
      onSubmit={e => {
        e.preventDefault();
        props.searchHacker(usernameRef.current.value);
        clearInput();
      }}>
      <SDInputSearchBar placeholder="Search" ref={usernameRef} />
    </SDFormSearchBar>
  );
}

const SDInputSearchBar = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 15px;
  background-color: #f8f9fa;
  background-image: url(${scale});
  background-position: center right 10px;
  background-repeat: no-repeat;
  background-size: 0.8rem;
  border-radius: 6px;
  border: none;

  ::placeholder {
    font-size: 0.9rem;
    color: lightgray;
  }
`;

const SDFormSearchBar = styled.form`
  height: 100%;
  width: 100%;
`;

export default SearchBar;
