import React from "react";
import BarrelList from "./BarrelList";
import BarrelDetail from "./BarrelDetail";
import CreateBarrelForm from "./CreateBarrelForm";
import EditBarrelForm from "./EditBarrelForm";
import Button from "react-bootstrap/Button";

class BarrelControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBarrelList: [
        {
          name: "Hatchet's Lager",
          brand: "Hatchet & Barrel",
          price: "22",
          abv: "25",
          remainingPints: 288,
          id: "1",
        },
        {
          name: "Barrel's Brew",
          brand: "Hatchet & Barrel",
          price: "33",
          abv: "51",
          remainingPints: 288,
          id: "2",
        },
      ],
      selectedBarrel: null,
      editing: false,
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  //
  handleLowerPint = (barrelToSell) => {
    if(barrelToSell.remainingPints>0){
      barrelToSell.remainingPints--
    }
    const editedMasterBarrelList = this.state.masterBarrelList
    .filter((barrel) => barrel.id !== this.state.selectedBarrel.id)
    .concat(barrelToSell);
    this.setState({masterBarrelList: editedMasterBarrelList, editing: false});
  };
  
  handleAddingNewBarrelToList = (newBarrel) => {
    const newMasterBarrelList = this.state.masterBarrelList.concat(newBarrel);
    this.setState({
      masterBarrelList: newMasterBarrelList,
      formVisibleOnPage: false,
    });
  };
  //
  handleChangingSelectedBarrel = (id) => {
    const selectedBarrel = this.state.masterBarrelList.filter(
      (barrel) => barrel.id === id
    )[0];
    this.setState({ selectedBarrel: selectedBarrel });
  };
  //
  handleClick = () => {
    if (this.state.selectedBarrel !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBarrel: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  //
  handleEditClick = () => {
    this.setState({ editing: true });
  };
  //
  handleEditingBarrelInList = (barrelToEdit) => {
    const editedMasterBarrelList = this.state.masterBarrelList
      .filter((barrel) => barrel.id !== this.state.selectedBarrel.id)
      .concat(barrelToEdit);
    this.setState({
      masterBarrelList: editedMasterBarrelList,
      editing: false,
      selectedBarrel: null,
    });
  };
  //
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditBarrelForm
          barrel={this.state.selectedBarrel}
          onEditBarrel={this.handleEditingBarrelInList}
        />
      );
      buttonText = "Return to Barrel List";
    } else if (this.state.selectedBarrel != null) {
      currentlyVisibleState = (
        <BarrelDetail
          barrel={this.state.selectedBarrel}
          onSellingBarrel={this.handleLowerPint}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Barrel List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <CreateBarrelForm
          onNewBarrelCreation={this.handleAddingNewBarrelToList}
        />
      );
      buttonText = "Return to Barrel List";
    } else {
      currentlyVisibleState = (
        <BarrelList
          barrelList={this.state.masterBarrelList}
          onBarrelSelection={this.handleChangingSelectedBarrel}
        />
      );
      buttonText = "Add Barrel";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default BarrelControl;
