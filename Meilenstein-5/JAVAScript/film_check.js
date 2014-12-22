/**
 * Created by Ugur on 17.11.2014.
 */
function checkFilmFormular(){

    var Fehlermeldung = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";
    var allZeichen="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß0123456789";
    var buchstaben="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß ";
    var zahlen="0123456789";
	var fehler = false;
	
	//check schauspieler: is empty?
	if (document.Formular.schauspieler.value == "") {
        document.Formular.schauspieler.focus();
		document.Formular.schauspieler.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.schauspieler.style.border = "";
	}
	//check schauspieler: two names?
	pattern = /\ /g;
     result = pattern.test(document.Formular.schauspieler.value );
    if (result == false) {
        document.Formular.schauspieler.focus();
		document.Formular.schauspieler.style.border ="2px solid red";
        fehler = true;
    }
	//check schauspieler: index of alpahabet and includes comma?
    for (var i=0; i<document.Formular.schauspieler.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.schauspieler.value.charAt(i)) == -1 & document.Formular.schauspieler.value.indexOf(',') == -1) {
            document.Formular.schauspieler.focus();
			document.Formular.schauspieler.style.border ="2px solid red";
            fehler = true;
			}
    }
	//check filmerscheinungsjahr: is empty?
    if (document.Formular.filmerscheinungsjahr.value == "") {
        document.Formular.filmerscheinungsjahr.focus();
		document.Formular.filmerscheinungsjahr.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.filmerscheinungsjahr.style.border = "";
		}
	//check filmerscheinungsjahr: bigger as 2014?
    if (document.Formular.filmerscheinungsjahr.value > 2014) {
        document.Formular.filmerscheinungsjahr.focus();
		document.Formular.filmerscheinungsjahr.style.border ="2px solid red";
        fehler = true;
	}
	//check filmerscheinungsjahr: index of numbers?
    for (var i=0; i<document.Formular.filmerscheinungsjahr.value.length; i++) {
        if (zahlen.indexOf(document.Formular.filmerscheinungsjahr.value.charAt(i)) == -1) {
            document.Formular.filmerscheinungsjahr.focus();
			document.Formular.filmerscheinungsjahr.style.border ="2px solid red";
            fehler = true;
        }
    }
	//check drehbuch: is empty?
    if (document.Formular.drehbuch.value == "") {
        document.Formular.drehbuch.focus();
		document.Formular.drehbuch.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.drehbuch.style.border = "";
	}
	//check drehbuch: two names?
    var pattern = /\ /g;
    var result = pattern.test(document.Formular.drehbuch.value );
    if (result == false) {
        document.Formular.drehbuch.focus();
		document.Formular.drehbuch.style.border ="2px solid red";
        fehler = true;
    }
	//check drehbuch: index of alphabet
    for (var i=0; i<document.Formular.drehbuch.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.drehbuch.value.charAt(i)) == -1) {
            document.Formular.drehbuch.focus();
				document.Formular.drehbuch.style.border ="2px solid red";
            fehler = true;
        }
    }
	 //check regie: is empty?
    if (document.Formular.regie.value == "") {
        document.Formular.regie.focus();
		document.Formular.regie.style.border ="2px solid red";
        fehler = true;
    }else{
		document.Formular.regie.style.border = "";
	}
	//check regie: two names?
    pattern = /\ /g;
    result = pattern.test(document.Formular.regie.value );
    if (result == false) {
        document.Formular.regie.focus();
		document.Formular.regie.style.border ="2px solid red";
        fehler = true;
   	}
	//check regie: index of the alphabet
    for (var i = 0; i < document.Formular.regie.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.regie.value.charAt(i)) == -1) {
            document.Formular.regie.focus();
			document.Formular.regie.style.border ="2px solid red";
            fehler = true;
        }
    }
    //check filmtitel: is empty?
    if (document.Formular.filmtitel.value == "") {
        document.Formular.filmtitel.focus();
		document.Formular.filmtitel.style.border ="2px solid red";
		fehler = true;
    }else{
		document.Formular.filmtitel.style.border = "";
	}
	//check filmtitel: is index of the alphabet and numbers
    for (var i=0; i<document.Formular.filmtitel.value.length; i++) {
        if (allZeichen.indexOf(document.Formular.filmtitel.value.charAt(i).trim()) == -1) {
            document.Formular.filmtitel.focus();
			document.Formular.filmtitel.style.border ="2px solid red";
            fehler = true;
		}
    }
	if (fehler == true){
		alert(Fehlermeldung);
		return false;
	}
}