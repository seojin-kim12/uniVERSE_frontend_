import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  // background-color: black;
  // 추가
  background-image: url("${process.env.PUBLIC_URL}/images/competbg.svg");
  background-size: cover;
  background-position: center;

  -ms-overflow-style: none;
  scrollbar-width: none;

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

// 추가
const PageTitle = styled.div`
  position: relative;
  margin: auto;
  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BackBtn = styled.div`
  position: absolute;
  left: 5%;
  top: 30%;
`;
const TitleBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: center;
`;
const TitleBarText = styled.div`
  position: absolute;
  margin-top: 15px;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
const RankNum2 = styled.div`
  position: absolute;
  color: #fff;
  margin-left: 30px;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RankUniv2 = styled.div`
  position: absolute;
  margin-left: 110px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RankPercent2 = styled.div`
  position: absolute;
  margin-left: 280px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Box = styled.div`
  position: relative;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 39px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const TopBox = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
  margin-bottom: 5px;
`;
const RankBox = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
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
const RankText = styled.div`
  position: relative;
  top: -47px;
`;
const BoxList = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 40px;
`;

const CompetDetail = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`); // 임시 설정
  };

  return (
    <Container>
      <BodyWrapper>
        <Body>
          <Box>
            <BackBtn onClick={goBack}>
              <img
                src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
                width="25px"
                alt="titlebar"
              />
            </BackBtn>
            <PageTitle>단과 대항전</PageTitle>
          </Box>
          <TitleBar>
            <img
              src={`${process.env.PUBLIC_URL}/images/titlebar.svg`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "60px",
              }}
              alt="titlebar"
            />
            <TitleBarText>현재 참여율 TOP3 단과대</TitleBarText>
          </TitleBar>
          <div>
            <TopBox>
              <ImgBox>
                <img src={`${process.env.PUBLIC_URL}/images/1stdept.svg`} />
              </ImgBox>
              <TopText>
                <RankNum>1등</RankNum>
                <RankUniv>단과대</RankUniv>
                <RankPercent>00%</RankPercent>
              </TopText>
            </TopBox>
            <TopBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/2nddept.svg`} />
              </div>
              <TopText>
                <RankNum>2등</RankNum>
                <RankUniv>단과대</RankUniv>
                <RankPercent>00%</RankPercent>
              </TopText>
            </TopBox>
            <TopBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/3rddept.svg`} />
              </div>
              <TopText>
                <RankNum>3등</RankNum>
                <RankUniv>단과대</RankUniv>
                <RankPercent>00%</RankPercent>
              </TopText>
            </TopBox>
          </div>
          <br />
          <BoxList>
            <RankBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/littlebox.svg`} />
              </div>
              <RankText>
                <RankNum2>4등</RankNum2>
                <RankUniv2>단과대</RankUniv2>
                <RankPercent2>00%</RankPercent2>
              </RankText>
            </RankBox>
            <RankBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/littlebox.svg`} />
              </div>
              <RankText>
                <RankNum2>5등</RankNum2>
                <RankUniv2>단과대</RankUniv2>
                <RankPercent2>00%</RankPercent2>
              </RankText>
            </RankBox>
            <RankBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/littlebox.svg`} />
              </div>
              <RankText>
                <RankNum2>6등</RankNum2>
                <RankUniv2>단과대</RankUniv2>
                <RankPercent2>00%</RankPercent2>
              </RankText>
            </RankBox>
            <RankBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/littlebox.svg`} />
              </div>
              <RankText>
                <RankNum2>7등</RankNum2>
                <RankUniv2>단과대</RankUniv2>
                <RankPercent2>00%</RankPercent2>
              </RankText>
            </RankBox>
            <RankBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/littlebox.svg`} />
              </div>
              <RankText>
                <RankNum2>8등</RankNum2>
                <RankUniv2>단과대</RankUniv2>
                <RankPercent2>00%</RankPercent2>
              </RankText>
            </RankBox>
            <RankBox>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/littlebox.svg`} />
              </div>
              <RankText>
                <RankNum2>9등</RankNum2>
                <RankUniv2>단과대</RankUniv2>
                <RankPercent2>00%</RankPercent2>
              </RankText>
            </RankBox>
          </BoxList>
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
export default CompetDetail;
