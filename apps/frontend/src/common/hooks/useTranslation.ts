import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Language } from '../enums/language.enum';
import { translations } from '../translations';

function useTranslation() {
  const language = useSelector((state: RootState) => state.global.language);
  const fallbackLanguage = Language.English;

  const translate = (key: string) => {
    const keys = key.split('.');

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return translate;
}

function getNestedTranslation(language: Language, keys: string[]): string {
  return keys.reduce((obj: any, key: string) => {
    return obj?.[key];
  }, translations[language]);
}

export default useTranslation;
