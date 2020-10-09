import React, { Component } from "react";
import "./App.css";
import SmurfCard from "./SmurfCard";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import styled from "styled-components";

const StyledContent = styled.div`
backgound-color: ${(pr) => pr.theme.primaryColor};
color: ${(pr) => pr.theme.secondaryColor};
padding: ${(pr) => pr.theme.paddingSmall};

`



class App extends Component {
  render() {
    return (
      <StyledContent>
<div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm/>
        <SmurfList/>
        <SmurfCard/>
      </div>
      

      </StyledContent>

        
      
    );
  }
}

export default App;
