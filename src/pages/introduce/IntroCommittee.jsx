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
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
  padding-top: 18px;
`;

const Img = styled.img``;
const ImgPost = styled.div`
  position: absolute;
  margin: 0px auto;
  top: 28%;
  margin-left: -20px;
`;
const BodyTop1 = styled.div`
  position: absolute;
  margin: 0px auto;
  display: flex;

  width: 100%;
  height: 28px;
  margin-top: -0.6%;

  /*아이폰SE 기준*/
  @media (max-width: 376px) {
    margin-top: -1%;
  }
`;

const P1 = styled.p`
  position: absolute;
  top: -33%;
  left: 7%;
  width: 55px;

  color: #0a0047;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-shadow: 0.3px 0.1px 0 #0a0047;

  @media (max-width: 376px) {
    left: 6.6%;
  }
`;

const P2 = styled.p`
  position: absolute;
  top: -33%;
  left: 67.8%;
  width: 70px;

  color: #0a0047;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  text-shadow: 0.3px 0.1px 0 #0a0047;

  @media (max-width: 376px) {
    left: 67.5%;
  }
`;

const Body = styled.div`
  width: 90%;
  margin: 0px auto;
`;
const BodyMainTitle = styled.div`
  position: absolute;
  margin: 0px auto;
  left: 45%;
  top: 8.6%;

  color: #f5e889;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BodyNameCode = styled.div`
  position: absolute;

  top: 14.3%;
  left: 13.3%;
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
  top: 54%;
  left: 3.3%;
  padding-top: 5%;
  width: 93%;
  height: 23%;

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    top: 54%;
  }
`;

const C1 = styled.span`
  color: #f5e889;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  /*아이폰SE 이하 기준*/
  @media (max-width: 376px) {
    font-size: 12px;
  }
`;
const C2 = styled.span`
  color: #fff;
  font-family: SUIT;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 10.3px;
  }
`;
const C3 = styled.p`
  color: #fff;
  font-family: SUIT;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 10.3px;
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

const IntroCommittee = () => {
  const navigate = useNavigate();

  const GoFestival = () => {
    // 버튼을 클릭할 때 페이지 이동을 수행합니다.
    navigate("/Festival");
  };
  const GoLion = () => {
    // 버튼을 클릭할 때 페이지 이동을 수행합니다.
    navigate("/");
  };

  const imageStyle = {
    marginRight: "32%",
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
              src={`${process.env.PUBLIC_URL}/images/intro-images/Rectangle-end.png`}
              width="29%"
              height="26px"
              alt="body-top-end"
              onClick={GoLion}
            />
            <P2 onClick={GoLion}>멋사 11기</P2>
          </BodyTop1>
          <BodyMainTitle>축.운.위</BodyMainTitle>

          <BodyNameCode>동덕여자대학교 축제운영위원회</BodyNameCode>
          <BodyInstagram>
            <span style={instagramText}>instagram</span>
            <a
              href="https://instagram.com/ddwu.festival2023?igshid=MzRlODBiNWFlZA=="
              style={linkStyle}
            >
              @ddwu.festival2023
            </a>
          </BodyInstagram>

          <ImgPost>
            <img
              src={`${process.env.PUBLIC_URL}/images/intro-images/CommitLogo.png`}
              width="70%"
            />
          </ImgPost>
          <Img
            src={`${process.env.PUBLIC_URL}/images/intro-images/Frame-committee.png`}
            width="100%"
            alt="body-top-first"
          />

          <BodyContent>
            <C1>축제운영위원회</C1>
            <C2>는</C2>
            <C3>
              전 재학생을 위해 대동제를 비롯한 문화사업 운영 업무를 총괄하는
              <br />
              특별기구입니다.
              <C3>
                축제운영위원회는{" "}
                <strong>
                  위원장단, 기획국, 무대국, 사무국, 행사국, 홍보국
                </strong>
                <br />
                으로 이루어져 있으며,
                <br /> <strong>37명의 구성원</strong>이 3기 국원으로 활동하고
                있습니다.
              </C3>
              <C3>
                올해부터는 대동제 뿐만 아니라 매월 ‘오솜도솜데이’라는
                <br /> 월간 문화 사업을 진행하고 있습니다.
                <br />
                <strong>‘오솜도솜데이’</strong>는 학우들에게 다양한 문화와
                관련된 즐길거리를
                <br />
                제공하고 있습니다.
                <br /> 지난 4월 오솜도솜데이에서는 학우들의 폴라로이드 사진을
                찍어주고
                <br /> 직접 스티커로 꾸미는 ‘솜라로이드 러브’ 행사를 진행하였고,
                <br /> 5월 오솜도솜데이에서는 다가오는 더위를 맞아
                <br /> 퀴즈를 맞히는 학우들에게 시원한 슬러시를 배부하는
                ‘동동매점’ 행사를
                <br />
                진행하였습니다.
              </C3>
              <br /> 또한 3기에서는 영상팀이 신설되어 축운위의 행사 진행 모습이
              <br /> 생생하게 담긴 VLOG 영상도 공개 예정이니 많은 관심
              부탁드립니다!
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

export default IntroCommittee;
