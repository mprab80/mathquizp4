function addUser(){
    p1name=document.getElementById("p1name").value;
    p2name=document.getElementById("p2name").value;
    localStorage.setItem("Player 1 Name", p1name);
    localStorage.setItem("Player 2 Name", p2name);
    window.location="game_page.html";
}