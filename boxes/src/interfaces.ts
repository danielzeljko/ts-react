export interface BoxInterface {
  id:string;
  width: string;
  height: string;
  backgroundColor:string;
}

export interface BoxPropInterface extends BoxInterface {
  remove: Function;
}

export interface BoxFormInterface {
  height: string;
  width: string;
  backgroundColor: string;
}

export interface BoxListInterface {
  createBox: (box: BoxInterface) => void
}
