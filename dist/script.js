const STORAGE_KEY = "regional-exchange-game-static-v1";

const regions = {
  gangjin: {
    name: "강진",
    emoji: "🏺",
    description: "청자, 농업, 체험 활동이 어우러진 지역이에요.",
    items: ["고려청자", "강진쌀", "체험 활동"],
  },
  jangheung: {
    name: "장흥",
    emoji: "🌿",
    description: "자연이 풍부하고 건강한 먹거리로 알려진 지역이에요.",
    items: ["표고버섯", "한우", "생태 체험"],
  },
  mokpo: {
    name: "목포",
    emoji: "⚓",
    description: "바다와 항구를 중심으로 다양한 해산물이 모이는 지역이에요.",
    items: ["세발낙지", "홍어", "해양 관광"],
  },
  haenam: {
    name: "해남",
    emoji: "🌾",
    description: "농산물이 풍부하고 넓은 들판이 있는 지역이에요.",
    items: ["고구마", "배추", "김"],
  },
  gwangju: {
    name: "광주",
    emoji: "🎭",
    description: "문화, 교육, 공연이 활발한 도시예요.",
    items: ["문화 공연", "교육 프로그램", "전시 체험"],
  },
};

const missions = [
  {
    id: 1,
    title: "강진 축제 준비",
    target: "gangjin",
    prompt: "강진 축제에서 특별한 공연이 필요해요. 어느 지역에서 무엇을 받으면 좋을까요?",
    hint: "문화와 교육이 활발한 도시를 떠올려 보세요.",
    answers: [
      { from: "gwangju", item: "문화 공연", points: 15, reason: "광주의 문화 공연은 강진 축제를 더욱 풍성하게 만들어요." },
      { from: "gwangju", item: "교육 프로그램", points: 10, reason: "광주의 교육 프로그램은 축제 체험 부스로 활용할 수 있어요." },
    ],
  },
  {
    id: 2,
    title: "강진 학교 급식 돕기",
    target: "gangjin",
    prompt: "강진 학교 급식에 쓸 재료가 더 필요해요. 어떤 교류가 알맞을까요?",
    hint: "먹거리가 풍부한 지역을 떠올려 보세요.",
    answers: [
      { from: "haenam", item: "배추", points: 15, reason: "해남의 배추는 급식 재료로 알맞아요." },
      { from: "jangheung", item: "표고버섯", points: 10, reason: "장흥의 표고버섯도 급식 재료로 활용할 수 있어요." },
      { from: "mokpo", item: "세발낙지", points: 15, reason: "목포의 세발낙지는 바다 먹거리로 활용할 수 있어요." },
    ],
  },
  {
    id: 3,
    title: "장흥 바다 먹거리 장터",
    target: "jangheung",
    prompt: "장흥 장터에서 바다와 관련된 먹거리를 소개하려고 해요. 어디에서 무엇을 받으면 좋을까요?",
    hint: "바다와 항구가 있는 지역을 떠올려 보세요.",
    answers: [
      { from: "mokpo", item: "세발낙지", points: 15, reason: "목포의 세발낙지는 장흥 장터에 잘 어울려요." },
      { from: "mokpo", item: "홍어", points: 15, reason: "목포의 홍어도 바다 먹거리 장터에 적합해요." },
    ],
  },
  {
    id: 4,
    title: "목포 특산물 장터",
    target: "mokpo",
    prompt: "목포에서 다른 지역의 특산물과 문화 상품을 소개하려고 해요. 무엇을 받으면 좋을까요?",
    hint: "농산물이나 지역을 대표하는 물건을 생각해 보세요.",
    answers: [
      { from: "haenam", item: "고구마", points: 15, reason: "해남의 고구마는 목포 장터에서 인기 있는 특산물이 될 수 있어요." },
      { from: "haenam", item: "배추", points: 10, reason: "해남의 배추도 목포 장터에 잘 어울리는 농산물이에요." },
      { from: "gangjin", item: "고려청자", points: 15, reason: "강진의 고려청자는 목포 장터에서 지역 문화를 소개하기 좋아요." },
    ],
  },
  {
    id: 5,
    title: "해남 배움의 날",
    target: "haenam",
    prompt: "해남 학생들이 새로운 배움 체험을 원해요. 어떤 교류를 하면 좋을까요?",
    hint: "교육이나 공연과 관련된 지역을 떠올려 보세요.",
    answers: [
      { from: "gwangju", item: "교육 프로그램", points: 15, reason: "광주의 교육 프로그램은 해남 학생들에게 새로운 배움을 줄 수 있어요." },
      { from: "gwangju", item: "문화 공연", points: 15, reason: "광주의 문화 공연은 해남 학생들의 호기심을 키워 줘요." },
    ],
  },
  {
    id: 6,
    title: "광주 전시회 꾸미기",
    target: "gwangju",
    prompt: "광주 전시회에서 다른 지역의 문화를 보여 주고 싶어요. 어떤 교류가 좋을까요?",
    hint: "강진의 대표 문화 상품을 떠올려 보세요.",
    answers: [
      { from: "gangjin", item: "고려청자", points: 15, reason: "강진의 고려청자는 광주 전시회에서 지역 문화를 잘 보여 줄 수 있어요." },
      { from: "gangjin", item: "체험 활동", points: 10, reason: "강진의 체험 활동은 전시회 참여 프로그램으로 연결할 수 있어요." },
    ],
  },
];

const state = loadState();

const currentTeamNameEl = document.getElementById("currentTeamName");
const currentTeamScoreEl = document.getElementById("currentTeamScore");
const teamForm = document.getElementById("teamForm");
const teamNameInput = document.getElementById("teamNameInput");
const teamMessage = document.getElementById("teamMessage");
const teamSelect = document.getElementById("teamSelect");
const missionNumberEl = document.getElementById("missionNumber");
const missionPointsEl = document.getElementById("missionPoints");
const missionTitleEl = document.getElementById("missionTitle");
const missionPromptEl = document.getElementById("missionPrompt");
const missionHintEl = document.getElementById("missionHint");
const missionTargetEl = document.getElementById("missionTarget");
const fromRegionSelect = document.getElementById("fromRegionSelect");
const itemSelect = document.getElementById("itemSelect");
const selectionPreview = document.getElementById("selectionPreview");
const submitAnswerButton = document.getElementById("submitAnswerButton");
const skipMissionButton = document.getElementById("skipMissionButton");
const newMissionButton = document.getElementById("newMissionButton");
const resetScoresButton = document.getElementById("resetScoresButton");
const resetAllButton = document.getElementById("resetAllButton");
const resultBox = document.getElementById("resultBox");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const leaderboardList = document.getElementById("leaderboardList");
const historyList = document.getElementById("historyList");
const regionCards = document.getElementById("regionCards");
const leaderboardItemTemplate = document.getElementById("leaderboardItemTemplate");

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (parsed && Array.isArray(parsed.teams)) {
      return {
        teams: parsed.teams,
        activeTeamId: parsed.activeTeamId || null,
        history: Array.isArray(parsed.history) ? parsed.history : [],
        missionIndex: Number.isInteger(parsed.missionIndex) ? parsed.missionIndex : 0,
      };
    }
  } catch (error) {
    console.error(error);
  }
  return {
    teams: [],
    activeTeamId: null,
    history: [],
    missionIndex: 0,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveTeam() {
  return state.teams.find((team) => team.id === state.activeTeamId) || null;
}

function getCurrentMission() {
  return missions[state.missionIndex % missions.length];
}

function setTeamMessage(message, isError = false) {
  teamMessage.textContent = message;
  teamMessage.style.color = isError ? "#d14343" : "#5d7188";
}

function createId() {
  return `team-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function renderTeamSelect() {
  teamSelect.innerHTML = "";

  if (state.teams.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "먼저 모둠을 추가해 주세요";
    teamSelect.appendChild(option);
    teamSelect.disabled = true;
    return;
  }

  teamSelect.disabled = false;
  state.teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team.id;
    option.textContent = `${team.name} (${team.score}점)`;
    option.selected = team.id === state.activeTeamId;
    teamSelect.appendChild(option);
  });
}

function renderCurrentTeamCard() {
  const activeTeam = getActiveTeam();
  if (!activeTeam) {
    currentTeamNameEl.textContent = "선택 안 됨";
    currentTeamScoreEl.textContent = "0";
    return;
  }
  currentTeamNameEl.textContent = activeTeam.name;
  currentTeamScoreEl.textContent = String(activeTeam.score);
}

function renderMission() {
  const mission = getCurrentMission();
  const maxPoints = Math.max(...mission.answers.map((answer) => answer.points));

  missionNumberEl.textContent = String(mission.id);
  missionPointsEl.textContent = String(maxPoints);
  missionTitleEl.textContent = mission.title;
  missionPromptEl.textContent = mission.prompt;
  missionHintEl.textContent = `힌트: ${mission.hint}`;
  missionTargetEl.textContent = `${regions[mission.target].emoji} ${regions[mission.target].name}`;

  hideResult();
  resetSelection();
}

function populateRegionSelect() {
  fromRegionSelect.innerHTML = '<option value="">지역 선택</option>';
  Object.entries(regions).forEach(([key, region]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${region.emoji} ${region.name}`;
    fromRegionSelect.appendChild(option);
  });
}

function populateItemSelect(regionKey) {
  itemSelect.innerHTML = '<option value="">물건 또는 활동 선택</option>';
  if (!regionKey) {
    itemSelect.disabled = true;
    return;
  }
  itemSelect.disabled = false;
  regions[regionKey].items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    itemSelect.appendChild(option);
  });
}

function resetSelection() {
  fromRegionSelect.value = "";
  populateItemSelect("");
  selectionPreview.textContent = "출발 지역과 물건을 선택해 보세요.";
}

function updatePreview() {
  const fromKey = fromRegionSelect.value;
  const item = itemSelect.value;
  const mission = getCurrentMission();

  if (!fromKey || !item) {
    selectionPreview.textContent = "출발 지역과 물건을 선택해 보세요.";
    return;
  }

  selectionPreview.textContent = `${regions[fromKey].emoji} ${regions[fromKey].name} → ${regions[mission.target].emoji} ${regions[mission.target].name} : ${item}`;
}

function showResult(type, title, text) {
  resultBox.className = "result-box";
  resultBox.classList.add(type === "success" ? "result-box--success" : "result-box--fail");
  resultTitle.textContent = title;
  resultText.textContent = text;
}

function hideResult() {
  resultBox.className = "result-box result-box--hidden";
  resultTitle.textContent = "";
  resultText.textContent = "";
}

function renderLeaderboard() {
  leaderboardList.innerHTML = "";
  const teams = [...state.teams].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.success !== a.success) return b.success - a.success;
    return a.plays - b.plays;
  });

  if (teams.length === 0) {
    const empty = document.createElement("li");
    empty.className = "leaderboard-item";
    empty.innerHTML = '<div><p class="leaderboard-item__name">등록된 모둠이 없어요</p><p class="leaderboard-item__meta">먼저 모둠을 추가해 보세요.</p></div><p class="leaderboard-item__score">-</p>';
    leaderboardList.appendChild(empty);
    return;
  }

  teams.forEach((team, index) => {
    const fragment = leaderboardItemTemplate.content.cloneNode(true);
    const item = fragment.querySelector(".leaderboard-item");
    const nameEl = fragment.querySelector(".leaderboard-item__name");
    const metaEl = fragment.querySelector(".leaderboard-item__meta");
    const scoreEl = fragment.querySelector(".leaderboard-item__score");

    const medal = ["🥇", "🥈", "🥉"][index] || `${index + 1}위`;
    nameEl.textContent = `${medal} ${team.name}`;
    metaEl.textContent = `성공 ${team.success}회 · 도전 ${team.plays}회`;
    scoreEl.textContent = `${team.score}점`;

    if (team.id === state.activeTeamId) {
      item.classList.add("leaderboard-item--active");
    }

    leaderboardList.appendChild(fragment);
  });
}

function renderHistory() {
  historyList.innerHTML = "";
  const history = state.history.slice(0, 8);

  if (history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "history-item";
    empty.innerHTML = '<p class="history-item__meta">아직 기록이 없어요.</p><p class="history-item__text">첫 번째 미션에 도전해 보세요.</p>';
    historyList.appendChild(empty);
    return;
  }

  history.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "history-item";
    item.innerHTML = `
      <p class="history-item__meta">${entry.team} · ${entry.status} · ${entry.points}점</p>
      <p class="history-item__text">${entry.text}</p>
    `;
    historyList.appendChild(item);
  });
}

function renderRegionCards() {
  regionCards.innerHTML = "";
  Object.values(regions).forEach((region) => {
    const card = document.createElement("article");
    card.className = "region-card";
    card.innerHTML = `
      <p class="region-card__title">${region.emoji} ${region.name}</p>
      <p class="region-card__description">${region.description}</p>
      <div class="region-card__tags">
        ${region.items.map((item) => `<span class="tag">${item}</span>`).join("")}
      </div>
    `;
    regionCards.appendChild(card);
  });
}

function renderAll() {
  renderTeamSelect();
  renderCurrentTeamCard();
  renderLeaderboard();
  renderHistory();
  renderMission();
}

function addTeam(name) {
  const trimmed = name.trim();
  if (!trimmed) {
    setTeamMessage("모둠 이름을 입력해 주세요.", true);
    return;
  }
  if (state.teams.some((team) => team.name === trimmed)) {
    setTeamMessage("같은 이름의 모둠이 이미 있어요.", true);
    return;
  }

  const team = {
    id: createId(),
    name: trimmed,
    score: 0,
    success: 0,
    plays: 0,
  };

  state.teams.push(team);
  state.activeTeamId = team.id;
  saveState();
  renderTeamSelect();
  renderCurrentTeamCard();
  renderLeaderboard();
  setTeamMessage(`${trimmed} 모둠이 추가되었어요.`);
  teamNameInput.value = "";
}

function recordHistory(teamName, status, points, text) {
  state.history.unshift({
    team: teamName,
    status,
    points,
    text,
  });
  state.history = state.history.slice(0, 20);
}

function submitAnswer() {
  const activeTeam = getActiveTeam();
  if (!activeTeam) {
    setTeamMessage("먼저 모둠을 추가하고 선택해 주세요.", true);
    return;
  }

  const fromKey = fromRegionSelect.value;
  const item = itemSelect.value;
  if (!fromKey || !item) {
    showResult("fail", "선택이 필요해요", "출발 지역과 물건 또는 활동을 모두 골라 주세요.");
    return;
  }

  const mission = getCurrentMission();
  const match = mission.answers.find((answer) => answer.from === fromKey && answer.item === item);

  activeTeam.plays += 1;

  if (match) {
    activeTeam.score += match.points;
    activeTeam.success += 1;
    recordHistory(
      activeTeam.name,
      "정답",
      match.points,
      `${regions[fromKey].name} → ${regions[mission.target].name} : ${item}`
    );
    showResult("success", `정답! +${match.points}점`, match.reason);
    nextMission();
  } else {
    recordHistory(
      activeTeam.name,
      "오답",
      0,
      `${regions[fromKey].name} → ${regions[mission.target].name} : ${item}`
    );
    showResult("fail", "다시 생각해 보세요", "이번 미션에는 더 알맞은 교류가 있어요. 지역 힌트 카드를 참고해 보세요.");
  }

  saveState();
  renderTeamSelect();
  renderCurrentTeamCard();
  renderLeaderboard();
  renderHistory();
}

function nextMission() {
  state.missionIndex = (state.missionIndex + 1) % missions.length;
  saveState();
  renderMission();
}

function resetScores() {
  state.teams = state.teams.map((team) => ({ ...team, score: 0, success: 0, plays: 0 }));
  state.history = [];
  saveState();
  renderTeamSelect();
  renderCurrentTeamCard();
  renderLeaderboard();
  renderHistory();
  hideResult();
  setTeamMessage("점수와 기록을 초기화했어요.");
}

function resetAll() {
  if (!window.confirm("모든 모둠과 점수를 지울까요?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state.teams = [];
  state.activeTeamId = null;
  state.history = [];
  state.missionIndex = 0;
  saveState();
  renderAll();
  setTeamMessage("전체 데이터를 초기화했어요.");
}

teamForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTeam(teamNameInput.value);
});

teamSelect.addEventListener("change", () => {
  state.activeTeamId = teamSelect.value || null;
  saveState();
  renderCurrentTeamCard();
  renderLeaderboard();
  hideResult();
});

fromRegionSelect.addEventListener("change", () => {
  populateItemSelect(fromRegionSelect.value);
  updatePreview();
  hideResult();
});

itemSelect.addEventListener("change", () => {
  updatePreview();
  hideResult();
});

submitAnswerButton.addEventListener("click", submitAnswer);
skipMissionButton.addEventListener("click", nextMission);
newMissionButton.addEventListener("click", nextMission);
resetScoresButton.addEventListener("click", resetScores);
resetAllButton.addEventListener("click", resetAll);

populateRegionSelect();
renderRegionCards();
renderAll();
setTeamMessage("모둠을 추가한 뒤 게임을 시작해 보세요.");
