var playlist = { song: 'Song Name'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  return delete Playlist.artist;
}

