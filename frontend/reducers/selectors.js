export const getAllPhotos = (photos) => (
  Object.keys(photos).map(id => photos[id])
);

export const getUsersAndPhotos = (people) => (
  Object.keys(people).map(id => people[id])
);
