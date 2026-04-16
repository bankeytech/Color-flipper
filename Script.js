// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeColor(){
    
    let symbols, color, hex;
    symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    hex = document.querySelector(".hex")
    color="#"
    for (let i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() *16)];
    }
    hex.textContent = color
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;



}
