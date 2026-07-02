import { useRef, useState } from "react";

const UploadImage = () => {
  const fileRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, JPEG, PNG & GIF files are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Maximum file size is 2MB.");
      return;
    }

    setError("");
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = (e) => {
    e.stopPropagation();

    setPreview(null);
    fileRef.current.value = "";
  };

  return (
    <>
      <div
        className="upload-box mb-4"
        onClick={() => fileRef.current.click()}
      >
        <input
          type="file"
          hidden
          ref={fileRef}
          accept=".jpg,.jpeg,.png,.gif"
          onChange={handleFile}
        />

        {!preview ? (
          <div className="upload-content">
            <div className="icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M32.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H32.5C33.163 35 33.7989 34.7366 34.2678 34.2678C34.7366 33.7989 35 33.163 35 32.5V7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5ZM7.5 7.5H32.5V19.5906L28.6422 15.7312C28.1734 15.2628 27.5378 14.9996 26.875 14.9996C26.2122 14.9996 25.5766 15.2628 25.1078 15.7312L8.33906 32.5H7.5V7.5ZM32.5 32.5H11.875L26.875 17.5L32.5 23.125V32.5ZM15 18.75C15.7417 18.75 16.4667 18.5301 17.0834 18.118C17.7001 17.706 18.1807 17.1203 18.4645 16.4351C18.7484 15.7498 18.8226 14.9958 18.6779 14.2684C18.5333 13.541 18.1761 12.8728 17.6517 12.3483C17.1272 11.8239 16.459 11.4667 15.7316 11.3221C15.0042 11.1774 14.2502 11.2516 13.5649 11.5355C12.8797 11.8193 12.294 12.2999 11.882 12.9166C11.4699 13.5333 11.25 14.2583 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75ZM15 13.75C15.2472 13.75 15.4889 13.8233 15.6945 13.9607C15.9 14.098 16.0602 14.2932 16.1549 14.5216C16.2495 14.7501 16.2742 15.0014 16.226 15.2439C16.1778 15.4863 16.0587 15.7091 15.8839 15.8839C15.7091 16.0587 15.4863 16.1778 15.2439 16.226C15.0014 16.2742 14.7501 16.2495 14.5216 16.1549C14.2932 16.0602 14.098 15.9 13.9607 15.6945C13.8233 15.4889 13.75 15.2472 13.75 15C13.75 14.6685 13.8817 14.3505 14.1161 14.1161C14.3505 13.8817 14.6685 13.75 15 13.75Z" fill="#949598"/>
</svg>

            </div>

            <h4>Upload Advertisement Image</h4>

            <p>JPG, JPEG, PNG or GIF | Up-to 2MB</p>
          </div>
        ) : (
          <>
            <img
              src={preview}
              alt="Preview"
              className="preview-image"
            />

            <button
              className="remove-btn"
              onClick={removeImage}
            >
              ✕
            </button>
          </>
        )}
      </div>

      {error && <p className="error">{error}</p>}
    </>
  );
};

export default UploadImage;