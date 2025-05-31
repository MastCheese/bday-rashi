// LIVE COUNTDOWN
function updateCountdown() {
  const startDate = new Date("2024-10-12T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4.345); // Approximate
  const remainingWeeks = weeks % 4;
  const remainingDays = days % 7;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;

  const counter = `Together Since ${months} months, ${remainingWeeks} weeks, ${remainingDays} days, ${remainingHours} hrs, ${remainingMinutes} mins`;
  document.getElementById("countup").innerText = counter.toUpperCase();
}

// Start countdown and update every 60 seconds
updateCountdown();
setInterval(updateCountdown, 60000);

// LETTER TYPING ANIMATION
const headerText = "To my Monica,";
const letterText = `
Could this BE any more your birthday?! 🎉

Happy Birthday, My Lobster… I mean, My Monica 💗

Okay, so I know I’ve said all this before — but kind of like Joey with sandwiches or Ross with dinosaurs, I just can’t stop repeating the good stuff. And YOU, my love, are the very best stuff.

You’ve brought more love, laughter, and perfectly organized chaos into my life than I knew was possible. You’re the Monica to my Chandler — the one who keeps things together when I’m spiraling, who believes in me when I can’t find matching socks, and who makes the hard stuff feel softer just by being there. (Also, you're the only one allowed to yell at me for leaving toothpaste in the sink.)

You are my person. My best friend. My “we don’t know how it happened, but it just did” kind of love.
Honestly, I’m still shocked you picked me. But also, you’re stuck with me now, so good luck with that.

You make life feel like Central Perk with extra whipped cream. Like a game of Bamboozled where we both win. Like a Thanksgiving dinner without the turkey on your head (although, I’d still love you with it on). You’re the reason I believe in soulmates — and spontaneous proposals with empty ring boxes.

I crave everything about us:
The late-night snuggles, the “you’re annoying but I love you” bickering, the way you steal the blanket, your happy dances when dinner turns out great (which, let’s face it, is always). Every kiss, every glance, every sarcastic remark — I live for it.

You are, without a doubt, the most beautiful human I’ve ever known — and not just in a "you could be a soap opera star" way, but in the "I’d marry you in a Vegas chapel or a fancy New York loft" kind of way. I’m your Chandler. Forever awkward. Forever devoted. Forever yours.

So today, on your birthday, I just want you to know:
I love you more than Chandler loves sarcasm.
More than Monica loves label makers.
More than Joey loves food.
And definitely more than Ross loves saying, “We were on a break.”

Happy Birthday, baby. You’re my home, my heart, my everything.
Now let’s eat cake — and possibly name it something ridiculous like Miss Frosting Von Sprinkleface.

Forever yours,
Your Chandler (with the weirdest smile and the biggest heart) ❤️
`;

let headerIndex = 0;
let letterIndex = 0;

function typeHeader() {
  if (headerIndex < headerText.length) {
    document.getElementById("monicaHeader").innerHTML += headerText.charAt(headerIndex);
    headerIndex++;
    setTimeout(typeHeader, 70);
  } else {
    setTimeout(typeLetter, 500); // Delay before starting the body
  }
}

function typeLetter() {
  if (letterIndex < letterText.length) {
    document.getElementById("letterText").innerHTML += letterText.charAt(letterIndex);
    letterIndex++;
    setTimeout(typeLetter, 15);
  }
}

window.onload = function () {
  typeHeader();
};

  
