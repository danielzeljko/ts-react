export interface BoxInterface {
  id:string;
  width:number;
  height:number;
  backgroundColor:string;
  remove?: Function;
}

export interface BoxFormInterface {
  height: string;
  width: string;
  backgroundColor: string;
}

export interface BoxListInterface {
  createBox: Function
}