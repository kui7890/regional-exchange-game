import { useMemo, useState } from 'react';

const regions = {
  gangjin: {
    name: '강진',
    emoji: '🏺',
    description: '쌀, 도자기, 체험 활동이 있는 지역',
    items: ['쌀', '도자기', '체험 활동'],
  },
  jangheung: {
    name: '장흥',
    emoji: '🌿',
    description: '버섯, 한우, 생태 체험이 있는 지역',
    items: ['버섯', '한우', '생태 체험'],
  },
  mokpo: {
    name: '목포',
    emoji: '🌊',
    description: '수산물, 배편, 관광 활동이 있는 지역',
    items: ['수산물', '배편', '관광 활동'],
  },
  haenam: {
    name: '해남',
    emoji: '🌾',
    description: '고구마, 배추, 농촌 체험이 있는 지역',
    items: ['고구마', '배추', '농촌 체험'],
  },
  gwangju: {
    name: '광주',
    emoji: '🎭',
    description: '문화 공연, 교육 프로그램, 기술 체험이 있는 지역',
    items: ['문화 공연', '교육 프로그램', '기술 체험'],
  },
};

const missions = [
  {
    id: 1,
    title: '강진 축제 준비',
    to: 'gangjin',
    prompt: '강진 축제에서 특별한 공연이 필요해요. 어느 지역에서 무엇을 받으면 좋을까요?',
    hint: '문화와 교육이 발달한 도시를 떠올려 보세요.',
    answers: [
      { from: 'gwangju', item: '문화 공연', points: 15, reason: '광주의 문화 공연이 강진 축제를 더 풍성하게 만들어요.' },
      { from: 'gwangju', item: '교육 프로그램', points: 10, reason: '광주의 교육 프로그램도 축제 체험 부스를 만드는 데 도움을 줘요.' },
    ],
  },
  {
    id: 2,
    title: '강진 급식 재료 구하기',
    to: 'gangjin',
    prompt: '강진 학교 급식에 필요한 재료를 다른 지역에서 받아 오려고 해요. 알맞은 교류를 골라 보세요.',
    hint: '농산물이나 수산물이 도움이 돼요.',
    answers: [
      { from: 'haenam', item: '배추', points: 15, reason: '해남의 배추는 급식 재료로 잘 어울려요.' },
      { from: 'mokpo', item: '수산물', points: 15, reason: '목포의 수산물은 급식 재료로 활용할 수 있어요.' },
      { from: 'jangheung', item: '버섯', points: 10, reason: '장흥의 버섯도 강진 급식에 도움이 되는 먹거리예요.' },
    ],
  },
  {
    id: 3,
    title: '장흥 바다 먹거리 장터',
    to: 'jangheung',
    prompt: '장흥 장터에서 바다와 관련된 먹거리를 소개하려고 해요. 어디에서 무엇을 받으면 좋을까요?',
    hint: '바다와 항구가 있는 지역을 떠올려 보세요.',
    answers: [
      { from: 'mokpo', item: '수산물', points: 15, reason: '목포의 수산물은 장흥 장터에 딱 맞는 교류예요.' },
      { from: 'mokpo', item: '관광 활동', points: 10, reason: '목포의 관광 활동도 장흥 장터를 더 흥미롭게 만들 수 있어요.' },
    ],
  },
  {
    id: 4,
    title: '목포 특산물 장터',
    to: 'mokpo',
    prompt: '목포에서 내륙 지역의 농산물을 소개하는 장터를 열어요. 어떤 교류가 좋을까요?',
    hint: '농산물이 풍부한 지역을 생각해 보세요.',
    answers: [
      { from: 'haenam', item: '고구마', points: 15, reason: '해남의 고구마는 목포 장터에서 인기 있는 특산물이 될 수 있어요.' },
      { from: 'haenam', item: '배추', points: 10, reason: '해남의 배추도 목포 장터에 잘 어울리는 농산물이에요.' },
      { from: 'gangjin', item: '쌀', points: 10, reason: '강진의 쌀도 목포에 소개할 수 있는 좋은 먹거리예요.' },
    ],
  },
  {
    id: 5,
    title: '해남 배움의 날',
    to: 'haenam',
    prompt: '해남 학생들이 새로운 배움 체험을 원해요. 어떤 교류를 하면 좋을까요?',
    hint: '교육과 기술을 떠올려 보세요.',
    answers: [
      { from: 'gwangju', item: '교육 프로그램', points: 15, reason: '광주의 교육 프로그램은 해남 학생들에게 새로운 배움을 줄 수 있어요.' },
      { from: 'gwangju', item: '기술 체험', points: 15, reason: '광주의 기술 체험은 해남 학생들의 호기심을 키워 줘요.' },
      { from: 'gangjin', item: '체험 활동', points: 10, reason: '강진의 체험 활동도 해남 학생들과 함께 나눌 수 있어요.' },
    ],
  },
  {
    id: 6,
    title: '광주 전시회 꾸미기',
    to: 'gwangju',
    prompt: '광주 전시회에서 지역 문화를 보여 주려고 해요. 어떤 물건이나 활동이 좋을까요?',
    hint: '강진의 대표 문화를 떠올려 보세요.',
    answers: [
      { from: 'gangjin', item: '도자기', points: 15, reason: '강진의 도자기는 광주 전시회에서 지역 문화를 잘 보여 줄 수 있어요.' },
      { from: 'gangjin', item: '체험 활동', points: 10, reason: '강진의 체험 활동도 광주 전시회를 더 재미있게 만들 수 있어요.' },
    ],
  },
];

const initialGroups = Array.from({ length: 6 }, (_, index) => ({
  id: `group-${index + 1}`,
  name: `${index + 1}모둠`,
  score: 0,
  success: 0,
  attempts: 0,
}));

function App() {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroup, setSelectedGroup] = useState(initialGroups[0].id);
  const [currentMission, setCurrentMission] = useState(missions[0]);
  const [from, setFrom] = useState('gangjin');
  const [item, setItem] = useState(regions.gangjin.items[0]);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const currentGroup = groups.find((group) => group.id === selectedGroup) ?? groups[0];
  const targetRegion = regions[currentMission.to];
  const fromRegion = regions[from];

  const leaderboard = useMemo(() => {
    return [...groups].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.success !== a.success) return b.success - a.success;
      return a.attempts - b.attempts;
    });
  }, [groups]);

  const changeFrom = (value) => {
    setFrom(value);
    setItem(regions[value].items[0]);
    setResult(null);
  };

  const drawMission = () => {
    const candidates = missions.filter((mission) => mission.id !== currentMission.id);
    const nextMission = candidates[Math.floor(Math.random() * candidates.length)] ?? missions[0];
    setCurrentMission(nextMission);
    setResult(null);
  };

  const submitAnswer = () => {
    const matched = currentMission.answers.find((answer) => answer.from === from && answer.item === item);
    const earned = matched ? matched.points : 0;
    const success = Boolean(matched);

    setGroups((previousGroups) =>
      previousGroups.map((group) => {
        if (group.id !== selectedGroup) return group;
        return {
          ...group,
          score: group.score + earned,
          success: group.success + (success ? 1 : 0),
          attempts: group.attempts + 1,
        };
      })
    );

    setResult({
      success,
      earned,
      message: matched
        ? matched.reason
        : `${fromRegion.name}의 ${item}도 의미는 있지만, 이번 미션에는 더 알맞은 교류가 있어요. 다시 도전해 보세요!`,
    });

    setHistory((previousHistory) => [
      {
        id: `${Date.now()}-${Math.random()}`,
        group: currentGroup.name,
        mission: currentMission.title,
        exchange: `${fromRegion.name} → ${targetRegion.name} : ${item}`,
        earned,
      },
      ...previousHistory,
    ]);
  };

  const resetGame = () => {
    setGroups(initialGroups);
    setSelectedGroup(initialGroups[0].id);
    setCurrentMission(missions[0]);
    setFrom('gangjin');
    setItem(regions.gangjin.items[0]);
    setResult(null);
    setHistory([]);
  };

  return (
    <div className="page">
      <header className="hero card">
        <div className="hero-badges">
          <span className="badge primary">4학년 1차시용 게임형 사이트</span>
          <span className="badge">모둠 대항 리더보드</span>
        </div>
        <h1>지역 교류 미션 게임</h1>
        <p>
          강진, 장흥, 목포, 해남, 광주가 서로 어떤 물건과 활동을 주고받는지
          미션을 해결하며 재미있게 체험해 보세요.
        </p>
      </header>

      <main className="layout">
        <section className="left-column">
          <div className="card section-card">
            <div className="section-title-row">
              <h2>🎯 현재 미션</h2>
              <button className="secondary-button" onClick={drawMission}>새 미션 뽑기</button>
            </div>

            <div className="mission-box">
              <div className="mission-meta">
                <span className="badge primary">{currentMission.title}</span>
                <span className="badge">도착 지역: {targetRegion.name}</span>
              </div>
              <p className="mission-prompt">{currentMission.prompt}</p>
              <p className="hint">힌트: {currentMission.hint}</p>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>도전하는 모둠</span>
                <select value={selectedGroup} onChange={(event) => setSelectedGroup(event.target.value)}>
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>출발 지역</span>
                <select value={from} onChange={(event) => changeFrom(event.target.value)}>
                  {Object.entries(regions).map(([key, region]) => (
                    <option key={key} value={key}>{region.emoji} {region.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="field">
              <span>보낼 물건 또는 활동</span>
              <select value={item} onChange={(event) => setItem(event.target.value)}>
                {fromRegion.items.map((regionItem) => (
                  <option key={regionItem} value={regionItem}>{regionItem}</option>
                ))}
              </select>
            </label>

            <div className="summary-box">
              <p className="summary-label">선택한 교류</p>
              <p className="summary-value">{fromRegion.name} → {targetRegion.name} : {item}</p>
            </div>

            <div className="button-row">
              <button className="primary-button" onClick={submitAnswer}>점수 받기</button>
              <button className="secondary-button" onClick={resetGame}>전체 초기화</button>
            </div>

            {result && (
              <div className={`result-box ${result.success ? 'success' : 'warning'}`}>
                <p className="result-title">{result.success ? `성공! +${result.earned}점` : '다시 도전! 0점'}</p>
                <p className="result-text">{result.message}</p>
              </div>
            )}
          </div>

          <div className="card section-card">
            <h2>🗺️ 지역 힌트 보기</h2>
            <div className="region-grid">
              {Object.values(regions).map((region) => (
                <div key={region.name} className="region-card">
                  <p className="region-name">{region.emoji} {region.name}</p>
                  <p className="region-description">{region.description}</p>
                  <p className="region-items">예: {region.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="right-column">
          <div className="card section-card">
            <div className="section-title-row">
              <h2>🏆 리더보드</h2>
            </div>
            <div className="leaderboard">
              {leaderboard.map((group, index) => (
                <div className={`leaderboard-item rank-${index + 1}`} key={group.id}>
                  <div className="leaderboard-left">
                    <div className="rank-circle">{index + 1}</div>
                    <div>
                      <p className="group-name">{group.name}</p>
                      <p className="group-meta">성공 {group.success}회 · 도전 {group.attempts}회</p>
                    </div>
                  </div>
                  <div className="score-box">
                    <strong>{group.score}</strong>
                    <span>점</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card section-card">
            <h2>📝 최근 결과</h2>
            {history.length === 0 ? (
              <div className="empty-box">아직 기록이 없어요. 첫 미션에 도전해 보세요.</div>
            ) : (
              <div className="history-list">
                {history.slice(0, 6).map((record) => (
                  <div className="history-item" key={record.id}>
                    <div>
                      <p className="history-group">{record.group}</p>
                      <p className="history-mission">{record.mission}</p>
                      <p className="history-exchange">{record.exchange}</p>
                    </div>
                    <span className="badge primary">+{record.earned}점</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card section-card">
            <h2>📚 수업 운영 팁</h2>
            <ul className="tip-list">
              <li>모둠별로 번갈아 1문제씩 풀게 하면 참여가 고르게 이루어집니다.</li>
              <li>정답을 맞히면 왜 그 교류가 알맞은지 한 문장으로 설명하게 하면 좋습니다.</li>
              <li>1등 모둠뿐 아니라 설명을 잘한 모둠도 함께 칭찬할 수 있습니다.</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="card footer-card">
        <h2>🎮 게임 규칙 한눈에 보기</h2>
        <div className="rule-grid">
          <div className="rule-card">1. 미션을 읽고 필요한 지역 교류를 생각해요.</div>
          <div className="rule-card">2. 출발 지역과 물건 또는 활동을 골라요.</div>
          <div className="rule-card">3. 정답이면 점수를 받고 리더보드에 올라가요.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
