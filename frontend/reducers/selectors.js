export const getAllUserPhotos = (photos) => (
  Object.keys(photos).map(id => photos[id])
);
