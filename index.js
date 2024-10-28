const questions = [
  {
    id: 1,
    text: '나는 금사빠다 *금새 사랑에 빠진다.',
    yes: 'D',
    no: 'C',
  },
  {
    id: 2,
    text: '연애할 때 끌려다니는 타입이다.',
    yes: 'D',
    no: 'B',
  },
  {
    id: 3,
    text: '데이트 코스는 미리 짜는게 편하다.',
    yes: 'A',
    no: 'B',
  },
  {
    id: 4,
    text: '감정기복이 크지 않다.',
    yes: 'A',
    no: 'B',
  },
  {
    id: 5,
    text: '감정 표현에 솔직한 편이다.',
    yes: 'D',
    no: 'C',
  },
  {
    id: 6,
    text: '활동적인 데이트가 좋다.',
    yes: 'B',
    no: 'A',
  },
  {
    id: 7,
    text: '연락이 없어도 믿고 기다리는 편이다.',
    yes: 'A',
    no: 'B',
  },
  {
    id: 8,
    text: '이성친구는 존재할 수 없다.',
    yes: 'D',
    no: 'B',
  },
  {
    id: 9,
    text: '아무것도 아닌 일에 쉽게 섭섭함이 쌓인다.',
    yes: 'D',
    no: 'C',
  },
];

// 현재 보여지는 질문의 인덱스
let currentQuestionIndex = 0;

// 각 질문에 대한 답변을 저장하는 배열
const answers = [];

// "예" 버튼 클릭 시 실행되는 함수
function onYesButtonClick() {
  answers[currentQuestionIndex] = questions[currentQuestionIndex].yes;
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    showResult();
    return;
  }
  showQuestion();
}

// "아니오" 버튼 클릭 시 실행되는 함수
function onNoButtonClick() {
  answers[currentQuestionIndex] = questions[currentQuestionIndex].no;
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    showResult();
    return;
  }
  showQuestion();
}

// 질문을 화면에 보여주는 함수
function showQuestion() {
  const nextQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// 결과를 계산하고 보여주는 함수
function showResult() {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(answer => {
    if (counts[answer] !== undefined) {
      counts[answer]++;
    }
  });

  let result = 'A'; // 기본값
  for (const key in counts) {
    if (counts[key] > counts[result]) {
      result = key;
    }
  }

  // 결과 문자열로 변환
  let resultString;
  switch (result) {
    case 'A':
      resultString =
        '어른스러운 연애 (A): 이 유형은 성숙하고 책임감 있는 연애를 의미합니다. 서로의 감정을 존중하고, 문제를 성숙하게 해결하며, 장기적인 관계를 지향합니다.';
      break;
    case 'B':
      resultString =
        '자유로운 연애 (B): 이 유형은 자유롭고 독립적인 연애를 의미합니다. 서로의 개인적인 공간과 자유를 존중하며, 구속받지 않는 관계를 선호합니다.';
      break;
    case 'C':
      resultString =
        '친구같이 편안한 연애 (C): 이 유형은 친구처럼 편안하고 자연스러운 연애를 의미합니다. 서로에게 편안함을 느끼며, 일상적인 대화와 활동을 즐깁니다.';
      break;
    case 'D':
      resultString =
        '다 퍼주는 연애 (D): 이 유형은 상대방에게 모든 것을 주는 헌신적인 연애를 의미합니다. 상대방의 행복을 최우선으로 생각하며, 자신을 희생하는 경향이 있습니다.';
      break;
  }

  // 로컬스토리지에 결과 저장
  localStorage.setItem('lovetype_result', resultString);

  // 결과 페이지로 이동
  window.location.href = 'result.html';
}

// 페이지 로드 시, 첫 번째 질문을 보여줌
document.addEventListener('DOMContentLoaded', event => {
  showQuestion();
});

// "예" 버튼과 "아니오" 버튼에 이벤트 부여
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

yesButton.addEventListener('click', onYesButtonClick);
noButton.addEventListener('click', onNoButtonClick);
