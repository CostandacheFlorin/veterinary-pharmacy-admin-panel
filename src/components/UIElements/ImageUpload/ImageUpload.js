import React, { useRef, useState, useEffect } from 'react';
import { StyledMediumButton } from '../Buttons/Button.styled';
import './ImageUpload.css';

const ImageUpload = ({image, sendImage, ...props}) => {
  const [file, setFile] =useState();
  const [previewUrl, setPreviewUrl] = useState(image);
  const [isValid, setIsValid] = useState(false);


  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    
  }, [file]);


  useEffect( () => {
    
    setPreviewUrl(image);
  }, [image])
  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      sendImage(pickedFile);
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl } alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <StyledMediumButton  type='button'  onClick={pickImageHandler}>
          PICK IMAGE
        </StyledMediumButton>
        
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
