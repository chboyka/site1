document.cookie = "login=False";
function reg(){
    uname = document.getElementById('name').value;
    email = document.getElementById('mail').value;
    if(uname && email){
        document.cookie = "login=True";
        document.location.replace('./home.html');
    }
    else{
        alert('Please enter Your Name and E-mail Address')
    }
}