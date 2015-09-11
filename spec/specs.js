describe('findAndReplace', function() {
  it('finds word(s) in an array and replace it with another word', function() {
    expect(findAndReplace('aardvarks enter offices', 'aardvarks', 'potatoes')).to.equal('potatoes enter offices');
  });
});
