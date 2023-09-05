export interface LangDTO {
  id: number;
  lng: string;
  lng_name: string;
  lng_rushelp: string;
  lng_default: number;
}

export interface PageDTO {
  title: string;
  text: string;
  counter: number;
}

export interface StaticInterfaceDataDTO {
  id: string;
  iso: string;
  language: string;
  title: string;
  text: string;
}
