/**
 * Created by Ugur on 17.11.2014.
 */
function checkMusicFormular(){

    var Fehlermeldung = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";
    var allZeichen="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß0123456789";
    var buchstaben="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß ";
    var zahlen="0123456789";
	var fehler = false;
	
	//check songs: is empty?
	if (document.Formular.songs.value == "") {
        document.Formular.songs.focus();
		document.Formular.songs.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.songs.style.border="";
	}
    //check songs: two names?
	pattern = /\ /g;
     result = pattern.test(document.Formular.songs.value );
    if (result == false) {
        document.Formular.songs.focus();
		document.Formular.songs.style.border ="2px solid red";
        fehler = true;
    }
	//check songs: index of alpahabet and includes comma?
    for (var i=0; i<document.Formular.songs.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.songs.value.charAt(i)) == -1 & document.Formular.songs.value.indexOf(',') == -1) {
            document.Formular.songs.focus();
			document.Formular.songs.style.border ="2px solid red";
            fehler = true;
			}
    }
	//check musicerscheinungsjahr: is empty?
    if (document.Formular.musicerscheinungsjahr.value == "") {
        document.Formular.musicerscheinungsjahr.focus();
		document.Formular.musicerscheinungsjahr.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.musicerscheinungsjahr.style.border="";
	}
	//check musicerscheinungsjahr is bigger as 2014
    if (document.Formular.musicerscheinungsjahr.value > 2014) {
        document.Formular.musicerscheinungsjahr.focus();
		document.Formular.musicerscheinungsjahr.style.border ="2px solid red";
        fehler = true;
    }
	//check musicerscheinungsjahr: is index of numbers
    for (var i=0; i<document.Formular.musicerscheinungsjahr.value.length; i++) {
        if (zahlen.indexOf(document.Formular.musicerscheinungsjahr.value.charAt(i)) == -1) {
            document.Formular.musicerscheinungsjahr.focus();
			document.Formular.musicerscheinungsjahr.style.border ="2px solid red";
            fehler = true;
        }
    }
	//check albumtitel: is empty?
    if (document.Formular.albumtitel.value == "") {
        document.Formular.albumtitel.focus();
		document.Formular.albumtitel.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.albumtitel.style.border="";
	}
	//check albumtitel: is index of the alphabet and numbers
    for (var i=0; i<document.Formular.albumtitel.value.length; i++) {
        if (allZeichen.indexOf(document.Formular.albumtitel.value.charAt(i).trim()) == -1) {
            document.Formular.albumtitel.focus();
			document.Formular.albumtitel.style.border ="2px solid red";
            fehler = true;
        }
    }
    //check interpreter: is empty?
    if (document.Formular.interpreter.value == "") {
        document.Formular.interpreter.focus();
		document.Formular.interpreter.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.interpreter.style.border = "";
	}
	//check interpeter: is index of the alphabet
    for (var i = 0; i < document.Formular.interpreter.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.interpreter.value.charAt(i).trim()) == -1) {
            document.Formular.interpreter.focus();
			document.Formular.interpreter.style.border ="2px solid red";
            fehler = true;
        }
    }
	if (fehler == true){
		alert(Fehlermeldung);
		return false;
	}
}