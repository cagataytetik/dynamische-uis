let nummer = prompt("Voer een nummer in voor de ruit");
let lijstje = "";
for (let getallen = 1; getallen <= nummer; getallen++){
    lijstje += getallen;
    document.getElementById("cijfer").innerText += lijstje +'\n';
    lijstje = getallen === parseInt(nummer) ? lijstje += "" : lijstje += "-";
}
for (let getallen = nummer; getallen >= 1; getallen--) {
    lijstje = lijstje.replace(getallen, '').split("").reverse().join("").replace('-', '').split("").reverse().join("");
    document.getElementById("cijfer").innerText += lijstje + '\n';
}