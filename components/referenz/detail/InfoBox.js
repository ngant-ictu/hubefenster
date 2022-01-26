import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Number from "./Number";

const InfoBox = ({projectDetail, onClickGallery}) => {
  const changeSliderIndex = (index) => {
    onClickGallery(index);
  }

  return (
    <InfoBoxComponent>
      <Inner>
        <TitleGroup>
          <Number className="inside" number={projectDetail.number}/>
          <Title>{projectDetail.name.de}</Title>
          <Location>{projectDetail.title.de}</Location>
          <ShortDesc>{projectDetail.short_description.de}</ShortDesc>
        </TitleGroup>
        <Desc>{projectDetail.description.de}</Desc>
        {(projectDetail.construction_year &&
          projectDetail.architects && projectDetail.products.length > 0 &&
          projectDetail.products && projectDetail.products.length > 0 &&
          projectDetail.materials && projectDetail.materials.length > 0 &&
          projectDetail.gadgets && projectDetail.gadgets.length > 0) &&
          <List>
            {projectDetail.construction_year &&
              <li className="item">
                <strong>{'Baujahr'}</strong>
                <div>{projectDetail.construction_year}</div>
              </li>
            }
            {(projectDetail.architects && projectDetail.products.length > 0) &&
              <li className="item">
                <strong>{'Architektur'}</strong>
                <div>{projectDetail.architects[0].name}</div>
              </li>
            }
            {(projectDetail.products && projectDetail.products.length > 0) &&
              <li className="item">
                <strong>{'Ausführung'}</strong>
                <div>
                  {projectDetail.products.map((product, key) =>
                    <span key={key} className="implode">{product.name.de}</span>
                  )}
                </div>
              </li>
            }
            {(projectDetail.materials && projectDetail.materials.length > 0) &&
              <li className="item">
                <strong>{'Material'}</strong>
                <div>
                  {projectDetail.materials.map((material, key) =>
                    <span key={key} className="implode">{material.name.de}</span>
                  )}
                </div>
              </li>
            }
            {(projectDetail.gadgets && projectDetail.gadgets.length > 0) &&
              <li className="item">
                <strong>{'Gadgets'}</strong>
                <div>
                  {projectDetail.gadgets.map((gadget, key) =>
                    <span key={key} className="implode">
                      <Link href={'/gadgets/'+gadget.id}>
                        <a>{gadget.name.de}</a>
                      </Link>
                    </span>
                  )}
                </div>
              </li>
            }
          </List>
        }
        {projectDetail.is_sustainable == true &&
          <BoxVerify>
            <p>{'Fotografie'}: {projectDetail.photographer}</p>
            <Verify>
              <Image
                src="/assets/img/icons/icon-leaf.svg"
                alt="Dieses Produkt von Huber Fenster<br>wurde nachhaltig produziert."
                width={51}
                height={52}
              />
              <p>Dieses Produkt von Huber Fenster<br/>wurde nachhaltig produziert.</p>
            </Verify>
          </BoxVerify>
        }
        {(projectDetail.images.main && projectDetail.images.main.length > 0) &&
          <Gallery>
            {projectDetail.images.main.map((item, key) =>
              <li className="item" key={key} onClick={(()=> { changeSliderIndex(key) })}>
                <img src={item.link} alt={projectDetail.name.de} />
              </li>
            )}
          </Gallery>
        }
        <Navigate>
          <div>
            <p>Nächstes Projekt</p>
            <div className="buttons">
              <Link href={projectDetail.prev ? '/projekt/'+projectDetail.prev : '#'}>
                <a className={`button prev ${projectDetail.prev ? '' : 'disable'}`}></a>
              </Link>
              <div className="page-position">{projectDetail.number} | {projectDetail.total}</div>
              <Link href={projectDetail.next ? '/projekt/'+projectDetail.next : '#'}>
                <a className={`button next ${projectDetail.next ? '' : 'disable'}`}></a>
              </Link>
            </div>
          </div>
          <Link href="/referenz" passHref>
            <AllButton>{'Alle Projekte'}</AllButton>
          </Link>
        </Navigate>
      </Inner>
    </InfoBoxComponent>
  )
}

export default InfoBox;

const Inner = styled.div`
  padding: 50px 20px;
  background-color: ${props => props.theme.colors.white};
  overflow: auto;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 315px 30px 80px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 465px;
    transform: translateX(105%);
    transition: 0.5s ease;
  }
`

const InfoBoxComponent = styled.div`
  width: 100%;
  font-size: 17px;
  line-height: 1.2;
  z-index: 3;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 465px;

    &:hover {
      ${Inner} {
        transform: translateX(0);
      }
    }
  }
`

const TitleGroup = styled.div`
  border-bottom: 1px solid currentColor;
  padding-bottom: 30px;
`

const Title = styled.h3`
  font-size: 39px;
  line-height: 1.2;
  margin-bottom: 30px;
  word-break: break-all;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 50px;
  }
`

const Location = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: bold;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 20px;
    line-height: 1.2;
  }
`

const ShortDesc = styled.p`
  font-size: 18px;
  line-height: 1.5;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 20px;
    line-height: 1.2;
  }
`

const Desc = styled.div`
  font-size: 17px;
  line-height: 1.25;
  padding: 30px 0;
  margin: 0 0 30px;
  border-bottom: 1px solid currentColor;
`

const List = styled.ul`
  border-bottom: 1px solid currentColor;
  padding-bottom: 30px;
  margin-bottom: 30px;

  .item {
    font-size: 17px;
    line-height: 1.3;

    &:not(:last-child) {
      margin-bottom: 18px;
    }

    .implode {
      &:not(:first-child) {
        &::before {
          content: ', ';
        }
      }
    }

    a {
      text-decoration: underline;

      &:hover {
        color: currentColor;
      }
    }
  }
`

const BoxVerify = styled.div`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid currentColor;
`

const Verify = styled.div`
  display: flex;
  margin-top: 15px;

  p {
    margin-left: 20px;
  }
`

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid currentColor;

  .item {
    width: calc(50% - 3px);
    font-size: 0;
    margin-bottom: 20px;
    cursor: pointer;

    &:nth-child(2n) {
      margin-left: 6px;
    }

    img {
      width: 100%
    }
  }
`

const Navigate = styled.div`
  display: flex;
  margin-top: 30px;

  .buttons {
    border: 1px solid currentColor;
    border-radius: 20px;
    padding: 2px 0 6px;
    margin-top: 10px;
    display: flex;

    .button {
      width: 30px;
      display: block;
      position: relative;

      &::before {
        position: absolute;
        width: 10px;
        height: 10px;
        content: '';
        border-top: 1px solid currentColor;
        border-left: 1px solid currentColor;
        transform: rotate(-45deg);
        top: 6px;
        left: 10px;
      }

      &.next {
        &::before {
          transform: rotate(135deg);
        }
      }

      &.disable {
        &::before {
          border-color: rgba(0, 0, 0, 0.2);
        }
      }
    }

    .page-position {
      width: calc(100% - 60px);
      text-align: center;
      line-height: 20px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 80px;
  }
`

const AllButton = styled.a`
  display: block;
  margin-left: 30px;
  cursor: pointer;
`
