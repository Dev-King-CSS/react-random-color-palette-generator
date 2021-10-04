//! The main styles for our app is coming from here
import styled from "styled-components"

export const ColorApp = styled.div`
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-flow: row;
  padding-top: 3rem;
  padding-left: 3rem;
`

export const Title = styled.h1`
  color: whitesmoke;
  font-size: 2.3rem;
  margin-right: 60px;
`

export const Input = styled.input`
  padding: 0 10px;
  width: 15rem;
  font-size: 20px;
  margin-right: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid transparent;

  &:active {
    border: 1px solid #00aaff;
  }
`

export const Button = styled.button`
  background-color: #00aaff;
  color: whitesmoke;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;

  &:active {
    transform: translateY(1px);
  }
`
export const ColorsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 30px;
  padding: 30px;
`
