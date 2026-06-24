let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': [], 'type': 'iniziale' },
        { 'name': 'Paola', 'scores': [], 'type': 'iniziale' },
        { 'name': 'Filippo', 'scores': [], 'type': 'iniziale' },
        { 'name': 'Giuseppe', 'scores': [], 'type': 'iniziale' }
    ],

    generateRandomScores: function() {
        this.players.forEach(player => {
            player.scores = []; 
            for (let i = 0; i < 10; i++) {
                let randomScore = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                player.scores.push(randomScore);
            }
        });
        console.log("Punteggi generati per tutti i giocatori.");
    },

    addPlayer: function(name) {
        let newPlayer = { 'name': name, 'scores': [], 'type': 'aggiunto' };
        for (let i = 0; i < 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        this.players.push(newPlayer);
        console.log(`Giocatore ${name} aggiunto.`);
    },

    calculateTotalScore: function(scores) {
        return scores.reduce((acc, curr) => acc + curr, 0);
    },

    showRanking: function(playersList = this.players) {
        let ranking = playersList.map(player => ({
            name: player.name,
            total: this.calculateTotalScore(player.scores)
        }));

        ranking.sort((a, b) => b.total - a.total);
        console.table(ranking);
        return ranking;
    },

    // Aggiunto metodo mancante correttamente
    findWinner: function(playersList = this.players) {
        let ranking = this.showRanking(playersList);
        console.log(`Il vincitore è ${ranking[0].name} con ${ranking[0].total} punti!`);
    }
};

// --- ESECUZIONE ---

// 1. Genera i punteggi
bowling.generateRandomScores();

// 2. Classifica e vincitore SOLO per i 4 iniziali
console.log("--- CLASSIFICA E VINCITORE DEI 4 INIZIALI ---");
let gruppoIniziale = bowling.players.filter(p => p.type === 'iniziale');
bowling.findWinner(gruppoIniziale);

// 3. Aggiungi Marco
bowling.addPlayer("Marco");

// 4. Classifica e vincitore FINALE (tutti e 5)
console.log("--- CLASSIFICA E VINCITORE FINALE (TUTTI) ---");
bowling.findWinner();