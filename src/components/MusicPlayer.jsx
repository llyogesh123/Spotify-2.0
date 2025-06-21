import React, { useState, useEffect } from "react"

export function MusicPlayer({ currentTrack, isPlaying, setIsPlaying }) {
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(75)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState("off")

  useEffect(() => {
    if (isPlaying && currentTrack) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1
          return newProgress >= 100 ? 0 : newProgress
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, currentTrack])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const currentTime = Math.floor((progress / 100) * 180) // Assuming 3 minute songs
  const totalTime = 180

  if (!currentTrack) {
    return null
  }

  return (
    <div className="music-player">
      <div className="player-content">
        {/* Current Track Info */}
        <div className="current-track">
          <img
            src={currentTrack.image || "/placeholder.svg"}
            alt={currentTrack.title}
            className="current-track-image"
          />
          <div className="current-track-info">
            <h4 className="current-track-title">{currentTrack.title}</h4>
            <p className="current-track-artist">{currentTrack.artist}</p>
          </div>
          <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={() => setIsLiked(!isLiked)}>
            ❤️
          </button>
        </div>

        {/* Player Controls */}
        <div className="player-controls">
          <div className="control-buttons">
            <button
              className={`control-button ${isShuffled ? "active" : ""}`}
              onClick={() => setIsShuffled(!isShuffled)}
            >
              🔀
            </button>
            <button className="control-button">⏮️</button>
            <button className="play-pause-button" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button className="control-button">⏭️</button>
            <button
              className={`control-button ${repeatMode !== "off" ? "active" : ""}`}
              onClick={() => {
                const modes = ["off", "all", "one"]
                const currentIndex = modes.indexOf(repeatMode)
                setRepeatMode(modes[(currentIndex + 1) % modes.length])
              }}
            >
              🔁{repeatMode === "one" && "1"}
            </button>
          </div>
          <div className="progress-container">
            <span className="time-display">{formatTime(currentTime)}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="progress-slider"
              />
            </div>
            <span className="time-display">{formatTime(totalTime)}</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="volume-controls">
          <button className="volume-button" onClick={() => setIsMuted(!isMuted)}>
            {isMuted || volume === 0 ? "🔇" : "🔊"}
          </button>
          <div className="volume-slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                const value = Number(e.target.value)
                setVolume(value)
                setIsMuted(value === 0)
              }}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  )
}