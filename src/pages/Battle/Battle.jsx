import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  // background-color: black;
  -ms-overflow-style: none;
  scrollbar-width: none;

  background-image: url(${process.env
    .PUBLIC_URL}/images/단과대항전배경.png); /* 배경 이미지 경로 설정 */
  background-size: cover; /* 배경 이미지 크기 조절 */
  background-position: center; /* 배경 이미지 위치 조절 */

  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
`;

const Body = styled.div``;

const Footer = styled.div`
  height: 150px;
  position: relative;
  border: none;
  margin: 0;
  // position: fixed; /* 푸터를 화면 하단에 고정 */
  // bottom: 0; /* 화면 하단에 고정 */
  // background-color: black;
`;
const Left = styled.div`
  position: absolute;
  left: 17%;
  top: -3px;
`;
const FooterContentWrapper = styled.div`
  position: relative;
`;
const Base = styled.div``;
const FooterContent = styled.div`
  width: 300px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
  }
  .bold {
    font-weight: 700;
  }
  #marginBottom {
    margin-bottom: 2px;
  }
`;
const ManagementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: center;
`;
const FestivalWrapper = styled.div`
  margin-top: 25px;
`;
const DevelopmentWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: center;
`;
const Line = styled.div`
  height: 0px;
  margin-top: -6px;
`;
const Right = styled.div`
  position: absolute;
  right: 17%;
  top: -3px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  align-items: center;
`;

const Back = styled.div`
  width: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const None = styled.div`
  width: 24px;
  height: 24px;
`;

const TopBox = styled.div`
  position: relative;
  margin-top: 10px;
`;

const TopTitle = styled.div`
  color: #fff;
  font-weight: bold;
  position: relative;
  margin-top: -34px;
`;

const Check = styled.button`
  position: relative;
  padding: 14px 33px 13px 33px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: rgba(134, 228, 212, 0.25);
  margin-top: 20px;

  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const College = styled.select`
  padding: 11px 14px 11px 18px;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: #fff;
  width: 285px;
  height: 70px;
  margin-top: 50px;
  outline: none;
  appearance: none;
  background: url("${process.env.PUBLIC_URL}/images/down-one.png") no-repeat
    right 14px center;
  background-color: white;
  background-size: 48px 48px; /* 원하는 너비와 높이로 설정하세요 */
`;

const InputBox = styled.div`
  width: 390px;
  margin: auto;
`;

const Input = styled.input`
  width: 261px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: #fff;
  margin-top: 20px;
  outline: none;
  padding-left: 22px;
`;

const Explain = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Participation = styled.button`
  position: relative;
  padding: 14px 33px 13px 33px;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: rgba(134, 228, 212, 0.25);

  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 70px;
`;

const TopBox2 = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
  margin-bottom: 5px;
`;
const ImgBox = styled.div`
  position: relative;
  left: -12.5px;
`;
const TopText = styled.div`
  position: relative;
  top: -98px;
  left: -3px;
`;

const RankNum = styled.div`
  position: absolute;
  color: #fff;
  margin-left: 42px;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RankUniv = styled.div`
  position: absolute;
  margin-left: 140px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RankPercent = styled.div`
  position: absolute;
  margin-left: 280px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Battle = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const checkRanking = () => {
    navigate(`/CompetDetail`);
  };

  return (
    <Container>
      <TopBar>
        <Back onClick={onClickBtn}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backbtn.png`}
            alt="back"
            width="24px"
          />
        </Back>
        <Title>단과 대항전</Title>
        <None></None>
      </TopBar>
      <BodyWrapper>
        <Body>
          <TopBox>
            <img
              src={`${process.env.PUBLIC_URL}/images/Union.png`}
              alt="back"
              width="197.451px"
              height="39.774px"
            />
            <TopTitle>현재 참여율 TOP 3 단과대</TopTitle>
          </TopBox>
          {/* <Rank>
            <Ranking1>
              <img
                src={`${process.env.PUBLIC_URL}/images/Group 83.png`}
                alt="back"
                width="313.942px"
              />
              <R1>1등</R1>
              <N1>단과대</N1>
              <Percent>00%</Percent>
            </Ranking1>
            <Ranking2>
              <img
                src={`${process.env.PUBLIC_URL}/images/Group 84.png`}
                width="300px"
              />
              <R2>2등</R2>
              <N2>단과대</N2>
              <Percent2>00%</Percent2>
            </Ranking2>
            <Ranking3>
              <img
                src={`${process.env.PUBLIC_URL}/images/Group 85.png`}
                width="300px"
              />
              <R2>3등</R2>
              <N2>단과대</N2>
              <Percent2>00%</Percent2>
            </Ranking3>
          </Rank> */}
          <div>
            <TopBox2>
              <ImgBox>
                <img src={`${process.env.PUBLIC_URL}/images/1stdept.svg`} />
              </ImgBox>
              <TopText>
                <RankNum>1등</RankNum>
                <RankUniv>단과대</RankUniv>
                <RankPercent>00%</RankPercent>
              </TopText>
            </TopBox2>
            <TopBox2>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/2nddept.svg`} />
              </div>
              <TopText>
                <RankNum>2등</RankNum>
                <RankUniv>단과대</RankUniv>
                <RankPercent>00%</RankPercent>
              </TopText>
            </TopBox2>
            <TopBox2>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/3rddept.svg`} />
              </div>
              <TopText>
                <RankNum>3등</RankNum>
                <RankUniv>단과대</RankUniv>
                <RankPercent>00%</RankPercent>
              </TopText>
            </TopBox2>
          </div>
          <Check onClick={checkRanking}>순위 확인하기</Check>
          <InputBox>
            <College>
              <option value="" disabled selected>
                단과대학을 선택하세요
              </option>
              <option value="0">인문대학</option>
              <option value="1">사회과학대학</option>
              <option value="2">자연정보과학대학</option>
              <option value="3">약학대학</option>
              <option value="4">예술대학</option>
              <option value="5">디자인대학</option>
              <option value="6">공연예술대학</option>
              <option value="7">문화지식융합대학</option>
              <option value="8">미래인재융합대학</option>
            </College>
            <Input type="text" placeholder="학번" id="number"></Input>
          </InputBox>
          <Explain>
            참여율로 순위가 집계되며 축제기간동안 1회 참여 가능합니다.
          </Explain>
          <Participation onClick={checkRanking}>참여하기</Participation>
        </Body>
      </BodyWrapper>
      <Footer>
        <Left>
          <img
            src={`${process.env.PUBLIC_URL}/images/footer-left.png`}
            width="55px"
            alt="footer"
          />
        </Left>
        <FooterContentWrapper>
          <Base>
            <img
              src={`${process.env.PUBLIC_URL}/images/footer-base.png`}
              width="100%"
              height="148px"
              alt="footer"
            />
          </Base>
          <FooterContent>
            <ManagementWrapper>
              <p className="bold">축제 총 기획</p>
              <p>동덕여대 축제 준비 위원회</p>
            </ManagementWrapper>
            <Line>
              <img
                src={`${process.env.PUBLIC_URL}/images/footer-line.png`}
                width="253px"
                alt="footer"
              />
            </Line>
            <FestivalWrapper>
              <p id="marginBottom">2023 동덕여자대학교 대동제</p>
              <p className="bold">동덕 uniVERSE</p>
            </FestivalWrapper>
            <Line>
              <img
                src={`${process.env.PUBLIC_URL}/images/footer-line.png`}
                width="253px"
                alt="footer"
              />
            </Line>
            <DevelopmentWrapper>
              <p className="bold">축제 웹사이트 제작</p>
              <p>동덕여대 멋쟁이사자처럼</p>
            </DevelopmentWrapper>
          </FooterContent>
        </FooterContentWrapper>
        <Right>
          <img
            src={`${process.env.PUBLIC_URL}/images/footer-right.png`}
            width="55px"
            alt="footer"
          />
        </Right>
      </Footer>
    </Container>
  );
};
export default Battle;
