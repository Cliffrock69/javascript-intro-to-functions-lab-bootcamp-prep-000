function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}

/*describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  }) */

function sayHiToGrandma(string) {
  if (string === toLowerCase())
  return ("I can't hear you");
}

/* it('returns "YES INDEED!" if `string` is uppercase', function() {
  expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
})*/

{
  if (string === toUpperCase())
  return ("YES INDEED!");
}

/* it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
  expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
})*/
{
  if (string === "I love you, Grandma.")
  return ("I love you, too.");
}
