export const getAllPhotos = (photos) => (
  Object.keys(photos).map(id => photos[id])
);
