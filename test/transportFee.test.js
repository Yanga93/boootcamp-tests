describe("transportFee", function(){
  it("should return 'R20' when given shift == 'morning'", function(){
    assert.equal(transportFee('morning'), 'R20')
  });
});
