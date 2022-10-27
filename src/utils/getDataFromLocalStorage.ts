/**
 * Возвращает объект, если данные по ключу были в локал сторедж? то объект с данными.
 *
 * @param {string} LSKey нужный Ключ в локал сторедж
 * @return {any} , либо пустой обект, если такого ключа не существует, либо сущьность, которыая находилась по данном ключу
 */
const getDataFromLocalStorage = (LSKey: string): any => {
  const objFromLS = localStorage.getItem(LSKey);
  try {
    if (objFromLS) return JSON.parse(objFromLS);

    return undefined;
  } catch (e) {
    return undefined;
  }
};

export default getDataFromLocalStorage;

// const lsObj = JSON.stringify({
//   [LS_FIELD]: isLightTheme ? "dark" : "light",
// });

// localStorage.setItem(LS_KEY, lsObj);
