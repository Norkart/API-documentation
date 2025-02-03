import React from 'react';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import {IconButton, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  icon: {
    background: 'rgba(255, 255, 255, 1)',
    padding: '10px',
    color: 'primary',
    border: '0px',
    outline: 'none',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.6)',
    },
  },
}));

interface Props {
  switchMode: () => void;
}

export const SwitchMode: React.FC<Props> = (props) => {
  const classes = useStyles();
  const {switchMode} = props;
  return (
    <IconButton className={classes.icon} onClick={switchMode}>
      <ThreeDRotationIcon />
    </IconButton>
  );
};

export default SwitchMode;
