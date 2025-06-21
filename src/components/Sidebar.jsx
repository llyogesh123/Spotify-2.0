import React,{ useState } from "react"

export function Sidebar({ currentView, setCurrentView, playlists, onPlaylistSelect, onSearch }) {
  const [searchInput, setSearchInput] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      onSearch(searchInput)
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">Spotify 2.0</h1>
        <nav className="nav-menu">
          <button
            className={`nav-item ${currentView === "home" ? "active" : ""}`}
            onClick={() => setCurrentView("home")}
          >
            <span className="nav-icon">🏠</span>
            Home
          </button>
          <button
            className={`nav-item ${currentView === "search" ? "active" : ""}`}
            onClick={() => setCurrentView("search")}
          >
            <span className="nav-icon">🔍</span>
            Search
          </button>
          <button
            className={`nav-item ${currentView === "library" ? "active" : ""}`}
            onClick={() => setCurrentView("library")}
          >
            <span className="nav-icon">📚</span>
            Your Library
          </button>
        </nav>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search songs, artists..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
        <div className="sidebar-actions">
          <button className="action-button">
            <span className="action-icon">➕</span>
            Create Playlist
          </button>
          <button className="action-button">
            <span className="action-icon">❤️</span>
            Liked Songs
          </button>
        </div>
      </div>
      <div className="playlist-section">
        <h3 className="section-title">Recently Created</h3>
        <div className="playlist-list">
          {playlists.map((playlist) => (
            <button key={playlist.id} className="playlist-item" onClick={() => onPlaylistSelect(playlist)}>
              {playlist.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}