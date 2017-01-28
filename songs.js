console.log("test");


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



//Each student must add one song to the beginning and the end of the array.
 
songs.push("Thriller > by Michael Jackson on the album Thriller");


songs.unshift("ABC > by The Jackson 5 on the album The Jacksons story");


//Loop over the array and remove any words or characters that obviously don't belong.



for (var i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace(">", "-");
}
//console.log("songs", songs);


var cleanSongs = songs;
console.log('cleanSongs', cleanSongs);

//create an empty object
function musicMaker(artist, song, album){
  this.artist = artist;
  this.song = song;
  this.album = album;
};



for (var i = 0; i < cleanSongs.length; i++){
 
//find our songName
var songLength = cleanSongs[i].indexOf("-") - 1;
var songName = cleanSongs[i].substring(0, songLength);
// console.log(songName);


//find our album name 
var backHalf = cleanSongs[i].length - cleanSongs[i].indexOf('album');
var albumLength = backHalf - 6;
var albumName = cleanSongs[i].substring((cleanSongs[i].length - albumLength), cleanSongs[i].lengths)
// console.log(albumName);

//find our artistName
var middleStartPart = songLength + 6;
var middleEndPart = cleanSongs[i].indexOf("on the album");
var bandName = cleanSongs[i].substring(middleStartPart, middleEndPart);
// console.log(bandName);
//make our object
var songObject = new musicMaker(bandName, songName, albumName);
console.log(songObject);

}

//writing into the DOM
//access the keys in the objects from music Maker

// for (var prop in musicMaker){

// }




//






















