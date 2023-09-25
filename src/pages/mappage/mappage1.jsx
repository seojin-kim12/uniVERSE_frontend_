import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
position: relative;
text-align: center;\
background-color: #000204;

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
  height: 100%;
  padding: 0 5.5%;
`;
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
const Map = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Center vertically */
  align-items: center; /* Center horizontally */
  margin-top: 60px;
  padding-bottom: 30%;
`;
const Mapframe = styled.div`
  position: absolute;
  margin-top: -29px;
`;
const Boothdetail_button = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column; /* 수직 중앙 정렬 */
  cursor: pointer;
  padding-bottom: 40%;
`;

const Boothdetail_ment = styled.div`
  position: absolute;
  color: #4fdfff;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  top: 50%; /* 부스 버튼의 중앙에서 위로 50% 이동 */
  transform: translateY(-50%); /* 위로 이동해서 수직 중앙 정렬 */
  padding-bottom: 40%;
`;

const Footer = styled.div`
  height: 150px;
  position: relative;
  border: none;
  margin: 0;
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

const Mappage1 = () => {
  const navigate = useNavigate();
  const goDeatil = () => {
    navigate("/BoothSearch");
  };
  return (
    // 다른 페이지로 자연스럽게 넘어가기 위해 추가함
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Body>
            <Topbar>
              <Back>
                <img
                  src={`${process.env.PUBLIC_URL}/images/backbtn.png`}
                  width="24px"
                  height="24px"
                  onClick={() => navigate(-1)}
                />
              </Back>
              <Toptitle>부스 배치도</Toptitle>
            </Topbar>
            <Map>
              <img
                src={`${process.env.PUBLIC_URL}/images/map_temp.png`}
                width="280px"
                height="280px"
                alt="map"
              />
              <Mapframe>
                <img
                  src={`${process.env.PUBLIC_URL}/images/map_mappage1.png`}
                  width="337px"
                  height="338.5px"
                  alt="map"
                />
              </Mapframe>
            </Map>
            <Boothdetail_button>
              <img
                src={`${process.env.PUBLIC_URL}/images/boothdetail_go_button.png`}
                width="337px"
                height="62px"
                alt="boothdetail_button"
                onClick={goDeatil}
              />
              <Boothdetail_ment onClick={goDeatil}>
                부스 보러가기
              </Boothdetail_ment>
            </Boothdetail_button>
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
    </motion.div>
  );
};
export default Mappage1;