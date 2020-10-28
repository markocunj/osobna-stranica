function mojaFunkcija(){
    let ime=document.getElementById("ime").value;
    let email=document.getElementById("email").value;
    let poruka=document.getElementById("poruka").value;
    if (ime!=0 && email!=0 && poruka!=0){
        if (email.includes("@")){
            alert("Uspjesno poslana poruka!")
        }
        else{
            alert("Neispravan e-mail!");
        }
    }
    else {
        alert("Morate ispuniti sva polja!");
    }
}