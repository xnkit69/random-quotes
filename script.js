


let btn = document.getElementById('btn');
let output = document.getElementById('output');
let qoute = [
'I hope you know it is going to be ok <i class="fa-solid fa-heart"></i>',
'you deserve a healthy love!',
'are you really okay, or just avoiding it? :)',
'you are not overthinking it because they are SOOOO special, it is because they are inconsistent and confusing!',
'it is gonna be okay!',
'you are really cute and that is not even the best thing about you!',
'we repeat what we do not repair!',
'let it hurt, then let it go.',
'small shaky steps still count, remember that! progress is progress.',
'a little progress each day adds up to big results.',
'do it.',
'remember, some things have to end for better things to begin!',
'give yourself some credit for how far you have come.',
'if you can dream it, you can do it!',
'life is full of surprises!',
'it is okay not to be okay.',
'you matter...',
'it is not easy, I know :) give yourself time and trust the process!',
'it is okay to just exist, stop putting so much pressure on yourself!',
'do something today that your future self will thank you for!',
'how your life feels is way more important than how it looks.',
'your direction is more important than your speed!',
'stop trying to like everybody, you do not even like everybody!',
'fuck them!',
'you are going to figure it out, like you always have!',
];

btn.addEventListener('click', function(){

  var randomQoute = qoute[Math.floor(Math.random() * qoute.length)];
  output.innerHTML = randomQoute;

  var randomMemeLength = (Math.floor(Math.random() * 7)+1);
  for (var i = 0; i< randomMemeLength; i++ );{
    document.getElementById("randomMeme").src = randomMemeLength +".jpg";
    output.innerHTML = randomPic;
  }

});
