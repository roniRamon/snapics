
export const getUserPhotos = (photos, userId) => {
  const userPhotos = [];
  debugger;
  Object.values(photos).map( photo => {
    if(photo.ownerId === parseInt(userId)){
      userPhotos.push(photo);
    }
  });
  return userPhotos;
};
