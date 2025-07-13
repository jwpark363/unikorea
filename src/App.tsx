import styled from "styled-components";
import SelectBox from "./components/SelectBox";
import News from "./components/News";
import { useEffect } from "react";
import { GetDailyTrend } from "./api";
import DailyTrend from "./DailyTrend";

const Container = styled.div`
  min-width: 420px;
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* grid-template-rows: 1fr 1fr minmax(600px, auto) 1fr; */
  gap: 12px;
  justify-items: center;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  align-self: center;
`;
const ContentBox = styled.div`
  width: 80%;
  min-height: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-content: start; /* 아이템들을 위쪽으로 정렬 */
  gap: 4px;
`;
const Bottom = styled.div`
  width: 80%;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
`;
function App() {
  useEffect(() => {
    //fetch unikorea data
    // (async () => {
    //   const data = await GetDailyTrend();
    //   console.log(data);
    // })();
    console.log("patch unikorea data");
  }, []);
  return (
    <Container>
      <Title>북한 동향</Title>
      <SelectBox />
      <ContentBox>
        <DailyTrend start="20250601" end="20250607" />
      </ContentBox>
      <Bottom>⚒️ Made by JayU</Bottom>
    </Container>
  );
}

export default App;
