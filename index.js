describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    function scuberGreetingForFeet(distance) {
      if (distance <= 400) {
        return 'This one is on me!';
      } else if (distance > 400 && distance <= 2000) {
        return 'That will be twenty bucks.';
      } else if (distance > 2000 && distance <= 2500) {
        return 'I will gladly take your twenty bucks.';
      } else {
        return 'No can do.';
      }
    }
  });
});


function ternaryCheckCity(destination) {
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
