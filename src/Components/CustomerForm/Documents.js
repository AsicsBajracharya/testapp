import React, { useEffect, useRef, useState } from "react"
import Cropper from "react-easy-crop"
import getCroppedImg from "./CropImage"

function Documents() {
  //refs
  const displayPictureRef = useRef()
  const [displayPicture, setDisplayPicture] = useState(null)
  const [displayPictureCrop, setDisplayPictureCrop] = useState({ x: 0, y: 0 })
  const [displayPictureCroppedArea, setDisplayPictureCroppedArea] = useState(null)
  const [displayPictureZoom, setDisplayPictureZoom] = useState()
  const [currentPicture, setCurrentPicture] = useState(null)

  function displayPictureSelect(e) {
    console.log("display picture sleected")
    if (e.target.files && e.target.files.length > 0) {
      console.log("there is a file")
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener("load", () => {
        setDisplayPicture(reader.result)
        setCurrentPicture(reader.result)
      })
    }
  }
  function triggerPopup() {
    displayPictureRef.current.click()
  }

  function onDisplayPictureCropComplete(croppedAreaPercentage, croppedAreaPixels) {
    setDisplayPictureCroppedArea(croppedAreaPixels)
  }
  async function onDisplayPictureCrop() {
    try {
      const croppedImageUrl = await getCroppedImg(displayPicture, displayPictureCroppedArea)
      setDisplayPicture(croppedImageUrl)
      setCurrentPicture(null)
    } catch (e) {
      console.log(e, "there was an error")
    }
  }
  function onDisplayPictureCancel() {
    setCurrentPicture(null)
    setDisplayPicture(null)
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Upload Your documents</h3>
          </div>
          <div className="card-body">
            <input type="file" className="form-control" ref={displayPictureRef} onChange={displayPictureSelect}></input>
            <div className="image-preview display-picture">{displayPicture && <img src={displayPicture} alt="" />}</div>
            <div className="button-group">
              <div className="btn-container">
                <button onClick={triggerPopup}>upload</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      {currentPicture && (
        <div className="cropper-container">
          <div className="overlay">
            <Cropper image={currentPicture} crop={displayPictureCrop} zoom={displayPictureZoom} onCropChange={setDisplayPictureCrop} onZoomChange={setDisplayPictureZoom} onCropComplete={onDisplayPictureCropComplete} />
          </div>
          <div className="button-container">
            <button onClick={onDisplayPictureCrop}>Crop</button>
            <button onClick={onDisplayPictureCancel}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Documents
