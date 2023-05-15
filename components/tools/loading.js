import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Loading = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.spinner)} />
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10',
    position: "relative",
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(0, 0, 0, 0.1)',
    borderTopColor: 'blue',
    borderRadius: '50%',
    animationName: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});

export default Loading;