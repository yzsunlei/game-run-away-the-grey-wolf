var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    Data.getRectWidth = function () {
        if (Data._rectWidth == 0) {
            Data._rectWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return Data._rectWidth;
    };
    Data.getRectRow = function () {
        if (Data._rectRow == 0) {
            Data._rectRow = Math.ceil(this.getStageHeight() / Data.getRectWidth()) - 1;
        }
        return Data._rectRow;
    };
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    Data._rectWidth = 0;
    Data.score = 0;
    Data._rectRow = 0;
    return Data;
}());
__reflect(Data.prototype, "Data");
