describe("isWeekday", function(){
  it("should return 'myWeekDay' when given !day.startsWith('S')", function(){
      assert.equal(isWeekday('S'), false)
  });
});
