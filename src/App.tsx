import styled from "styled-components";
import SelectBox from "./components/SelectBox";
import DailyTrend from "./DailyTrend";
import { useAtomValue } from "jotai";
import { DateAtom } from "./atom";

const Container = styled.div`
  min-width: 420px;
  max-width: 1024px;
  width: 100vw;
  height: 100vh;
  margin: 0px auto;
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
  const dateAtom = useAtomValue(DateAtom);
  const toDateFormat = (date?: string) =>
    date ? `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}` : "";
  return (
    <Container>
      <Title>북한 동향</Title>
      <SelectBox />
      <div>
        {toDateFormat(dateAtom?.startDate)} ~{toDateFormat(dateAtom?.endDate)}
      </div>
      <ContentBox>
        <DailyTrend />
      </ContentBox>
      <Bottom>⚒️ Made by JayU</Bottom>
    </Container>
  );
}

export default App;
