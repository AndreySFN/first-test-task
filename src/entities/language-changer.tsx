import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LangDTO } from '../shared/api/dto';
import { languageSelectors } from '../shared/redux';

export const LanguageChanger = () => {
  const { locale } = useParams();
  const langList = useSelector(languageSelectors.langList);
  const [lang, setLang] = useState(locale);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small" disabled>
        <InputLabel>Language</InputLabel>
        {/*TODO: Локализация*/}
        <Select value={lang} label="Language" onChange={e => setLang(e.target.value)}>
          {langList?.map(({ id, lng, lng_name }: LangDTO) => (
            <MenuItem key={id} value={lng}>
              {lng_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
