function popuniTabelu(){
 	var niz={"apoteke":[
		{ime:"a1",adresa:"adr1",telefon:"tel1",email:"em1"},
		{ime:"a2",adresa:"adr2",telefon:"tel2",email:"em2"},
		{ime:"a3",adresa:"adr3",telefon:"tel3",email:"em3"},
		{ime:"a4",adresa:"adr4",telefon:"tel4",email:"em4"},
		{ime:"a5",adresa:"adr5",telefon:"tel5",email:"em5"},
	]}
	var tabela=document.getElementById("tblApoteke");
	for(var i=0;i<niz.apoteke.length;i++){
		var apoteka=niz.apoteke[i];
		var tr=tabela.insertRow(i+1);
		var td=tr.insertCell(0);
		td.innerHTML=apoteka.ime;
		var td1=tr.insertCell(1);
		td1.innerHTML=apoteka.adresa;
		var td2=tr.insertCell(2);
		td2.innerHTML=apoteka.telefon;
		var td3=tr.insertCell(3);
		td3.innerHTML=apoteka.email;
		
	}
	
	}
	

$(document).ready(function(){
	popuniTabelu();
	
});