import styled from "styled-components";

const Box = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: lightslategrey;
  border-radius: 8px;
  .date {
    font-size: 14px;
  }
  .title {
    font-size: 20px;
  }
  .contents {
    font-size: 18px;
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
