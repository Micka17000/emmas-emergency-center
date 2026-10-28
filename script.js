'use strict';
// Keep exactly 10 original responses in each category. All content stays on device.
const emergencies = {
  work: [
    "That meeting could've been an email. That email could've been a thought they kept to themselves.",
    "You're one person, not a fully staffed department in a cute cardigan.",
    "Today's professional goal: keep the inside voice inside. A surprisingly ambitious project.",
    "Your inbox has main-character energy. Unfortunately, this is your show.",
    "If they say 'quick question,' you're allowed to silently hear the Jaws theme.",
    "You can be a team player without becoming the entire team. Even the printer gets breaks.",
    "Somewhere, a spreadsheet is acting like it pays your bills. Close the tab for a minute. Assert dominance.",
    "Put 'survived the meeting before the meeting' on your imaginary performance review. Exceeds expectations.",
    "Being good at your job is not a binding agreement to do everyone else's. The mug has reviewed the paperwork.",
    "Your worth is not measured in unread emails. If it were, your inbox would owe you a yacht."
  ],
  people: [
    "Your social battery is at 2%. Unfortunately, small talk is not a compatible charger.",
    "You can love people and still wish they came with a snooze button.",
    "Not every comment needs a response. Some can simply enjoy the echo of their own nonsense.",
    "'I'd love to, but I can't' is a complete sentence. The director's cut is nobody's business.",
    "You are not the customer service desk for everyone's mood. This counter is closed.",
    "Some people are a delight. Some are a group project with shoes. Adjust your availability accordingly.",
    "You're allowed to leave the group chat unread. The casserole debate will survive without your leadership.",
    "Today's dress code: cozy. Today's guest list: highly selective.",
    "Being nice doesn't require unlimited access to you. Even the fancy cheese has a wrapper.",
    "If your face said it before your mouth could stop it, let's call that efficient communication."
  ],
  love: [
    "If decoding their text requires a corkboard and red string, this is a hobby you can quit.",
    "Your standards are not too high. 'Actually makes plans' is not a penthouse-level amenity.",
    "A slow reply is not an invitation to become a private investigator. Your mug needs you here.",
    "You are the whole meal. Please stop auditioning for the role of complimentary bread.",
    "Mixed signals belong in a traffic study. You were hoping for dinner.",
    "You can miss someone and still keep the door closed. That's a boundary, with excellent hinges.",
    "Romance is lovely. So is not explaining basic consideration with a PowerPoint.",
    "If the date was a disaster, at least you have material. Your next brunch has been fully funded.",
    "A relationship status is not a report card. You're allowed to enjoy your own excellent company.",
    "Today's love story: you, your favorite drink, and absolutely no reading between the lines."
  ],
  everything: [
    "You've got 37 tabs open in your brain, and one is playing music. Start with the one making the noise.",
    "Today's forecast: scattered nonsense with a chance of needing a snack.",
    "You don't have to get your whole life together before this drink gets cold. Let's lower the stakes.",
    "If all you did today was keep the plot moving, congratulations. That counts as production.",
    "Your to-do list has confused itself with a royal decree. You may respectfully ignore its tone.",
    "Pick one tiny thing. Tiny. We're talking 'move the sock,' not 'reinvent your entire existence.'",
    "The laundry is not judging you. It's fabric. Don't let it develop a management role.",
    "You are allowed to have an off day without turning it into a personal rebrand.",
    "If life is giving you lemons, you do not owe anyone a beautifully packaged beverage business.",
    "Some days you're the sparkle. Some days you're the woman looking for her phone while holding it. Both are welcome here."
  ]
};

const home = document.querySelector('#emergencies');
const fix = document.querySelector('#fix');
const response = document.querySelector('#response');
const categoryLabel = document.querySelector('#category-label');
const categoryButtons = [...document.querySelectorAll('[data-category]')];
const bags = {};
const previous = {};
let category;
let origin;

function nextResponse(key) {
  if (!bags[key] || bags[key].length === 0) {
    const bag = emergencies[key].map((_, i) => i);
    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    // Pop from the end; avoid an immediate repeat across two shuffled rounds.
    if (bag[bag.length - 1] === previous[key]) {
      [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    bags[key] = bag;
  }
  const index = bags[key].pop();
  previous[key] = index;
  return emergencies[key][index];
}

function showResponse() {
  response.textContent = nextResponse(category);
  const card = document.querySelector('.response-card');
  card.classList.remove('reveal');
  void card.offsetWidth;
  card.classList.add('reveal');
}

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    origin = button;
    category = button.dataset.category;
    categoryLabel.textContent = button.children[1].textContent;
    home.hidden = true;
    fix.hidden = false;
    showResponse();
    document.querySelector('#another').focus({preventScroll: true});
    window.scrollTo(0, 0);
  });
});
document.querySelector('#another').addEventListener('click', showResponse);
document.querySelector('#back').addEventListener('click', () => {
  fix.hidden = true;
  home.hidden = false;
  origin.focus({preventScroll: true});
  window.scrollTo(0, 0);
});
