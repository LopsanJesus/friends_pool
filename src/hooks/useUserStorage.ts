const useUserStorage = () => {
  const userIdKey = "userId";
  const userPkKey = "userPk";
  const userNameKey = "userName";

  const getUserIdFromStorage = () => {
    return localStorage.getItem(userIdKey) || undefined;
  };

  const getUserPkFromStorage = () => {
    return localStorage.getItem(userPkKey) || undefined;
  };

  const getUserNameFromStorage = () => {
    return localStorage.getItem(userNameKey) || undefined;
  };

  const setUserIdToStorage = (id: string) => {
    localStorage.setItem(userIdKey, id);
  };

  const setUserPkToStorage = (pk: string) => {
    localStorage.setItem(userPkKey, pk);
  };

  const setUserNameToStorage = (name: string) => {
    localStorage.setItem(userNameKey, name);
  };

  const deleteIdFromStorage = () => {
    localStorage.removeItem(userIdKey);
  };

  const deletePkFromStorage = () => {
    localStorage.removeItem(userPkKey);
  };

  const deleteNameFromStorage = () => {
    localStorage.removeItem(userNameKey);
  };

  return {
    getUserIdFromStorage,
    getUserPkFromStorage,
    getUserNameFromStorage,
    setUserIdToStorage,
    setUserPkToStorage,
    setUserNameToStorage,
    deleteIdFromStorage,
    deletePkFromStorage,
    deleteNameFromStorage,
  };
};

export default useUserStorage;
