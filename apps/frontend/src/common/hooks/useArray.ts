import { useState } from 'react';

type Item = { id: number | string };
export type ArrayActions<T extends Item> = {
  set: React.Dispatch<React.SetStateAction<T[]>>;
  clear: () => void;
  add: (item: T) => void;
  removeById: (id: number | string) => void;
  getById: (id: number | string) => T | undefined;
  replaceById: (id: number | string, newItem: T) => void;
  updateById: (id: number | string, props: Partial<T>) => void;
};

function useArray<T extends Item>(initialArray: T[] = []) {
  const [array, setArray] = useState<T[]>(initialArray);

  const clear = () => {
    setArray([]);
  };

  const add = (item: T) => {
    setArray((a) => [...a, item]);
  };
  const removeById = (id: number | string) => {
    setArray((a) => a.filter((item) => item.id !== id));
  };

  const getById = (id: number | string) => {
    return array.find((item) => item.id === id);
  };

  const replaceById = (id: number | string, newItem: T) => {
    setArray((a) => a.map((item) => (item.id === id ? newItem : item)));
  };

  const updateById = (id: number | string, props: Partial<T>) => {
    setArray((a) =>
      a.map((item) => (item.id === id ? { ...item, ...props } : item)),
    );
  };

  return [
    array,
    {
      set: setArray,
      clear,
      add,
      removeById,
      getById,
      replaceById,
      updateById,
    } as const,
  ] as [T[], ArrayActions<T>];
}
export default useArray;
