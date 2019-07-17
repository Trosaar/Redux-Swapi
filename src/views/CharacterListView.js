import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeeps } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeeps()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
  }
}

const mapDispatchToProps = {
	getPeeps: getPeeps,
}

export default connect(
  mapStateToProps, mapDispatchToProps
  // {
  //   /* action creators go here */
  // }
)(CharacterListView);
