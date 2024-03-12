function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const copiedArray = input.slice(1, -1);
    let songs = [];

    for (let item of copiedArray) {
        let currentSong = item.split('_');
        let typeList = currentSong[0];
        let name = currentSong[1];
        let time = currentSong[2];
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    let currentTypeList = input[input.length - 1];

    if (currentTypeList === 'all') {
        songs.forEach(song => {
            console.log(song.name);
        });
    } else {
        const filteredSongs = songs.filter(song => song.typeList === currentTypeList);
        filteredSongs.forEach(song => {
            console.log(song.name);
        });
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])