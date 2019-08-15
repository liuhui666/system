import { observable, action } from 'mobx';

class Store {
@observable from={ index: '', container: '' }
@observable to={ index: '', container: '' }
@observable moveInfo ={}
@observable tasks=[];

@action.bound
  dragOver(e, containerName) {
    const index = Math.ceil(e.nativeEvent.layerY / 20);
    this.to = { index, container: containerName };
  }
}

const store = new Store();

export default store;
