import React, { useState } from "react"
import { Sidebar } from "./components/sidebar"
import { MainContent } from "./components/MainContent"
import { MusicPlayer } from "./components/MusicPlayer"
import { SearchResults } from "./components/SearchResults"
import "./App.css"

const sampleTracks = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    image: "https://via.placeholder.com/300x300/1db954/ffffff?text=BL",
    genre: "Pop",
  },
  {
    id: "2",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    image: "https://via.placeholder.com/300x300/e22134/ffffff?text=WS",
    genre: "Pop",
  },
  {
    id: "3",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    image: "https://via.placeholder.com/300x300/8b5cf6/ffffff?text=G4U",
    genre: "Pop Rock",
  },
  {
    id: "4",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    image: "https://via.placeholder.com/300x300/f59e0b/ffffff?text=LEV",
    genre: "Dance Pop",
  },
  {
    id: "5",
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "F*CK LOVE 3",
    duration: "2:21",
    image: "https://via.placeholder.com/300x300/ef4444/ffffff?text=STAY",
    genre: "Hip Hop",
  },
]

const samplePlaylists = [
  {
    id: "1",
    name: "Today's Top Hits",
    description: "The most played songs right now",
    image: "https://via.placeholder.com/300x300/1db954/ffffff?text=TOP",
    tracks: sampleTracks,
    creator: "Spotify",
  },
  {
    id: "2",
    name: "Chill Vibes",
    description: "Relax and unwind with these chill tracks",
    image: "https://via.placeholder.com/300x300/3b82f6/ffffff?text=CHILL",
    tracks: sampleTracks.slice(0, 3),
    creator: "Spotify",
  },
  {
    id: "3",
    name: "Workout Mix",
    description: "High energy tracks for your workout",
    image: "https://via.placeholder.com/300x300/f59e0b/ffffff?text=WORK",
    tracks: sampleTracks.slice(1, 4),
    creator: "Spotify",
  },
]

const sampleAlbums = [
  {
    id: "1",
    title: "After Hours",
    artist: "The Weeknd",
    year: 2020,
    image: "https://via.placeholder.com/300x300/1db954/ffffff?text=AH",
    tracks: [sampleTracks[0]],
    genre: "Pop",
  },
  {
    id: "2",
    title: "Fine Line",
    artist: "Harry Styles",
    year: 2019,
    image: "https://via.placeholder.com/300x300/e22134/ffffff?text=FL",
    tracks: [sampleTracks[1]],
    genre: "Pop",
  },
  {
    id: "3",
    title: "SOUR",
    artist: "Olivia Rodrigo",
    year: 2021,
    image: "https://via.placeholder.com/300x300/8b5cf6/ffffff?text=SOUR",
    tracks: [sampleTracks[2]],
    genre: "Pop Rock",
  },
]

function App() {
  const [currentTrack, setCurrentTrack] = useState(sampleTracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentView, setCurrentView] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  const handlePlayTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentView("search")
  }

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar
          currentView={currentView}
          setCurrentView={setCurrentView}
          playlists={samplePlaylists}
          onPlaylistSelect={setSelectedPlaylist}
          onSearch={handleSearch}
        />
        <main className="main-content">
          {currentView === "search" ? (
            <SearchResults
              query={searchQuery}
              tracks={sampleTracks}
              albums={sampleAlbums}
              playlists={samplePlaylists}
              onPlayTrack={handlePlayTrack}
              onPlaylistSelect={setSelectedPlaylist}
              onAlbumSelect={setSelectedAlbum}
            />
          ) : (
            <MainContent
              tracks={sampleTracks}
              playlists={samplePlaylists}
              albums={sampleAlbums}
              onPlayTrack={handlePlayTrack}
              selectedPlaylist={selectedPlaylist}
              selectedAlbum={selectedAlbum}
              onPlaylistSelect={setSelectedPlaylist}
              onAlbumSelect={setSelectedAlbum}
            />
          )}
        </main>
      </div>
      <MusicPlayer currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default App