import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 5px;
  box-sizing: border-box;
  align-items: center;
  padding-left: 12px;
`;
const Back = styled.div`
  cursor: pointer;
  position: absolute;
  left: 27px;
`;
const Toptitle = styled.div`
  color: #fff;
  cursor: pointer;
  margin: auto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 5px;
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
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
  flex: 0.6;
  padding: 4px;

  text-shadow: 0.3px 0.3px 0px #0a0047;
`;
const Index2 = styled.span`
  flex: 0.5;
  padding: 4px;
  width: 30px;

  text-shadow: 0.3px 0.3px 0px #0a0047;
`;
const Index3 = styled.span`
  flex: 0.6;
  padding: 3px;

  color: #f5e889;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const NameCode = styled.div`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InstagramBox = styled.div`
  position: absolute;
  left: 11%;

  top: 10%;
  width: 100%;
  height: 20px;
`;
const TopBox = styled.div`
  position: absolute;
  text-align: center;
  top: 12.4%;
  left: 15.4%;
  width: 70%;
  height: 21.6%;
`;
const LogoBox = styled.div`
  position: absolute;
  top: 0%;
  margin-bottom: 10px;
  width: 100%;
  height: 10%;

  display: flex; /* flex 컨테이너로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;
const AboutLion = styled.div`
  position: absolute;
  padding-top: 2%;
  top: 60%;
  left: -5%;
  width: 110%;
  height: 39%;

  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 10.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const FrontBox = styled.div`
  position: absolute;
  top: 39.9%;
  width: 100%;
  height: 16%;
`;
const BackBox = styled.div`
  position: absolute;
  top: 61.9%;
  width: 100%;
  height: 16%;
`;
const DesignBox = styled.div`
  position: absolute;
  padding-top: 6%;
  top: 83.1%;
  width: 100%;
  height: 11%;
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

const IntroLion = () => {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/");
  };

  const GoFestival = () => {
    // 버튼을 클릭할 때 페이지 이동을 수행합니다.
    navigate("/Festival");
  };
  const GoCommittee = () => {
    navigate("/Committee");
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
      <Topbar>
        <Back>
          <img
            src="/images/backbtn.png"
            width="24px"
            height="24px"
            onClick={() => GoBack()}
          />
        </Back>
        <Toptitle>소개</Toptitle>
      </Topbar>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <BodyWrapper>
          <div style={{ margin: "0px auto", position: "relative" }}>
            <TopIndex>
              <Index1 onClick={GoFestival}>축제</Index1>
              <Index2 onClick={GoCommittee}>축.운.위</Index2>
              <Index3>멋사 11기</Index3>
            </TopIndex>

            <NameCode
              style={{
                top: "4.7%", //absolute 쓸거면 top은 %로
                position: "absolute",
                left: "18%",
                // transform: "translateX(-30%)",
              }}
            >
              멋쟁이사자처럼 동덕여대 11기
            </NameCode>

            <InstagramBox>
              <span style={instagramText}>instagram</span>
              <a
                style={linkStyle}
                href="https://instagram.com/dongduk_likelion?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                @dongduk_likelion
              </a>
            </InstagramBox>

            <TopBox>
              <LogoBox>
                <img
                  src="/images/lionLogo.png"
                  width="44%"
                  style={{ marginRight: "2%" }}
                />
                <img
                  src="/images/dongLogo.png"
                  width="9%"
                />
              </LogoBox>
              <img
                src="/images/we.png"
                width="73%"
                style={{ marginTop: "13%" }}
              />
              <AboutLion>
                연합 동아리 <span style={TextStrongStyle}>멋쟁이 사자처럼</span>
                은 현재 국내에서
                <br /> 가장 많은 학생들이 활동하고 있는
                <br /> 프로그래밍 교육 동아리입니다.
                <br /> 전국의 대학이 함께하는 연합 코딩 동아리로
                <br /> 각종 스터디를 통해 여러 아이디어의 실현에 도전합니다.
                <br /> <strong>"내 아이디어를 내 손으로 실현한다."</strong>
                라는 가치 아래
                <br />
                창업과 서비스 개발 등 아이디어를 내 손으로 실현할 수 있는
                <br /> 다양한 교육과 기회를 제공합니다.
              </AboutLion>
            </TopBox>

            <FrontBox>
              <img
                src="/images/Front.png"
                width="57%"
              />
            </FrontBox>
            <BackBox>
              <img
                src="/images/back.png"
                width="44%"
              />
            </BackBox>
            <DesignBox>
              <img
                src="/images/Design.png"
                width="44%"
              />
            </DesignBox>

            <img
              src="/images/FrameLion.png"
              style={{ maxWidth: "88%", height: "auto" }}
            />
          </div>
        </BodyWrapper>
      </motion.div>
      <Footer>
        <Left>
          <img
            src="/images/footer-left.png"
            width="55px"
            alt="footer"
          />
        </Left>
        <FooterContentWrapper>
          <Base>
            <img
              src="/images/footer-base.png"
              width="100%"
              height="148px"
              alt="footer"
            />
          </Base>
          <FooterContent>
            <ManagementWrapper>
              <p className="bold">축제 총 기획</p>
              <p>동덕여대 축제 운영 위원회</p>
            </ManagementWrapper>
            <Line>
              <img
                src="/images/footer-line.png"
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
                src="/images/footer-line.png"
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
            src="/images/footer-right.png"
            width="55px"
            alt="footer"
          />
        </Right>
      </Footer>
    </Container>
  );
};

export default IntroLion;
