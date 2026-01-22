import { useEffect, useState } from "react"
import "./photos.scss"

const Photos = () => {
  const [photos, setPhotos] = useState([])
  const [active, setActive] = useState(null)

  const loadPhotos = () => {
    setPhotos(JSON.parse(localStorage.getItem("photos")) || [])
  }

  useEffect(() => {
    loadPhotos()
    window.addEventListener("photos-updated", loadPhotos)
    return () => window.removeEventListener("photos-updated", loadPhotos)
  }, [])

  const deletePhoto = id => {
    const updated = photos.filter(p => p.id !== id)
    localStorage.setItem("photos", JSON.stringify(updated))
    setActive(null)
    window.dispatchEvent(new Event("photos-updated"))
  }

  return (
    <div className="photos-app">
      {photos.length === 0 && <p className="empty">Click The Photos First</p>}

      <div className="photos-grid">
        {photos.map(p => (
          <img key={p.id} src={p.src} onClick={() => setActive(p)} />
        ))}
      </div>

      {active && (
        <div className="preview">
          <img src={active.src} />
          <div className="actions">
            <button className="delete" onClick={() => deletePhoto(active.id)}>
              Delete
            </button>
            <button onClick={() => setActive(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Photos
