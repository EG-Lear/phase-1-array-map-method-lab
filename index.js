const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  for (let i = 0; i < tutorials.length; i++) {
    let x = tutorials[i].split(' ')
    //console.log(x)
    x = x.map(value => (value.charAt(0).toUpperCase() + value.slice(1)))
    //console.log(x)
    tutorials[i] = x.join(' ')
  }

  return tutorials
}

//titleCased;