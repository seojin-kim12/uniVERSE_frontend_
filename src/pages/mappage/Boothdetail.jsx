import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react"; // useState와 useEffect 추가
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
  min-height: calc(100vh - 150px); //푸터 공간 확보
`;

const Body = styled.div`
  align-items: center;
`;
const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding-left: 12px;
`;
const Back = styled.div`
  cursor: pointer;
  position: absolute;
  left: 27px;
`;
const BoothCon = styled.div``;
const Boothimg = styled.div`
  margin: auto 0;
  padding-bottom: 20px;
`;
const Boothinfo = styled.div`
  margin: 0 auto;
  width: 300px;
  margin-bottom: 50px;
`;
const Boothname = styled.div`
  width: 310px;
  height: 100%;
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
  width: 310px;
  height: 120px;
  flex-shrink: 0;
  color: #fff;
  font-family: SUIT;
  font-size: 18.059px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-top: 40px;
  overflow: hidden; /* 내용이 영역을 넘어갈 경우 숨김 처리 */
`;
const BoothintroContent = styled.div`
  height: 100%;
  overflow-y: auto; /* 세로 스크롤바 표시 */
`;
const Detail_detail = styled.div`
  margin-left: 10px;
  margin-top: 30px;
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
  height: 22px;
  height: 22px;
  width: 87%;
  flex-shrink: 0;
  color: #4fdfff;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;
const Place = styled.div`
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
  margin-top: 10px;
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

const Boothdetail = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };

  const loadingimg = {
    margin: "0 auto",
    width: "10%",
    height: "10%",
  };
  const loadingStyle = {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  };

  //axios_backend 연동작업 시작
  const [Booth, setBooth] = useState([]);
  const { boothId } = useParams(); // 경로 파라미터 값 가져오기
  const BACKEND_URL = "http://3.36.142.19" || "ec2-3-36-142-19.ap-northeast-2.compute.amazonaws.com" || "127.0.0.1:8000";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${BACKEND_URL}/booth-detail/${boothId}/`;

    axios
      .get(apiUrl)
      .then((response) => {
        setBooth(response.data);
        console.log(response.data); // 부스 정보 확인
        setLoading(false);
      })
      .catch((error) => {
        console.error("에러 발생: ", error);
        setLoading(false);
      });
  }, [boothId]);
  return (
    // 다른 페이지로 자연스럽게 넘어가기 위해 추가함
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Container>
        <BodyWrapper>
          <Body>
            <Topbar>
              <Back>
                <img
                  src="/images/backbtn.png"
                  width="24px"
                  height="24px"
                  onClick={() => navigateToBack()}
                />
              </Back>
            </Topbar>
            {loading ? (
              <div style={loadingStyle}>
                <img
                  src="/images/loading.gif"
                  alt="로딩 중"
                  width="50px"
                  height="50px"
                  style={loadingimg}
                />
              </div>
            ) : (
              <>
                <BoothCon>
                  <Boothimg>
                    <img
                      src={`${BACKEND_URL}${Booth.image}`}
                      width="320px"
                      height="320px"
                      alt="boothimg"
                    />
                  </Boothimg>
                  <Boothinfo>
                    <Boothname>{Booth.name}</Boothname>
                    <Intro>
                      <BoothintroContent> {Booth.introduce}</BoothintroContent>
                    </Intro>
                    <Detail_detail>
                      <Time>
                        <img
                          src="/images/timeicon.png"
                          width="14px"
                          height="17px"
                          alt="timeicon"
                        />
                        <Time_detail>{Booth.date}</Time_detail>
                      </Time>
                      <Place>
                        <img
                          src="/images/placeicon.png"
                          width="13.993px"
                          height="17px"
                          alt="placeicon"
                        />
                        <Place_detail>{Booth.place}</Place_detail>
                      </Place>
                    </Detail_detail>
                  </Boothinfo>
                </BoothCon>
              </>
            )}
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
export default Boothdetail;
