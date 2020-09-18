import React from "react";
import BarrelList from "./BarrelList";
import BarrelDetail from "./BarrelDetail";
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

  handleSellingBarrel()

  handleAddingNewBarrelToList = (newBarrel) => {
    const newMasterBarrelList = this.state.masterBarrelList.concat(newBarrel);
    this.setState({
      masterBarrelList: newMasterBarrelList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedBarrel = (id) => {
    const selectedBarrel = this.state.masterBarrelList.filter(barrel => barrel.id === id)[0];
    this.setState({selectedBarrel: selectedBarrel});
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

// Needed to ensure pint selling updates value in DOM
  handleSellingPint = () => {
  this.forceUpdate();
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
        <button onClick={this.handleClick}>{buttonText}
        </button>
      </React.Fragment>
    );
  }

}

export default BarrelControl;