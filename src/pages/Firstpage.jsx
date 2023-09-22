import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-image: url(${process.env.PUBLIC_URL}/images/main_back.svg);
  background-size: cover;
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
  min-height: calc(100vh - 151px); //푸터 공간 확보
`;

const Body = styled.div`
  .scrollbox {
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
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

const Firstpage = () => {
  return (
    <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Body></Body>
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
export default Firstpage;
