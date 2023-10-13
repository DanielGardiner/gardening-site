"use client";

import styled, { css } from "styled-components";
import ImageAspectRatio from "@/components/ImageAspectRatio";
import Container from "@/components/Container";
import Row from "@/components/Row";
import Col from "@/components/Col";
import Spacer from "@/components/Spacer";
import HeroImage from "/public/images/gardener-4-high.webp";
import { mediaQuery } from "@/constants";

const StyledTitle = styled.h1`
  font-size: 36px;
  line-height: 1.05;

  font-weight: 500;
  color: #3f1642;
  > span {
    font-weight: 200;
    color: #27bbad;
  }

  @media ${mediaQuery.smUp} {
    font-size: 48px;
  }
  @media ${mediaQuery.mdUp} {
    font-size: 54px;
  }
`;

const StyledHeroBg = styled.div`
  background-color: #f2f1ec;
  background-color: black;
  overflow-x: clip;
`;

const StyledHeroTextContainer = styled.div`
  margin-left: 10%;

  @media ${mediaQuery.smUp} {
    margin-left: 5%;
  }

  @media ${mediaQuery.lgUp} {
    margin-left: 30%;
  }
`;

const StyledHeroP = styled.p`
  font-size: 16px;
  color: #626261;
`;

export default function Home() {
  return (
    <main>
      <StyledHeroBg>
        <Spacer xs="60px" />

        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <StyledHeroTextContainer>
                <StyledTitle>
                  Providing
                  <br />
                  <span>Fresh produce</span>
                  <br />
                  Every day
                </StyledTitle>
                <StyledHeroP>
                  Rooted Nullam vehicula ipsum a arcu cursus vitae congue.
                  Convallis a cras semper auctor neque vitae tempus quam. Diam
                  quam nulla porttitor massa id neque. Bibendum at varius vel
                  pharetra vel turpis nunc.
                </StyledHeroP>
              </StyledHeroTextContainer>
            </Col>
            <Col xs={12} sm={6}>
              <Spacer xs="20px" sm="0px" />
              <ImageAspectRatio
                src={HeroImage}
                xs={{
                  styles: css`
                    transform: scale(1.2) translateY(15px);
                    margin-left: -40px;
                    overflow-x: hidden;
                  `,
                }}
                sm={{
                  styles: css`
                    transform: scale(3) translateY(15px);
                    margin-top: 100px;
                    margin-left: 80px;
                    /* background: #ff00003b; */
                  `,
                }}
                md={{
                  styles: css`
                    transform: scale(1.2) translateY(15px);
                    background: #ff00003b;
                    /* background: green; */
                  `,
                }}
              />
            </Col>
          </Row>
        </Container>
      </StyledHeroBg>
    </main>
  );
}
