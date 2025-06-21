import React from "react"

export function MainContent({
  tracks,
  playlists,
  albums,
  onPlayTrack,
  selectedPlaylist,
  selectedAlbum,
  onPlaylistSelect,
  onAlbumSelect,
}) {
  if (selectedPlaylist) {
    return (
      <div className="content-container">
        <div className="playlist-header">
          <img
            src={selectedPlaylist.image || "/placeholder.svg"}
            alt={selectedPlaylist.name}
            className="playlist-cover"
          />
          <div className="playlist-info">
            <p className="content-type">PLAYLIST</p>
            <h1 className="playlist-title">{selectedPlaylist.name}</h1>
            <p className="playlist-description">{selectedPlaylist.description}</p>
            <p className="playlist-meta">
              Made by {selectedPlaylist.creator} • {selectedPlaylist.tracks.length} songs
            </p>
          </div>
        </div>

        <div className="play-section">
          <button className="play-button-large">▶️ Play</button>
        </div>

        <div className="track-list">
          <div className="track-header">
            <div className="track-number">#</div>
            <div className="track-title">TITLE</div>
            <div className="track-album">ALBUM</div>
            <div className="track-duration">⏱️</div>
          </div>
          {selectedPlaylist.tracks.map((track, index) => (
            <div key={track.id} className="track-row" onClick={() => onPlayTrack(track)}>
              <div className="track-number">{index + 1}</div>
              <div className="track-info">
                <img src={track.image || "/placeholder.svg"} alt={track.title} className="track-image" />
                <div>
                  <p className="track-name">{track.title}</p>
                  <p className="track-artist">{track.artist}</p>
                </div>
              </div>
              <div className="track-album">{track.album}</div>
              <div className="track-duration">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (selectedAlbum) {
    return (
      <div className="content-container">
        <div className="playlist-header">
          <img src={selectedAlbum.image || "/placeholder.svg"} alt={selectedAlbum.title} className="playlist-cover" />
          <div className="playlist-info">
            <p className="content-type">ALBUM</p>
            <h1 className="playlist-title">{selectedAlbum.title}</h1>
            <p className="playlist-description">{selectedAlbum.artist}</p>
            <p className="playlist-meta">
              {selectedAlbum.year} • {selectedAlbum.tracks.length} songs
            </p>
          </div>
        </div>

        <div className="play-section">
          <button className="play-button-large">▶️ Play</button>
        </div>

        <div className="track-list">
          <div className="track-header">
            <div className="track-number">#</div>
            <div className="track-title">TITLE</div>
            <div className="track-duration">⏱️</div>
          </div>
          {selectedAlbum.tracks.map((track, index) => (
            <div key={track.id} className="track-row" onClick={() => onPlayTrack(track)}>
              <div className="track-number">{index + 1}</div>
              <div className="track-info">
                <div>
                  <p className="track-name">{track.title}</p>
                  <p className="track-artist">{track.artist}</p>
                </div>
              </div>
              <div className="track-duration">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="content-container">
      <div className="section">
        <h2 className="section-heading">Good evening</h2>
        <div className="quick-play-grid">
          {playlists.slice(0, 6).map((playlist) => (
            <div key={playlist.id} className="quick-play-card" onClick={() => onPlaylistSelect(playlist)}>
              <img src={playlist.image || "/placeholder.svg"} alt={playlist.name} className="quick-play-image" />
              <span className="quick-play-title">{playlist.name}</span>
              <button className="quick-play-button">▶️</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">Made for you</h2>
        <div className="card-grid">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="music-card" onClick={() => onPlaylistSelect(playlist)}>
              <div className="card-image-container">
                <img src={playlist.image || "/placeholder.svg"} alt={playlist.name} className="card-image" />
                <button className="card-play-button">▶️</button>
              </div>
              <h3 className="card-title">{playlist.name}</h3>
              <p className="card-description">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">Popular Albums</h2>
        <div className="card-grid">
          {albums.map((album) => (
            <div key={album.id} className="music-card" onClick={() => onAlbumSelect(album)}>
              <div className="card-image-container">
                <img src={album.image || "/placeholder.svg"} alt={album.title} className="card-image" />
                <button className="card-play-button">▶️</button>
              </div>
              <h3 className="card-title">{album.title}</h3>
              <p className="card-description">{album.artist}</p>
              <p className="card-year">{album.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">Recently Played</h2>
        <div className="track-list-simple">
          {tracks.map((track) => (
            <div key={track.id} className="simple-track-row" onClick={() => onPlayTrack(track)}>
              <div className="simple-track-image-container">
                <img src={track.image || "/placeholder.svg"} alt={track.title} className="simple-track-image" />
                <div className="simple-track-overlay">▶️</div>
              </div>
              <div className="simple-track-info">
                <h4 className="simple-track-title">{track.title}</h4>
                <p className="simple-track-artist">{track.artist}</p>
              </div>
              <div className="simple-track-album">{track.album}</div>
              <div className="simple-track-duration">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}