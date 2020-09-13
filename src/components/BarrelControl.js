import React from "react";
import BarrelList from "./BarrelList";
import BarrelDetail from "./BarrelDetail";
import Barrel from "./Barrel";
import CreateBarrelForm from "./CreateBarrelForm"

class BarrelControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBarrelList: [],
      selectedBarrel: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedBarrel !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBarrel: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBarrel != null) {
      currentlyVisibleState = <BarrelDetail barrel = {this.state.selectedBarrel} />
      buttonText = "Return to Barrel List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreateBarrelForm onNewBarrelCreation={this.handleAddingNewBarrelToList}  />;
      buttonText = "Return to Barrel List";

    } else {
      currentlyVisibleState = <BarrelList barrelList={this.state.masterBarrelList} onBarrelSelection={this.handleChangingSelectedBarrel} />;
      buttonText = "Add Barrel";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}{buttonText}
        </button>
      </React.Fragment>
    );
  }

}

export default BarrelControl;