import { Box, FormControl, InputLabel, Select } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const LanguageChanger = () => {
  const { locale } = useParams();
  const [lang, setLang] = useState(locale);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Language</InputLabel>
        {/*TODO: Локализация*/}
        <Select value={lang} label="Language" onChange={e => setLang(e.target.value)}></Select>
      </FormControl>
    </Box>
  );
};
