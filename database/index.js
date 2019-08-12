const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'mvp',
  host: 'localhost',
  database: 'story'
});

/*

CREATE TABLE IF NOT EXISTS storyline (id SERIAL PRIMARY KEY, actions TEXT, story TEXT, thoughts TEXT, choiceOne INTEGER, choiceTwo INTEGER, choiceOneText TEXT, choiceTwoText TEXT, light INTEGER, battle BOOLEAN);

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('', '', '', 2, 3, '', '', 0, false);

*/

module.exports = pool;

/*

actions:
story:
thoughts:

optionOne:
optionTwo:

*/

/*

init story id : 1
actions: You are sitting at your desk, coding your favorite project.
story: Hours have passed by as you have been working on 
this project. The name of this project is the Special Direct Communicae, also known as the SDC. 
This has been the most ardeuous task that your boss has thrown as you.
Feeling completely overwhelmed, you choose to stand up and do some stretches. 
Looking out the window, you notice something amiss. The stars are slowly going out.
It is as if the heavens themselves have not paid their electricity bills on time.
Thoughts: "Wait... what the crap is happening?"

choiceOneText: Work more
choiceTwoText: Investigate

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You are sitting at your desk, working on a project.', 'Hours have passed by as you have been working on this project. The name of this project is the Special Direct Communicae, also known as the SDC. This has been the most ardeuous task that your boss has thrown as you.Feeling completely overwhelmed, you choose to stand up and do some stretches. Looking out the window, you notice something amiss. The stars are slowly going out.It is as if the heavens themselves have not paid their electricity bills on time.', 'Wait... What the crap is happening?', 2, 3, 'Work more', 'Investigate', 0, false);

*/

/*

Choice One - A - id : 2
actions: You sit back at your desk.
story: Looking at your monitor, you notice a haze on the screen. Similar to white noise. However, upon closer inspection
you see that this is not ordinary. Fed up, you hit your computer screen. With a sigh, you stand back up. Then it happens...
The ground under your feet starts to shake. It is indeed and earthquake. You fall to the ground!
thoughts: "WHY IS THIS HAPPENING?!?!"

choiceOneText: Brace
ChoiceTwoText: Jump


INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You sit back at your desk.', 'Looking at your monitor, you notice a haze on the screen. Similar to white noise. However, upon closer inspection you see that this is not ordinary. Fed up, you hit your computer screen. With a sigh, you stand back up. Then it happens... The ground under your feet starts to shake. It is indeed and earthquake. You fall to the ground!', 'WHY IS THIS HAPPENING?!?!', 4, 4, 'Brace', 'Jump', 0, false);

*/

/*

Choice One - B : id: 3
actions: You jump out the window
story: Something strange is afoot. As you walk outside, you look around, seeing that the stars are indeed fading.
Baffled, you pull out your phone to call a friend, however, you notice there is this odd haze on the screen. Almost 
similar to white noise. The phone gets hot! Too hot for any human to be able to hold. As you drop the phone, you feel it.
"The ground! The ground is shaking!!"
thoughts: "WHAT THE CRAP?!?"

choiceOneText: Brace
choiceTwoText: Brace!

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You jump out the window', 'Something strange is afoot. As you walk outside, you look around, seeing that the stars are indeed fading. Baffled, you pull out your phone to call a friend, however, you notice there is this odd haze on the screen. Almost similar to white noise. The phone gets hot! Too hot for any human to be able to hold. As you drop the phone, you feel it. "The ground! The ground is shaking!!"', 'WHAT THE CRAP?!?', 4, 4, 'Brace', 'Brace!', 0, false);

*/

/*

Choice two: id: 4

Actions: You open your eyes after the quake ends
Story: Frightened half to death, you stand up, looking back up to dark skies. Darkness, is all you see. No moonlight, no twinkling stars. This is the blackest black you have ever seen. 
There is nowhere to go, and there is nothing to see. As you look forward,
into the utter darkness, A flash of light appears. This light is almost blinding. 
Feeling frightened at first, you notice a warmth envelop your mind.
Feeling calm, you open your eyes, only to see that this warmth was not a figment of your imagination.
Standing on a beach, staring at the ocean, you realize, this is not where you were just moments ago.
Thoughts: “Am…. am I dreaming?”

optionOne: Wake up!
optionTwo: Wake up!

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You open your eyes after the quake ends', 'Frightened half to death, you stand up, looking back up to dark skies. Darkness, is all you see. No moonlight, no twinkling stars. This is the blackest black you have ever seen. There is nowhere to go, and there is nothing to see. As you look forward, into the utter darkness, A flash of light appears. This light is almost blinding. You notice a warmth envelop your mind. Feeling calm, you open your eyes, only to see that this warmth was not a figment of your imagination. Standing on a beach, staring at the ocean, you realize, this is not where you were just moments ago.', 'Am…. am I dreaming?', 5, 5, 'Wake up!', 'Wake up!', 2, false);

*/

/*

Choice Three: id: 5

Actions: You hear a voice calling for you
Story: Confused, you look behind you, seeing this girl calling for you. As she approaches, you notice this girl is holding a sword in hand. She introduces herself
Mysterious Girl: “hello fair stranger”
You: “uhhh… what’s with the sword?”
Mysterious Girl: “My name is Esmirela, I am a royal night of the kingdom Hearthland. You have been summoned. I am here to assist you to our castle, will you join me?”
Thoughts: “She sounds like an npc character..”

OptionOne: Go
OptionTwo: Stay

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You hear a voice calling for you', 'Confused, you look behind you, seeing this girl calling for you. As she approaches, you notice this girl is holding a sword in hand. She introduces herself
Mysterious Girl: “hello fair stranger”
You: “uhhh… what’s with the sword?”
Mysterious Girl: “My name is Esmirela, I am a royal night of the kingdom Hearthland. You have been summoned. I am here to assist you to our castle, will you join me?”', 'She sounds like an npc character..', 6, 7, 'Go', 'Stay', 1, false);

*/

/*

Choice Three Go : id 6

Actions: You go with Esmerela to the castle
Story: You begin walking towards the castle of HeartLand. 
You: “So Esmerela, what did you mean when you said I was summoned?”
Esmerela: “Our beautiful country is at war with an invading race
of mythical beasts. It was prophesied long ago 
that when in dire need, a hero will be summoned from 
another world to save us. We saw a bright light fall through the skies, 
and land where you stood. I believe you may be the hero we are looking for.”
Thoughts: “How do I tell her I don’t think she’s right..”

optionOne: Lie
optionTwo: Truth

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You go with Esmerela to the castle', 'You begin walking towards the castle of HeartLand. 
You: “So Esmerela, what did you mean when you said I was summoned?”
Esmerela: “Our beautiful country is at war with an invading race of mythical beasts. It was prophesied long ago that when in dire need, a hero will be summoned from another world to save us. We saw a bright light fall through the skies, and land where you stood. I believe you may be the hero we are looking for.”', 'How do I tell her I don’t think she’s right..', 9, 10, 'Truth', 'Lie', 0, false);

*/

/*

Choice Three Stay : id 7

Actions: You choose to stay on the beach
Story: You: “I am going to stay on this beach, and head elsewhere…”
Esmerela: “I can not let you do that, you are the key to winning this war”
You: “It’s fine, I can just go my own way”
Esmerela: “I will follow you, I must not allow you to get hurt. As I have said before, you are the key we need. I will follow you wherever you go. But we will go back to the castle soon. The queen demands it.”
You: “uhhh… “
Thoughts: “She wont stop… what do i do?”

optionOne: Castle
optionTwo: Beach

INSERT INTO storyline (actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES ('You choose to stay on the beach', 'You: “I am going to stay on this beach, and head elsewhere…”
Esmerela: “I can not let you do that, you are the key to winning this war”
You: “It’s fine, I can just go my own way”
Esmerela: “I will follow you, I must not allow you to get hurt. As I have said before, you are the key we need. I will follow you wherever you go. But we will go back to the castle soon. The queen demands it.”
You: “uhhh… “', 'She wont stop… what do i do?', 6, 11, 'Castle', 'Beach', -2, false);

*/

/*

/*

battle choice : id : 11

Actions: A slime had attacked out of nowhere
Story: You: "WHAT WAS THAT?!"
Esmerela: "That was a tiny slime. Good job dispatching the foe."
You: "What?"
Esmerela: "now, shall we proceed to the castle?"
Thoughts: "I guess.... "

optionOne: Castle
optionTwo: Castle

INSERT INTO storyline (id, actions, story, thoughts, choiceOne, choiceTwo, choiceOneText, choiceTwoText, light, battle) VALUES (11, 'A slime had attacked out of nowhere', 'You: "WHAT WAS THAT?!"
Esmerela: "That was a tiny slime. Good job dispatching the foe."
You: "What?"
Esmerela: "now, shall we proceed to the castle?"', 'I guess....', 6, 6, 'Castle', 'Castle', 5, true);

*/