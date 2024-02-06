// Creo le variabili che mi serviranno per i bottoni
let currentInput = document.querySelector('.current-input');
let answerScreen = document.querySelector('.answer-screen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.getElementById('erase');
let clearbtn = document.getElementById('clear');
let evaluate = document.getElementById('evaluate');
let result = [];

clearbtn.addEventListener('click', () => {
    result = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'current-input';
    answerScreen.className = 'answer-screen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // quando il pulsante cliccato non è il pulsante Cancella
        if (!btn.id.match('erase')) {
            // Per visualizzare il valore
            result.push(btn.value);
            console.log(result);
            currentInput.innerHTML = result.join('');
            // Per ricevere la risposta in tempo reale
            if (btn.classList.contains('num-btn')) {
                if ((eval(result.join(''))).toString().length > 8) {
                    answerScreen.innerHTML = (eval(result.join(''))).toFixed(5);
                }
                else {
                    console.log((eval(result.join(''))).toString().length)
                    answerScreen.innerHTML = eval(result.join(''));
                }
            }
        }
        // Quando il pulsante cancella viene premuto
        if (btn.id.match('erase')) {
            result.pop();
            currentInput.innerHTML = result.join('');
            answerScreen.innerHTML = eval(result.join(''));
        }
        // Quando viene si fa clic sul pulsante di valutazione
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answer-screen';
            answerScreen.className = 'current-input';
            answerScreen.style.color = "white";
        }
        // Per evitare errori non definiti nello schermo
        if (typeof eval(result.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }
    });
});