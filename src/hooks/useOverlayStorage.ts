const useOverlayStorage = () => {
  const overlayKey = "overlayShown";

  const getOverlayFromStorage = () => {
    return localStorage.getItem(overlayKey) || undefined;
  };

  const setOverlayToStorage = (overlay: boolean) => {
    localStorage.setItem(overlayKey, overlay.toString());
  };

  const deleteOverlayFromStorage = () => {
    localStorage.removeItem(overlayKey);
  };

  return {
    getOverlayFromStorage,
    setOverlayToStorage,
    deleteOverlayFromStorage,
  };
};

export default useOverlayStorage;
