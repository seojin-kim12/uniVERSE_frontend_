import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: black;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;
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
  min-height: calc(100vh - 150px); //푸터 공간 확보
`;

const Body = styled.div`
  align-items: center;
`;
const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 86px;
  align-items: center;
  padding-left: 12px;
`;
const Back = styled.div`
  cursor: pointer;
  position: absolute;
  left: 27px;
`;
const Boothimg = styled.div`
  margin: auto 0;
  padding-bottom: 20px;
`;
const Boothinfo = styled.div`
  margin-left: -0px;
`;
const Boothname = styled.div`
  width: 330px;
  height: 34.614px;
  flex-shrink: 0;
  color: #4fdfff;
  font-family: SUIT;
  font-size: 27.089px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 15px;
  text-align: left;
`;

const Intro = styled.div`
  width: 330px;
  height: 100px;
  flex-shrink: 0;
  color: #fff;
  font-family: SUIT;
  font-size: 18.059px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;
const Detail_detail = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;
const Time = styled.div`
  width: 310px;
  height: 34.614px;
  flex-shrink: 0;
  color: #fff;
  font-family: SUIT;
  font-size: 18.059px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  display: flex;
`;
const Time_detail = styled.div`
  width: 210px;
  height: 22px;
  flex-shrink: 0;
  color: #4fdfff;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
  margin-top: -2px;
`;
const Place = styled.div`
  width: 310px;
  height: 34.614px;
  flex-shrink: 0;
  color: #fff;
  font-family: SUIT;
  font-size: 18.059px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  display: flex;
`;
const Place_detail = styled.div`
  width: 310px;
  height: 34px;
  flex-shrink: 0;
  color: #4fdfff;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
  margin-top: -2px;
`;
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

const Mappage3 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BodyWrapper>
        <Body>
          <Topbar>
            <Back>
              <img
                src={`${process.env.PUBLIC_URL}/images/back.png`}
                width="24px"
                height="24px"
                onClick={() => navigate(-1)}
              />
            </Back>
          </Topbar>
          <Boothimg>
            <img
              src={`${process.env.PUBLIC_URL}/images/boothimg_temp.png`}
              width="320px"
              height="320px"
              alt="boothimg"
            />
          </Boothimg>
          <Boothinfo>
            <Boothname>부스 이름</Boothname>
            <Intro>한줄소개</Intro>
            <Detail_detail>
              <Time>
                <img
                  src={`${process.env.PUBLIC_URL}/images/timeicon.png`}
                  width="14px"
                  height="17px"
                  alt="timeicon"
                />
                <Time_detail>1232154678</Time_detail>
              </Time>
              <Place>
                <img
                  src={`${process.env.PUBLIC_URL}/images/placeicon.png`}
                  width="13.993px"
                  height="17px"
                  alt="placeicon"
                />
                <Place_detail>숭인관에서 함</Place_detail>
              </Place>
            </Detail_detail>
          </Boothinfo>
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
export default Mappage3;
