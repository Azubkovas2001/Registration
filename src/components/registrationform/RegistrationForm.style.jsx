import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledForm = styled.form`
 display: flex;
 flex-direction: column;
 gap: 10px;
`;

export const StyledLabel = styled.label`
 font-family: 'Poppins', sans-serif;
 font-weight: 500;
 line-height:30px;
 font-size:16px;
`;

export const StyledDiv = styled.div`
 display: flex;
 align-items: center;
 position: relative;
 gap: 10px;
`;

export const StyledInput = styled.input`
 width: 100%;
 height: 40px;
 padding-left: 30px;
 border: 2px solid lightgray;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 border-radius: 6px;
 ::placeholder {
   padding-left: 40px;
   color: gray;
 }
 &:focus {
   outline: none;
   border: 2px solid #f2877d;
   box-shadow: 0 0 4px #f2877d;
 }
`;
export const StyledIcon = styled(FontAwesomeIcon)`
 position: absolute;
 left: 10px;
`;
export const StyledButton = styled.button`
 font-family: 'Poppins', sans-serif;
 height:40px;
 background:#f2877d;
 border:none;
 cursor:pointer;
 color:white;
 font-size:24px;
 border-radius:6px;
 margin-top:20px;
`
export const StyledSpan = styled.span`
background:red;
`