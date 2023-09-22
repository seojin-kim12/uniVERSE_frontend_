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
`;
const Index2 = styled.span`
  flex: 0.6;
  padding: 4px;

  color: #f5e889;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

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
  font-size: 18.5px;
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
  top: 61.9%;
  left: 6.2%;
  width: 87%;
  height: 30%;

  color: #fff;
  font-family: SUIT;
  font-size: 10.3px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const C1 = styled.span`
  color: #f5e889;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const C2 = styled.span``;
const C3 = styled.p``;

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
        <div style={{ margin: "0px auto", position: "relative" }}>
          <TopIndex>
            <Index1 onClick={GoFestival}>축제</Index1>
            <Index2>축.운.위</Index2>
            <Index3 onClick={GoLion}>멋사 11기</Index3>
          </TopIndex>

          <NameCode
            style={{
              top: "7.7%", //absolute 쓸거면 top은 %로
              position: "absolute",
              left: "14%",
              // transform: "translateX(-30%)",
            }}
          >
            동덕여자대학교 축제운영위원회
          </NameCode>

          <InstagramBox>
            <span style={instagramText}>instagram</span>
            <a
              style={linkStyle}
              href="https://instagram.com/ddwu.festival2023?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              @ddwu.festival2023
            </a>
          </InstagramBox>

          <TopBox>
            <img
              src={`${process.env.PUBLIC_URL}/images/CommitLogo.png`}
              width="73%"
              style={{ marginTop: "22%" }}
            />
          </TopBox>

          <ContentBox>
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
          </ContentBox>

          <img
            src={`${process.env.PUBLIC_URL}/images/FrameCommittee.png`}
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

export default IntroCommittee;
