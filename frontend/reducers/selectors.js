export const getAllPhotos = (photos) => (
  Object.keys(photos).map(id => photos[id])
);

export const getUsersAndPhotos = (people) => {
  if(people){
    return Object.keys(people).map(id => people[id]);
  }
};
