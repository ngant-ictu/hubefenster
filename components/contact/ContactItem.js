import styled from "styled-components";

const ContactItem = ({ item }) => {
  return (
    <Item>
      <Title>{item.city}</Title>
      <ItemInfo>
        <div
          className="title"
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <div>{item.company}</div>
        <div
          className="underline address"
          dangerouslySetInnerHTML={{ __html: item.adress }}
        />
        <div>{item.phone}</div>
        <div className="underline">
          <a href={"mailto:" + item.email}>{item.email}</a>
        </div>
      </ItemInfo>
    </Item>
  );
};

export default ContactItem;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
    margin-bottom: 150px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xlarge}) {
    padding: 0 327px;
  }
`;

const Title = styled.h2`
  font-size: 43px;
  line-height: 100%;
  font-weight: normal;
  margin-bottom: 60px;
  letter-spacing: 0.01em;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 50px;
    width: 48%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    font-size: 65px;
    width: 59%;
  }
`;

const ItemInfo = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0, 0.5);
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  padding-left: 22px;

  .title {
    color: ${({ theme }) => theme.colors.black};
  }
  .address {
    line-height: 32px;
  }
  span {
    display: block;
  }

  .underline {
    text-decoration: underline;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 24px;
    line-height: 28px;
    padding-left: 25px;
  }
`;
