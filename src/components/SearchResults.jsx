import React from "react"

export function SearchResults({
  query,
  tracks,
  albums,
  playlists,
  onPlayTrack,
  onPlaylistSelect,
  onAlbumSelect,
}) {
  const filteredTracks = tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase()) ||
      track.album.toLowerCase().includes(query.toLowerCase()),
  )

  const filteredAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(query.toLowerCase()) ||
      album.artist.toLowerCase().includes(query.toLowerCase()),
  )

  const filteredPlaylists = playlists.filter(
    (playlist) =>
      playlist.name.toLowerCase().includes(query.toLowerCase()) ||
      playlist.description.toLowerCase().includes(query.toLowerCase()),
  )

  const genres = ["Pop", "Rock", "Hip Hop", "Electronic", "Jazz", "Classical", "Country", "R&B"]

  if (!query) {
    return (
      <div className="content-container">
        <h2 className="section-heading">Browse all</h2>
        <div className="genre-grid">
          {genres.map((genre, index) => (
            <div
              key={genre}
              className="genre-card"
              style={{
                background: `linear-gradient(135deg, hsl(${index * 45}, 70%, 50%), hsl(${index * 45 + 30}, 70%, 40%))`,
              }}
            >
              <h3 className="genre-title">{genre}</h3>
            </div>
          ))}
        </div>

        <div className="section">
          <h2 className="section-heading">Popular Artists</h2>
          <div className="card-grid">
            {["The Weeknd", "Harry Styles", "Olivia Rodrigo", "Dua Lipa", "Justin Bieber"].map((artist) => (
              <div key={artist} className="music-card">
                <div className="card-image-container">
                  <img
                    src={`https://via.placeholder.com/200x200/1db954/ffffff?text=${artist.split(" ")[0]}`}
                    alt={artist}
                    className="card-image artist-image"
                  />
                  <button className="card-play-button">▶️</button>
                </div>
                <h3 className="card-title">{artist}</h3>
                <p className="card-description">Artist</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="content-container">
      <h2 className="section-heading">Search results for "{query}"</h2>

      {filteredTracks.length > 0 && (
        <div className="section">
          <h3 className="subsection-heading">Songs</h3>
          <div className="track-list-simple">
            {filteredTracks.slice(0, 5).map((track) => (
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
      )}

      {filteredAlbums.length > 0 && (
        <div className="section">
          <h3 className="subsection-heading">Albums</h3>
          <div className="card-grid">
            {filteredAlbums.map((album) => (
              <div key={album.id} className="music-card" onClick={() => onAlbumSelect(album)}>
                <div className="card-image-container">
                  <img src={album.image || "/placeholder.svg"} alt={album.title} className="card-image" />
                  <button className="card-play-button">▶️</button>
                </div>
                <h3 className="card-title">{album.title}</h3>
                <p className="card-description">{album.artist}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredPlaylists.length > 0 && (
        <div className="section">
          <h3 className="subsection-heading">Playlists</h3>
          <div className="card-grid">
            {filteredPlaylists.map((playlist) => (
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
      )}

      {filteredTracks.length === 0 && filteredAlbums.length === 0 && filteredPlaylists.length === 0 && (
        <div className="no-results">
          <h3>No results found</h3>
          <p>Try searching for something else</p>
        </div>
      )}
    </div>
  )
}