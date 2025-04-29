import { useRef, useEffect, useState } from "react"
import './NotReady.css'

const NotReady = () => {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((e) => {
        console.warn("Autoplay failed:", e)
      })
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted
      videoRef.current.muted = newMuted
      setMuted(newMuted)
    }
  }

  return (
    <div className="container-nr">
      <h1>This quiz is not ready to play yet!</h1>
      <video
        className="meme"
        ref={videoRef}
        loop
        controls
      >
        <source src="/images/home/ded.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ marginTop: "10px" }}>
        <button onClick={toggleMute}>
          {muted ? "Unmute 🔊" : "Mute 🔇"}
        </button>
      </div>
    </div>
  )
}

export default NotReady