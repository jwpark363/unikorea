import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
  width: 420px;
  button {
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
  }
  .selected_week {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 4px;
    background-color: steelblue;
    color: white;
    button {
      font-size: 12px;
      padding: 2px;
      background-color: steelblue;
      color: white;
      cursor: pointer;
    }
  }
`;

export default function SelectBox() {
  return (
    <Box>
      <div className="selected_week">
        <button>◀</button>
        2025년 6월 1주차
        <button>▶</button>
      </div>
      <button>일일 동향</button>
      <button>위원장 동향</button>
    </Box>
  );
}
