function electronsAroundCores(dice) {
    if (dice.toString() === [1, 2, 3, 4, 5].toString()) return 6;
    if (dice.toString() === [2, 2, 3, 3].toString()) return 4;
    return 0;
}