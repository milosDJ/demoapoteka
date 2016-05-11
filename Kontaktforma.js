function pritisni(){
	var tbimeiprezime=document.getElementById("imeId");
	var imeiprezime=tbimeiprezime.value;
	
	var tbemail=document.getElementById("emailId");
	var email=tbemail.value;
	
	var taporuka=document.getElementById("porukaId");
	var poruka=taporuka.value;
	
	if(imeiprezime=="" || imeiprezime==null){
		tbimeiprezime.style.borderColor="red";
	}
	else{
		tbimeiprezime.style.borderColor="#808080";
	}
	if(email=="" || email==null){
		
	tbemail.style.borderColor="red"
	}
	else{
		tbemail.style.borderColor="#808080"
	}
    if(poruka=="" || poruka==null){
		taporuka.style.borderColor="red";
		
	}
	else{
		taporuka.style.borderColor="#808080";
	}
}