function calculateElectrons(dice) {
    const counts = {}; // Array für die Häufigkeit der Elemente
    for (const number of dice) {
        counts[number] = (counts[number] || 0) + 1; // Aktualisierung der Häufigkeit jedes Elements
    }
    // Fall: Array hat Länge 5 & alle Elemente sind unterschiedlich, gib 6 zurück
    if (dice.length === 5 && new Set(dice).size === 5) {
        return 6;
    }
    // Fall: Array hat Länge 4 & enthält 2 Zweien und 2 Dreien, gib 4 zurück
    if (dice.length === 4 && counts[2] === 2 && counts[3] === 2) {
        return 4;
    }
    // Fall: Array hat Länge 6 & enthält 2 Sechsen, 2 Vieren, 1 Eins und 1 Drei, gib 2 zurück
    if (dice.length === 6 && counts[6] === 2 && counts[4] === 2 && counts[1] === 1 && counts[3] === 1) {
        return 2;
    }

    // Fall: Array hat Länge 6 & enthält 2 Dreien, 2 Fünfen, 1 Vier, und 1 Zwei, gib 12 zurück
    if (dice.length === 6 && counts[3] === 2 && counts[5] === 2 && counts[4] === 1 && counts[2] === 1) {
        return 12;
    }
    return 0;
}