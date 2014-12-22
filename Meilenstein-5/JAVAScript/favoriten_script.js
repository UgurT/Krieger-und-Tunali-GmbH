/**
 * Created by Ugur on 22.12.2014.
 */


function createTable(file) {
    var favmusic = new XMLHttpRequest();
    var favfilm = new XMLHttpRequest();
    favmusic.open("GET", 'getFavorites.php?mode='+file, false);
    favmusic.send(null);
    favfilm.open("GET", 'getFavorites.php?mode='+file, false);
    favfilm.send(null);

    // music data
    var musicData = JSON.parse(favmusic.responseText);
    jsonMusic = musicData.Musikfavoriten;
    songArray = jsonMusic[0];

    // film data
    var filmData = JSON.parse(favfilm.responseText);
    jsonFilm = filmData.Filmfavoriten;
    filmArray = jsonFilm[0];

    // tables that should be filled
    var tableMusic = document.getElementById("tableMusic");
    var tableFilm = document.getElementById("tableFilm");

    // create music table
    for(var i = 1; i <= Object.keys(songArray).length; i++) {
        // get current song
        var currentSong = songArray[i];
        // get data for song
        var interpreter = currentSong['interpreter'];
        var title = currentSong['title'];
        var year = currentSong['year'];
        var genre = currentSong['genre'];

        // add table row with song data
        var row = tableMusic.insertRow(i);

        // add cells for data
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // fill data
        cell1.innerHTML = interpreter;
        cell2.innerHTML = title;
        cell3.innerHTML = year;
        cell4.innerHTML = genre;
    }

    // create film table
    for(var i = 1; i <= Object.keys(filmArray).length; i++) {
        // get current film
        var currentFilm = filmArray[i];
        // get data for film
        var title = currentFilm['Filmtitel'];
        var regie = currentFilm['Regie'];
        var autor = currentFilm['Drehbuch']
        var year = currentFilm['Erscheinungsjahr']
        var genre = currentFilm['Genre'];

        // add table row with film data
        var row = tableFilm.insertRow(i);

        // add cells for data
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        // fill data
        cell1.innerHTML = title;
        cell2.innerHTML = regie;
        cell3.innerHTML = autor;
        cell4.innerHTML = year;
        cell5.innerHTML = genre;
    }

    switchTable(film);
}

function switchTable(type) {
    var buttonLinks = document.getElementById("leftsite");
    var buttonRechts = document.getElementById("rightsite");
    var tableMusic = document.getElementById("tableMusic");
    var tableFilm = document.getElementById("tableFilm");

    if (type == "film") {
        buttonLinks.classList.remove("active");
        buttonRechts.classList.add("active");
        tableMusic.classList.add("hideTable");
        tableFilm.classList.remove("hideTable");
    } else {
        buttonLinks.classList.add("active");
        buttonRechts.classList.remove("active");
        tableFilm.classList.add("hideTable");
        tableMusic.classList.remove("hideTable");
    }
}