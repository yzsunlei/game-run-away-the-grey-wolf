class Data {
  private static _rectWidth:number = 0;
  public static score:number = 0;
  public static getRectWidth():number {
    if (Data._rectWidth == 0) {
      Data._rectWidth = egret.MainContext.instance.stage.stageWidth;
    }
    return Data._rectWidth;
  }

  private static _rectRow:number = 0;
  public static getRectRow(): number {
    if (Data._rectRow == 0) {
      Data._rectRow = Math.ceil(this.getStageHeight() / Data.getRectWidth()) - 1;
    }
    return Data._rectRow;
  }

  public static getStageHeight(): number {
    return egret.MainContext.instance.stage.stageHeight;
  }
}