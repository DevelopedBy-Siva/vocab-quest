import React from "react";

import Wrapper from "../../components/wrapper";
import Header from "../../components/header";
import WordsContainer from "./WordsContainer";
import WordNavBar from "./WordNavBar";
import WordFilterSortNav from "./WordFilterSortNav";

export default function Words() {
  return (
    <Wrapper stretch>
      <Wrapper contain spaceAround>
        <Header name="Words" />
      </Wrapper>
      <Wrapper contain spaceAround border right>
        <WordNavBar />
      </Wrapper>
      <Wrapper contain spaceAround>
        <WordFilterSortNav />
      </Wrapper>
      <Wrapper contain spaceAround grow>
        <WordsContainer />
      </Wrapper>
    </Wrapper>
  );
}
