import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
  text-align: center;
  background: var(--purple-4, #0a0047);
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
// 상단
const TopContainer = styled.div`
  margin-top: 6px;
  /*기본스타일*/
  width: 100%;
  height: 60px;
`;
const GoBack = styled.img`
  position: relative;
  width: 25px;
  top: 10px;
  left: -37%;
`;
const TopText = styled.span`
design: flex
  margin: 0px auto;
  width: 60px;
  height: 40px;
  top: 2px;
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
  padding-top: 18px;
`;

const TopIndex = styled.div`
  position: absolute;
  margin-left: 3%;
  left: -2.8%;
  width: 100%;
  height: 40px;
  display: flex;

  color: #0a0047;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Index1 = styled.span`
  flex: 0.8;
  padding: 4px;
  color: #f5e889;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Index2 = styled.span`
  flex: 0.6;
  padding: 4px;

  text-shadow: 0.3px 0.3px 0px #0a0047;
`;
const Index3 = styled.span`
  flex: 0.8;
  padding: 3px;
  text-shadow: 0.3px 0.3px 0px #0a0047;
`;
const NameCode = styled.div`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InstagramBox = styled.div`
  position: absolute;
  left: 11%;

  top: 17.6%;
  width: 100%;
  height: 20px;
`;
const TopBox = styled.div`
  position: absolute;
  text-align: center;
  top: 16.4%;
  left: 3%;
  width: 94%;
  height: 21.6%;
`;

const ContentBox = styled.div`
  position: absolute;
  top: 66.9%;
  left: 8.4%;
  width: 83%;
  height: 30%;

  color: #fff;
  font-family: SUIT;
  font-size: 10.3px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const P1 = styled.p`
  color: #f5e889;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const P2 = styled.p`
  color: #f5e889;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

//하단
const Footer = styled.div`
  margin-top: 20px;
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

const IntroFestival = () => {
  const navigate = useNavigate();

  const GoCommittee = () => {
    navigate("/Committee");
  };
  const GoLion = () => {
    navigate("/");
  };

  const TextStrongStyle = {
    color: "#F5E889",
    fontFamily: "SUIT",
    fontSize: "11px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };

  const instagramText = {
    marginRight: "10px",
    color: "#F5E889",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };

  const linkStyle = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <Container>
      <TopContainer>
        <GoBack
          src={`${process.env.PUBLIC_URL}/images/top-backBtn.png`}
        ></GoBack>
        <TopText>소개</TopText>
      </TopContainer>

      <BodyWrapper>
        <div style={{ margin: "0px auto", position: "relative" }}>
          <TopIndex>
            <Index1>축제</Index1>
            <Index2 onClick={GoCommittee}>축.운.위</Index2>
            <Index3 onClick={GoLion}>멋사 11기</Index3>
          </TopIndex>

          <NameCode
            style={{
              top: "7.7%", //absolute 쓸거면 top은 %로
              position: "absolute",
              left: "18%",
              // transform: "translateX(-30%)",
            }}
          >
            동덕 uniVERSE
          </NameCode>

          <InstagramBox>
            <span style={instagramText}>instagram</span>
            <a
              style={linkStyle}
              href="https://instagram.com/ddwu.festival2023?igshid=MzRlODBiNWFlZA=="
            >
              @ddwu.festival2023
            </a>
          </InstagramBox>

          <TopBox>
            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/FestivalImage/post.png`}
              width="73%"
              style={{ marginTop: "13%" }}
            />
          </TopBox>

          <ContentBox>
            <P1>“메이데이, 메이데이. 들리면 응답 바란다.”</P1>
            <p>
              {" "}
              잠을 깨우는 낯선 이의 무전 소리.
              <br />
              다급한 목소리에 두 눈을 떠보니 보이는 건,
              <br /> 어딘가 묘한 기시감을 풍기는 학교의 모습이었다.
              <br /> 똑같은 학교의 건물들과 풍경. 하지만 이유모를 낯선 이 느낌.
              <br /> 분명, 우리 학교이지만 낯선 이 곳.
              <br /> 혹시 영화 속에서만 보던 또 다른 시공간인 멀티버스는
              아닐까…?
            </p>
            <P2>
              그 순간, 밤이 찾아오고 이전엔 볼 수 없었던
              <br /> 화려한 우주 사이로 빨려 들어가게 되는데…!{" "}
            </P2>
            <p>
              우리가 만난다는 것은 너의 우주와 나의 우주가 맞닿아 있음을 뜻한다.
              <br />
              우리는 얼마나 많은 우주들을 공유하고 확장하며 살아가고 있는가.
            </p>
            <P2>
              우주, 만남, 확장, 또다른 세상(멀티버스)
              <br />
              UNIVERSE, ENCOUNTER, EXPANSION, MULTIVERSE
            </P2>
          </ContentBox>

          <img
            src={`${process.env.PUBLIC_URL}/images/intro-images/Frame-festival (2).png`}
            style={{ maxWidth: "88%", height: "auto" }}
          />
        </div>
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

export default IntroFestival;
