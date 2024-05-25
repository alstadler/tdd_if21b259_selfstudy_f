describe ('electrons_around_cores', function () {
    it('should calculate correct output for [1, 2, 3, 4, 5]', () => {
    expect(electronsAroundCores([1, 2, 3, 4, 5])).toBe(6);
    });
})