import React from "react";
import styled, { css } from "styled-components";
const fruits = ["orange", "apple", "banana"];
const products = [
  { name: "chair", price: 30 },
  { name: "bed", price: 150 },
  { name: "couch", price: 550 },
];
const Title = styled.div`
  h1 {
    text-transform: capitalize;
    font-size: 2rem;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 1rem auto;
  }
`;

const Item = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `;
  }}
`;

const Product = styled.article`
  width: 200px;
  background: #fff;
  border-radius: 0.25rem;
  margin: 1rem;
  color: #222;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    text-transform: capitalize;
  }
  p {
    color: ${({ price }) => {
      if (price < 100) return "green";
      if (price > 500) return "red";
      return "#222";
    }};
  }
`;

const List = () => {
  return (
    <>
      <ul>
        {fruits.map((item, index) => {
          return (
            <Item key={index} odd={(index + 1) % 2}>
              {item}
            </Item>
          );
        })}
      </ul>
      <Title>
        <h1>all products</h1>
        <div className="underline"></div>
      </Title>
      {products.map((item, index) => {
        const { name, price } = item;
        return (
          <Product key={index} price={price}>
            <h3>{name}</h3>
            <p>${price}</p>
          </Product>
        );
      })}
    </>
  );
};

export default List;
