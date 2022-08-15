import styled from "styled-components";

// Global Styles
export const Text = styled.p`
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

// Header Styles
export const HeaderS = styled.div`
  background: linear-gradient(to bottom right, #6b2cf5, #d450e6);
  height: 12vh;
  padding: 2vh;
  border-radius: 0 0 70% 70% / 0 0 30% 30%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const BigText = styled(Text)`
  font-size: 1.8em;
  font-weight: 400;
`;

// Searchbar Styles
export const Bar = styled.div`
  background: #d3d3d3;
  padding: 0 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px auto;
  width: 600px;

  @media screen and (max-width: 800px) {
    width: 80vw;
    /* margin: 60px auto; */
  }
`;

export const Search = styled.input`
  background: none;
  border: none;
  width: 100%;
  height: 25px;
  margin: 5px;
  padding: 0 5px;
  /* color: #f0f; */
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;

  :focus,
  :hover {
    text-decoration: underline;
    text-decoration-color: #6b2cf5;
  }
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 5px 0;
  height: 25px;
  width: 50px;
  cursor: pointer;

  border-left: 2px solid #a9a9a9;
  border-radius: 5px;

  transition: all 0.5s ease-in-out;

  :focus {
    outline: 2px solid #6b2cf5;
  }

  :hover {
    background: #a9a9a9;
  }
`;

// Library Styles
export const BookShelf = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw 20px 10vw;
  flex-wrap: wrap;

  @media screen and (max-width: 750px){
    justify-content: center;
  }
`;

export const BookCard = styled.div`
  background: #dcdcdc;
  border-radius: 0 0 15px 15px;
  overflow: hidden;
  width: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const BookCover = styled.img`
  height: 200px;
  object-fit: fill;
`;

export const BookInfo = styled.div`
  background: linear-gradient(to bottom right, #6b2cf5, #d450e6);
  /* background: #f0f; */
  padding: 8px;
  width: 100%;
`;

export const BookName = styled(Text)`
  font-size: 18px;
  text-align: center;
`;

export const BookRate = styled(Text)`
  font-size: 12px;
  text-align: center;
`;

// Footer Styles
export const FooterS = styled(HeaderS)`
  border-radius: 70% 70% 0 0 / 30% 30% 0 0;
  height: 6vh;
`;
