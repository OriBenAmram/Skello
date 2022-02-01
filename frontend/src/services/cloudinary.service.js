export const cloudinaryService = {
  uploadFile,
};
function uploadFile(ev) {
  const CLOUD_NAME = 'skello-dev-learning';
  const PRESET_NAME = 'r8ynddp1';
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;
  const formData = new FormData();
  formData.append('file', ev.target.files[0]);
  formData.append('upload_preset', PRESET_NAME);

  return fetch(UPLOAD_URL, {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => console.error(err));
}
