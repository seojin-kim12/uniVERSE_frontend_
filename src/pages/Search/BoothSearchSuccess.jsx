import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

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
`;
const Count = styled.div`
  color: #4fdfff;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 17px;
`;
const BoothWrapper = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 14px;
  border: 1px solid #4fdfff;
  background: linear-gradient(
    180deg,
    rgba(79, 223, 255, 0.3) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  margin: 0 7px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 93px;
  box-sizing: border-box;
  margin-top: 23px;
  &:first-child {
    margin-top: 0px;
  }
`;
const BoothPic = styled.div`
  width: 95px;
  height: 95px;
  display: inline-block;
  left: -2px;
  margin-left: -2px;
  margin-top: 3px;
`;
const BoothContent = styled.div`
  margin-right: auto;
  padding-left: 8px;
`;
const BoothName = styled.div`
  color: #4fdfff;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  position: absolute;
  top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Boothintro = styled.div`
  color: #fff;
  font-size: 4px;
  font-weight: 100;
  text-align: left;
  position: absolute;
  top: 30px;
  padding-right: 10px;
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

const BoothSearchSuccess = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate("/BoothSearch");
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNameButtonClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  // 기본 클릭 요소 설정
  const [clickedElement, setClickedElement] = useState("four");
  const [category, setCategory] = useState("day1"); // 초기값을 "day1"로 설정

  const handleElementClick = (element) => {
    setClickedElement(element);
    setCategory((prevCategory) => {
      if (element === "four") {
        return "day1";
      } else if (element === "five") {
        return "day2";
      } else if (element === "six") {
        return "day3";
      }
      return prevCategory;
    });
  };

  useEffect(() => {
    // category가 변경될 때 실행될 작업을 여기에 넣으세요
    handleNameButtonClick(); // 예를 들어, handleNameButtonClick 호출
  }, [category]); // category가 변경될 때만 이 useEffect가 실행됩니다.

  const getBorderStyle = (element) => ({
    color: "#FFF",
    fontSize: "18px",
    fontWeight: clickedElement === element ? "700" : "400", // 클릭한 요소에만 bolder 스타일 적용
    cursor: "pointer",
  });

  const [name, setName] = useState("");
  const [booths, setBooths] = useState([]);
  const [boothCount, setboothCount] = useState([]);
  const BACKEND_URL = "http://127.0.0.1:8000"; // 실제 백엔드 서버 주소로 변경해야 합니다.

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  // 검색 버튼 클릭 시 검색어를 사용하여 API 호출
  const handleNameButtonClick = () => {
    const encodedName = encodeURIComponent(name);
    const encodedCategory = encodeURIComponent(category);
    if (encodedName) {
      axios
        .get(`${BACKEND_URL}/booth-search`, {
          params: {
            name: name,
            category: category,
          },
        })
        .then(function (result) {
          navigate(
            `/BoothSearchSuccess/?name=${encodedName}&category=${encodedCategory}`
          );
          setBooths(result.data.results);
          setboothCount(result.data.resultsCount);
          console.log(result.data.results);
          console.log(category);
        })
        .catch(function (error) {
          setBooths({});
          setboothCount(0);
          console.error("에러 발생 : ", error);
        });
    }
  };

  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nameParam = searchParams.get("name");
    if (nameParam) {
      setName(nameParam);
    }
  }, [location.search]);

  useEffect(() => {
    if (name !== "" && booths.length === 0) {
      // booths가 비어있을 때만 실행
      handleNameButtonClick();
      // 여기에서 다른 로직을 실행할 수 있습니다.
    }
  }, [name, booths]);

  const imgStyle = {
    borderRadius: "14px",
    border: "1px solid #4fdfff",
  };
  const failStyle = {
    marginTop: "35px",
    marginBottom: "19px",
    color: "#4fdfff",
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "left",
    paddingLeft: "17px",
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
          <Topbar>
            <Back>
              <img
                src={`${process.env.PUBLIC_URL}/images/backbtn.png`}
                width="24px"
                height="24px"
                onClick={navigateToBack}
                alt="뒤로 가기"
              />
            </Back>
            <Toptitle>부스 배치도</Toptitle>
          </Topbar>
          <Body>
            <SearchWrapper>
              <Search
                placeholder="부스 이름을 검색하세요."
                value={name}
                onChange={handleNameInputChange}
                onKeyPress={handleOnKeyPress}
              />
              <SearchButton onClick={handleNameButtonClick}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/search-button.png`}
                  width="17px"
                  height="17px"
                  alt="검색"
                />
              </SearchButton>
            </SearchWrapper>
            <ContentWrapper>
              <DateWrapper>
                <Four
                  style={getBorderStyle("four")}
                  onClick={() => {
                    handleElementClick("four");
                  }}
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
                  06/FRI
                </Six>
              </DateWrapper>
              <Line>
                <img
                  src={`${process.env.PUBLIC_URL}/images/footer-line.png`}
                  width="100%"
                  height="1px"
                  alt="footer"
                />
              </Line>
              <ContentBox>
                {boothCount === 0 ? (
                  <p style={failStyle}>검색 결과가 없습니다.</p>
                ) : (
                  <div>
                    <Count>총 {boothCount}개의 이벤트</Count>
                    {booths.map((booth) => (
                      <BoothWrapper
                        key={booth.boothId}
                        onClick={() =>
                          navigate(`/booth-detail/${booth.boothId}/`)
                        }
                      >
                        <BoothPic>
                          <img
                            src={`${BACKEND_URL}${booth.image}`}
                            alt={booth.name}
                            width="91px"
                            height="91px"
                            style={imgStyle}
                          />
                        </BoothPic>
                        <BoothContent>
                          <BoothName>{booth.name}</BoothName>
                          <Boothintro>{booth.introduce}</Boothintro>
                        </BoothContent>
                      </BoothWrapper>
                    ))}
                  </div>
                )}
              </ContentBox>
            </ContentWrapper>
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

export default BoothSearchSuccess;
