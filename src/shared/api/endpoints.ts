export const BASE_URL = 'https://test012.lagutin.com/api';
export const Endpoints: Record<string, (l?: string) => string> = {
  LANG_LIST: () => '/lnglist/',
  HOME: locale => `/${locale}/home/`,
  INFO: locale => `/${locale}/info/`,
  ABOUT: locale => `/${locale}/about/`,
  STATIC_INTERFACE_DATA: locale => `/lng/${locale}/`,
};
