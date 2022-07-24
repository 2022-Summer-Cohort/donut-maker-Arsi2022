class DonutMaker{
    constructor(donutCount, autoClickers, donutMultiplier){
        this.donutCount = donutCount;
        this.autoClickerCost = 10;
        this.autoClickers = autoClickers;
        this.donutMultiplier = donutMultiplier;
        this.donutMultiplierCost = 10;
        
    }
    get donutCount(){
        return this.donutCount;
    }
    get donutMultiplier(){
        return this.donutMultiplier;
    }
    get autoClickers(){
        return this.autoClickers;

    }
    bakeDonut(){
        this.donutCount += 1;
        
    }

}cd
export default DonutMaker;
