import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: row;
 border: 2px solid #eb6255;
 border-radius: 12px;

 @media (max-width: 1024px) {
   flex-direction:column;
 }
 @media (max-width: 768px) {
   flex-direction: column;
 }

 @media (max-width: 700px) {
   flex-direction: column;
 }

 @media (max-width: 600px) {
   flex-direction: column;
 }

 @media (max-width: 500px) {
   flex-direction: column;
 }

 @media (max-width: 400px) {
   flex-direction: column;
 }

 @media (max-width: 350px) {
   flex-direction: column;
 }
`;
