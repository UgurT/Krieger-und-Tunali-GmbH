<?php
/**
 * Created by PhpStorm.
 * User: Ugur
 * Date: 14.12.2014
 * Time: 14:26
 */
//Writing films

if(!empty($_GET['filmGET'])){
    $filmtitel = $_GET['filmtitel'];
    $regie = $_GET['regie'];
    $drehbuch = $_GET['drehbuch'];
    $filmerscheinungsjahr = $_GET['filmerscheinungsjahr'];
    $schauspieler = $_GET['schauspieler'];

    $film = $filmtitel . "," . $regie . "," . $drehbuch . "," . $filmerscheinungsjahr . "," . $schauspieler;

    $my_file = 'C:\Users\Ugur\Programme\XAMPP\htdocs\xampp\5.Uebung\PHP\film.txt';
    //open file
    // Sichergehen, dass die Datei existiert und beschreibbar ist
    if (is_writable($my_file)) {
        // Wir öffnen $filename im "Anhänge" - Modus.
        // Der Dateizeiger befindet sich am Ende der Datei, und
        // dort wird $somecontent später mit fwrite() geschrieben.
        if (!$handle = fopen($my_file, "w")) {
            print "Kann die Datei $my_file nicht öffnen";
            exit;
        }

        // Schreibe $somecontent in die geöffnete Datei.
        if (!fwrite($handle, $film)) {
            print "Kann in die Datei $my_file nicht schreiben";
            exit;
        }

        print "Fertig, in Datei $my_file wurde $film geschrieben";

        fclose($handle);

    } else {
        print "Die Datei $my_file ist nicht schreibbar";

    }
}
//Writing Songs
if(!empty($_GET['musicGET'])) {
    $interpreter = $_GET['interpreter'];
    $albumtitel = $_GET['albumtitel'];
    $musicerscheinungsjahr = $_GET['musicerscheinungsjahr'];
    $songs = $_GET['songs'];

    $music = $interpreter . "," . $albumtitel . "," . $musicerscheinungsjahr . "," . $songs;

    $my_file = 'C:\Users\Ugur\Programme\XAMPP\htdocs\xampp\5.Uebung\PHP\music.txt';
    //open file
    // Sichergehen, dass die Datei existiert und beschreibbar ist
    if (is_writable($my_file)) {
        // Wir öffnen $filename im "Anhänge" - Modus.
        // Der Dateizeiger befindet sich am Ende der Datei, und
        // dort wird $somecontent später mit fwrite() geschrieben.
        if (!$handle = fopen($my_file, "w")) {
            print "Kann die Datei $my_file nicht öffnen";
            exit;
        }

        // Schreibe $somecontent in die geöffnete Datei.
        if (!fwrite($handle, $music)) {
            print "Kann in die Datei $my_file nicht schreiben";
            exit;
        }

        print "Fertig, in Datei $my_file wurde $music geschrieben";

        fclose($handle);

    } else {
        print "Die Datei $my_file ist nicht schreibbar";
    }
}
?>