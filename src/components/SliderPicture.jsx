import React, {useState, useRef} from 'react';
import {Checkbox, Button} from '@mui/material';

function SliderPicture({ imageSrc }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleImageClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-gai-xinh-hd.jpg"
        alt="Image"
        style={{
          border: isChecked ? '2px solid black' : 'none',
          width: "400px",
          height: "400px",
          cursor: "pointer"
        }}
        onClick={handleImageClick}
      />
      <Checkbox
        checked={isChecked}
        color="primary"
        onChange={handleImageClick}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
    </div>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-gai-xinh-hd.jpg"
        alt="Image"
        style={{
          border: isChecked ? '2px solid black' : 'none',
          width: "400px",
          height: "400px",
          cursor: "pointer"
        }}
        onClick={handleImageClick}
      />
      <Checkbox
        checked={isChecked}
        color="primary"
        onChange={handleImageClick}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
    </div>
    </>
  );
}

export default SliderPicture;