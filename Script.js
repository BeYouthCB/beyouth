function process(plusMinusOne, productName, productPrice) {
                
    // Il .value prende il valore contenuto nella textfield con id specificato
    var value = parseInt(document.getElementById(productName).value); 
    value = value + plusMinusOne; // Incremento o decremento
    
    if(value >= 0) {
        var newTotal = parseFloat(document.getElementById('totCheck').value) + plusMinusOne * productPrice; // Arrotondo a due decimali
        document.getElementById('totCheck').value = Math.round(newTotal * 100) / 100; // Aggiorno il costo totale
        
        document.getElementById(productName).value = value; // Imposto il costo per quel tipo di prodotto
    }
    
    checkAmount();

}

function checkAmount() {
    // Se il totale è maggiore di 0 tasto abilitato, altrimenti no
    if(document.getElementById('totCheck').value > 0) {
        document.getElementById('checkAll').disabled = false;
    }
    else {
        document.getElementById('checkAll').disabled = true;
    }
}


function checkValuesType(customerName, customerTable) {
    // Con questa funzione evito continui richiami alla pagina index in caso di form non validi
    if(isNaN(customerName) && customerName != "" && !isNaN(customerTable)) {
        return true;
    }
    else {
        if(isNaN(customerName) == false || customerName == "") {
            document.getElementById('errorName').innerHTML = "Errore campo nome.";
        }
        if(isNaN(customerTable) == true || customerTable == "") {
            document.getElementById('errorTable').innerHTML = "Errore campo tavolo.";
        }
        
        return false;
    }
    
}

