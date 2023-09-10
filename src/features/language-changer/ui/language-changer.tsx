import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LangDTO } from 'shared/api';
import { languageSelectors } from 'store';
import { useChangeLanguage } from '../hooks';

export const LanguageChanger = () => {
  const { locale } = useParams();
  const langList = useSelector(languageSelectors.langList);
  const [lang, setLang] = useState(locale);
  const redirectToNewLocale = useChangeLanguage();
  useEffect(() => {
    redirectToNewLocale(lang);
  }, [lang]);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel>{t('language')}</InputLabel>
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
