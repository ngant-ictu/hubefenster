import React, { useState, useEffect } from 'react';
import Layout from "../../components/master/Layout";
import styled from "styled-components";
import Image from 'next/image'
import MainTitle from "../../components/common/MainTitle";
import InViewComponent from '../../components/common/InView';

const listFeature = [
  'Eichen-Setzlinge',
  'Eichenwälder',
  'Rohholz',
  'Kanteln',
  'Fenster',
  'Gebäude',
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePosition, setActivePosition] = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const hoverImagePosition = (index) => {
    setActivePosition(index)
  }

  return (
    <Layout header="white">
      {isOpen &&
        <Modal>
          <IframeWrapper>
            <iframe src="https://www.youtube.com/embed/2fShmXkMhiQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </IframeWrapper>
          <CloseButton onClick={togglePopup}></CloseButton>
        </Modal>
      }
      <InViewComponent>
        <MainVisual onClick={togglePopup}>
          <Image
            src="/assets/img/sustainability/mv.jpg"
            alt="Nachhaltigkeit"
            layout="fill"
            priority={true}
          />
          <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.3425" cy="40.3425" r="40.0925" fill="white" stroke="#3D3D40" strokeWidth="0.5" />
            <path d="M32.524 26.802L55.9795 40.344L32.524 53.886L32.524 26.802Z" fill="#E7E7EA" stroke="#3D3D40" strokeWidth="0.5" />
          </svg>
        </MainVisual>
      </InViewComponent>
      <MainWrapper>
        <FirstDescription>
          <Inner>
            <InViewComponent>
              <MainTitle title="Nachhaltigkeit" />
            </InViewComponent>
            <InViewComponent delay={0.5}>
              <Description>Als Teil der Gesellschaft nehmen wir unsere Verantwortung ernst. Wir beraten unsere Kunden nach ökologischen Kriterien, wobei wir grosses Gewicht auf die nachhaltige Nutzung des Holzes legen. Mit dem Forst in Winnyzja sowie unserem Partnerbetrieb <a href="https://www.divario.ch/" target="_blank" rel="noreferrer">Divario AG (UA)</a> haben wir den gesamten Entstehungs-prozess - z.B. bei Eichen-Produkten - in eigener Hand. Dieser beginnt beim Setzling und geht über das geerntete Rohholz, die Halbfabrikate-Fertigung inkl. Nutzung des Restholzes bis hin zum fertigen Fenster.</Description>
            </InViewComponent>
          </Inner>
        </FirstDescription>

        <Wrapper className="first-wrapper">
          <SustainableInfo>
            <Inner>
              <div className="img">
                <InViewComponent>
                  <div className="img-inner">
                    <Image
                      src="/assets/img/sustainability/img-1.png"
                      alt="Nachhaltiger Umgang mit Holz"
                      width={680}
                      height={665}
                    />
                    <div className="list-position">
                      {listFeature.map((feature, key) =>
                        <div className="position" onMouseOver={() => hoverImagePosition(key)} key={key} onMouseLeave={() => hoverImagePosition(-1)}></div>
                      )}
                    </div>
                  </div>
                </InViewComponent>
              </div>

                <div className="info">
                  <InViewComponent delay={0.5}>
                    <p className="short-desc">Nachhaltiger Umgang mit Holz<br />Mit dem Forst in Winnyzja sowie unserem Partner-betrieb Divario AG (UA) haben wir den gesamten Entstehungsprozess - z.B. bei Eichen-Produkten - in eigener Hand. Dieser beginnt beim Setzling und geht über das geerntete Rohholz, die Halbfabrikate-Fertigung inkl. Nutzung des Restholzes bis hin zum fertigen Fenster</p>
                  </InViewComponent>
                  <InViewComponent delay={1}>
                    <ul className="list-sustainable">
                      {listFeature.map((feature, key) =>
                        <li className={`item ${activePosition == key ? 'active' : ''}`} key={key}>{feature}</li>
                      )}
                    </ul>
                  </InViewComponent>
                </div>
            </Inner>
          </SustainableInfo>
        </Wrapper>

        <Wrapper>
          <SustainableGallery>
            <div className="left-part">
              <InViewComponent>
                <Image
                  src="/assets/img/sustainability/img-2.jpg"
                  alt="Eichenzucht"
                  width={430}
                  height={572}
                />
              </InViewComponent>
            </div>
            <div className="right-part">
              <InViewComponent delay={0.5}>
                <Image
                  src="/assets/img/sustainability/img-3.jpg"
                  alt="Eichenzucht"
                  width={446}
                  height={310}
                />
              </InViewComponent>
              <InViewComponent delay={1}>
                <p>Eichenzucht<br />Huber Fenster AG unterstützt direkt den Forst in Winnyzja (Ukraine). Dort werden Eichen gezüchtet und anschliessend in Baumschulen im Wald angepflanzt.<br /><br />Unser Label steht für eine durchgängige Nachhaltigkeit von der Aufzucht der Eichen, dem Ernten des Rohholzes, der Halbfabrikate-Fertigung bis hin zu der Nutzung des anfallenden Restholzes.v</p>
              </InViewComponent>
            </div>
            <div className="center-part">
              <InViewComponent>
                <Image
                  src="/assets/img/sustainability/img-4.jpg"
                  alt="Heizen mit Restholz"
                  width={606}
                  height={403}
                />
              </InViewComponent>
              <InViewComponent delay={0.5} className="column">Heizen mit Restholz<br />Die Holzreste der Fensterproduktion in Herisau und der Halbfabrikate-Produktion in Winnyzja werden als Wärmeenergiequelle für die eigenen Produktionshallen, Trocknungskammern und umliegenden Gebäude genutzt.</InViewComponent>
              <InViewComponent delay={1} className="column last-column">Fotovoltaik<br />Huber Fenster AG produziert schon jetzt Solarstrom in Herisau. Eine grössere Anlage, welche den gesamten Stromverbrauch deckt, ist in Planung. Das Partnerwerk Divario AG (UA) erzeugt sauberen Strom für seine nachhaltigen Produkte. Es wird mehr Strom erzeugt, als für die Produktion der Halbfabrikate benötigt wird. Der überschüssige Strom wird ins Netz eingespeist</InViewComponent>
            </div>
          </SustainableGallery>
        </Wrapper>
      </MainWrapper>
    </Layout>
  )
}

export default Index;

const MainVisual = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 90px);
  margin-top: 90px;
  cursor: pointer;

  img {
    object-fit: cover;
    object-position: center;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;

    circle {
      transition: 0.5s ease;
    }
  }

  &:hover {
    svg {
      circle {
        fill: ${props => props.theme.colors.black};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 82px;

    svg {
      width: 80px;
      height: 80px;
    }
  }
`

const FirstDescription = styled.div`
  padding-top: 50px;
  padding-bottom: 70px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 100px;
    padding-bottom: 130px;
  }
`

const Wrapper = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 40px 0;

  &.first-wrapper {
    border-top: 1px solid ${props => props.theme.colors.black};
    border-bottom: 1px solid ${props => props.theme.colors.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 80px 0;
  }
`;

const Inner = styled.div`
  max-width: 830px;
  width: 100%;
  margin: 0 auto;
`;

const SustainableInfo = styled.div`
  .img {
    width: 100%;

    &-inner {
      display: inline-block;
      font-size: 0;
      position: relative;
    }
  }

  .info {
    width: 100%;
    margin-top: 40px;

    .short-desc {
      font-size: 17px;
      line-height: 1.35;
      margin-bottom: 50px;
    }
  }

  .list-sustainable {
    font-size: 17px;
    line-height: 1.2;
    counter-reset: item;
    padding-left: 30px;

    .item {
      counter-increment: item;
      position: relative;
      padding-left: 40px;
      margin-bottom: 23px;
      transition: 0.5s ease;

      &.active {
        color: ${({ theme }) => theme.colors.red};
      }

      &::before {
        content: counter(item);
        position: absolute;
        top: -1px;
        left: 0;
        font-size: 15px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid currentColor;
      }
    }
  }

  .list-position {
    .position {
      width: 14%;
      height: 14%;
      border-radius: 50%;
      position: absolute;
      cursor: pointer;

      &:first-child {
        top: 0.5%;
        left: 53.5%;
      }

      &:nth-child(2) {
        top: 17.5%;
        left: 82.5%;
      }

      &:nth-child(3) {
        top: 51%;
        left: 83%;
      }

      &:nth-child(4) {
        top: 68.5%;
        left: 54%;
      }

      &:nth-child(5) {
        top: 51%;
        left: 25%;
      }

      &:nth-child(6) {
        top: 17.5%;
        left: 25%;
      }
    }
  }

  ${Inner} {
    max-width: 1150px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    .img {
      width: calc(100% - 430px);
    }

    .info {
      margin-top: 0;
      width: 430px;
      padding-left: 50px;
      padding-bottom: 20px;
    }
  }
`

const SustainableGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1015px;
  margin: 0 auto;

  p {
    font-size: 17px;
    line-height: 1.35;
  }

  .left-part {
    width: 100%;
    margin-bottom: 20px;
  }

  .right-part {
    width: 100%;

    p {
      margin-top: 30px;
    }
  }

  .center-part {
    text-align: center;
    margin-top: 60px;

    .column {
      text-align: left;
      margin-top: 30px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    .left-part {
      width: 42%;
      margin-bottom: 0;
    }

    .right-part {
      padding-top: 13%;
      width: 58%;
      padding-left: 95px;

      p {
        margin-top: 45px;
        padding-left: 80px;
      }
    }

    .center-part {
      .column {
        width: calc(50% - 30px);
        display: inline-block;
        vertical-align: top;
        margin-top: 90px;
        padding-left: 30px;

        &.last-column {
          margin-left: 60px;
        }
      }
    }
  }
`

const Description = styled.p`
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.01em;
  margin-top: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 26px;
  }
`

const MainWrapper = styled.div`
  padding: 0 20px;
`

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const CloseButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.white};;
    top: 50%;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
  }
`

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`