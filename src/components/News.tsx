import styled from "styled-components";

const Box = styled.div`
  height: 84px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: lightslategrey;
  border-radius: 12px;
  color: white;
  .date {
    font-size: 14px;
    margin: 4px 8px 2px 8px;
  }
  .title {
    font-size: 18px;
    margin: 0px 8px 2px 8px;
  }
  .contents {
    font-size: 16px;
  }
`;
interface INews {
  date: string;
  title: string;
  contents?: string;
}
export default function News({ date, title, contents }: INews) {
  return (
    <Box>
      <span className="date">{date}</span>
      <span className="title">{title}</span>
      <span className="contents">{contents}</span>
    </Box>
  );
}
