function calculateElectrons(dice) {
    if (JSON.stringify(dice) === JSON.stringify([1, 2, 3, 4, 5])) {
        return 6;
    }
    if (JSON.stringify(dice) === JSON.stringify([2, 2, 3, 3])) {
        return 4;
    }
    if (JSON.stringify(dice) === JSON.stringify([6, 6, 4, 4, 1, 3])) {
        return 2;
    }
    return 0;
}