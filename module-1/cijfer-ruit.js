// vraag de gebruiker om een getal
let userInput = prompt("Voer een getal in:");

// converteer de invoer naar een getal
let number = parseInt(userInput);

// controleer of de invoer een geldig getal is
if (isNaN(number)) {
  alert("Ongeldige invoer. Voer een geldig getal in.");
} else {
  // gebruik het getal om de webpagina te openen
  window.location.href = "https://filerepository.itslearning.com/203143d2-5e6c-4270-abbb-586b2835ab18?Token=rbIGAMsBAACXDwpkAAAAACAAS7sZ2v0lxvhNOOHJrf_tyJRoP_8zXdUwBSDyBaZOlIMAAA&number=" + number;
}