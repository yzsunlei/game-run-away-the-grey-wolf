class Main extends egret.DisplayObjectContainer {
  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);

    // var rect = new Rect();
    // this.addChild(rect);
    // rect.type = RectType.CLICKABLE;

    // var group:GroupRect = new GroupRect();
    // this.addChild(group);
    // group.createBlackRect();
    // group.addEventListener('gameOver', this.gameOver, this);
    // group.addEventListener('clickRight', this.clickRight, this);
  }

  private addStage() {
    this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    var game = new Game(this);
  }

  private gameOver() {
    console.log('gameOver');
  }

  private clickRight() {
    console.log('clickRight');
  }
}