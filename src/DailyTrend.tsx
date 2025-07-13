import { useEffect, useState } from "react";
import News from "./components/News";
import { GetDailyTrend } from "./api";
import { DateAtom } from "./atom";
import { useAtomValue } from "jotai";

interface ITrend {
  first_reg_ymd: string;
  sj: string;
  cn: string;
  cl: string;
  dwld_url?: string;
  url?: string;
  filenm?: string;
}
interface ITrendsData {
  pageNo: number;
  resultCode: string;
  totalCount: number;
  numOfRows: number;
  resultMsg: string;
  items: ITrend[];
}

const sampleData: ITrendsData = {
  pageNo: 1,
  resultCode: "0",
  totalCount: 2,
  numOfRows: 2,
  items: [
    {
      first_reg_ymd: "20250630",
      url: "https://nkinfo.unikorea.go.kr/nkp/trend/view.do?pstgSeCode=&menuId=MENU_494&trendMngNo=133590",
      sj: "당 중앙위 제8기 제12차 전원회의 후속 보도",
      cn: "□ 당 중앙위 제8기 제12차 전원회의 후속 보도(노동)   o “<이민위천, 일심단결, 자력갱생을 우리 혁명의 필승의 보검으로 틀어 쥐고나가자!> 구호 들고 올해를 당 제8차대회가 제시한 과업을 완수하는 사변적해로, 새로운 발전단계로의 상승국면을 개척하는 전환의 해로 빛내여야”    - “당중앙위원회 제８기 제１２차전원 회의 참가자들, 현장에서 당중앙의 사상·의도 전파 및 당결정 관철을 위한 조직정치사업 전개”    - “조국해방 80돐과 당창건 80돐을 대정치축전으로 뜻깊게 경축하는 사업과 당 제9차대회를 승리자의 대회로 맞이하기 위한 투쟁을 힘 있게 벌려야”   ※ 당 전원회의 결정 관철 위해 △참가자들 현장 정치사업 전개 △전원회의 기본정신 해설 △일꾼 역할 독려 △선전화 새로 제작 등 후속 조치 보도",
      cl: "ARGUMENT_DAIL",
    },
    {
      first_reg_ymd: "20250630",
      url: "https://nkinfo.unikorea.go.kr/nkp/trend/view.do?pstgSeCode=&menuId=MENU_494&trendMngNo=133589",
      sj: "창당 80년 계기 당 역사 연대기 11화 보도, ‘자력갱생’ 강조",
      cn: "□ 창당 80년 계기 당 역사 연대기 11화 보도, ‘자력갱생’ 강조(노동)   o “적대세력들은 우리가 자력갱생의 길을 포기하도록 하기 위해 10여년간 사상초유의 극악한 제재봉쇄책동에 매달려”, “첨예한 대결전에서 우리당은 자력갱생의 기치를 더 높이 추켜들어...력사에 전무한 기적과 사변들을 안아와”     * “금속, 화학, 농업, 전력, 경공업 부문 성과”, “가장 획기적 발전은 건설부문”, “인민경제발전 12개 중요고지 성공적 점령, 국가경제전반 장성추이 보여주는 축도”   o “자력갱생은 정세변화 요구나 난국에 대처한 전술적 대응책이 아닌 우리 당이 일관하게 견지해나가는 불변의 정치로선”    - “사상의 무기를 틀어쥐어, 인민의 정신력을 발동하면 못해낼 일이 없다는 우리 당 사상론의 위대한 계승을 자력갱생 대진군에서 똑똑히 보고 있어”",
      cl: "ARGUMENT_DAIL",
    },
    {
      first_reg_ymd: "20250630",
      url: "https://nkinfo.unikorea.go.kr/nkp/trend/view.do?pstgSeCode=&menuId=MENU_494&trendMngNo=133590",
      sj: "당 중앙위 제8기 제12차 전원회의 후속 보도",
      cn: "□ 당 중앙위 제8기 제12차 전원회의 후속 보도(노동)   o “<이민위천, 일심단결, 자력갱생을 우리 혁명의 필승의 보검으로 틀어 쥐고나가자!> 구호 들고 올해를 당 제8차대회가 제시한 과업을 완수하는 사변적해로, 새로운 발전단계로의 상승국면을 개척하는 전환의 해로 빛내여야”    - “당중앙위원회 제８기 제１２차전원 회의 참가자들, 현장에서 당중앙의 사상·의도 전파 및 당결정 관철을 위한 조직정치사업 전개”    - “조국해방 80돐과 당창건 80돐을 대정치축전으로 뜻깊게 경축하는 사업과 당 제9차대회를 승리자의 대회로 맞이하기 위한 투쟁을 힘 있게 벌려야”   ※ 당 전원회의 결정 관철 위해 △참가자들 현장 정치사업 전개 △전원회의 기본정신 해설 △일꾼 역할 독려 △선전화 새로 제작 등 후속 조치 보도",
      cl: "ARGUMENT_DAIL",
    },
    {
      first_reg_ymd: "20250630",
      url: "https://nkinfo.unikorea.go.kr/nkp/trend/view.do?pstgSeCode=&menuId=MENU_494&trendMngNo=133589",
      sj: "창당 80년 계기 당 역사 연대기 11화 보도, ‘자력갱생’ 강조",
      cn: "□ 창당 80년 계기 당 역사 연대기 11화 보도, ‘자력갱생’ 강조(노동)   o “적대세력들은 우리가 자력갱생의 길을 포기하도록 하기 위해 10여년간 사상초유의 극악한 제재봉쇄책동에 매달려”, “첨예한 대결전에서 우리당은 자력갱생의 기치를 더 높이 추켜들어...력사에 전무한 기적과 사변들을 안아와”     * “금속, 화학, 농업, 전력, 경공업 부문 성과”, “가장 획기적 발전은 건설부문”, “인민경제발전 12개 중요고지 성공적 점령, 국가경제전반 장성추이 보여주는 축도”   o “자력갱생은 정세변화 요구나 난국에 대처한 전술적 대응책이 아닌 우리 당이 일관하게 견지해나가는 불변의 정치로선”    - “사상의 무기를 틀어쥐어, 인민의 정신력을 발동하면 못해낼 일이 없다는 우리 당 사상론의 위대한 계승을 자력갱생 대진군에서 똑똑히 보고 있어”",
      cl: "ARGUMENT_DAIL",
    },
  ],
  resultMsg: "normal_code",
};
export default function DailyTrend() {
  const dateAtom = useAtomValue(DateAtom);
  const [data, setData] = useState<ITrendsData | null>(null);
  useEffect(() => {
    (async () => {
      const json = await GetDailyTrend(dateAtom?.startDate, dateAtom?.endDate);
      console.log(json);
      setData(json);
    })();
  }, [dateAtom]);
  return data && data.resultCode === "0" ? (
    <>
      {data.items.map((trend, i) => (
        <News
          key={i}
          date={trend.first_reg_ymd}
          title={trend.sj}
          contents={trend.cn}
        />
      ))}
    </>
  ) : null;
}
