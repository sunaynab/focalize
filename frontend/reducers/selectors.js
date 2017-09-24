export const getAllUserPhotos = ({photos}) => (
  Object.keys(photos).map(id => photos[id])
);

export const fetchPhoto = ({photos}) => (
  Object.keys(photos).map(id => photos[id])[0]
);
