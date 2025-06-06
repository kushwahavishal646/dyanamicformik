import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingFallback: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

LoadingFallback.displayName = 'LoadingFallback';

export default React.memo(LoadingFallback); 