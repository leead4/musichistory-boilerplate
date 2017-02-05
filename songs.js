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

var bigObjectArray = [];

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
//console.log(songObject);

bigObjectArray.push(songObject);



}

console.log(bigObjectArray);


//writing into the DOM
 

function musicWriter(potatoArray) {
	var target = document.getElementById("rightBox");
		for (var i = 0; i < potatoArray.length; i++){
 			
 			var potatoObject = potatoArray[i];
 			
			//console.log(potatoObject);
			//console.log(potatoObject.song);
			//console.log(potatoObject.album);
			//console.log(potatoObject.artist);

			
			

//create our elements
	var musicBaby = document.createElement("DIV");
		musicBaby.setAttribute("class", "songInfo");
		//console.log(musicBaby);
	var musicBabyHeader = document.createElement("H2"); ///this is our song name
		musicBabyHeader.innerHTML = potatoObject.song.toString();
		//console.log(musicBabyHeader);
		
///make a ul
		var musicBabyList = document.createElement("UL");
		var musicBabyArtist = document.createElement("LI");
		var musicBabyAlbum = document.createElement("LI");
		var musicBabyGenre = document.createElement("LI");
	//	console.log(music);
///make li for the name and genre

		musicBabyAlbum.innerHTML = potatoObject.album.toString();
		musicBabyArtist.innerHTML = potatoObject.artist.toString();
		musicBabyGenre.innerHTML = "Genre";
		
//add to the DOM
		musicBabyList.appendChild(musicBabyAlbum);
		musicBabyList.appendChild(musicBabyArtist);
		musicBabyList.appendChild(musicBabyGenre);
		console.log(musicBabyList);
		
		musicBaby.appendChild(musicBabyHeader);
		musicBaby.appendChild(musicBabyList);
		console.log(musicBaby);

		target.appendChild(musicBaby);


	
	 }

}

musicWriter(bigObjectArray);

////success!

//////////////////////////eventListeners/adding to DOM javascript////////////

var addMusicButton = document.getElementById("addMusic");

var listMusicButton = document.getElementById("listMusic");
var pageMagic = document.getElementById("potato");
var userInputView = document.getElementById("hideMe");

   addMusicButton.addEventListener("click", changeView);
   listMusicButton.addEventListener("click", goBack);




 function changeView(){
 	console.log("im changing!");
 	pageMagic.classList.remove("visible");
 	pageMagic.classList.add("hidden");

 	userInputView.classList.remove("hidden");
 	userInputView.classList.remove("visible");




 }

 function goBack(){
 	console.log("im going back!");
 	pageMagic.classList.remove("hidden");
 	pageMagic.classList.add("visible");

	userInputView.classList.remove("visible");
 	userInputView.classList.add("hidden");
 
 }






/////////////////////adding user input to our array!


var addButton = document.getElementById("addIt")

addButton.addEventListener("click", addMonster);

/////////////take this text and add them to our constructor function 




function addMonster(){

var userArtistInput = document.getElementById("artistInput").value;
var userAlbumInput = document.getElementById("albumInput").value;
var userSongInput = document.getElementById("songInput").value;
;

var userSongObject = new musicMaker(userArtistInput, userSongInput, userAlbumInput);
bigObjectArray.push(userSongObject);
console.log(userSongObject);
console.log(bigObjectArray);
musicWriter(bigObjectArray);

}













