import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color, data }) => (
  <div>
    <h1 style={{
      paddingTop: '40px',
      marginTop: '-15px',
      textAlign: 'center',
    }}> <span>Loading{(data) ? "..." + data : null}...</span> </h1>
    <ReactLoading type={type} color={color} height={'100vh'} width={'100%'} />
  </div>
);
 
export default Loading;