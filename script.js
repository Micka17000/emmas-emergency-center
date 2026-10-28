'use strict';
// 50 original responses per category. No network requests or tracking.
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

const moreEmergencies = {
  work: [
    "'Per my last email' is office cursive for 'please develop reading comprehension.'",
    "Your calendar looks like Tetris designed by someone who wants you to lose.",
    "The deadline is imaginary until someone gives it a time zone. Then it's internationally annoying.",
    "Congratulations on being the person who knows how to do the thing. Your prize is doing the thing forever.",
    "That 'quick sync' has three hosts and no agenda. You've been invited to a podcast.",
    "Please hold. Your enthusiasm is currently in a meeting with your remaining patience.",
    "'Let's circle back' is how an idea gets trapped in an office haunted house.",
    "You brought solutions. They brought a slide with seven fonts. Everyone contributed differently.",
    "Nothing says 'we value your time' like scheduling a webinar about productivity.",
    "Your out-of-office message deserves a tiny velvet rope and a bouncer named Denise.",
    "If the task was urgent yesterday, introducing it today was a bold storytelling choice.",
    "The shared document has 14 editors and zero decisions. A stunning achievement in group silence.",
    "Your job description said 'wear many hats.' It did not mention operating the entire hat factory.",
    "A ping is just a doorbell for a house you never invited anyone into.",
    "Somebody said 'low-hanging fruit' again. This company has become an orchard with Wi-Fi.",
    "You deserve a raise for every time you translated 'thoughts?' into an actual assignment.",
    "The office thermostat has chosen violence. Your cardigan has entered contract negotiations.",
    "You didn't 'drop the ball.' Someone handed you a bowling alley.",
    "That spreadsheet has more tabs than your emotional capacity has openings.",
    "The camera can be off. Your commitment to not being perceived is still very much on.",
    "You've reached the 'Best,' stage of email sign-offs. 'Warm regards' has left the building.",
    "Being available is not the same as being on clearance. Your time has a price tag.",
    "'Can you make it pop?' Sure. Like a balloon? Because that feels achievable.",
    "If multitasking were a sport, you'd have a medal and an email asking you to organize the ceremony.",
    "Your lunch break is not an informal meeting with a sandwich accessory.",
    "Someone just marked a routine email 'high importance.' The little red flag is having a big day.",
    "An agenda-less meeting is a mystery dinner where the dinner is more work.",
    "Your PTO request is a notification, not a pitch for a reality show called Who Deserves Rest?",
    "You've been 'looped in.' Condolences on your new ribbon-shaped problem.",
    "There is no prize for answering Slack faster than your own doorbell.",
    "The project is 'almost done,' which apparently means the beginning of its second childhood.",
    "You are not behind. The scope is sneaking extra furniture into the moving truck.",
    "Someone needs to tell 'end of day' that it cannot keep borrowing hours from the evening.",
    "Today's bold career move: asking which of the five top priorities is actually first.",
    "You can bring your whole self to work. Your whole self may still want to leave at five.",
    "The brainstorm produced a cloud. You're still waiting for an actual idea to fall out.",
    "Your boss called it a learning opportunity. Funny how those never come with a gift receipt.",
    "That follow-up email arrived before the original had time to unpack.",
    "You're doing excellent work under conditions best described as 'printer jam, but human.'",
    "The last five minutes of Friday are not a suitable birthplace for a new project."
  ],
  people: [
    "A surprise phone call? In this economy of personal space?",
    "Somebody confused 'I'm a good listener' with 'please begin your eight-part documentary.'",
    "Your weekend plans can be 'not putting on hard pants.' The committee has approved them.",
    "Not every silence is awkward. Some are luxury accommodations.",
    "The person who says 'just playing devil's advocate' could try playing a quieter character.",
    "You nodded politely, and now you're in a neighborhood committee. A cautionary tale.",
    "An invitation is a question, not a subpoena with cute stationery.",
    "That unsolicited opinion came with no gift receipt. Straight into the imaginary donation bin.",
    "Your resting face is not a community improvement project.",
    "'We should all go around and introduce ourselves' has never improved a perfectly good room.",
    "Someone cornered you at a party. May a woman holding appetizers arrive immediately.",
    "You can RSVP no without attaching your entire Google Calendar as evidence.",
    "A voice memo over four minutes should come with chapters and a parking validation.",
    "The group dinner has reached the 'split the check' stage. May math find everyone equally.",
    "You said 'maybe' to be polite. They heard 'I'll coordinate transportation.' Incredible acoustics.",
    "There's always someone who replies all. Today, let's admire their confidence from a distance.",
    "Your neighbor's leaf blower has a lot to say for something with no meaningful updates.",
    "You don't dislike humanity. You'd just prefer smaller portions.",
    "A speakerphone conversation in public is an audition nobody in this grocery store signed up for.",
    "You've used your nice voice all day. The next request may receive the warehouse version.",
    "Someone asked why you're so quiet. Apparently, listening now requires a press release.",
    "If leaving early is wrong, why does finding your keys feel so right?",
    "Your personal space has a dress code: invitation required.",
    "That conversation had six exits. Somehow, they installed a roundabout.",
    "People who say 'I have no filter' could consider a starter model.",
    "You can wish someone well from a distance. Binoculars are optional; participation is not.",
    "A canceled plan is sometimes just a tiny surprise vacation in your living room.",
    "They asked for your honest opinion, then wanted store credit. Interesting return policy.",
    "Your errands do not need a social component. Let the bananas be the only small talk.",
    "Congratulations on not saying 'Did I ask?' out loud. That was craftsmanship.",
    "The family group chat has discovered GIFs. We will rebuild.",
    "Being the easygoing friend should not mean getting the folding chair every time.",
    "If someone brings drama to your door, you're allowed to pretend the porch light is broken.",
    "A catch-up should involve two people talking. You appear to have attended a one-woman keynote.",
    "Your good manners are doing a lot of unpaid security work right now.",
    "No, you don't have to hug someone just because they opened their arms like automatic doors.",
    "You smiled at a stranger and they recruited you into a conversation. Nature is unpredictable.",
    "Some opinions are best kept in drafts. Preferably on a device that never reconnects.",
    "You made it through the potluck without discussing politics. Please collect your imaginary sash.",
    "Tonight's exclusive event: you, at home, declining to explain why."
  ],
  love: [
    "'Hey stranger' is a fascinating greeting from the person who engineered the strangeness.",
    "Butterflies are cute. So is knowing where you stand without consulting three friends and the moon.",
    "Their dating profile says 'fluent in sarcasm.' Let's hope they also speak 'what time is dinner?'",
    "If you're carrying the entire conversation, you may qualify for airline baggage fees.",
    "An apology without a change is a rerun with slightly better lighting.",
    "Your type might need a software update. The current version keeps crashing brunch.",
    "A late-night 'u up?' is not a sonnet, even if autocorrect adds punctuation.",
    "You're not hard to love. You may simply be dealing with someone who won't read the instructions.",
    "If they only make plans 'sometime,' let them date the concept of time.",
    "Your friends have heard this story enough to qualify for continuing education credits.",
    "Chemistry is wonderful. Please also check that the lab has operating hours and basic communication.",
    "Romantic potential does not count as a functioning appliance. You still need it to actually work.",
    "You asked for consistency. They heard 'surprise me with a new personality every Thursday.'",
    "A shared streaming password is not a legally recognized love language.",
    "If the spark only appears when they need something, that's a motion sensor.",
    "Dating after thirty: suddenly, someone owning pillowcases feels like a competitive advantage.",
    "Your ex viewed your story. So did a bot selling patio furniture. Let's keep perspective.",
    "A quiet evening alone beats a dinner spent interviewing someone about their ex's alleged flaws.",
    "You're allowed to want flowers without building a 12-slide business case for flowers.",
    "The bar is on the floor, and somehow they're asking if you offer curbside pickup.",
    "'I'm just bad at texting' is curious from someone whose phone has never left their hand.",
    "You can't build a relationship out of screenshots and a friend's optimistic interpretation.",
    "If they wanted a second date, asking you a single question on the first would've been a cute start.",
    "Your heart is not an Airbnb for someone between commitments.",
    "A grand gesture is nice. Replacing the empty toilet paper roll is a convincing sequel.",
    "You deserve a date that doesn't require a postgame analysis in a parked car.",
    "Their 'complicated situation' has seasons. You are free to stop watching.",
    "Someone can look great in a flannel and still be a terrible use of your Saturday.",
    "Being single means the good leftovers remain exactly where you left them. A tangible benefit.",
    "If every conversation is about their journey, perhaps they should date a travel agent.",
    "You don't need closure delivered in person. Sometimes the package is best marked return to sender.",
    "Matching with someone is not a binding agreement to carry their emotional luggage upstairs.",
    "That romantic dinner would be more romantic if you weren't also its booking agent.",
    "An anniversary reminder should not require the same logistics as a shuttle launch.",
    "You can find someone attractive and still decline the full subscription to their nonsense.",
    "Their mysterious energy was mostly poor scheduling. A disappointing plot twist.",
    "You asked 'Where is this going?' and got weather-level vagueness. Bring your own umbrella.",
    "Love may be blind, but your best friend has excellent vision and a notes app.",
    "A good partner can disagree with you without turning Tuesday into a courtroom drama.",
    "The right swipe was free. You are not obligated to keep paying with your evenings."
  ],
  everything: [
    "You came into this room for something. The room has declined to provide further details.",
    "The fitted sheet has won this round. Fold it into a shape and move on with your reputation intact.",
    "Dinner can be assembled. Nobody said it needed a character arc.",
    "Your car's check-engine light has terrible timing and no bedside manner.",
    "The grocery bag broke at the exact moment you believed in yourself. Rude little plot twist.",
    "You bought the vegetables. That's stage one. Let's not discuss their long-term housing situation.",
    "Some days, 'put together' means the lid fits the cup. Take the win.",
    "Your password needs a number, a symbol, and apparently a memory you no longer possess.",
    "The package says 'easy open.' The package is a liar with excellent branding.",
    "You have reached the age where a weird noise becomes a household investigation.",
    "Your errands have developed side quests. Nobody authorized an open-world game.",
    "A meal plan is just a prediction. Weather forecasts get to be wrong all the time.",
    "The pile on that chair is not clutter. It's a clothing layover with no departure board.",
    "You updated one app, and now the button you need has moved to another dimension.",
    "The dishwasher is clean. The dishwasher is dirty. This house needs a communications director.",
    "If you're running on fumes, the decorative throw pillows can arrange themselves today.",
    "Your ambitious Sunday self has once again left Monday you an unreasonable itinerary.",
    "The weather app said 'feels like.' You would also like to submit a personal estimate.",
    "You paid a bill and immediately received another bill. A deeply unoriginal sequel.",
    "Your hair tie has vanished into the same dimension as the matching sock. They seem happy there.",
    "The bananas have a 14-minute window between green and emotionally ready for bread.",
    "Nothing says adulthood like having a favorite burner and a strong opinion about sponges.",
    "You can take the shortcut. This is Tuesday, not your origin story.",
    "Your screen-time report arrived uninvited and brought judgment. How thoughtful.",
    "The house does not need to look like nobody lives there. People do, in fact, live there.",
    "You saved the recipe. That's between you and the 412 other recipes enjoying retirement in your phone.",
    "The delivery window is 8 a.m. to the heat death of the universe. Better stay close.",
    "If the instructions say 'simply,' prepare to meet a tiny screw with a personal vendetta.",
    "You've been very brave about a day that started with stepping in something wet while wearing socks.",
    "The receipt is six feet long. You bought toothpaste. Retail has become performance art.",
    "A clean countertop is lovely, but have you tried sitting down before finding another project?",
    "You opened the fridge for inspiration. It offered mustard and a suspicious container. Tough crowd.",
    "Today's energy budget covers the basics and one theatrical sigh. Spend it wisely.",
    "The printer needs cyan to print black. Even the machines are making unreasonable demands today.",
    "You scheduled a day to catch up. Life immediately scheduled more life. Very competitive of it.",
    "The keys were in the pocket you already checked. Your coat is clearly withholding information.",
    "If the day were a shopping cart, it would have that one wheel. You know the wheel.",
    "Your phone asked if you enjoyed your recent experience. It was a parking meter. Let's all settle down.",
    "You don't need a five-year plan for the next ten minutes. A chair is a respectable starting point.",
    "Somewhere beneath the receipts and lip balm is a capable woman who would like a less eventful afternoon."
  ]
};
for (const key of Object.keys(emergencies)) emergencies[key].push(...moreEmergencies[key]);

const home = document.querySelector('#emergencies');
const fix = document.querySelector('#fix');
const response = document.querySelector('#response');
const categoryLabel = document.querySelector('#category-label');
const categoryButtons = [...document.querySelectorAll('[data-category]')];
const STORAGE_KEY = 'emmas-emergency-progress-v2';
// Include the content in the signature so edits never reinterpret saved indexes.
const CONTENT_SIGNATURE = JSON.stringify(emergencies);
let progress = {};
let category;
let origin;

function readProgress() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (!saved || saved.signature !== CONTENT_SIGNATURE || !saved.categories ||
        typeof saved.categories !== 'object') return;
    for (const key of Object.keys(emergencies)) {
      const state = saved.categories[key];
      const count = emergencies[key].length;
      if (!state || !Array.isArray(state.remaining) ||
          !Number.isInteger(state.previous) || state.previous < 0 || state.previous >= count ||
          state.remaining.length >= count ||
          new Set(state.remaining).size !== state.remaining.length ||
          state.remaining.some(i => !Number.isInteger(i) || i < 0 || i >= count || i === state.previous)) continue;
      progress[key] = {remaining: [...state.remaining], previous: state.previous};
    }
  } catch (_) {
    // Disabled storage, invalid JSON or private-browser restrictions: keep playing in memory.
  }
}

function saveProgress() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      signature: CONTENT_SIGNATURE, categories: progress
    }));
  } catch (_) {
    // Quota/security errors must never prevent the next response.
  }
}

readProgress();

function nextResponse(key) {
  if (!progress[key] || progress[key].remaining.length === 0) {
    const previous = progress[key]?.previous;
    const bag = emergencies[key].map((_, i) => i);
    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    // Pop from the end; avoid an immediate repeat across two shuffled rounds.
    if (bag[bag.length - 1] === previous) {
      [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    progress[key] = {remaining: bag, previous};
  }
  const index = progress[key].remaining.pop();
  progress[key].previous = index;
  saveProgress();
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
