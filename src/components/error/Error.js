import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  color: #021857;
  letter-spacing: 1px;
`;
const Error = (props) => {
  return <Wrap>{props.message}</Wrap>;
};

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Somethings went wrong !',
};
export default Error;
