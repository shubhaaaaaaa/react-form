import Axios from 'axios';

const handleImageChange = async (image, setImageUrl) => {
  if (!image) return; 

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "form-app");

  try {
    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/dluat3skn/image/upload",
      formData
    );
    
    console.log(response.data.secure_url);
    setImageUrl(response.data.secure_url);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export { handleImageChange };
