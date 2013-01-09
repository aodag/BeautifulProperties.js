describe("BeautifulProperties.Versionizable", function() {
  describe(".define", function() {

  });
  describe(".getPreviousVersion", function() {
    var object,changeKey;
    beforeEach(function(){
      object = Object.create(null);
    });
    it("hoge",function(){
//      BeautifulProperties.Hookable.define(object,'key2');
      BeautifulProperties.Versionizable.define(object,'key');
      object.key = 1;
      object.key = 2;
      object.key = 2;
      expect(BeautifulProperties.Versionizable.getPreviousVersion(object,'key')).toBe(1);
    });
    it("fuga",function(){
      BeautifulProperties.Hookable.define(object,'key2');
      BeautifulProperties.Versionizable.define(object,'key',{length:2});
      object.key = 1;
      object.key = 2;
      object.key = 3;
      expect(BeautifulProperties.Versionizable.getPreviousVersion(object,'key')).toBe(2);
    });
  });
});