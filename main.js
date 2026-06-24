let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': [] },
        { 'name': 'Paola', 'scores': [] },
        { 'name': 'Filippo', 'scores': [] },
        { 'name': 'Giuseppe', 'scores': [] }
    ],
       
  // Metodo per generare 10 punteggi casuali per ogni giocatore
    generateRandomScores: function() {
        this.players.forEach(player => {
            player.scores = []; // Reset punteggi esistenti
            for (let i = 0; i < 10; i++) {
                let randomScore = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                player.scores.push(randomScore);
            }
        });
        console.log("Punteggi generati con successo.");
    },
 
    // Metodo per aggiungere un nuovo giocatore
    addPlayer: function(name) {
        let newPlayer = { 'name': name, 'scores': [] };
        // Genera 10 punteggi casuali subito per il nuovo giocatore
        for (let i = 0; i < 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        this.players.push(newPlayer);
        console.log(`Giocatore ${name} aggiunto.`);
    },

    // Metodo per calcolare il punteggio finale (somma)
    calculateTotalScore: function(scores) {
        return scores.reduce((acc, curr) => acc + curr, 0);
    },

    // EXTRA: Metodo per stilare la classifica finale
    showRanking: function() {
        // Creiamo un array di appoggio con i totali
        let ranking = this.players.map(player => {
            return {
                name: player.name,
                total: this.calculateTotalScore(player.scores)
            };
        });

        // Ordiniamo in modo decrescente usando compareNumbers
        ranking.sort((a, b) => b.total - a.total);

        console.table(ranking);
        return ranking;
    },

    // Metodo per determinare il vincitore
    findWinner: function() {
        let ranking = this.showRanking();
        console.log(`Il vincitore è ${ranking[0].name} con ${ranking[0].total} punti!`);
    }
};
// Stato iniziale
console.log("Giocatori prima dell'aggiunta:", bowling.players.length); 

// Aggiungi il giocatore
bowling.addPlayer("Marco");

// Verifica che ora siano 5
console.log("Giocatori dopo l'aggiunta:", bowling.players.length);

// Stampa l'ultimo giocatore per conferma
console.log("L'ultimo giocatore aggiunto è:", bowling.players[4].name);

// --- ESEMPIO DI UTILIZZO ---

// 1. Genera punteggi
bowling.generateRandomScores();

// 2. Aggiungi un nuovo giocatore
bowling.addPlayer("Marco");

// 3. Mostra la classifica
bowling.showRanking();

// 4. Determina il vincitore
bowling.findWinner();