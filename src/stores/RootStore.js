import { observable, action, decorate } from 'mobx';

export class RootStore {
  configs = null;

  updateConfigs = (_configs) => {
    console.log("_configs:", _configs)
    this.configs = _configs;
  }

}

decorate(RootStore, {
  configs: observable,
  updateConfigs: action
})