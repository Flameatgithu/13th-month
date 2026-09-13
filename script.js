(function () {
  'use strict';

  /* CONTENT CONFIGURATION
     Replace bracketed memory and regret fields with the real details when ready. */
  var giftContent = {
    recipientName: 'Alishba',
    senderName: 'Soban',
    nicknames: {
      tender: 'meri jaan',
      soft: 'mera shona',
      playful: 'my lil baby',
      teasing: 'meanie',
      sender: 'ur only'
    },
    monthBeats: [
      { label: 'conversations', copy: 'Thirteen months of finding a whole room inside a simple hello, then staying long after the hello was over.' },
      { label: 'memories', copy: 'Not every memory needs a date to matter. Some live in the feeling they leave behind.' },
      { label: 'learning', copy: 'Learning your language, your quiet, your bright days, and the places where I still need to listen better.' },
      { label: 'laughing', copy: 'The kind of laughter that makes distance briefly forget what it was trying to do.' },
      { label: 'misunderstandings', copy: 'The hard conversations count too. They show us where care needs more patience and less guessing.' },
      { label: 'apologies', copy: 'Sorry is not the ending of a difficult moment. It is the first honest step after looking at my part.' },
      { label: 'choosing', copy: 'Not choosing out of fear. Choosing with open eyes, with room to grow, and with actions that can be felt.' },
      { label: 'us', copy: 'A small word with a surprisingly large sky inside it. I am still grateful that it is ours.' }
    ],
    universeStars: [
      { id: 'memories', label: 'memories', message: 'The past is not a museum here. It is the warm light we carry forward.' },
      { id: 'laughs', label: 'laughs', message: 'Somewhere between a serious conversation and a ridiculous one, you make the whole day softer.' },
      { id: 'late-nights', label: 'late nights', message: 'The clock has never been very good at measuring how close a voice can feel.' },
      { id: 'little-arguments', label: 'little arguments', message: 'Even the difficult stars belong to the sky. What matters is learning how to meet each other after them.' },
      { id: 'apologies', label: 'apologies', message: 'A real apology leaves the door open for changed behaviour, not just prettier words.' },
      { id: 'inside-jokes', label: 'inside jokes', message: 'A private language made of half a sentence, one look, and a little bit of meanie energy.' },
      { id: 'moments-i-miss', label: 'moments I miss', message: 'Missing you is not proof that distance wins. It is proof that your presence has weight.' },
      { id: 'things-i-love', label: 'things I love', message: 'The tiny details you probably think nobody sees. I see them, Alishba. I keep them.' },
      { id: 'things-i-learned', label: 'things I learned', message: 'Love is not only feeling deeply. It is learning how to handle another heart more gently.' }
    ],
    memories: [
      { id: 'memory-01', label: 'memory 01', title: '[add a memory title]', date: '[month / moment]', text: '[Write the real situation here. Keep the detail that only you and Alishba would recognise.]', image: '', position: [14, 31] },
      { id: 'memory-02', label: 'memory 02', title: '[add a memory title]', date: '[month / moment]', text: '[What happened? What did it feel like? Add the real words later.]', image: '', position: [29, 66] },
      { id: 'memory-03', label: 'memory 03', title: '[add a memory title]', date: '[month / moment]', text: '[A small moment can be enough. Write what made this one stay.]', image: '', position: [46, 25] },
      { id: 'memory-04', label: 'memory 04', title: '[add a memory title]', date: '[month / moment]', text: '[Add the memory here instead of letting the important details disappear.]', image: '', position: [61, 70] },
      { id: 'memory-05', label: 'memory 05', title: '[add a memory title]', date: '[month / moment]', text: '[Write the real story in your own voice. There is no perfect version required.]', image: '', position: [76, 40] },
      { id: 'memory-06', label: 'memory 06', title: '[add a memory title]', date: '[month / moment]', text: '[Add a photograph path in the image field if this moment has one.]', image: '', position: [89, 23] },
      { id: 'memory-07', label: 'memory 07', title: '[add a memory title]', date: '[month / moment]', text: '[What would you tell Alishba about this moment now?]', image: '', position: [82, 78] },
      { id: 'memory-08', label: 'memory 08', title: '[add a memory title]', date: '[month / moment]', text: '[Leave one last space for a detail that belongs only to the two of you.]', image: '', position: [42, 84] }
    ],
    loveNotes: [
      { title: 'the way your hello changes a room', copy: 'Even when it arrives through a screen, your hello makes the day feel less like somewhere I am passing through.' },
      { title: 'your softness with sharp edges', copy: 'You can be tender without being small. I love the person who knows how to care and still knows how to stand.' },
      { title: 'how you make ordinary talk memorable', copy: 'A question about the day becomes a place I want to stay. You make the everyday feel worth noticing.' },
      { title: 'the messages I reread', copy: 'Not because every word is grand. Because your voice lives inside the small ones, and I like finding it again.' },
      { title: 'your tiny rebellions', copy: 'The little ways you refuse to be predictable. My favourite kind of trouble has always sounded a bit like you, meanie.' },
      { title: 'the laugh inside your typing', copy: 'Sometimes I can hear the smile behind a sentence before you have even finished sending it.' },
      { title: 'how you keep being yourself', copy: 'You do not have to perform a softer version of Alishba to be loved here. I want the real, changing, brilliant you.' },
      { title: 'your quiet strength', copy: 'The strength that does not need an audience. The kind that keeps moving through a hard day and still makes space for feeling.' },
      { title: 'when you say my name', copy: 'Soban sounds different when it comes from you. More like a person I am proud to keep becoming.' },
      { title: 'the care under your teasing', copy: 'Even your mischief has fingerprints of affection on it. I notice, my lil baby.' },
      { title: 'your strange little universe', copy: 'The thoughts, habits, moods, and beautiful contradictions that could never fit in a neat description.' },
      { title: 'how you let me try again', copy: 'I never want to treat that patience as permission to stay the same. I love it, and I want to honour it.' },
      { title: 'the person behind the screen', copy: 'Not a profile, not a notification, not a faraway image. A whole person whose inner world I feel lucky to be invited into.' },
      { title: 'how you inhabit waiting', copy: 'Distance is still difficult, but you give the waiting a shape: something with conversations, humour, and a pulse.' },
      { title: 'mera shona, your tenderness', copy: 'There is a gentleness in you that makes me want to lower my voice and handle the moment with both hands.' },
      { title: 'my lil baby, your mischief', copy: 'You can turn a quiet day into a private comedy show with almost no warning. It is unfairly charming.' },
      { title: 'the future in small sentences', copy: 'When you talk about a later we have not reached yet, I hear hope without needing it to sound like a guarantee.' },
      { title: 'the fact that you are you', copy: 'After all the descriptions, this is the truest one: I love Alishba because she is Alishba.' }
    ],
    regrets: [
      { title: 'things I said', happened: '[write the real words or situation here]', understand: '[what I understand now about how it may have landed]', wish: '[what I wish I had said instead]', change: '[what I will practise next time]' },
      { title: 'things I did', happened: '[write the real action here without softening it]', understand: '[what I understand now about its impact]', wish: '[what care would have looked like then]', change: '[the action that will be different next time]' },
      { title: 'times I misunderstood you', happened: '[write what I assumed]', understand: '[what I know now that I did not ask or hear]', wish: '[the question I should have asked]', change: '[how I will slow down before deciding what you mean]' },
      { title: 'times I reacted badly', happened: '[write the real moment here]', understand: '[what my reaction made harder for you]', wish: '[the calmer response I owe you]', change: '[how I will create room before responding]' },
      { title: 'times I made you feel unimportant', happened: '[write the real situation here]', understand: '[what your experience may have been]', wish: '[how I could have shown your importance]', change: '[how I will make attention a practice, not a speech]' },
      { title: 'times my actions hurt you', happened: '[write the real situation here]', understand: '[the hurt I need to acknowledge]', wish: '[what responsibility looked like in that moment]', change: '[the repair I can make without asking you to carry it]' },
      { title: 'times I did not communicate', happened: '[write what I left unsaid or unclear]', understand: '[what uncertainty that may have created]', wish: '[the honest sentence I should have offered]', change: '[how I will say the difficult thing earlier and kinder]' },
      { title: 'times I needed more patience', happened: '[write the real moment here]', understand: '[what patience would have protected]', wish: '[what I should have listened for]', change: '[how I will choose curiosity over defensiveness]' }
    ],
    apologyBeats: [
      { title: 'I know I have hurt you.', copy: 'I do not want to hide behind good intentions. If something I did or said made your heart heavier, that impact matters even when I meant something else.' },
      { title: 'I know some of it came from me.', copy: 'There were moments where my words, actions, reactions, or silences asked you to carry more than you should have had to carry.' },
      { title: 'Sorry does not erase a moment.', copy: 'I know an apology cannot rewind time or require you to feel healed on my schedule. You deserve room for your own feelings.' },
      { title: 'I understand more now.', copy: 'I am learning to look past what I intended and pay attention to what you actually experienced. That difference is where accountability begins.' },
      { title: 'I will not promise from fear.', copy: 'I do not want to say perfect words because I am afraid of losing you. Fear can speak loudly. Change has to speak consistently.' },
      { title: 'I want my actions to show it.', copy: 'I want to listen without preparing a defence, communicate before resentment grows, and make patience visible in the ordinary moments.' },
      { title: 'I love you, meri jaan.', copy: 'Not as a claim over you, and not as a reason you owe me anything. As a truth I want to carry with more care than I have always shown.' },
      { title: 'Thank you for what you have shared.', copy: 'Thank you for every conversation, every laugh, every difficult truth, and every piece of your real self you let me know. I will keep learning how to be worthy of that trust.' }
    ],
    meaning: [
      { title: 'comfort', copy: 'The person my mind looks for when the day has too many sharp corners.' },
      { title: 'my favourite person', copy: 'Not because you are always easy, but because knowing you is always worth showing up for.' },
      { title: 'a safe conversation', copy: 'The hope of a place where the truth can arrive without having to dress itself up first.' },
      { title: 'my favourite notification', copy: 'One small light on a screen that can make a whole day turn its face toward me.' },
      { title: 'a late-night thought', copy: 'The kind that arrives quietly and stays because it feels like you are nearby.' },
      { title: 'a little happiness', copy: 'Not a grand rescue. Just the sudden warmth of remembering that you exist in my life.' },
      { title: 'the person I tell things to', copy: 'The tiny detail, the strange thought, the good news, the annoying story. You are where my day wants to go.' },
      { title: 'my mera shona', copy: 'A softer name for a softer feeling, the one I reach for when I want the whole world to be gentle with you.' },
      { title: 'my lil baby', copy: 'A little playful, a little protective, and entirely fond. You make room for the silly version of my love.' },
      { title: 'a reason to grow', copy: 'Not because you demand perfection. Because loving you makes me want to become more honest and more careful.' }
    ],
    poems: [
      { id: 'thirteen-things', size: 'short', title: 'thirteen things', lines: ['Thirteen months,', 'one patient sky,', 'tum wahan, main yahan,', 'aur dil still finding its way.'] },
      { id: 'same-sky', size: 'short', title: 'same sky', lines: ['Different windows,', 'one blue between them.', 'I look up, Alishba,', 'and the distance loses a little of its name.'] },
      { id: 'faslay', size: 'medium', title: 'faslay', lines: ['Faslay ne hum ko roka hai,', 'magar khatam nahi kiya.', 'Tumhari yaad ek roshni hai,', 'jo khamoshi mein bhi jalti rehti hai.', 'Main seekh raha hoon:', 'qareeb rehna sirf paas hona nahi.'] },
      { id: 'small-things', size: 'medium', title: 'the small things', lines: ['I keep the small things:', 'your almost-laugh,', 'the pause before you answer,', 'the softness after a hard day.', 'This is how a faraway love', 'learns to have a home.'] },
      { id: 'mera-shona', size: 'short', title: 'mera shona', lines: ['Mera shona,', 'tumhari muskurahat ka ek tukra', 'mere poore din ko', 'roshan kar deta hai.'] },
      { id: 'what-i-am-learning', size: 'short', title: 'what I am learning', lines: ['Regret is not a room', 'to live inside.', 'It is a door:', 'open it, change, walk through.'] },
      { id: 'maafi', size: 'medium', title: 'maafi', lines: ['Maafi maangna aasaan hai', 'jab lafz hi sab kuch hon.', 'Mushkil yeh hai ke kal bhi', 'wahi dard na do.', 'Main lafzon se aage', 'chalna seekh raha hoon.'] },
      { id: 'patience', size: 'short', title: 'patience', lines: ['Love is not a loud vow.', 'Kabhi kabhi ishq', 'bas itna hota hai:', 'rukna, sunna, phir narmi se bolna.'] },
      { id: 'home-is-a-voice', size: 'medium', title: 'home is a voice', lines: ['Home is not always a place.', 'Sometimes it is your name', 'arriving through the dark,', 'turning an ordinary minute', 'into something I can keep.'] },
      { id: 'closing-light', size: 'long', title: 'the light we leave', lines: ['If the miles are a night,', 'then let us be patient stars.', 'Not perfect, not fixed,', 'just honest enough to keep appearing.', 'Let every sorry become softer hands.', 'Let every laugh become a window.', 'Let every goodbye carry a little less fear.', 'Alishba, meri jaan,', 'I will keep learning the road to you.', 'And when the road feels long,', 'I will remember:', 'love is also the light we leave behind', 'so the other person can find us again.'] }
    ],
    matchPairs: [
      { symbol: '*', message: 'you found one / just like I would find you again' },
      { symbol: 'o', message: 'a small orbit / somehow you are still at the centre' },
      { symbol: '+', message: 'two little lines / one shared direction' },
      { symbol: '~', message: 'a soft signal / from my side of the sky to yours' },
      { symbol: '/', message: 'the space between / not the end of the story' },
      { symbol: '13', message: 'thirteen / and still becoming' },
      { symbol: 'a', message: 'Alishba / the favourite letter in my alphabet' },
      { symbol: 's', message: 'Soban / ur only, still learning' }
    ],
    sequenceStars: [
      { label: 'quiet', message: 'begin softly' },
      { label: 'listen', message: 'stay long enough to hear' },
      { label: 'learn', message: 'love keeps teaching' },
      { label: 'repair', message: 'make the next action kinder' },
      { label: 'us', message: 'you found the way back' }
    ],
    quizQuestions: [
      { question: 'What should distance ask more of us?', answers: ['more guessing', 'more listening', 'more silence'], correct: 1, reaction: 'yes. listening makes a bridge before the line appears.' },
      { question: 'When a hard moment arrives, where should I begin?', answers: ['with a defence', 'with a disappearing act', 'with curiosity'], correct: 2, reaction: 'with curiosity. I want to understand before I try to be understood.' },
      { question: 'What turns a sorry into growth?', answers: ['a prettier sentence', 'a changed pattern', 'waiting for it to pass'], correct: 1, reaction: 'a changed pattern. The proof belongs in the days after the apology.' },
      { question: 'What kind of future am I hoping for?', answers: ['a perfect one', 'an honest one', 'one with no difficult talks'], correct: 1, reaction: 'an honest one. Soft enough for joy, brave enough for truth.' }
    ],
    mysteryLetters: [
      { label: '01', message: 'A tiny reminder: drink some water, my lil baby. I love you, but I cannot negotiate with dehydration.' },
      { label: '02', message: 'You found the main note: Alishba, you are loved with intention, not just in the easy minutes.' },
      { label: '03', message: 'Secret message for meanie: you are cute even when you are aggressively wrong.' }
    ],
    futureDreams: [
      { title: 'more memories', copy: 'The real ones, added here as they happen. A growing archive, never a finished one.' },
      { title: 'more conversations', copy: 'More honesty before the silence gets heavy. More questions asked with care.' },
      { title: 'more laughter', copy: 'The kind that interrupts a serious sentence and makes room for the lighter version of us.' },
      { title: 'more traditions', copy: 'Small rituals that belong to us, even when the days around them keep changing.' },
      { title: 'more time together', copy: 'More moments where being close is not a wish or a screen, but simply where we are.' },
      { title: 'closing the distance', copy: 'I hope for this without turning hope into pressure. One day, when the time is right, closer will be a place we can stand.' }
    ],
    letterBeats: [
      { title: 'thirteen months', copy: 'Alishba, thirteen months is a beautiful number because it refuses to be only a number. It holds all the ordinary pieces that became important because they were ours.' },
      { title: 'the distance', copy: 'I know how real the distance is. It changes plans, timing, and the simple comfort of reaching for someone. I will never pretend it is nothing.' },
      { title: 'the ordinary', copy: 'And still, you have made ordinary things feel inhabited. A hello, a pause, a small update: each one can carry more warmth than a whole room.' },
      { title: 'my mistakes', copy: 'I know I have made mistakes. I know some of my actions have hurt you. I do not want a romantic story that edits those parts out to make me look better.' },
      { title: 'what I understand', copy: 'I understand more now that intention is only one part of an action. Your experience matters. Your hurt matters. The care I owe you has to be visible.' },
      { title: 'what I am changing', copy: 'I want to listen longer, communicate sooner, and make patience something you can meet in me. Not a promise made once, but a practice I return to.' },
      { title: 'what I am grateful for', copy: 'I am grateful for your honesty, your humour, your softness, your strength, and every real piece of yourself you have trusted me with.' },
      { title: 'what you mean', copy: 'You are my favourite person to tell things to. My comfort. My late-night thought. My mera shona when the world needs to be gentle.' },
      { title: 'what I hope for', copy: 'I hope we keep growing without rushing the shape of our future. More truth. More laughter. More moments where love feels like a choice we both recognise.' },
      { title: 'always yours', copy: 'My lil baby, I love you in the honest way, the learning way, and the keep-showing-up way. Thank you for being Alishba.\n\nAlways yours,\nSoban' }
    ]
  };

  /* STATE */
  var STORAGE_KEY = 'still-us-gift-v3';
  var chapterIds = ['chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05', 'chapter-06', 'chapter-07', 'chapter-08', 'chapter-09', 'chapter-10', 'chapter-11', 'chapter-12'];
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  var savedState = readSession();
  var state = {
    entered: false,
    audioAvailable: true,
    audioStarted: false,
    activeChapter: '01',
    discoveredMemories: savedState.memories,
    discoveredUniverse: savedState.universe,
    memoryOpen: false,
    memoryTimer: null,
    letterOpen: false,
    letterTimer: null,
    letterIndex: 0,
    apologyIndex: 0,
    butterflyCount: 0,
    sequenceNext: 0,
    quizIndex: 0,
    matchCards: [],
    matchFlipped: [],
    matchFound: 0,
    matchLocked: false,
    matchTimer: null,
    pointerFrame: null,
    scrollFrame: null,
    toastTimer: null,
    brandTaps: 0
  };

  /* DOM */
  var body = document.body;
  var intro = document.getElementById('intro');
  var portal = document.getElementById('portal');
  var enterButton = document.getElementById('enter-button');
  var experience = document.getElementById('experience');
  var experienceNav = document.querySelector('.experience-nav');
  var chapterCurrent = document.getElementById('chapter-current');
  var chapters = chapterIds.map(function (id) { return document.getElementById(id); });
  var audio = document.getElementById('ambient-audio');
  var audioToggle = document.getElementById('audio-toggle');
  var muteToggle = document.getElementById('mute-toggle');
  var progressFill = document.getElementById('sound-progress-fill');
  var toast = document.getElementById('toast');

  /* INITIALIZATION */
  initEntry();
  initNavigation();
  initScrollStory();
  initPointerMotion();
  initMonths();
  initUniverse();
  initMemories();
  initLoveNotes();
  initRegrets();
  initApology();
  initMeaning();
  initGames();
  initFuture();
  initPoemPickers();
  initLetter();
  initFinal();
  initAudio();
  initEasterEggs();

  function initEntry() {
    portal.addEventListener('click', enterExperience);
    enterButton.addEventListener('click', enterExperience);
  }

  function enterExperience() {
    if (state.entered) return;
    state.entered = true;
    enterButton.disabled = true;
    body.classList.add('is-entering');
    intro.classList.add('is-leaving');
    window.setTimeout(function () {
      body.classList.add('is-entered');
      body.classList.remove('is-entering');
      intro.setAttribute('aria-hidden', 'true');
      intro.setAttribute('inert', '');
      experience.setAttribute('aria-hidden', 'false');
      experience.removeAttribute('inert');
      experienceNav.removeAttribute('inert');
      document.getElementById('hero-heading').setAttribute('tabindex', '-1');
      document.getElementById('hero-heading').focus({ preventScroll: true });
      revealVisibleContent();
      startAudio();
    }, reducedMotion ? 30 : 760);
  }

  function initNavigation() {
    document.querySelectorAll('[data-scroll-to]').forEach(function (control) {
      control.addEventListener('click', function () {
        var target = document.getElementById(control.getAttribute('data-scroll-to'));
        if (!target) return;
        target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  function initScrollStory() {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          state.activeChapter = entry.target.getAttribute('data-chapter');
          chapterCurrent.textContent = state.activeChapter;
          entry.target.querySelectorAll('.reveal-on-view').forEach(function (item) { item.classList.add('is-visible'); });
        });
      }, { threshold: 0.28 });
      chapters.forEach(function (chapter) { observer.observe(chapter); });
    } else {
      document.querySelectorAll('.reveal-on-view').forEach(function (item) { item.classList.add('is-visible'); });
    }
    window.addEventListener('scroll', requestScrollFrame, { passive: true });
    window.addEventListener('resize', requestScrollFrame, { passive: true });
    requestScrollFrame();
  }

  function revealVisibleContent() {
    document.getElementById('chapter-01').querySelectorAll('.reveal-on-view').forEach(function (item) { item.classList.add('is-visible'); });
  }

  function requestScrollFrame() {
    if (state.scrollFrame) return;
    state.scrollFrame = window.requestAnimationFrame(updateScrollStory);
  }

  function updateScrollStory() {
    state.scrollFrame = null;
    var maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    var progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    var marker = window.innerHeight * 0.42;
    for (var index = 0; index < chapters.length; index += 1) {
      var rect = chapters[index].getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > marker) {
        var chapter = chapters[index].getAttribute('data-chapter');
        if (chapter !== state.activeChapter) {
          state.activeChapter = chapter;
          chapterCurrent.textContent = chapter;
        }
        break;
      }
    }
    var heroFigure = document.querySelector('.hero-figure');
    if (heroFigure && !reducedMotion) heroFigure.style.setProperty('--hero-shift', (window.scrollY * 0.03).toFixed(1) + 'px');
  }

  function initPointerMotion() {
    if (reducedMotion || !hasFinePointer) return;
    body.classList.add('has-pointer');
    window.addEventListener('pointermove', function (event) {
      if (state.pointerFrame) return;
      state.pointerFrame = window.requestAnimationFrame(function () {
        state.pointerFrame = null;
        document.documentElement.style.setProperty('--pointer-x', event.clientX + 'px');
        document.documentElement.style.setProperty('--pointer-y', event.clientY + 'px');
      });
    }, { passive: true });
    bindMagneticButtons();
  }

  function bindMagneticButtons() {
    document.querySelectorAll('.magnetic').forEach(function (element) {
      element.addEventListener('pointermove', function (event) {
        var rect = element.getBoundingClientRect();
        var x = (event.clientX - (rect.left + rect.width / 2)) * 0.12;
        var y = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
        element.style.transform = 'translate3d(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px, 0)';
      });
      element.addEventListener('pointerleave', function () { element.style.transform = ''; });
    });
  }

  function initMonths() {
    var timeline = document.getElementById('month-timeline');
    giftContent.monthBeats.forEach(function (beat, index) {
      var item = makeElement('article', 'month-beat');
      var button = makeElement('button', 'month-beat-button');
      var number = makeElement('span', '', String(index + 1).padStart(2, '0'));
      var label = makeElement('strong', '', beat.label);
      var plus = makeElement('i', '', '+');
      var copy = makeElement('p', 'month-beat-copy', beat.copy);
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.appendChild(number);
      button.appendChild(label);
      button.appendChild(plus);
      item.appendChild(button);
      item.appendChild(copy);
      button.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
        if (open) timeline.querySelectorAll('.month-beat').forEach(function (other) {
          if (other !== item) { other.classList.remove('is-open'); other.querySelector('button').setAttribute('aria-expanded', 'false'); }
        });
      });
      timeline.appendChild(item);
    });
  }

  function initUniverse() {
    var stars = document.getElementById('universe-stars');
    var detail = document.getElementById('universe-detail');
    var title = document.getElementById('universe-detail-title');
    var copy = document.getElementById('universe-detail-copy');
    var kicker = detail.querySelector('.eyebrow');
    var count = document.getElementById('universe-count');
    var reveal = document.getElementById('universe-reveal');
    var field = document.getElementById('universe-field');
    giftContent.universeStars.forEach(function (star, index) {
      var button = makeElement('button', 'universe-star');
      var core = makeElement('span', 'universe-star-core');
      var label = makeElement('span', 'universe-star-label', star.label);
      button.type = 'button';
      button.setAttribute('aria-label', 'Open constellation light: ' + star.label);
      button.style.left = (12 + ((index * 37) % 78)) + '%';
      button.style.top = (20 + ((index * 53) % 63)) + '%';
      if (state.discoveredUniverse.indexOf(star.id) !== -1) button.classList.add('is-discovered');
      button.appendChild(core);
      button.appendChild(label);
      button.addEventListener('click', function () {
        if (state.discoveredUniverse.indexOf(star.id) === -1) {
          state.discoveredUniverse.push(star.id);
          saveSession();
        }
        button.classList.add('is-discovered');
        stars.querySelectorAll('.universe-star').forEach(function (other) { other.classList.toggle('is-active', other === button); });
        kicker.textContent = 'constellation / ' + String(index + 1).padStart(2, '0');
        title.textContent = star.label;
        copy.textContent = star.message;
        count.textContent = String(state.discoveredUniverse.length).padStart(2, '0') + ' found';
        if (state.discoveredUniverse.length >= 5) {
          reveal.hidden = false;
          field.classList.add('is-revealed');
        }
      });
      stars.appendChild(button);
    });
    count.textContent = String(state.discoveredUniverse.length).padStart(2, '0') + ' found';
    if (state.discoveredUniverse.length >= 5) {
      reveal.hidden = false;
      field.classList.add('is-revealed');
    }
  }

  function initMemories() {
    var layer = document.getElementById('memory-node-layer');
    var detail = document.getElementById('memory-detail');
    var close = document.getElementById('detail-close');
    var count = document.getElementById('memory-count');
    var title = detail.querySelector('[data-memory-title]');
    var kicker = detail.querySelector('[data-memory-kicker]');
    var copy = detail.querySelector('[data-memory-copy]');
    var art = detail.querySelector('[data-memory-art]');
    giftContent.memories.forEach(function (memory, index) {
      var button = makeElement('button', 'memory-node node-' + String(index + 1));
      var orb = makeElement('span', 'node-orb');
      var label = makeElement('span', 'node-label', memory.label);
      button.type = 'button';
      button.setAttribute('aria-label', 'Open editable ' + memory.label);
      button.style.left = memory.position[0] + '%';
      button.style.top = memory.position[1] + '%';
      if (state.discoveredMemories.indexOf(memory.id) !== -1) button.classList.add('is-discovered');
      button.appendChild(orb);
      button.appendChild(label);
      button.addEventListener('click', function () {
        if (state.discoveredMemories.indexOf(memory.id) === -1) {
          state.discoveredMemories.push(memory.id);
          saveSession();
        }
        button.classList.add('is-discovered');
        layer.querySelectorAll('.memory-node').forEach(function (other) { other.classList.toggle('is-active', other === button); });
        kicker.textContent = memory.date;
        title.textContent = memory.title;
        copy.textContent = memory.text;
        if (memory.image) {
          art.style.backgroundImage = 'url("' + memory.image + '")';
          art.classList.add('has-image');
        } else {
          art.style.backgroundImage = '';
          art.classList.remove('has-image');
        }
        window.clearTimeout(state.memoryTimer);
        state.memoryOpen = true;
        detail.hidden = false;
        window.requestAnimationFrame(function () { if (state.memoryOpen) detail.classList.add('is-visible'); });
        count.textContent = String(state.discoveredMemories.length).padStart(2, '0') + ' found';
      });
      layer.appendChild(button);
    });
    count.textContent = String(state.discoveredMemories.length).padStart(2, '0') + ' found';
    close.addEventListener('click', function () {
      state.memoryOpen = false;
      detail.classList.remove('is-visible');
      window.clearTimeout(state.memoryTimer);
      state.memoryTimer = window.setTimeout(function () { if (!state.memoryOpen) detail.hidden = true; }, reducedMotion ? 0 : 500);
    });
  }

  function initLoveNotes() {
    var list = document.getElementById('love-list');
    giftContent.loveNotes.forEach(function (note, index) {
      var item = makeElement('article', 'love-item');
      var button = makeElement('button', 'love-item-button');
      var number = makeElement('span', 'love-item-number', String(index + 1).padStart(2, '0'));
      var title = makeElement('span', 'love-item-title', note.title);
      var plus = makeElement('span', 'love-item-plus', '+');
      var copy = makeElement('p', 'love-item-copy', note.copy);
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.appendChild(number);
      button.appendChild(title);
      button.appendChild(plus);
      item.appendChild(button);
      item.appendChild(copy);
      button.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
      });
      list.appendChild(item);
    });
  }

  function initRegrets() {
    var list = document.getElementById('regret-list');
    giftContent.regrets.forEach(function (regret, index) {
      var item = makeElement('article', 'regret-item');
      var button = makeElement('button', 'regret-item-button');
      var number = makeElement('span', '', String(index + 1).padStart(2, '0'));
      var title = makeElement('strong', '', regret.title);
      var plus = makeElement('span', 'regret-item-plus', '+');
      var content = makeElement('div', 'regret-content');
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.appendChild(number);
      button.appendChild(title);
      button.appendChild(plus);
      [['what happened', regret.happened], ['what I understand now', regret.understand], ['what I wish I had done', regret.wish], ['what I will do differently', regret.change]].forEach(function (pair) {
        var part = makeElement('div', '');
        part.appendChild(makeElement('span', '', pair[0]));
        part.appendChild(makeElement('p', '', pair[1]));
        content.appendChild(part);
      });
      item.appendChild(button);
      item.appendChild(content);
      button.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
      });
      list.appendChild(item);
    });
  }

  function initApology() {
    document.getElementById('apology-next').addEventListener('click', function () {
      state.apologyIndex = state.apologyIndex >= giftContent.apologyBeats.length - 1 ? 0 : state.apologyIndex + 1;
      renderApology();
    });
    renderApology();
  }

  function renderApology() {
    var beat = giftContent.apologyBeats[state.apologyIndex];
    document.getElementById('apology-step').textContent = String(state.apologyIndex + 1).padStart(2, '0') + ' / ' + String(giftContent.apologyBeats.length).padStart(2, '0');
    document.getElementById('apology-stage-title').textContent = beat.title;
    document.getElementById('apology-stage-copy').textContent = beat.copy;
    document.querySelector('#apology-next span').textContent = state.apologyIndex === giftContent.apologyBeats.length - 1 ? 'read again' : 'keep reading';
  }

  function initMeaning() {
    var list = document.getElementById('meaning-list');
    giftContent.meaning.forEach(function (entry, index) {
      var item = makeElement('article', 'meaning-item');
      var button = makeElement('button', 'meaning-item-button');
      var number = makeElement('span', 'meaning-item-number', String(index + 1).padStart(2, '0'));
      var title = makeElement('span', 'meaning-item-title', entry.title);
      var copy = makeElement('p', 'meaning-item-copy', entry.copy);
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.appendChild(number);
      button.appendChild(title);
      button.appendChild(copy);
      item.appendChild(button);
      button.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
      });
      list.appendChild(item);
    });
  }

  function initGames() {
    var tabs = document.querySelectorAll('.game-switcher [data-game]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var game = tab.getAttribute('data-game');
        tabs.forEach(function (other) { other.classList.toggle('is-active', other === tab); other.setAttribute('aria-selected', String(other === tab)); });
        document.querySelectorAll('.game-panel').forEach(function (panel) { panel.hidden = panel.id !== 'game-' + game; panel.classList.toggle('is-active', panel.id === 'game-' + game); });
      });
    });
    initMatchGame();
    initButterflyGame();
    initSequenceGame();
    initQuizGame();
    initMysteryGame();
  }

  function initMatchGame() {
    renderMatchGame();
  }

  function renderMatchGame() {
    var board = document.getElementById('match-board');
    var status = document.getElementById('match-status');
    board.textContent = '';
    state.matchCards = [];
    state.matchFlipped = [];
    state.matchFound = 0;
    state.matchLocked = false;
    window.clearTimeout(state.matchTimer);
    giftContent.matchPairs.forEach(function (pair, index) {
      state.matchCards.push({ pair: index, symbol: pair.symbol, message: pair.message });
      state.matchCards.push({ pair: index, symbol: pair.symbol, message: pair.message });
    });
    shuffle(state.matchCards);
    state.matchCards.forEach(function (card, index) {
      var button = makeElement('button', 'match-card');
      var face = makeElement('span', 'card-face', card.symbol);
      button.type = 'button';
      button.setAttribute('aria-label', 'Hidden memory match card ' + String(index + 1));
      button.dataset.index = String(index);
      button.appendChild(face);
      button.addEventListener('click', function () {
        if (state.matchLocked || button.classList.contains('is-flipped') || button.classList.contains('is-matched')) return;
        button.classList.add('is-flipped');
        state.matchFlipped.push({ index: index, button: button, card: card });
        if (state.matchFlipped.length < 2) return;
        state.matchLocked = true;
        var first = state.matchFlipped[0];
        var second = state.matchFlipped[1];
        if (first.card.pair === second.card.pair) {
          first.button.classList.add('is-matched');
          second.button.classList.add('is-matched');
          state.matchFound += 1;
          status.textContent = first.card.message;
          state.matchFlipped = [];
          state.matchLocked = false;
          if (state.matchFound === giftContent.matchPairs.length) status.textContent = 'you found them all / just like I would find you again';
        } else {
          status.textContent = 'not this pair / try another light';
          state.matchTimer = window.setTimeout(function () {
            first.button.classList.remove('is-flipped');
            second.button.classList.remove('is-flipped');
            state.matchFlipped = [];
            state.matchLocked = false;
          }, reducedMotion ? 0 : 700);
        }
      });
      board.appendChild(button);
    });
    status.textContent = 'find your first pair';
  }

  function initButterflyGame() {
    var target = document.getElementById('game-butterfly-target');
    var status = document.getElementById('butterfly-status');
    var positions = [[48, 42], [24, 33], [68, 63], [43, 72], [79, 28], [17, 67]];
    target.addEventListener('click', function () {
      if (state.butterflyCount >= 5) return;
      state.butterflyCount += 1;
      target.classList.remove('caught');
      void target.offsetWidth;
      target.classList.add('caught');
      var next = positions[state.butterflyCount];
      target.style.left = next[0] + '%';
      target.style.top = next[1] + '%';
      if (state.butterflyCount >= 5) {
        status.textContent = 'you caught it / a secret is yours: mera shona, keep this smile';
        target.disabled = true;
      } else {
        status.textContent = state.butterflyCount + ' / 5 catches';
      }
    });
  }

  function initSequenceGame() {
    var field = document.getElementById('sequence-field');
    var status = document.getElementById('sequence-status');
    giftContent.sequenceStars.forEach(function (star, index) {
      var button = makeElement('button', 'sequence-star');
      button.type = 'button';
      button.setAttribute('aria-label', 'Constellation star ' + String(index + 1));
      button.dataset.order = String(index);
      button.addEventListener('click', function () {
        if (state.sequenceNext >= giftContent.sequenceStars.length) return;
        if (index !== state.sequenceNext) {
          status.textContent = 'not yet / follow the quieter light';
          return;
        }
        button.classList.add('is-correct');
        status.textContent = star.message;
        state.sequenceNext += 1;
        if (state.sequenceNext === giftContent.sequenceStars.length) {
          field.classList.add('is-complete');
          status.textContent = 'constellation complete / you found the way back to us';
        }
      });
      field.appendChild(button);
    });
  }

  function initQuizGame() {
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    var data = giftContent.quizQuestions[state.quizIndex];
    var number = document.getElementById('quiz-number');
    var question = document.getElementById('quiz-question');
    var answers = document.getElementById('quiz-answers');
    var status = document.getElementById('quiz-status');
    number.textContent = String(state.quizIndex + 1).padStart(2, '0') + ' / ' + String(giftContent.quizQuestions.length).padStart(2, '0');
    question.textContent = data.question;
    answers.textContent = '';
    status.textContent = '';
    data.answers.forEach(function (answer, index) {
      var button = makeElement('button', 'quiz-answer', answer);
      button.type = 'button';
      button.addEventListener('click', function () {
        answers.querySelectorAll('.quiz-answer').forEach(function (other) { other.disabled = true; });
        button.classList.add(index === data.correct ? 'is-right' : 'is-wrong');
        status.textContent = index === data.correct ? data.reaction : 'not quite, but the honest answer is still a good place to start.';
        if (state.quizIndex < giftContent.quizQuestions.length - 1) {
          var next = makeElement('button', 'line-button quiz-next');
          next.type = 'button';
          next.appendChild(makeElement('span', '', 'next question'));
          next.appendChild(makeElement('span', '', String.fromCharCode(8594)));
          next.addEventListener('click', function () { state.quizIndex += 1; renderQuizQuestion(); });
          answers.appendChild(next);
        } else {
          status.textContent += ' / quiz complete, my lil baby.';
        }
      });
      answers.appendChild(button);
    });
  }

  function initMysteryGame() {
    var row = document.getElementById('mystery-row');
    var status = document.getElementById('mystery-status');
    giftContent.mysteryLetters.forEach(function (letter, index) {
      var button = makeElement('button', 'mystery-envelope');
      var label = makeElement('span', '', letter.label);
      button.type = 'button';
      button.style.setProperty('--tilt', (index - 1) * 3 + 'deg');
      button.setAttribute('aria-label', 'Open mystery letter ' + letter.label);
      button.setAttribute('aria-pressed', 'false');
      button.appendChild(label);
      button.addEventListener('click', function () {
        row.querySelectorAll('.mystery-envelope').forEach(function (other) { other.classList.remove('is-open'); other.setAttribute('aria-pressed', 'false'); });
        button.classList.add('is-open');
        button.setAttribute('aria-pressed', 'true');
        status.textContent = letter.message;
      });
      row.appendChild(button);
    });
  }

  function initFuture() {
    var timeline = document.getElementById('future-timeline');
    giftContent.futureDreams.forEach(function (dream, index) {
      var item = makeElement('article', 'future-item');
      var button = makeElement('button', 'future-item-button');
      var number = makeElement('span', 'future-item-number', String(index + 1).padStart(2, '0'));
      var title = makeElement('span', 'future-item-title', dream.title);
      var copy = makeElement('p', 'future-item-copy', dream.copy);
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.appendChild(number);
      button.appendChild(title);
      button.appendChild(copy);
      item.appendChild(button);
      button.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
      });
      timeline.appendChild(item);
    });
  }

  function initPoemPickers() {
    document.querySelectorAll('[data-poem-picker]').forEach(function (container) {
      var ids = container.getAttribute('data-poem-ids').split(',');
      var picker = makeElement('div', 'poem-picker');
      var tabs = makeElement('div', 'poem-tabs');
      var reading = makeElement('div', 'poem-reading');
      var meta = makeElement('span', 'poem-meta');
      var title = makeElement('h3', '');
      var lines = makeElement('div', 'poem-lines');
      var signature = makeElement('p', 'poem-signature', 'a note from Soban');
      reading.appendChild(meta);
      reading.appendChild(title);
      reading.appendChild(lines);
      reading.appendChild(signature);
      ids.forEach(function (id, index) {
        var poem = findById(giftContent.poems, id);
        if (!poem) return;
        var tab = makeElement('button', 'poem-tab', poem.title);
        tab.type = 'button';
        tab.setAttribute('aria-pressed', String(index === 0));
        tab.addEventListener('click', function () { selectPoem(poem.id); });
        tab.dataset.poemId = poem.id;
        tabs.appendChild(tab);
      });
      picker.appendChild(tabs);
      picker.appendChild(reading);
      container.appendChild(picker);
      function selectPoem(id) {
        var poem = findById(giftContent.poems, id);
        if (!poem) return;
        meta.textContent = poem.size + ' poem / ' + poem.title;
        title.textContent = poem.title;
        lines.textContent = '';
        poem.lines.forEach(function (line) { lines.appendChild(makeElement('span', '', line)); });
        tabs.querySelectorAll('.poem-tab').forEach(function (tab) { tab.classList.toggle('is-active', tab.dataset.poemId === poem.id); tab.setAttribute('aria-pressed', String(tab.dataset.poemId === poem.id)); });
      }
      selectPoem(ids[0]);
    });
  }

  function initLetter() {
    var button = document.getElementById('open-letter');
    var sheet = document.getElementById('letter-sheet');
    var next = document.getElementById('letter-next');
    var hint = document.getElementById('letter-hint');
    button.addEventListener('click', function () {
      var open = button.classList.toggle('is-open');
      state.letterOpen = open;
      button.setAttribute('aria-expanded', String(open));
      hint.textContent = open ? 'keep this somewhere warm' : 'the seal is only holding the first page';
      if (open) {
        state.letterIndex = 0;
        renderLetterBeat();
        sheet.hidden = false;
        window.requestAnimationFrame(function () { if (state.letterOpen) sheet.classList.add('is-open'); });
        window.setTimeout(function () { sheet.focus({ preventScroll: true }); }, reducedMotion ? 0 : 700);
      } else {
        sheet.classList.remove('is-open');
        window.clearTimeout(state.letterTimer);
        state.letterTimer = window.setTimeout(function () { if (!state.letterOpen) { sheet.hidden = true; button.focus({ preventScroll: true }); } }, reducedMotion ? 0 : 900);
      }
    });
    next.addEventListener('click', function () {
      state.letterIndex = state.letterIndex >= giftContent.letterBeats.length - 1 ? 0 : state.letterIndex + 1;
      renderLetterBeat();
    });
    sheet.setAttribute('tabindex', '-1');
    function renderLetterBeat() {
      var beat = giftContent.letterBeats[state.letterIndex];
      var target = document.getElementById('big-letter-beat');
      var lines = beat.copy.split('\n');
      target.textContent = '';
      target.appendChild(makeElement('h3', 'letter-beat-heading', beat.title));
      lines.forEach(function (line) { target.appendChild(makeElement('p', 'letter-beat-body', line)); });
      document.getElementById('letter-progress').textContent = String(state.letterIndex + 1).padStart(2, '0') + ' / ' + String(giftContent.letterBeats.length).padStart(2, '0');
      next.querySelector('span').textContent = state.letterIndex === giftContent.letterBeats.length - 1 ? 'read again' : 'next page';
    }
  }

  function initFinal() {
    var reveal = document.getElementById('reveal-final');
    var message = document.getElementById('final-message');
    reveal.addEventListener('click', function () {
      message.hidden = false;
      reveal.hidden = true;
    });
  }

  function initAudio() {
    audio.addEventListener('error', markAudioUnavailable);
    audio.addEventListener('timeupdate', function () {
      if (audio.duration) progressFill.style.width = ((audio.currentTime / audio.duration) * 100).toFixed(2) + '%';
    });
    audio.addEventListener('play', updateAudioControls);
    audio.addEventListener('pause', updateAudioControls);
    audioToggle.addEventListener('click', function () {
      if (!state.audioAvailable) { showToast('There is no soundtrack here yet. The story still works.'); return; }
      if (audio.paused) playAudio().then(null, markAudioUnavailable); else audio.pause();
    });
    muteToggle.addEventListener('click', function () {
      if (!state.audioAvailable) return;
      audio.muted = !audio.muted;
      muteToggle.setAttribute('aria-pressed', String(audio.muted));
      muteToggle.textContent = audio.muted ? 'unmute' : 'mute';
      muteToggle.setAttribute('aria-label', audio.muted ? 'Unmute music' : 'Mute music');
    });
  }

  function startAudio() {
    if (!state.audioAvailable || state.audioStarted) return;
    audio.volume = 0;
    playAudio().then(function () { state.audioStarted = true; fadeAudioIn(); }).then(null, markAudioUnavailable);
  }

  function playAudio() { return audio.play(); }

  function fadeAudioIn() {
    var volume = 0;
    var fade = window.setInterval(function () {
      if (audio.paused || volume >= 0.42) { window.clearInterval(fade); return; }
      volume += 0.035;
      audio.volume = Math.min(volume, 0.42);
    }, 100);
  }

  function markAudioUnavailable() {
    state.audioAvailable = false;
    audioToggle.disabled = true;
    muteToggle.disabled = true;
    audioToggle.textContent = 'sound / unavailable';
    audioToggle.setAttribute('aria-label', 'Music unavailable');
  }

  function updateAudioControls() {
    audioToggle.textContent = audio.paused ? 'sound / off' : 'sound / on';
    audioToggle.setAttribute('aria-label', audio.paused ? 'Play music' : 'Pause music');
  }

  function initEasterEggs() {
    var brand = document.getElementById('brand-mark');
    var secretStar = document.getElementById('secret-star');
    brand.addEventListener('click', function () {
      state.brandTaps += 1;
      if (state.brandTaps >= 5) { state.brandTaps = 0; showToast('I would cross any number of screens for you.'); }
    });
    portal.addEventListener('dblclick', function () { showToast('You found the quiet part.'); });
    secretStar.addEventListener('click', function () { showToast('This one is yours to keep.'); });
  }

  function replay() {
    state.entered = false;
    enterButton.disabled = false;
    body.classList.remove('is-entered', 'is-entering');
    intro.classList.remove('is-leaving');
    intro.setAttribute('aria-hidden', 'false');
    intro.removeAttribute('inert');
    experience.setAttribute('aria-hidden', 'true');
    experience.setAttribute('inert', '');
    experienceNav.setAttribute('inert', '');
    window.scrollTo({ top: 0, behavior: 'auto' });
    enterButton.focus({ preventScroll: true });
    if (!audio.paused) audio.pause();
    state.audioStarted = false;
    progressFill.style.width = '0%';
    if (audio.duration) audio.currentTime = 0;
    closeTransientScenes();
    renderMatchGame();
    state.butterflyCount = 0;
    var butterfly = document.getElementById('game-butterfly-target');
    butterfly.disabled = false;
    butterfly.style.left = '48%';
    butterfly.style.top = '42%';
    document.getElementById('butterfly-status').textContent = '0 / 5 catches';
    state.sequenceNext = 0;
    document.getElementById('sequence-field').classList.remove('is-complete');
    document.getElementById('sequence-field').querySelectorAll('.sequence-star').forEach(function (star) { star.classList.remove('is-correct'); });
    state.quizIndex = 0;
    renderQuizQuestion();
    document.getElementById('mystery-row').querySelectorAll('.mystery-envelope').forEach(function (letter) { letter.classList.remove('is-open'); letter.setAttribute('aria-pressed', 'false'); });
    document.getElementById('mystery-status').textContent = 'choose one envelope';
    document.getElementById('final-message').hidden = true;
    document.getElementById('reveal-final').hidden = false;
  }

  function closeTransientScenes() {
    var detail = document.getElementById('memory-detail');
    state.memoryOpen = false;
    window.clearTimeout(state.memoryTimer);
    detail.classList.remove('is-visible');
    detail.hidden = true;
    document.getElementById('universe-detail-title').textContent = 'Choose a light';
    document.getElementById('universe-detail-copy').textContent = 'Some things are too important to put in a list.';
    document.querySelector('#universe-detail .eyebrow').textContent = 'constellation / waiting';
    document.querySelectorAll('.universe-star').forEach(function (star) { star.classList.remove('is-active'); });
    var distance = document.getElementById('distance-visual');
    if (distance) distance.classList.remove('is-connected');
    var letterButton = document.getElementById('open-letter');
    var letterSheet = document.getElementById('letter-sheet');
    state.letterOpen = false;
    window.clearTimeout(state.letterTimer);
    letterButton.classList.remove('is-open');
    letterButton.setAttribute('aria-expanded', 'false');
    letterSheet.classList.remove('is-open');
    letterSheet.hidden = true;
    document.getElementById('letter-hint').textContent = 'the seal is only holding the first page';
    state.apologyIndex = 0;
    renderApology();
  }

  document.getElementById('replay-button').addEventListener('click', replay);

  function makeElement(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (typeof text === 'string') element.textContent = text;
    return element;
  }

  function findById(list, id) {
    for (var index = 0; index < list.length; index += 1) if (list[index].id === id) return list[index];
    return null;
  }

  function shuffle(list) {
    for (var index = list.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var value = list[index];
      list[index] = list[swapIndex];
      list[swapIndex] = value;
    }
  }

  function showToast(message) {
    window.clearTimeout(state.toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    state.toastTimer = window.setTimeout(function () { toast.classList.remove('is-visible'); }, 3500);
  }

  function readSession() {
    try {
      var raw = window.sessionStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : {};
      return {
        memories: Array.isArray(parsed.memories) ? parsed.memories : [],
        universe: Array.isArray(parsed.universe) ? parsed.universe : []
      };
    } catch (error) {
      return { memories: [], universe: [] };
    }
  }

  function saveSession() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ memories: state.discoveredMemories, universe: state.discoveredUniverse }));
    } catch (error) {
      // Session storage is optional; current-page state remains available.
    }
  }
}());
