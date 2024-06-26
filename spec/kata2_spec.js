describe ('electrons_around_cores', function () {
    it('should calculate correct output for [1, 2, 3, 4, 5]', () => {
    expect(calculateElectrons([1, 2, 3, 4, 5])).toBe(6);
    });

    it('should calculate correct output for [2, 2, 3, 3]', () => {
        expect(calculateElectrons([2, 2, 3, 3])).toBe(4);
    });

    it('should calculate correct output for [6, 6, 4, 4, 1, 3]', () => {
        expect(calculateElectrons([6, 6, 4, 4, 1, 3])).toBe(2);
    });

    it('should calculate correct output for [3, 5, 3, 5, 4, 2]', () => {
        expect(calculateElectrons([3, 5, 3, 5, 4, 2])).toBe(12);
    });
})