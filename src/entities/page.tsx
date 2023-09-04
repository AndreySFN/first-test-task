import { Box, Typography } from '@mui/material';

export interface PageProps {
  text?: string;
  title?: string;
}

export const Page = ({ title, text }: PageProps) => {
  return (
    <Box sx={{ width: '100%', padding: '0 20px' }}>
      <Typography variant="h5">titleTitle: {title}</Typography>
      <Typography variant="body1" sx={{ paddingTop: '5px' }}>
        textTitle: {text}
      </Typography>
    </Box>
  );
};
