//Container Component to Connect React Components with The Redux Store
import { connect } from "react-redux";
import actions from "store/story/actions";
import App from "./App";

const mapStateToProps = state => ({
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
