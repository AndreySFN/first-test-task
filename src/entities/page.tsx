import { Box, Typography } from '@mui/material';
import { FullSizeSpinner } from 'entities';
import { useSelector } from 'react-redux';
import { staticInterfaceSelectors } from 'store';

export interface PageProps {
  text?: string;
  title?: string;
  isLoading?: boolean;
}

export const Page = ({ title, text, isLoading = false }: PageProps) => {
  const textTitle = useSelector(staticInterfaceSelectors.text);
  const titleTitle = useSelector(staticInterfaceSelectors.title);
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      {isLoading ? (
        <FullSizeSpinner />
      ) : (
        <>
          <Typography variant="h5">
            {titleTitle}: {title}
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: '5px' }}>
            {textTitle}: {text}
          </Typography>
        </>
      )}
    </Box>
  );
};
