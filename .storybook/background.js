import React from 'react';
const styles = {
    justifyContent: 'center',
    display: 'flex',
    background: '#272b4d',
    height: '100px',
    alignItems: 'center'
};
const Background = ({ children }) => <div style={styles}>{children}</div>;

export default Background;