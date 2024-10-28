// 결과를 계산하는 함수
function calculateResult(answers) {
  const resultCount = { A: 0, B: 0, C: 0, D: 0 };

  answers.forEach(answer => {
    resultCount[answer]++;
  });

  let maxCount = 0;
  let resultType = '';

  for (const [type, count] of Object.entries(resultCount)) {
    if (count > maxCount) {
      maxCount = count;
      resultType = type;
    }
  }

  return resultType;
}

// 결과 타입에 따른 설명을 반환하는 함수
function getResultDescription(resultType) {
  switch (resultType) {
    case 'A':
      return '어른스러운 연애 (A): 이 유형은 성숙하고 책임감 있는 연애를 의미합니다. 서로의 감정을 존중하고, 문제를 성숙하게 해결하며, 장기적인 관계를 지향합니다.';
    case 'B':
      return '자유로운 연애 (B): 이 유형은 자유롭고 독립적인 연애를 의미합니다. 서로의 개인적인 공간과 자유를 존중하며, 구속받지 않는 관계를 선호합니다.';
    case 'C':
      return '친구같이 편안한 연애 (C): 이 유형은 친구처럼 편안하고 자연스러운 연애를 의미합니다. 서로에게 편안함을 느끼며, 일상적인 대화와 활동을 즐깁니다.';
    case 'D':
      return '다 퍼주는 연애 (D): 이 유형은 상대방에게 모든 것을 주는 헌신적인 연애를 의미합니다. 상대방의 행복을 최우선으로 생각하며, 자신을 희생하는 경향이 있습니다.';
    default:
      return '결과를 계산할 수 없습니다.';
  }
}

// 페이지 로드 시, 결과를 계산하고 표시
window.onload = function () {
  const answers = JSON.parse(localStorage.getItem('answers'));
  const resultType = calculateResult(answers);
  const resultDescription = getResultDescription(resultType);

  const resultElement = document.getElementById('result');
  resultElement.textContent = resultDescription;
};
