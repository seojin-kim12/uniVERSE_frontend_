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

const TopContainer = styled.div`
  margin: 0px auto;
  /*기본스타일*/
  width: 100%;
  height: 80px;
`;
const GoBack = styled.img`
  width: 7%;
  margin-left: -84%;
  margin-top: 5%;
`;
const TopText = styled.div`
  width: 60px;
  height: 40px;
  margin-left: 43%;
  margin-top: -9%;

  color: #fff;
  font-family: SUIT;
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
  padding-top: 18px;
`;

const Img = styled.img``;
const ImgPost = styled.div`
  position: absolute;
  top: 15%;
  margin-left: -20px;
`;
const ImgPostText = styled.div`
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const S1 = styled.span`
  color: #f5e889;
  font-family: SUIT;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-shadow: 0.1px 0.1px 0px #f5e889;
`;

const S2 = styled.span`
  color: #fff;
  font-family: SUIT;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-shadow: 0.1px 0.1px 0px #fff;
`;
const BodyTop1 = styled.div`
  position: absolute;
  margin: 0px auto;
  top: 5.25%;
  display: flex;

  width: 100%;
  height: 28px;
`;

const P1 = styled.p`
  position: absolute;
  top: -33%;
  left: 6%;
  width: 55px;

  color: #0a0047;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-shadow: 0.3px 0.1px 0 #0a0047;
`;

const P2 = styled.p`
  position: absolute;
  top: -33%;
  left: 36.6%;
  width: 70px;

  color: #0a0047;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  text-shadow: 0.3px 0.1px 0 #0a0047;
`;

const Body = styled.div`
  width: 90%;
  margin: 0px auto;
`;
const BodyMainTitle = styled.div`
  position: absolute;

  margin-left: 71%;
  margin-top: 1.5%;

  color: #f5e889;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BodyNameCode = styled.div`
  position: absolute;
  margin: 0px auto;

  top: 9.4%;
  left: 14%;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BodyInstagram = styled.div`
  position: absolute;
  margin: 0px auto;
  display: flex;
  top: 13.6%;

  padding: 2%;
  padding-left: 35%;
  width: 100%;
`;

const Front = styled.div`
  margin: 0px auto;
  position: absolute;
  top: 674px;
  left: 25%;
`;
const Back = styled.div`
  margin: 0px auto;
  position: absolute;
  top: 1030px;
  left: 30%;
`;

const Design = styled.div`
  position: absolute;
  margin: 0px auto;
  top: 1370px;
  left: 31%;
`;

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

  const GoFestival = () => {
    // 버튼을 클릭할 때 페이지 이동을 수행합니다.
    navigate("/Festival");
  };
  const GoCommittee = () => {
    navigate("/Committee");
  };

  const imageStyle = {
    marginRight: "1.5%",
    marginLeft: "10px;",
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
        <Body>
          <BodyTop1>
            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/Rectangle-first.png`}
              width="29%"
              height="26px"
              style={imageStyle}
              alt="body-top-middle"
              onClick={GoFestival}
            />
            <P1 onClick={GoFestival}>축제</P1>

            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/Rectangle-middle.png`}
              width="30%"
              height="26px"
              alt="body-top-end"
              onClick={GoCommittee}
            />
            <P2 onClick={GoCommittee}>축.운.위</P2>
          </BodyTop1>
          <BodyMainTitle>멋사 11기</BodyMainTitle>

          <BodyNameCode>멋쟁이사자처럼 동덕여대 11기</BodyNameCode>
          <BodyInstagram>
            <span style={instagramText}>instagram</span>
            <a
              href="https://instagram.com/dongduk_likelion?igshid=MzRlODBiNWFlZA=="
              style={linkStyle}
            >
              @dongduk_likelion
            </a>
          </BodyInstagram>

          <ImgPost>
            <div
              style={{
                height: "38px",
                paddingTop: "3px",
                marginBottom: "5px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  paddingTop: "12px",
                  marginLeft: "-18%",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/intro-images/lionLogo.png`}
                  width="110px"
                />
              </span>
              <span
                style={{
                  paddingTop: "9px",
                  position: "absolute",
                  marginLeft: "12.3%",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/intro-images/dongLogo.png`}
                  width="27px"
                />
              </span>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/we.png`}
              width="58%"
            />

            <ImgPostText>
              <span>연합 동아리 </span>
              <S1>멋쟁이 사자처럼</S1>
              <span>
                은 현재 국내에서
                <br />
              </span>
              가장 많은 학생들이 활동하고 있는
              <br /> 프로그래밍 교육 동아리입니다.
              <br />
              전국의 대학이 함께하는 연합 코딩 동아리로
              <br /> 각종 스터디를 통해 여러 아이디어의 실현에 도전합니다.
              <br /> <S2>“내 아이디어를 내 손으로 실현한다.”</S2>
              라는 가치 아래
              <br /> 창업과 서비스 개발 등 아이디어를 내 손으로 실현할 수 있는
              <br /> 다양한 교육과 기회를 제공합니다.
            </ImgPostText>
          </ImgPost>

          <Front>
            <p>
              <Img
                src={`${process.env.PUBLIC_URL}/images/intro-images/Line1.png`}
                height="64px"
                alt="첫줄"
              />
            </p>
            <p>
              <Img
                src={`${process.env.PUBLIC_URL}/images/intro-images/Line2.png`}
                height="64px"
                alt="2"
              />
            </p>
            <Img
              src={`${process.env.PUBLIC_URL}/images/intro-images/Line3.png`}
              height="64px"
              alt="3"
            />
          </Front>
          <Back>
            <Img
              src={`${process.env.PUBLIC_URL}/images/intro-images/Back.png`}
              height="212px"
              alt="back"
            />
          </Back>
          <Design>
            <Img
              src={`${process.env.PUBLIC_URL}/images/intro-images/Design.png`}
              height="140px"
              alt="디자인"
            />
          </Design>

          <Img
            src={`${process.env.PUBLIC_URL}/images/intro-images/Frame-lion.png`}
            width="100%"
            alt="프레임이미지"
          />
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

export default IntroLion;
