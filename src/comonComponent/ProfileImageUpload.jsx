import { useEffect, useRef, useState } from "react";
import ProfileImg from "../assets/images/prifile-img.png";

export default function ProfileImageUpload() {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    // Remove previous preview
    if (image) {
      URL.revokeObjectURL(image);
    }

    const imageUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setImage(imageUrl);
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div className="profile-upload position-relative d-flex align-items-center gap-3 m-auto">
      <div className="image-box position-relative">
        <img src={image || ProfileImg} alt="Profile" className="profile-image" />
        <button type="button"  className="camera-btn bg-transparent border-0 p-0"  onClick={openFilePicker}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="36" height="36" rx="18" fill="#4B7652"/><rect x="2" y="2" width="36" height="36" rx="18" stroke="#F6F6F6" stroke-width="4"/><path d="M25 15.5H23.2675L22.4156 14.2225C22.37 14.1541 22.3082 14.098 22.2357 14.0592C22.1632 14.0204 22.0822 14 22 14H18C17.9178 14 17.8368 14.0204 17.7643 14.0592C17.6918 14.098 17.63 14.1541 17.5844 14.2225L16.7319 15.5H15C14.6022 15.5 14.2206 15.658 13.9393 15.9393C13.658 16.2206 13.5 16.6022 13.5 17V24C13.5 24.3978 13.658 24.7794 13.9393 25.0607C14.2206 25.342 14.6022 25.5 15 25.5H25C25.3978 25.5 25.7794 25.342 26.0607 25.0607C26.342 24.7794 26.5 24.3978 26.5 24V17C26.5 16.6022 26.342 16.2206 26.0607 15.9393C25.7794 15.658 25.3978 15.5 25 15.5ZM25.5 24C25.5 24.1326 25.4473 24.2598 25.3536 24.3536C25.2598 24.4473 25.1326 24.5 25 24.5H15C14.8674 24.5 14.7402 24.4473 14.6464 24.3536C14.5527 24.2598 14.5 24.1326 14.5 24V17C14.5 16.8674 14.5527 16.7402 14.6464 16.6464C14.7402 16.5527 14.8674 16.5 15 16.5H17C17.0823 16.5001 17.1634 16.4798 17.236 16.441C17.3086 16.4021 17.3706 16.346 17.4163 16.2775L18.2675 15H21.7319L22.5837 16.2775C22.6294 16.346 22.6914 16.4021 22.764 16.441C22.8366 16.4798 22.9177 16.5001 23 16.5H25C25.1326 16.5 25.2598 16.5527 25.3536 16.6464C25.4473 16.7402 25.5 16.8674 25.5 17V24ZM23 18V19.5C23 19.6326 22.9473 19.7598 22.8536 19.8536C22.7598 19.9473 22.6326 20 22.5 20H21C20.8674 20 20.7402 19.9473 20.6464 19.8536C20.5527 19.7598 20.5 19.6326 20.5 19.5C20.5 19.3674 20.5527 19.2402 20.6464 19.1464C20.7402 19.0527 20.8674 19 21 19H21.3219C20.9765 18.6974 20.5378 18.5224 20.079 18.5041C19.6202 18.4858 19.169 18.6253 18.8006 18.8994C18.6946 18.9791 18.5613 19.0135 18.43 18.9949C18.2986 18.9763 18.18 18.9063 18.1003 18.8003C18.0206 18.6943 17.9862 18.561 18.0048 18.4296C18.0234 18.2983 18.0934 18.1797 18.1994 18.1C18.7552 17.6862 19.4366 17.4766 20.1289 17.5066C20.8212 17.5365 21.482 17.8041 22 18.2644V18C22 17.8674 22.0527 17.7402 22.1464 17.6464C22.2402 17.5527 22.3674 17.5 22.5 17.5C22.6326 17.5 22.7598 17.5527 22.8536 17.6464C22.9473 17.7402 23 17.8674 23 18ZM21.8994 21.7C21.9791 21.8059 22.0134 21.9392 21.9949 22.0704C21.9764 22.2017 21.9065 22.3202 21.8006 22.4C21.2448 22.8138 20.5634 23.0234 19.8711 22.9934C19.1788 22.9635 18.518 22.6959 18 22.2356V22.5C18 22.6326 17.9473 22.7598 17.8536 22.8536C17.7598 22.9473 17.6326 23 17.5 23C17.3674 23 17.2402 22.9473 17.1464 22.8536C17.0527 22.7598 17 22.6326 17 22.5V21C17 20.8674 17.0527 20.7402 17.1464 20.6464C17.2402 20.5527 17.3674 20.5 17.5 20.5H19C19.1326 20.5 19.2598 20.5527 19.3536 20.6464C19.4473 20.7402 19.5 20.8674 19.5 21C19.5 21.1326 19.4473 21.2598 19.3536 21.3536C19.2598 21.4473 19.1326 21.5 19 21.5H18.6781C19.0235 21.8026 19.4622 21.9776 19.921 21.9959C20.3798 22.0142 20.831 21.8747 21.1994 21.6006C21.3054 21.521 21.4387 21.4867 21.57 21.5054C21.7012 21.524 21.8197 21.594 21.8994 21.7Z" fill="white"/></svg>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleImageChange}/>
      </div>
      <span className="upload-text cursor-pointer" onClick={openFilePicker}>
        {image ? "Click to change image" : "Click to add Profile Image"}
      </span>
    </div>
  );
}