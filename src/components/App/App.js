import React from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "styles/pallete";
import { Wrapper, Title } from "./styles";
import List from "components/List";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }
  render() {
    //console.log(this.props, "PROPS");
    const { stories } = this.props;
    //console.log(storyIds, "stories");
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List stories={stories} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
