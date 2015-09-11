describe('findWord', function() {
  it('finds the position(s) of a search word in an array', function() {
    expect(findWord('aardvarks enter offices', 'aardvarks')).to.equal('0');
  });
});
