import React from "react";
import styled from "styled-components";

import Wrapper from "../../components/wrapper";
import FontSize from "../../assets/styles/FontSizes.json";

export default function QuizNavContainer({ totalWords, quizQn, setQuizQns }) {
  return (
    <Wrapper contain spaceAround border right={!quizQn}>
      {!quizQn ? (
        <QuizFormNavContainer totalWords={totalWords} />
      ) : (
        <QnAnsNavContainer quizQns={quizQn} setQuizQns={setQuizQns} />
      )}
    </Wrapper>
  );
}

function QuizFormNavContainer({ totalWords }) {
  return (
    <QuizFormNav>
      <AvailableWordsHead>Available Words:</AvailableWordsHead>
      <AvailableWords>{totalWords}</AvailableWords>
    </QuizFormNav>
  );
}

function QnAnsNavContainer({ quizQns, setQuizQns }) {
  const currentQn = quizQns.currentQn;
  const max = quizQns.qns.length;
  const { status, myChoice, answer } = quizQns.qns[currentQn];

  function submitAnswer() {
    const newQuizQn = [...quizQns.qns];
    newQuizQn[currentQn].status = myChoice === answer;
    setQuizQns({ ...quizQns, qns: [...newQuizQn] });
  }

  return (
    <QnAnsNav>
      <QnAnsNavQnTrack>
        {currentQn + 1} &#47; {max}
      </QnAnsNavQnTrack>
      {status === null ? (
        <QnAnsNavSubmitBtn onClick={submitAnswer}>Submit</QnAnsNavSubmitBtn>
      ) : currentQn + 1 !== max ? (
        <QnAnsNavNextBtn>Next</QnAnsNavNextBtn>
      ) : (
        <QnAnsNavFinishBtn>Finish</QnAnsNavFinishBtn>
      )}
    </QnAnsNav>
  );
}

const QuizFormNav = styled.div`
  color: ${(props) => props.theme.text.light};
`;

const AvailableWordsHead = styled.span`
  font-size: ${FontSize.QUIZ.QZ_HEAD_SM};
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const AvailableWords = styled.span`
  font-size: ${FontSize.QUIZ.QZ_HEAD_LG};
  letter-spacing: 2px;
  margin-left: 8px;
  font-weight: 500;
`;

const QnAnsNav = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
`;

const QnAnsNavBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${(props) => props.theme.text.light};
  padding: 8px 4px;
  width: 70px;
  border-radius: 4px;
  letter-spacing: 1px;
  font-size: ${FontSize.QUIZ.QN_NAV_BTN};
  cursor: pointer;
  margin-left: auto;
`;

const QnAnsNavSubmitBtn = styled(QnAnsNavBtn)`
  background: ${(props) => props.theme.button.blue};
`;

const QnAnsNavNextBtn = styled(QnAnsNavBtn)`
  background: ${(props) => props.theme.button.yellow};
`;
const QnAnsNavFinishBtn = styled(QnAnsNavBtn)`
  background: ${(props) => props.theme.button.green};
`;

const QnAnsNavQnTrack = styled.span`
  display: inline-block;
  font-size: ${FontSize.QUIZ.QN_NAV_COUNT};
  color: ${(props) => props.theme.text.light};
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;
