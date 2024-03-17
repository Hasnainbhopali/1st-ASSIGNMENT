"use strict";
// Function to create an album object
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12); // Including tracks
let album3 = make_album("Artist3", "Album3");
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
