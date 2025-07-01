import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  // background-color: black;
  // 추가
  background-image: url("/images/competbg.svg");
  background-size: cover;
  background-position: center;

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
const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
`;

const Body = styled.div``;

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

// 추가
const PageTitle = styled.div`
  color: #fff;
  cursor: pointer;
  margin: auto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 5px;
`;
const BackBtn = styled.div`
  cursor: pointer;
  position: absolute;
  left: 27px;
`;
const TitleBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: center;
  margin-top: 10px;
`;
const TitleBarText = styled.div`
  position: absolute;
  margin-top: 15px;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RankNum11 = styled.div`
  position: absolute;
  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  top: 0;
  left: 46px;
`;
const RankNum22 = styled.div`
  position: absolute;
  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  top: 0;
  left: 45px;
`;
const RankNum33 = styled.div`
  position: absolute;
  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  top: 0;
  left: 43px;
`;
const RankUniv = styled.div`
  position: absolute;
  left: 143px;
  top: 5px;
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RankPercent = styled.div`
  position: absolute;
  margin-left: 290px;
  top: 4px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RankNum2 = styled.div`
  position: absolute;
  color: #fff;
  margin-left: 30px;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RankUniv2 = styled.div`
  position: absolute;
  margin-left: 100px;
  margin-top: 2px;
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RankPercent2 = styled.div`
  position: absolute;
  margin-left: 280px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 5px;
  box-sizing: border-box;
  align-items: center;
  padding-left: 12px;
`;

const TopBox = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
  margin-bottom: 5px;
`;
const RankBox = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
`;
const ImgBox = styled.div`
  position: relative;
  left: -12.5px;
`;
const TopText = styled.div`
  position: relative;
  top: -98px;
  left: -3px;
`;
const RankText = styled.div`
  position: relative;
  top: -47px;
`;
const BoxList = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 40px;
`;

const CompetDetail = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 임시 설정
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

  // 연동 코드 (여기서 부터 추가!!!)
  const [postList, setPostList] = useState([]); // 배열에 받아서 저장
  const [loading, setLoading] = useState(false);
  const BACKEND_URL = "http://3.36.142.19" || "ec2-3-36-142-19.ap-northeast-2.compute.amazonaws.com" || "127.0.0.1:8000";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // API 호출
        const response = await axios.get(`${BACKEND_URL}/competition/`);
        setPostList(response.data.collegeRank); //collegeRank 배열 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const ulStyle = {
    padding: "0",
    listStyle: "none",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          {loading ? (
            <div style={loadingStyle}>
              <img
                src="/static/images/loading.gif"
                alt="로딩 중"
                width="50px"
                height="50px"
                style={loadingimg}
              />
            </div>
          ) : (
            <>
              <Body>
                <Box>
                  <BackBtn onClick={goBack}>
                    <img
                      src="/images/backbtn.svg"
                      width="25px"
                      alt="titlebar"
                    />
                  </BackBtn>
                  <PageTitle>단과 대항전</PageTitle>
                </Box>
                <TitleBar>
                  <img
                    src="/images/titlebar2.svg"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "60px",
                    }}
                    alt="titlebar"
                  />
                  <TitleBarText>현재 참여율 TOP3 단과대</TitleBarText>
                </TitleBar>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={ulStyle}
                >
                  <div>
                    <motion.li variants={item}>
                      <TopBox>
                        <ImgBox>
                          <img
                            src="/images/1stdept.svg"
                          />
                        </ImgBox>
                        <TopText>
                          <RankNum11>
                            {postList[0] && postList[0].rank}등
                          </RankNum11>
                          <RankUniv>
                            {postList[0] && postList[0].college}
                          </RankUniv>
                          <RankPercent>
                            {postList[0] && postList[0].participationRate}%
                          </RankPercent>
                        </TopText>
                      </TopBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <TopBox>
                        <div>
                          <img
                            src="/images/2nddept.svg"
                          />
                        </div>
                        <TopText>
                          <RankNum22>
                            {postList[1] && postList[1].rank}등
                          </RankNum22>
                          <RankUniv>
                            {postList[1] && postList[1].college}
                          </RankUniv>
                          <RankPercent>
                            {postList[1] && postList[1].participationRate}%
                          </RankPercent>
                        </TopText>
                      </TopBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <TopBox>
                        <div>
                          <img
                            src="/images/3rddept.svg"
                          />
                        </div>
                        <TopText>
                          <RankNum33>
                            {postList[2] && postList[2].rank}등
                          </RankNum33>
                          <RankUniv>
                            {postList[2] && postList[2].college}
                          </RankUniv>
                          <RankPercent>
                            {postList[2] && postList[2].participationRate}%
                          </RankPercent>
                        </TopText>
                      </TopBox>
                    </motion.li>
                  </div>
                  <br />
                  <BoxList>
                    <motion.li variants={item}>
                      <RankBox>
                        <div>
                          <img
                            src="/images/littlebox.svg"
                          />
                        </div>
                        <RankText>
                          <RankNum2>
                            {postList[3] && postList[3].rank}등
                          </RankNum2>
                          <RankUniv2>
                            {postList[3] && postList[3].college}
                          </RankUniv2>
                          <RankPercent2>
                            {postList[3] && postList[3].participationRate}%
                          </RankPercent2>
                        </RankText>
                      </RankBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <RankBox>
                        <div>
                          <img
                            src="/images/littlebox.svg"
                          />
                        </div>
                        <RankText>
                          <RankNum2>
                            {postList[4] && postList[4].rank}등
                          </RankNum2>
                          <RankUniv2>
                            {postList[4] && postList[4].college}
                          </RankUniv2>
                          <RankPercent2>
                            {postList[4] && postList[4].participationRate}%
                          </RankPercent2>
                        </RankText>
                      </RankBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <RankBox>
                        <div>
                          <img
                            src="/images/littlebox.svg"
                          />
                        </div>
                        <RankText>
                          <RankNum2>
                            {postList[5] && postList[5].rank}등
                          </RankNum2>
                          <RankUniv2>
                            {postList[5] && postList[5].college}
                          </RankUniv2>
                          <RankPercent2>
                            {postList[5] && postList[5].participationRate}%
                          </RankPercent2>
                        </RankText>
                      </RankBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <RankBox>
                        <div>
                          <img
                            src="/images/littlebox.svg"
                          />
                        </div>
                        <RankText>
                          <RankNum2>
                            {postList[6] && postList[6].rank}등
                          </RankNum2>
                          <RankUniv2>
                            {postList[6] && postList[6].college}
                          </RankUniv2>
                          <RankPercent2>
                            {postList[6] && postList[6].participationRate}%
                          </RankPercent2>
                        </RankText>
                      </RankBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <RankBox>
                        <div>
                          <img
                            src="/images/littlebox.svg"
                          />
                        </div>
                        <RankText>
                          <RankNum2>
                            {postList[7] && postList[7].rank}등
                          </RankNum2>
                          <RankUniv2>
                            {postList[7] && postList[7].college}
                          </RankUniv2>
                          <RankPercent2>
                            {postList[7] && postList[7].participationRate}%
                          </RankPercent2>
                        </RankText>
                      </RankBox>
                    </motion.li>
                    <motion.li variants={item}>
                      <RankBox>
                        <div>
                          <img
                            src="/images/littlebox.svg"
                          />
                        </div>
                        <RankText>
                          <RankNum2>
                            {postList[8] && postList[8].rank}등
                          </RankNum2>
                          <RankUniv2>
                            {postList[8] && postList[8].college}
                          </RankUniv2>
                          <RankPercent2>
                            {postList[8] && postList[8].participationRate}%
                          </RankPercent2>
                        </RankText>
                      </RankBox>
                    </motion.li>
                  </BoxList>
                </motion.ul>
              </Body>
            </>
          )}
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
export default CompetDetail;
