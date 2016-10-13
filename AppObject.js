function App(n,m,s){

    //Declare your instance variables here.
    this.Name = n
    this.Memory = m
    this.State = s

    //Declare the instance function open here.
    this.open = function(){
      this.State = "Active";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.State == "Active"){
        this.State = "Sleep";
        this.Memory = this.Memory*.5
      }
    }
    //Declare the instance function active here.
    this.Active = function(){
      if(this.State == "Sleep"){
        this.State = "Active";
        this.Memory = this.Memory*2;
      }
    }
    //Declare the instance function close here.
    this.Close = function(){
      if(this.State != null){
        this.Memory = 0;
        this.State = null;
      }
    }
}
//Use the constructor to create 4 App objects below.
var Spotify = new App("Spotify",50,"Active");
var Word = new App("Word",200,"Sleep");
var Calculator = new App("Calculator",15,null);
var Messenger = new App("iMessage",300,"Active");

//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var appList = [Spotify,Word,Calculator,Messenger];
