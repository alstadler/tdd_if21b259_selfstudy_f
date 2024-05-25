describe ('electrons_around_cores', function () {
    it('should calculate correct output for [1, 2, 3, 4, 5]', () => {
    expect(electronsAroundCores([1, 2, 3, 4, 5])).toBe(6);
    });

    it('should calculate correct output for [2, 2, 3, 3]', () => {
        expect(electronsAroundCores([2, 2, 3, 3])).toBe(4);
    });

    it('should calculate correct output for [6, 6, 4, 4, 1, 3]', () => {
        expect(electronsAroundCores([6, 6, 4, 4, 1, 3])).toBe(2);
    });
})