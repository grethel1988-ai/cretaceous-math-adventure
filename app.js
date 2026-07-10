// Cretaceous Adventure Camp Game Logic

// Emojis for dinosaur partners
const PARTNER_EMOJIS = {
  qiqi: '🦕',
  rex: '🦖',
  chuichui: '🐢',
  blue: '🦎'
};

const PARTNER_NAMES = {
  qiqi: '三角龍 (奇奇)',
  rex: '霸王龍 (雷克斯)',
  chuichui: '甲龍 (槌槌)',
  blue: '迅猛龍 (小藍)'
};

// Dinosaur Partner Dialogue Feedback
const PARTNER_DIALOGUES = {
  qiqi: {
    name: '奇奇',
    welcome: '我是三角龍奇奇！我的三隻角和堅硬的盾牌會保護你，用你的數學大腦帶我們衝出重圍吧！',
    correct: [
      '太棒了！這題被我們像開路機一樣撞飛了！',
      '精準計算！我的角已經瞄準下一個目標了！',
      '哇！你的大腦比我的頭盾還要堅固！',
      '答對了！三角龍拍拍蹄子為你點讚！',
      '沒錯！這點數學難不倒我們這個黃金拍檔！'
    ],
    wrong: [
      '哎呀！這題像撞到石頭一樣，我的角好痛啊……（HP -1）',
      '嗚嗚，算錯了。別慌，躲在我的盾牌後面再想一次！',
      '喔不！剛才被沙塵擋住視線了嗎？下次看清楚點！',
      '糟了，算錯了！我的胃開始因為緊張而打結了……',
      '哎呀呀，這題不對。我們要冷靜，不能像瘋狂三角龍一樣亂衝！'
    ],
    victory: '吼嗚！太不可思議了！我們真的突破了重重關卡，回到了人類世界！你就是最強的數學冒險家！',
    defeat: '嗚嗚……時空梭關閉了，恐龍群包圍了我們。奇奇拍拍你：別灰心，重新整裝我們再試一次！'
  },
  rex: {
    name: '雷克斯',
    welcome: '本霸王就是雷克斯！雖然我手很短，但我咬合力驚人！只要你數學夠強，我們就能把障礙通通吃掉！',
    correct: [
      '幹得好！這題就像我的點心一樣，一口就被咬碎了！',
      '幹得好！本大王允許你為我抓抓頭（雖然我手夠不到）！',
      '哼，算你聰明！不愧是本霸王看上的學員！',
      '答對啦！我高興得想用小短手幫你鼓掌，但拍不到……',
      '太強了！霸王龍興奮咆哮：吼——！'
    ],
    wrong: [
      '吼——！算錯了！本大王的小短手都被你氣得想跳舞了！（HP -1）',
      '大膽！竟然答錯了！一定是風太大影響了你的判斷！',
      '嘖嘖，這題答錯了。要不是肚子餓了，我就要……開玩笑的，再想清楚！',
      '哎呀，被陷阱絆倒了！快跑，霸王龍的屁股差點著火啦！',
      '可惡，答錯了。本大王要用尾巴掃平這個錯誤！'
    ],
    victory: '哇哈哈！本大王跟你一起就是無敵的！時空傳送門解鎖了，雖然有點捨不得你，但快回你的世界去吧，最強人類！',
    defeat: '吼……竟然全軍覆沒？霸王龍雷克斯嘆氣：一定是剛才那道雷擊影響了發揮，快起來重測，本霸王再陪你戰一輪！'
  },
  chuichui: {
    name: '槌槌',
    welcome: '我是甲龍槌槌！我的尾巴有堅硬的骨槌，負責殿後！慢慢來，穩紮穩打，我會用裝甲保護你！',
    correct: [
      '轟隆！答對了！我的大骨槌忍不住在地上敲了個大洞！',
      '穩啦！你的大腦跟我的尾槌一樣有力量！',
      '做得好！我們像裝甲坦克一樣無堅不摧！',
      '哇，答對了！我決定今天少睡十分鐘來慶祝！',
      '厲害！這題被你一槌敲碎！'
    ],
    wrong: [
      '哎呀！大骨槌揮空了，差點閃到尾巴……（HP -1）',
      '唔……算錯了。別怕，我的重裝甲還能再擋幾下！',
      '糟糕，被絆倒了！甲龍翻車啦，快扶我起來！',
      '這題算錯了。看來我的骨槌需要重新校準一下方向。',
      '哎呀，痛痛痛！這題比鐵甲恐龍的皮還硬，算錯了！'
    ],
    victory: '太好了……（慢吞吞地高興）我們真的衝出來了。你的數學防禦力跟我一樣高！這張結業證書你應得的，快拿去炫耀吧！',
    defeat: '呼……槌槌累倒了。防禦值歸零，時空通道關閉了。不過沒關係，甲龍最不怕失敗，拍拍灰塵，我們重新來過！'
  },
  blue: {
    name: '小藍',
    welcome: '我是迅猛龍小藍！速度就是我的生命！用你的數學閃電，讓我們在時空梭能量耗盡前逃走吧！',
    correct: [
      '太快了！簡直跟我的奔跑速度一樣快！答對了！',
      '咻——！完美閃避！你這腦袋轉得比我還靈活！',
      '抓到了！這題的破綻被你瞬間看穿！',
      '嘎哦！答對了！小藍對你投射出一個認可的眼神！',
      '漂亮！這就是迅猛龍流派的數學神速！'
    ],
    wrong: [
      '哇啊！速度太快踩空了，滑進泥潭裡了！（HP -1）',
      '糟糕！我們被翼龍包圍了，快變換跑位！',
      '算錯了！迅猛龍小藍急煞車，差點撞到巨木！',
      '哎呀，失策！剛才風速計算有誤，再試一次！',
      '太急了！雖然迅猛龍要快，但數學要準，冷靜點！'
    ],
    victory: '吱吱！警報解除！時空梭能量核心修好了！你的數學大腦反應速度簡直世界第一，歡迎隨時再來白堊紀找我賽跑！',
    defeat: '嘰……倒數歸零，我們被困在白堊紀了。小藍用頭蹭蹭你：別灰心，迅猛龍從不氣餒，活動一下腳踝，我們再衝一次！'
  }
};

// Stage Configurations
const STAGES = {
  1: {
    name: '翼龍峽谷 (Pterodactyl Canyon)',
    desc: '計算角度與風速，閃避俯衝的無齒翼龍！',
    emoji: '🦖💨'
  },
  2: {
    name: '三角龍沼澤 (Triceratops Swamp)',
    desc: '破解數列規律，在狂奔的獸群中找出安全生路！',
    emoji: '🦕🌊'
  },
  3: {
    name: '暴龍獵場 (T-Rex Hunting Ground)',
    desc: '精密計算速度與距離，甩開霸王龍並解鎖傳送門！',
    emoji: '🦖🔥'
  }
};

// Web Audio API Synthesizer Setup
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// Generate sound effects using oscillator nodes
function playSound(type) {
  initAudio();
  if (!audioCtx) return;
  
  // Resume context if suspended (browser security autoplay policies)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  
  if (type === 'correct') {
    // Ascending pentatonic notes (pleasant chime)
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      
      gain.gain.setValueAtTime(0.15, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.3);
    });
  } else if (type === 'wrong') {
    // Descending buzzer (low buzz)
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.4);
    
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.4);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'victory') {
    // Triumphant Fanfare arpeggios
    const notes = [
      { f: 261.63, t: 0.0 }, // C4
      { f: 329.63, t: 0.1 }, // E4
      { f: 392.00, t: 0.2 }, // G4
      { f: 523.25, t: 0.3 }, // C5
      { f: 392.00, t: 0.45 }, // G4
      { f: 523.25, t: 0.6 }  // C5 (sustained)
    ];
    
    notes.forEach((n, index) => {
      const osc = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      // Layer sine + triangle for retro brassy sound
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + n.t);
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(n.f * 2, now + n.t); // octave harmonic
      
      const dur = index === notes.length - 1 ? 0.8 : 0.25;
      gain.gain.setValueAtTime(0.12, now + n.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + dur);
      
      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now + n.t);
      osc2.start(now + n.t);
      osc.stop(now + n.t + dur + 0.05);
      osc2.stop(now + n.t + dur + 0.05);
    });
  } else if (type === 'cheer') {
    // Synthesize "cheering noise" using bandpass filtered white noise
    const bufferSize = audioCtx.sampleRate * 2.0; // 2 seconds
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Fill buffer with random noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    
    // Create filter to shape the noise
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1000, now);
    filter.frequency.exponentialRampToValueAtTime(1800, now + 1.0);
    filter.Q.value = 2.0;
    
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.2); // fade in
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8); // fade out
    
    noiseNode.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    
    noiseNode.start(now);
    noiseNode.stop(now + 2.0);
  }
}

// Game State
let state = {
  playerName: '',
  partnerId: 'qiqi',
  difficulty: 'easy',
  difficultyName: '陀螺球谷',
  maxHp: 3,
  totalQuestions: 25,
  hp: 3,
  score: 0,
  currentQuestionIndex: 0,
  questionsList: [],
  selectedOptionIndex: null,
  isAnswered: false
};

// Shuffling helper
function shuffleArray(arr) {
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Randomly compile 50 questions matching the requirements
function prepareAdventureQuestions() {
  const stage1Indicators = ['n-I-1', 'n-I-2', 'n-I-3', 'n-I-4', 'n-I-5'];
  const stage2Indicators = ['n-I-6', 'n-I-7', 'n-I-8', 'n-I-9'];
  const stage3Indicators = ['s-I-1', 'r-I-1', 'r-I-2', 'r-I-3', 'd-I-1'];
  
  // Helper to get questions for indicators summing to targetCount
  function getStageQuestions(indicators, targetCount) {
    const base = Math.floor(targetCount / indicators.length);
    const remainder = targetCount % indicators.length;
    
    let counts = Array(indicators.length).fill(base);
    for (let i = 0; i < remainder; i++) {
      counts[i] += 1;
    }
    counts = shuffleArray(counts);
    
    let result = [];
    indicators.forEach((code, idx) => {
      const countToPick = counts[idx];
      const allQs = QUESTION_BANK.filter(q => q.indicator_code === code);
      const picked = shuffleArray(allQs).slice(0, countToPick);
      result.push(...picked);
    });
    return result;
  }
  
  // Stage 1: Canyon (17 Qs)
  const q1 = getStageQuestions(stage1Indicators, 17);
  q1.forEach(q => q.stage = 1);
  const shuffledQ1 = shuffleArray(q1);
  
  // Stage 2: Swamp (17 Qs)
  const q2 = getStageQuestions(stage2Indicators, 17);
  q2.forEach(q => q.stage = 2);
  const shuffledQ2 = shuffleArray(q2);
  
  // Stage 3: Hunting Ground (16 Qs)
  const q3 = getStageQuestions(stage3Indicators, 16);
  q3.forEach(q => q.stage = 3);
  const shuffledQ3 = shuffleArray(q3);
  
  // Full 50 questions compiled progression
  return [...shuffledQ1, ...shuffledQ2, ...shuffledQ3];
}

// Select questions based on difficulty, ensuring each indicator code is used at least once
function selectQuestionsForDifficulty(baseline50, count) {
  if (count === 50) return baseline50;
  
  // Group questions by indicator code
  const grouped = {};
  baseline50.forEach(q => {
    if (!grouped[q.indicator_code]) {
      grouped[q.indicator_code] = [];
    }
    grouped[q.indicator_code].push(q);
  });
  
  // Guaranteed: pick 1 question from each of the 14 indicators
  const guaranteed = [];
  const remainingPool = [];
  
  Object.keys(grouped).forEach(code => {
    const list = grouped[code];
    const shuffledList = shuffleArray(list);
    guaranteed.push(shuffledList[0]);
    for (let i = 1; i < shuffledList.length; i++) {
      remainingPool.push(shuffledList[i]);
    }
  });
  
  // Pick from remaining pool to reach the desired count
  const remainingNeeded = count - guaranteed.length;
  const pickedRemaining = shuffleArray(remainingPool).slice(0, remainingNeeded);
  
  const combined = [...guaranteed, ...pickedRemaining];
  
  // Sort by stage to preserve progression order
  combined.sort((a, b) => a.stage - b.stage);
  
  return combined;
}

// DOM Elements
let screenEntry, screenGame, screenGameOver, screenVictory, screenDifficulty;
let partnerCards, startBtn;
let difficultyCards, backToEntryBtn, startGameBtn;
let hudName, hudPartner, hudScore, hudProgressText;
let hpContainer, stageTitle, stageEmoji, progressBarInner;
let questionText, questionImageContainer, optionsContainer;
let feedbackAvatar, feedbackName, feedbackText;
let nextBtn, restartBtns;

// Initialize app when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  // Bind screens
  screenEntry = document.getElementById('entry-screen');
  screenGame = document.getElementById('game-screen');
  screenGameOver = document.getElementById('game-over-screen');
  screenVictory = document.getElementById('victory-screen');
  screenDifficulty = document.getElementById('difficulty-screen');
  
  // Bind controls
  partnerCards = document.querySelectorAll('.partner-card');
  startBtn = document.getElementById('start-btn');
  difficultyCards = document.querySelectorAll('.difficulty-card');
  backToEntryBtn = document.getElementById('back-to-entry-btn');
  startGameBtn = document.getElementById('start-game-btn');
  hudName = document.getElementById('hud-name');
  hudPartner = document.getElementById('hud-partner');
  hudScore = document.getElementById('hud-score');
  hudProgressText = document.getElementById('hud-progress-text');
  hpContainer = document.getElementById('hp-container');
  stageTitle = document.getElementById('stage-title');
  stageEmoji = document.getElementById('stage-emoji');
  progressBarInner = document.getElementById('progress-bar-inner');
  questionText = document.getElementById('question-text');
  questionImageContainer = document.getElementById('question-image-container');
  optionsContainer = document.getElementById('options-container');
  feedbackAvatar = document.getElementById('feedback-avatar');
  feedbackName = document.getElementById('feedback-name');
  feedbackText = document.getElementById('feedback-text');
  nextBtn = document.getElementById('next-btn');
  restartBtns = document.querySelectorAll('.restart-btn');
  
  // Setup Partner Select Cards
  partnerCards.forEach(card => {
    card.addEventListener('click', () => {
      partnerCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.partnerId = card.dataset.partner;
      
      // Play a quick chime to initialize AudioContext
      initAudio();
    });
  });
  
  // Setup Difficulty Cards Selection
  difficultyCards.forEach(card => {
    card.addEventListener('click', () => {
      difficultyCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      
      const diff = card.dataset.difficulty;
      state.difficulty = diff;
      if (diff === 'easy') {
        state.difficultyName = '陀螺球谷';
        state.maxHp = 3;
        state.totalQuestions = 25;
      } else if (diff === 'normal') {
        state.difficultyName = '副龍櫛龍的神秘洞';
        state.maxHp = 7;
        state.totalQuestions = 40;
      } else {
        state.difficultyName = '翼龍觀賞區';
        state.maxHp = 10;
        state.totalQuestions = 50;
      }
    });
  });

  // Back button in Difficulty Screen
  backToEntryBtn.addEventListener('click', () => {
    switchScreen(screenEntry);
  });

  // Start game button in Difficulty Screen
  startGameBtn.addEventListener('click', startAdventure);

  // Start Button Event - goes to difficulty screen
  startBtn.addEventListener('click', goToDifficultySelect);
  
  // Next Button Event
  nextBtn.addEventListener('click', nextQuestion);
  
  // Restart buttons (both fail and win screens)
  restartBtns.forEach(btn => {
    btn.addEventListener('click', resetAdventure);
  });
});

// Helper to update dinosaur partner avatar (supporting images for all partners)
function updateAvatar(elementOrId, partnerId) {
  const element = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
  if (!element) return;
  const altText = PARTNER_NAMES[partnerId] || '';
  element.innerHTML = `<img src="${partnerId}.png" alt="${altText}">`;
}

// Go to Difficulty Selection Screen
function goToDifficultySelect() {
  const nameInput = document.getElementById('player-name').value.trim();
  if (!nameInput) {
    alert('請輸入你的冒險營學員姓名！');
    return;
  }
  state.playerName = nameInput;
  switchScreen(screenDifficulty);
}

// Start Adventure
function startAdventure() {
  state.hp = state.maxHp;
  state.score = 0;
  state.currentQuestionIndex = 0;
  
  const baseline50 = prepareAdventureQuestions();
  state.questionsList = selectQuestionsForDifficulty(baseline50, state.totalQuestions);
  state.isAnswered = false;
  state.selectedOptionIndex = null;
  
  // Set up HUD player profile
  hudName.textContent = state.playerName;
  hudPartner.textContent = PARTNER_NAMES[state.partnerId];
  
  // Render welcome dialogue
  const info = PARTNER_DIALOGUES[state.partnerId];
  updateAvatar(feedbackAvatar, state.partnerId);
  feedbackName.textContent = info.name;
  feedbackText.textContent = info.welcome;
  
  // Switch to game screen
  switchScreen(screenGame);
  
  // Render first question
  renderQuestion();
  updateHUD();
}

// Switch Screens
function switchScreen(targetScreen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  targetScreen.classList.add('active');
  window.scrollTo(0, 0);
}

// Update HUD stats
function updateHUD() {
  hudScore.textContent = `${Math.round(state.score)} 分`;
  hudProgressText.textContent = `${state.currentQuestionIndex + 1} / ${state.totalQuestions} 題`;
  
  // Render HP Eggs
  hpContainer.innerHTML = '';
  for (let i = 0; i < state.maxHp; i++) {
    const egg = document.createElement('span');
    egg.className = 'hp-egg';
    if (i < state.hp) {
      egg.textContent = '🥚';
    } else {
      egg.className = 'hp-egg lost';
      egg.textContent = '🍳'; // Broken/cooked egg for lost health!
    }
    hpContainer.appendChild(egg);
  }
  
  // Update progress bar
  const progressPercent = (state.currentQuestionIndex / state.totalQuestions) * 100;
  progressBarInner.style.width = `${progressPercent}%`;
}

// Helper to draw an analog clock face using SVG
function generateClockSVG(timeStr) {
  const parts = timeStr.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  
  const hourAngle = (hours % 12 + minutes / 60) * 30;
  const minAngle = minutes * 6;
  
  let ticks = '';
  for (let i = 0; i < 12; i++) {
    const angle = i * 30;
    const isMajor = (i % 3 === 0);
    const strokeWidth = isMajor ? 3 : 1.5;
    const y2 = isMajor ? 18 : 15;
    ticks += `<line x1="60" y1="10" x2="60" y2="${y2}" stroke="#3e2713" stroke-width="${strokeWidth}" transform="rotate(${angle} 60 60)" />`;
  }
  
  // Generate numbers 1 to 12 dynamically
  let numbers = '';
  const numRadius = 36; // radius for number centers
  for (let i = 1; i <= 12; i++) {
    const angleRad = (i * 30) * Math.PI / 180;
    const x = 60 + numRadius * Math.sin(angleRad);
    const y = 60 - numRadius * Math.cos(angleRad);
    numbers += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="10.5" font-family="Fredoka, sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#3e2713">${i}</text>`;
  }
  
  return `
    <svg width="100" height="100" viewBox="0 0 120 120" style="background: none; display: block; margin: 0 auto;">
      <!-- Outer Face -->
      <circle cx="60" cy="60" r="54" stroke="#3e2713" stroke-width="4" fill="#fcf6e8" />
      <circle cx="60" cy="60" r="50" stroke="rgba(56, 142, 60, 0.15)" stroke-width="2" fill="none" />
      
      <!-- Hour Ticks -->
      ${ticks}
      
      <!-- Numbers -->
      ${numbers}
      
      <!-- Hour Hand (thick, shorter) -->
      <line x1="60" y1="60" x2="60" y2="36" stroke="#c62828" stroke-width="5" stroke-linecap="round" transform="rotate(${hourAngle} 60 60)" />
      
      <!-- Minute Hand (thin, longer) -->
      <line x1="60" y1="60" x2="60" y2="20" stroke="#1b5e20" stroke-width="3" stroke-linecap="round" transform="rotate(${minAngle} 60 60)" />
      
      <!-- Center Pin -->
      <circle cx="60" cy="60" r="4.5" fill="#3e2713" />
      <circle cx="60" cy="60" r="1.5" fill="#fcf6e8" />
    </svg>
  `;
}

// Helper to format fraction strings (e.g. 1/8, 7/8, 1/10) to HTML vertical fraction structure
function formatFractions(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/\b(\d+)\/(\d+)\b/g, '<span class="fraction"><span class="num">$1</span><span class="den">$2</span></span>');
}

// Render Current Question
function renderQuestion() {
  state.isAnswered = false;
  state.selectedOptionIndex = null;
  nextBtn.style.display = 'none';
  
  const qData = state.questionsList[state.currentQuestionIndex];
  
  // Set Stage headers based on question stage
  const stageInfo = STAGES[qData.stage];
  stageTitle.textContent = stageInfo.name;
  stageEmoji.textContent = stageInfo.emoji;
  
  // Render Question Text (without Indicator)
  questionText.innerHTML = formatFractions(qData.text);
  
  // Render Question Image if present
  if (qData.image) {
    questionImageContainer.innerHTML = `<img src="${qData.image}" alt="題目圖片">`;
    questionImageContainer.style.display = 'block';
  } else {
    questionImageContainer.innerHTML = '';
    questionImageContainer.style.display = 'none';
  }
  
  // Prepare choices
  const rawOptions = [
    { originalKey: 'A', text: qData.options.A },
    { originalKey: 'B', text: qData.options.B },
    { originalKey: 'C', text: qData.options.C },
    { originalKey: 'D', text: qData.options.D }
  ];
  
  // Shuffle option choices
  const shuffledOptions = shuffleArray(rawOptions);
  
  // Render Option buttons
  optionsContainer.innerHTML = '';
  shuffledOptions.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    // Add special style if clock face inside to center alignment
    if (qData.is_clock_type) {
      btn.style.justifyContent = 'space-between';
    }
    
    const prefix = document.createElement('span');
    prefix.className = 'option-prefix';
    prefix.textContent = String.fromCharCode(65 + index); // A, B, C, D prefix
    btn.appendChild(prefix);
    
    if (qData.is_clock_type) {
      const clockContainer = document.createElement('div');
      clockContainer.style.flexGrow = '1';
      clockContainer.innerHTML = generateClockSVG(opt.text);
      btn.appendChild(clockContainer);
    } else {
      const optionTextSpan = document.createElement('span');
      optionTextSpan.className = 'option-text';
      optionTextSpan.innerHTML = formatFractions(opt.text);
      btn.appendChild(optionTextSpan);
    }
    
    // Store original index data
    btn.dataset.originalKey = opt.originalKey;
    btn.dataset.isCorrect = (opt.originalKey === qData.answer);
    
    btn.addEventListener('click', () => handleOptionClick(btn, index));
    optionsContainer.appendChild(btn);
  });
}

// Handle Option Click
function handleOptionClick(selectedBtn, idx) {
  if (state.isAnswered) return;
  state.isAnswered = true;
  state.selectedOptionIndex = idx;
  
  const isCorrect = (selectedBtn.dataset.isCorrect === 'true');
  const partnerInfo = PARTNER_DIALOGUES[state.partnerId];
  
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  
  if (isCorrect) {
    // Correct!
    selectedBtn.classList.add('correct');
    state.score += 100 / state.totalQuestions;
    playSound('correct');
    
    // Select a random correct feedback dialogue
    const randomIdx = Math.floor(Math.random() * partnerInfo.correct.length);
    feedbackText.textContent = partnerInfo.correct[randomIdx];
  } else {
    // Incorrect!
    selectedBtn.classList.add('wrong');
    state.hp -= 1;
    playSound('wrong');
    
    // Select a random wrong feedback dialogue
    const randomIdx = Math.floor(Math.random() * partnerInfo.wrong.length);
    feedbackText.textContent = partnerInfo.wrong[randomIdx];
  }
  
  // Disable all option buttons
  optionButtons.forEach(btn => btn.classList.add('disabled'));
  
  // Update stats
  updateHUD();
  
  // Check game condition
  if (state.hp <= 0) {
    // Wait a brief moment then show game over
    setTimeout(showGameOver, 1500);
  } else {
    // Show Next Button
    nextBtn.style.display = 'block';
  }
}

// Go to next question
function nextQuestion() {
  state.currentQuestionIndex++;
  
  if (state.currentQuestionIndex >= state.totalQuestions) {
    // Game Completed!
    showVictory();
  } else {
    const prevQ = state.questionsList[state.currentQuestionIndex - 1];
    // Load next question
    renderQuestion();
    updateHUD();
    
    // Clear dialogue back to companion standard welcome/encouragement on stage transit
    const currQ = state.questionsList[state.currentQuestionIndex];
    if (prevQ && currQ && prevQ.stage !== currQ.stage) {
      feedbackText.textContent = `闖關成功！我們進入了「${STAGES[currQ.stage].name}」！加油，我們能行！`;
    }
  }
}

// Show Game Over
function showGameOver() {
  switchScreen(screenGameOver);
  const info = PARTNER_DIALOGUES[state.partnerId];
  
  document.getElementById('fail-message').textContent = info.defeat;
  updateAvatar('fail-partner-avatar', state.partnerId);
}

// Show Victory Screen
function showVictory() {
  switchScreen(screenVictory);
  
  const info = PARTNER_DIALOGUES[state.partnerId];
  updateAvatar('victory-partner-avatar', state.partnerId);
  document.getElementById('victory-message').textContent = info.victory;
  
  // Compile Certificate values
  document.getElementById('cert-name').textContent = state.playerName;
  document.getElementById('cert-difficulty').textContent = state.difficultyName;
  document.getElementById('cert-score').textContent = Math.round(state.score);
  
  const today = new Date();
  const dateStr = `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;
  document.getElementById('cert-date').textContent = dateStr;
  
  // Stamp design
  const stamp = document.getElementById('cert-stamp');
  if (state.score >= 100) {
    stamp.textContent = '🏆 滿分大神';
    stamp.style.color = '#c62828';
  } else if (state.score >= 90) {
    stamp.textContent = '⭐ 卓越超群';
    stamp.style.color = '#e65100';
  } else if (state.score >= 60) {
    stamp.textContent = '🦕 闖關成功';
    stamp.style.color = '#2e7d32';
  } else {
    stamp.textContent = '🍀 安全逃脫';
    stamp.style.color = '#1565c0';
  }
  
  // Play sounds
  playSound('victory');
  setTimeout(() => {
    playSound('cheer');
  }, 400);
  
  // Start Fireworks
  startFireworks();
}

// Reset Adventure
function resetAdventure() {
  stopFireworks();
  switchScreen(screenEntry);
}

// Canvas Fireworks Particle System
let fireworksInterval = null;
let animationFrameId = null;

function startFireworks() {
  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas.getContext('2d');
  
  // Handle resize
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  let particles = [];
  
  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = Math.random() * 3 + 1;
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.015;
      this.gravity = 0.08;
    }
    
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
    
    update() {
      this.vx *= 0.98; // air resistance
      this.vy *= 0.98;
      this.vy += this.gravity; // gravity
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
    }
  }
  
  function createExplosion(x, y) {
    const colors = ['#ffc107', '#ff5722', '#4caf50', '#00bcd4', '#e91e63', '#9c27b0'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle(x, y, color));
    }
  }
  
  // Loop
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((p, idx) => {
      p.update();
      p.draw();
      if (p.alpha <= 0) {
        particles.splice(idx, 1);
      }
    });
    
    animationFrameId = requestAnimationFrame(tick);
  }
  
  // Spawn fireworks
  fireworksInterval = setInterval(() => {
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * (canvas.height * 0.6) + (canvas.height * 0.1);
    createExplosion(rx, ry);
  }, 600);
  
  tick();
}

function stopFireworks() {
  if (fireworksInterval) {
    clearInterval(fireworksInterval);
    fireworksInterval = null;
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  const canvas = document.getElementById('fireworks-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
