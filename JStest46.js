class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;   
    }
}

class Song extends Media {
    constructor(songData){
        super(songData);
        this.artist = songData.artist;

    }
}

const mySong = new Song({
    artist: "QQQQQQQ",
    name: "BBBBBBBB",
    publishDate: 2000,

});
console.log(mySong);