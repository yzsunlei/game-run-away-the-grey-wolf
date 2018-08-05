var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
        // var rect = new Rect();
        // this.addChild(rect);
        // rect.type = RectType.CLICKABLE;
        // var group:GroupRect = new GroupRect();
        // this.addChild(group);
        // group.createBlackRect();
        // group.addEventListener('gameOver', this.gameOver, this);
        // group.addEventListener('clickRight', this.clickRight, this);
    }
    Main.prototype.addStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        var game = new Game(this);
    };
    Main.prototype.gameOver = function () {
        console.log('gameOver');
    };
    Main.prototype.clickRight = function () {
        console.log('clickRight');
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
