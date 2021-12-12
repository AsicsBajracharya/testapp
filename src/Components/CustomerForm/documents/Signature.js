import React, { useEffect, useRef, useState } from "react"
import Button from "@material-ui/core/Button"
import Cropper from "react-easy-crop"
import Slider from "@material-ui/core/Slider"
import getCroppedImg from "../CropImage"
function Signature(props) {
  const inputRef = useRef()
  const triggerPopup = () => inputRef.current.click()
  const [imageName, setImageIname] = useState(null)
  const [image, setImage] = useState(null)
  const [croppedArea, setCroppedArea] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState()
  const [currentImage, setCurrentImage] = useState(null)

  function cancelSelection(e) {
    setImage(null)
    setCurrentImage(null)
  }

  //my code
  const [displayPicture, setDisplayPicture] = useState(null)

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels)
  }
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("there is a file")
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener("load", () => {
        setImage(reader.result)
        setCurrentImage(reader.result)
        setImageIname(e.target.files[0].name)
      })
    }
  }
  async function onCrop(e) {
    try {
      const croppedImageUrl = await getCroppedImg(image, croppedArea)
      console.log("croppedimageurl", croppedImageUrl)
      setImage(croppedImageUrl)
      setCurrentImage(null)
      // props.setSignature(image)
      props.setSignature(imageName)
      props.setErrors(null)
    } catch (e) {
      console.log(e, "there was an error while getting the cropped image")
    }
  }
  return (
    <div className=" documents">
      <input type="file" id="document-pp_size_photo" accept="image/*" className="form-control" ref={inputRef} onChange={onSelectFile} />
      <div className="image-container image-person">
        <img src={image} alt="" />
      </div>

      {/* <div className="container-cropper">
        <Cropper image={image} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
        <Slider />
      </div> */}
      <div className="container-buttons">
        <Button variant="contained" color="primary" onClick={triggerPopup}>
          choose
        </Button>
      </div>

      {currentImage ? (
        <div className="container-cropper">
          <div className="overlay">
            <Cropper image={image} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
          </div>
          <div className="btn-container">
            <span className="btn btn-success" onClick={onCrop}>
              crop
            </span>
            <span className="btn btn-danger" onClick={cancelSelection}>
              cancel
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Signature
