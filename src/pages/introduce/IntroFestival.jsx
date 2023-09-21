import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
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
  /*기본스타일*/
  margin: 0px auto;
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

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    font-size: 22px;
  }
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
  padding-top: 18px;
`;

const Img = styled.img``;
const ImgPost = styled.div`
  margin: 0px auto;
  position: absolute;
  margin-left: -4.4%;
  top: 25.3%;
`;
const BodyTop1 = styled.div`
  position: absolute;
  display: flex;
  margin: 0px auto;
  padding-left: 33%;
  padding-right: 5%;
  margin-top: -0.6%;
`;

const P1 = styled.p`
  position: absolute;
  top: -33%;
  left: 41%;
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
  left: 73%;
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
  margin: 0px auto;
  width: 90%;
  margin: 0px auto;
`;
const BodyMainTitle = styled.div`
  position: absolute;

  margin-left: 9.7%;
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

  top: 14.3%;
  left: 16%;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    font-size: 19px;
    top: 13.9%;
  }
`;

const BodyInstagram = styled.div`
  position: absolute;
  margin: 0px auto;
  display: flex;
  top: 21.3%;

  padding: 2%;
  padding-left: 35%;
  width: 100%;

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    top: 21%;
    padding-left: 33.2%;
  }
`;

const BodyContent = styled.div`
  position: absolute;
  margin: 0px auto;
  top: 60%;
  left: 3.3%;
  padding-top: 5%;
  width: 93%;
  height: 23%;

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    top: 58.8%;
  }
`;

const C1 = styled.p`
  color: #f5e889;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    font-size: 13px;
  }
`;
const C2 = styled.p`
  color: #fff;
  font-family: SUIT;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 10.5px;
  }
`;
const C3 = styled.p`
  color: #f5e889;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 12px;
  }
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

const IntroFestival = () => {
  const navigate = useNavigate();

  const GoCommittee = () => {
    // 버튼을 클릭할 때 페이지 이동을 수행합니다.
    navigate("/Committee");
  };
  const GoLion = () => {
    // 버튼을 클릭할 때 페이지 이동을 수행합니다.
    navigate("/");
  };

  const imageStyle = {
    marginRight: "13px",
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
              src={`${process.env.PUBLIC_URL}/images/intro-images/Rectangle-middle.png`}
              width="47%"
              height="26px"
              style={imageStyle}
              alt="body-top-middle"
              onClick={GoCommittee}
            />
            <P1 onClick={GoCommittee}>축.운.위</P1>

            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/Rectangle-end.png`}
              width="47%"
              height="26px"
              style={imageStyle}
              alt="body-top-end"
              onClick={GoLion}
            />
            <P2 onClick={GoLion}>멋사 11기</P2>
          </BodyTop1>
          <BodyMainTitle>축제</BodyMainTitle>

          <BodyNameCode>동덕 uniVERSE</BodyNameCode>
          <BodyInstagram>
            <span style={instagramText}>instagram</span>
            <a
              href="https://www.instagram.com/ddwu.festival2023/?igshid=MzRlODBiNWFlZA%3D%3D"
              style={linkStyle}
            >
              @ddwu.festival2023
            </a>
          </BodyInstagram>

          <ImgPost>
            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/post.png`}
              width="70%"
            />
          </ImgPost>
          <Img
            src={`${process.env.PUBLIC_URL}/images/intro-images/Frame-festival.png`}
            width="100%"
            alt="body-top-first"
          />

          <BodyContent>
            <C1>“메이데이, 메이데이. 들리면 응답 바란다.”</C1>
            <C2>
              잠을 깨우는 낯선 이의 무전 소리.
              <br />
              다급한 목소리에 두 눈을 떠보니 보이는 건,
              <br />
              어딘가 묘한 기시감을 풍기는 학교의 모습이었다.
              <br /> 똑같은 학교의 건물들과 풍경. 하지만 이유모를 낯선 이 느낌.
              <br /> 분명, 우리 학교이지만 낯선 이 곳. 
              <br /> 혹시 영화 속에서만 보던 또 다른 시공간인 멀티버스는
              아닐까…?
            </C2>
            <C3>
              그 순간, 밤이 찾아오고 이전엔 볼 수 없었던
              <br /> 화려한 우주 사이로 빨려 들어가게 되는데…!
            </C3>
            <C2>
              우리가 만난다는 것은 너의 우주와 나의 우주가 맞닿아 있음을 뜻한다.
              <br />
              우리는 얼마나 많은 우주들을 공유하고 확장하며 살아가고 있는가.
            </C2>
            <C3>
              우주, 만남, 확장, 또다른 세상(멀티버스) UNIVERSE,
              <br /> ENCOUNTER, EXPANSION, MULTIVERSE
            </C3>
          </BodyContent>
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

export default IntroFestival;
