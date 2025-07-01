import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
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
  min-height: calc(100vh - 151px); //푸터 공간 확보
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

const Body = styled.div`
  height: 100%;
  padding: 0 5.5%;
`;
const SearchWrapper = styled.div`
  width: 315px;
  height: 30px;
  border: 1px solid #4fdfff;
  background: #152e46;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

const Search = styled.input`
  height: 30px;
  width: 76%;
  padding-left: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #4fdfff;
  font-size: 14px;
  &::placeholder {
    color: #4fdfff;
    font-size: 13px;
    font-weight: 400;
  }
  &:focus {
    border: none;
    outline: none;
    font-weight: 700;
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0 8px;
`;
const DateWrapper = styled.div`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  height: 30px;
`;
const Four = styled.div``;
const Five = styled.div``;
const Six = styled.div``;
const ContentBox = styled.div`
  margin-top: 35px;
  margin-bottom: 19px;
  color: #4fdfff;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 17px;
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

const BoothSearchFail = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };

  const [clickedElement, setClickedElement] = useState(null);

  const handleElementClick = (element) => {
    setClickedElement(element);
  };
  useEffect(() => {
    setClickedElement("four");
  }, []);

  const getBorderStyle = (element) => ({
    color: "#FFF",
    fontSize: "18px",
    fontWeight: clickedElement === element ? "700" : "400", // 클릭한 요소에만 bolder 스타일 적용
    cursor: "pointer",
  });

  return (
    // 다른 페이지로 자연스럽게 넘어가기 위해 추가함
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Topbar>
            <Back>
              <img
                src="/images/backbtn.png"
                width="24px"
                height="24px"
                onClick={() => navigateToBack()}
              />
            </Back>
            <Toptitle>부스 배치도</Toptitle>
          </Topbar>
          <Body>
            <SearchWrapper>
              <Search placeholder="부스 이름을 검색하세요." />
              <SearchButton>
                <img
                  src="/images/search-button.png"
                  width="17px"
                  height="17px"
                />
              </SearchButton>
            </SearchWrapper>
            <ContentWrapper>
              <DateWrapper>
                <Four
                  style={getBorderStyle("four")}
                  onClick={() => handleElementClick("four")}
                >
                  04/WED
                </Four>
                <Five
                  style={getBorderStyle("five")}
                  onClick={() => handleElementClick("five")}
                >
                  05/THU
                </Five>
                <Six
                  style={getBorderStyle("six")}
                  onClick={() => handleElementClick("six")}
                >
                  09/FRI
                </Six>
              </DateWrapper>
              <Line>
                <img
                  src="/images/footer-line.png"
                  width="100%"
                  height="1px"
                  alt="footer"
                />
              </Line>
              <ContentBox>검색 결과가 없습니다.</ContentBox>
            </ContentWrapper>
          </Body>
        </BodyWrapper>
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
    </motion.div>
  );
};
export default BoothSearchFail;
