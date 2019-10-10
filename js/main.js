enchant()
function Load(width,height){
  var core = new Core(width, height);
  enchant.Game._loadFuncs['js']  = function(src, callback) {
    var ele = document.createElement("script");
        ele.type = "text/javascript";
        ele.src = src;
        ele.onload = callback;
        ele.onerror = function() {
          throw new Error('Cannot load an asset: ' + src);
        };
        document.body.appendChild(ele);
      };
      core.preload("image/Black.png","image/Blue_back.png","image/side.png","image/door.png","image/key.png");
      core.preload("image/enemy.png","image/control.png","image/Objects.png","image/Start_button.png","image/Option_back.png");
      core.preload("image/end.png","image/Explosion.png","image/Menu.png","image/Start.png","image/Pause.png","image/Pause_back.png");
      core.fps = 10;
      core.onload = function(){
      if(window.localStorage){
        if(window.localStorage.getItem("syoken")!="false"){
          window.localStorage.setItem("syoken","false");
          window.localStorage.setItem("stage",1);
          Stage_Number = 1;
        }
        else Stage_Number = window.localStorage.getItem("stage");
      }

      function stage_loads(Number){
        switch (Number) {
          case 0:
            text = "切切0切切切切1切800切155切";
            break;
          case 1:
            text = "切切0切切切切1切5切5切";
            break;
          case 2:
            text = "3,0,4,4,4,5,20,3,3,5,5,0,3,3,4,5,4,20,3,5,20,20,20,3,4,1,0,3,5,0,1,1,5,0,1,20,4,4,5,5,1,20,4,20,3,1,0,3,4,20,3,5,4,0,1,20,0,5,0,5,5,3,3,20,3,3,3,3,20,0,20,1,0,4,4,3,1,5,3,5,3,0,1,20,5,1,1,20,5,1切5,1,20,5,20,0,0,1,20,0,3,20,4,1,20,0,20,5,1,5,5,5,4,5,5,5,1,5,3,5,3,1,4,4,20,5,5,5,5,20,4,4,0,5,1,20,0,0,3,0,4,4,1,4,20,20,1,20,3,3,3,3,5,1,5,1,0,4,3,0,4,1,20,3,3,1,1,5,20,0,5,20,3,3,3,0,20,20,5,5切0切横9縦9,横0縦1切0,2切↑,←,↓,←,←,↑,↑,→,→,↓,↓,←,←,↑,↑,↑,↑,→,↓,←,←,←,↓,↓,←,←,←,←,←,→,↓,→,→,↑,←,↑,↑,↑,←,←,↓,↓,→,↑,↓,←,↑,↑,→,→,→,↓,↓,→,←,↓,→,↓,→,←,→,←,↑,→,↑,→,→,→,→,↓,→,↓端,↑,←,←,←,←,↑,↑,↑,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓端切2切5切5切";
            break;
          case 3:
            text = "20,6,0,5,7,3,7,20,0,6,4,4,7,7,1,4,4,1,1,5,5,4,1,0,20,0,5,20,20,7,0,4,3,20,0,4,20,0,3,3,20,3,5,7,3,4,5,5,0,4,7,5,6,4,0,6,20,0,0,5,7,1,7,6,4,0,3,1,1,1,7,6,20,1,1,7,1,6,20,7,20,6,20,0,20,3,3,0,4,4切0,5,4,1,20,1,6,4,3,5,7,0,1,6,4,0,0,4,0,20,0,6,6,5,1,1,7,5,0,3,1,7,6,1,7,3,20,20,1,3,5,4,1,3,7,6,0,20,1,1,6,3,6,7,3,0,6,0,7,4,6,6,0,5,5,5,20,20,6,7,0,0,5,5,0,0,0,3,20,7,4,7,4,1,20,4,3,7,3,3切0切横9縦9,横0縦1切4,3切↑,→,↑端,↑,←,←,←,←,↑,↑,↑,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓端切2切5切5切";
            break;
          case 4:
            text = "3,5,20,5,7,4,6,7,0,20,6,0,6,3,6,7,20,1,4,3,4,20,20,20,1,3,1,20,1,0,1,0,6,4,1,3,5,3,0,0,4,1,3,0,3,5,20,7,0,0,3,3,6,4,20,6,20,6,5,20,4,0,1,7,5,20,1,1,3,1,1,7,0,0,3,4,5,6,5,20,6,3,3,1,6,5,7,0,0,4切0,5,3,7,0,0,5,0,5,4,3,0,5,4,1,7,7,7,7,4,1,7,3,1,20,3,1,6,7,1,1,1,4,6,6,7,7,6,4,1,1,0,3,7,7,6,1,6,20,7,7,20,20,0,6,5,3,4,20,5,6,3,20,7,6,7,6,7,7,4,6,0,20,7,1,7,5,0,0,0,0,0,20,20,5,3,7,7,6,6切76切横8縦9,横9縦8,横7縦9切2,3,0切↑,↑,↓,←,→,←,→,↑,→,↓,↓端,↑,→,←,→,↑,→,↓,↓,→,←,↑,↑,↓,↓,→,←端,↑,↑,→,↑,←,↑,↑,↑,←,↑,←,←,←,↑,→,↓,→,→,↑,←,↑,→,↓,→,↓,↓,→,↓,→,↓,↓,↓,←,↓,←,←,↑,←,←,↑,←,↓,→,↓,↓,←,←,←,↑,↑,↑,←,↑,↑,↑,↑,↑,↑,→,→,↓,←,↓,↓,↓,→,↓,→,→,→,→,↓,↓,↓,→,↓端切3切455切455切";
            break;
          case 5:
            text = "4,3,1,2,4,1,0,0,4,0,7,7,2,6,4,3,7,1,0,3,6,6,2,6,7,5,1,4,2,6,1,0,7,3,4,7,2,4,6,1,6,5,7,4,3,2,3,7,7,4,0,0,1,5,5,1,3,5,0,6,0,6,7,6,5,6,6,6,1,1,6,1,5,5,5,1,6,7,7,4,1,7,5,5,3,6,5,3,7,6切5,0,2,1,1,4,4,6,6,4,5,1,5,3,1,2,3,1,5,6,5,1,3,1,2,4,5,2,4,7,0,1,0,0,7,0,3,5,7,5,0,2,5,3,4,0,6,0,6,1,0,4,3,1,0,6,6,4,0,5,3,6,6,5,3,0,6,0,5,2,2,7,0,7,3,6,3,7,7,2,5,7,4,2,3,2,3,5,6,2切20切横9縦9,横6縦9,横7縦9切4,0,1切5端,↑,↑,↓,↓端,↑,↑,↑,↑,↑,↑,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓端切3切455切305切";
            break;
          case 6:
            text = "0,7,6,2,1,1,1,5,1,2,0,0,0,5,6,6,7,6,6,6,4,7,1,7,7,2,1,5,5,1,5,0,2,2,1,7,3,7,7,0,4,5,2,1,7,6,6,1,3,7,1,7,5,0,2,3,1,4,1,6,2,4,5,6,6,1,6,3,4,6,7,6,7,7,3,3,4,3,7,3,7,3,5,6,2,1,7,6,3,0切5,1,3,7,2,7,1,0,4,6,2,6,5,4,4,2,0,6,4,3,7,3,4,7,0,6,3,4,0,7,4,5,6,1,6,1,7,0,2,3,6,4,6,3,4,1,7,3,7,0,6,2,5,7,2,4,1,0,4,3,0,3,4,7,3,3,3,0,2,6,3,6,2,1,1,4,4,1,3,4,1,5,7,0,7,0,5,4,1,3切20切横5縦9切0切↑,↑,↑,↑,↑,↑,↑,←,←,←,↓,↓,↓,↓,↓,↓,↓,→,→,→端切1切5切5切";
            break;
          case 7:
            text = "3,7,5,0,7,2,7,6,2,6,7,4,4,6,4,5,4,4,6,1,0,1,0,3,5,2,3,7,6,7,5,1,4,6,7,2,6,4,0,3,6,6,5,1,3,2,1,3,0,1,4,4,1,2,0,0,4,7,1,1,1,3,4,4,7,6,1,3,6,3,0,2,0,5,1,7,1,7,5,4,4,7,6,6,4,4,5,4,1,1切0,5,4,2,4,1,5,7,5,3,6,2,7,3,3,0,0,4,4,3,7,2,7,0,6,4,4,1,4,4,6,2,6,3,1,0,0,4,2,6,2,2,6,7,7,1,7,3,4,7,2,2,0,1,0,3,0,6,0,2,1,5,4,5,4,1,3,3,4,3,4,6,3,1,4,6,2,3,1,3,3,3,3,7,3,4,1,7,5,6切0切横4縦5切4切5端切1切5切5切";
            break;
          case 8:
            text = "5,7,1,1,6,3,1,5,4,0,5,7,6,0,5,2,4,4,7,5,6,6,6,4,1,3,5,7,7,4,3,7,4,3,3,2,0,0,4,1,1,7,4,2,3,5,1,2,2,6,7,7,6,6,2,7,7,5,7,2,0,5,6,1,2,7,5,0,6,6,2,4,4,3,1,5,3,4,1,3,3,4,5,5,6,3,7,4,4,5切7,4,4,4,4,1,4,5,0,7,7,5,2,0,0,7,4,5,7,4,1,6,1,0,4,0,7,1,1,3,7,0,4,4,7,7,6,5,1,6,6,2,1,1,2,2,3,1,2,6,0,1,7,0,0,5,3,5,7,3,6,2,0,7,5,4,3,6,5,7,5,2,0,6,5,3,0,6,5,6,5,5,7,1,4,4,7,6,6,7切0切横9縦9,横0縦0切4,4切5端,5端切2切800切155切";
            break;
          case 9:
            text = "7,6,2,1,7,1,0,0,0,6,3,5,5,7,3,6,7,4,5,4,1,6,1,6,2,6,0,6,3,1,2,1,3,5,4,5,0,0,4,6,5,6,4,0,5,0,2,3,2,0,3,3,5,4,6,2,4,5,6,1,7,2,7,5,5,2,2,1,6,2,2,5,7,4,1,5,4,5,0,3,4,7,4,6,1,7,3,4,3,4切3,4,2,2,5,6,7,6,6,0,0,2,1,4,0,6,1,0,4,1,4,2,2,5,0,4,5,3,0,4,5,5,7,3,4,7,4,0,3,1,4,3,6,3,5,3,2,2,0,1,4,6,6,7,4,4,0,0,7,6,1,5,1,6,2,4,6,5,2,2,5,6,1,2,6,0,4,0,5,7,2,3,6,3,0,2,6,1,7,6切525切横7縦9切0切↑,→,↑,↑,↑,←,↑,↑,←,←,←,↓,↓,←,←,↑,←,←,←,←,↓,→,↑,→,↑,←,←,←,↓,↓,←,→,→,↓,←,↓,←,↓,←,↓,←,←,↑,←,↑,→,↑,→,↑,←,←,↑,→,→,→,↓,←,←,↓,↓,→,↓,↓,→,↑,→,↑,→,→,↓,←,↓,←,↓,↓,←,↑,↑,←,←,←,↓,↓,←,↓,↓,↓,→,→,↑,→,→,→,→,→,↓,←,↓,←,←,←,→,→,→,↑,↑,←,←,↓,→,→,↑,→,↑,↑,←,↓,→,→,↓,↓,←,↓,↑,→,→,→,↑,↑,←,↓,←,↓,←,↑,↑,↑,→,→,→,→,↓,→,↑,→,↑,↑,↑,←,←,↓,↓,←,←,↑,←,←,↑,↑,→,↑,→,↑,←,↓,→,→,↓,←,←,↑,←,↑,↑,←,←,↓,→,↓,→,→,→,↓,→,↑,↑,→,→,↓,↓,←,↓,←,↑,↑,↑,↑,←,→,↑,↑,↑,←,↑,←,↑,↑,↑,←,→,→,→,→,→,↓,↓,↓,→,→,↑,→,→,→,↓,↓,↑,↑,↑,↑,↑,↓,←,↓,←,←,↑,↑,←,←,←,↓,↓,↓,↓,→,↓,↓,→,→,↓,↓,←,↓,←,←,↓,↓,←,↓,←,←,←,↑,←,↑,↑,→,→,↑,↑,←,←,←,←,↓,←,←,←,↑,←,↑,↑,↑,→,↑,→,↑,↑,↓,←,←,←,↓,↓,→,→,↓,↓,↓,→,←,←,↓,↓,↓,↓,→,→,↑,←,↑,←,↑,←,←,↑,→,→,→,↓,←,←,↓,↓,→,→,→,→,←,↓,←,↓,←,←,↓,→,→,→,→,←,↑,←,→,→,→,→,↓,↓,←,↓,←,↓,→,→,↓,←,←,↓,→,→,→,↓,↓,←,←,←,←,→,↑,↑,←,←,←,↓,↓,→,↓,↓,↓,↑,↑,→,→,→,↓,→,→,→,→,↓,↓,↓,←,↓,↓,←,→,←,←,←,←,↑,←,↑,←,←,←,↓,←,↓,←,←,↑,←,↑,↑,↑,→,→,→,↓,←,↓,←,←,←,↓,↓,↓,↓,↓,→,→,↑,→,→,↑,→,→,↓,←,↓,←,←,↑,←,←,↓,↓,↓,↑,→,↓,↓,↑,↑,→,→,↓,↓,↓,→,↑,↑,↓,→,↓,→,↓,←,↑,↑,↑,↑,→,→,↓,↓,↓,←,↓,←,←,↓,↓,↓,→,↓,→,→,→,↓,↓,↓,←,→,→,→,→,↓,↓,←,↓,↓,↑,←,←,↑,→,→,→,→,←,↓,→,→,→,→,↑,↓,←,←,↓,↓,↓端切1切5切105切";
            break;
          case 10:
            text = "1,1,5,5,7,5,1,1,3,4,2,7,0,2,1,5,4,5,4,7,1,2,5,1,7,2,0,7,1,3,3,6,6,3,5,3,4,3,3,2,2,5,3,6,3,5,5,1,4,2,4,2,4,6,4,7,1,2,0,4,1,2,7,1,0,2,7,4,1,6,4,2,5,1,6,4,2,4,4,6,2,0,5,7,3,2,5,2,5,1切3,7,0,5,3,4,1,5,7,0,6,3,0,2,1,6,5,0,5,4,0,3,0,3,4,4,2,4,4,6,4,7,3,5,4,5,3,4,5,7,7,7,6,5,1,2,0,4,0,0,6,0,2,1,3,0,3,5,1,5,7,5,1,7,3,0,2,4,3,4,5,5,3,3,5,2,1,0,4,1,7,5,7,1,6,5,5,3,2,2切0切横9縦9,横9縦9,横9縦9切4,4,4切5端,5端,5端切3切5切55切";
            break;
          default:
            text = "切切0切切切切1切800切155切";
            break;
        }
        console.log("ステージ" + Number);
        core.replaceScene(GameScene(text,Number));
      }

      /*S = 0;
      V = 0;
      S1 = [];
      V1 = [];
      Time = 0;
      Time_es = [];
      Enemy_Speed = 2;
      Dead_TIME = 0;
      E_I = 0;
      E_I2 = 0;
      E_I3 = 3;
      Vamen = 0;
      E_syokiiti = [];
      Key_syokiiti = [800,155];
      console.log("aaa");
      Dame = "固";
      Sides = [];
      Verticals = [];
      Enemys = [];
      Stages_T = [];
      E_S = [];
      Enemy_moves = [[]];
      Choice = 0;
      Lav = 0;
      Stages_ON = "未";
      Hava = (width-505)/2;
      Cont = 0;*/
      var StartScene = function(){
         var scene = new Scene();                                // 新しいシーンを作る
         var Start = new Sprite(505,505);
         Start.image = core.assets["image/Start.png"];
         Start.x = 0;
         Start.y = 0;
         scene.addChild(Start);
         scene.on("touchstart",function(e){
           core.replaceScene(MenuScene(0));
         })
         return scene;
     };
      var MenuScene = function(){
      var scene = new Scene();

      var Hava = (width-505)/2;
      var Stages_T = [];

       var S_Input = new Entity();
       S_Input.moveTo(10,40);
       S_Input.width = 190;
       S_Input.height = 38;
       S_Input._element = document.createElement('input');
       S_Input._element.type = "text";
       S_Input._element.name = "myText";
       S_Input._element.placeholder = "ステージテキストを入力";

       var Hand = new Sprite(1,1);
       Hand.image = core.assets["image/key.png"];
       scene.addChild(Hand);

       var Blue_back = new Sprite(505,505);
       Blue_back.image = core.assets["image/Blue_back.png"];
       Blue_back.x = Hava + 0;
       Blue_back.y = 0;
       scene.addChild(Blue_back);

       var text_S = Class.create(Label, {
         initialize: function(x,y,z) {
         Label.call(this);
         this.x = Hava + x;
         this.y = y - 50 * (z%2)+25;
         if(z % 2 == 0) this.y -= 100;
         this.color = 'black';
         this.font = '40px "Arial"';
         this.on('enterframe', function(){
           this.text = ("ステージ"+z);
         });
         }
       });

       var Button_S = Class.create(Sprite, {
           initialize: function(x,y,z) {
               Sprite.call(this,252,50);
               this.x = Hava + x;
               this.y = y - 50 * (z%2)+25;
               if(z % 2 == 0) this.y -= 100;
               this.image = core.assets["image/side.png"];
               Stages_T[z] = new text_S(x+30,y+8,z);
           }
       });

       for (var i = 1; i < 11; i++){
         if(i%2==0) Button_S[i] = new Button_S(505-252,50*i,i);
         else Button_S[i] = new Button_S(0,50*i,i);
       }

       var Start_button = new Sprite(190,38);
       Start_button.image = core.assets["image/Start_button.png"];
       Start_button.x = width-190;//Hava + 0;
       Start_button.y = 515;
       scene.addChild(Start_button);

       var Random_button = new Sprite(190,38);
       Random_button.image = core.assets["image/Start_button.png"];
       Random_button.x = width-190;//Hava + 505-252;
       Random_button.y = 565;
       Random_button.frame = 1;
       scene.addChild(Random_button);

       var Option_button = new Sprite(190,38);
       Option_button.image = core.assets["image/Menu.png"];
       Option_button.x = width-190-200;//Hava + 505-252;
       Option_button.y = 565;
       Option_button.frame = 2;
       scene.addChild(Option_button);

       scene.on("touchstart",function(e){
         Hand.x = e.x;
         Hand.y = e.y;
         for (var i = 1; i < 11; i++){
           if(Button_S[i].intersect(Hand) && Random_button.frame == 3){
             scene.removeChild(S_Input);
             stage_loads(i);
             return;
           }
         }
         if(Random_button.intersect(Hand)){
           if(Random_button.frame == 1){
             S_Input.moveTo(width-190-200,515);
             S_Input._element.value = "";
             scene.addChild(S_Input);
             Start_button.frame = 4;
             Random_button.frame = 3;
             for (var i = 1; i < Stage_Number*1+1; i++){
               scene.addChild(Button_S[i]);
               scene.addChild(Stages_T[i]);
             }
             return;
           }
           else if(Random_button.frame == 3){
             Start_button.frame = 0;
             Random_button.frame = 1;
             scene.removeChild(S_Input);
             for (var i = 1; i < 11; i++){
               scene.removeChild(Button_S[i]);
               scene.removeChild(Stages_T[i]);
             }
             return;
           }
         }
         if(Start_button.intersect(Hand)){
           if(Start_button.frame == 0){
             core.replaceScene(MakeScene());
             return;
           }
           if(Start_button.frame == 4){
             core.replaceScene(GameScene(S_Input._element.value));
             return;
           }
         }
         if(Option_button.intersect(Hand)){
           core.pushScene(OptionScene());
           return;
         }
       })
         return scene;
       };
      var MakeScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Hava = (width-505)/2;
      var Cont = 0;
      var Sides = [];
      var S = 0;
      var Verticals = [];
      var V = 0;
      var S1 = [];
      var V1 = [];
      var Enemys = [];
      var Enemy_moves = [[]];
      var E_syokiiti = [];
      var E_S = [];
      var E_I = 0;
      var E_I2 = 0;
      var Key_syokiiti = [800,155];
      var Time_es = [];
      var Choice = 0;

        var Hand = new Sprite(1,1);
        Hand.image = core.assets["image/key.png"];
        scene.addChild(Hand);

        var Blue_back = new Sprite(505,505);
        Blue_back.image = core.assets["image/Blue_back.png"];
        Blue_back.x = Hava + 0;
        Blue_back.y = 0;
        scene.addChild(Blue_back);

        var Key = new Sprite(45,45);
        Key.image = core.assets["image/key.png"];
        Key.x = 800;
        Key.y = 155;
        scene.addChild(Key);

        var Objects = Class.create(Sprite, {
            initialize: function(x,y,z) {
                Sprite.call(this, 50, 50);
                if(i > 9){
                  x = x - 10;
                  y = y + 55;
                }
                this.x = 50*x+5;
                this.y = y + 515;
                this.image = core.assets["image/Objects.png"];
                this.frame = z;
                if(i!=0) this.opacity = 0.5;
            }
        });

        for (var i = 0; i < 12; i++){
          Objects[i] = new Objects(i,10,i);
          scene.addChild(Objects[i]);
        }

        var Start_button = new Sprite(190,38);
        Start_button.image = core.assets["image/Start_button.png"];
        Start_button.x = width-190-width/2+190/2;//Hava + 505-252;
        Start_button.y = 615;
        Start_button.frame = 2;
        scene.addChild(Start_button);

        var Random_button = new Sprite(190,38);
        Random_button.image = core.assets["image/Start_button.png"];
        Random_button.x = width-190-width/2+190/2;//Hava + 505-252;
        Random_button.y = 665;
        Random_button.frame = 5;
        scene.addChild(Random_button);

        var Option_button = new Sprite(190,38);
        Option_button.image = core.assets["image/Menu.png"];
        Option_button.x = width-190-width/2+190/2;//Hava + 505-252;
        Option_button.y = 820;
        Option_button.frame = 2;
        scene.addChild(Option_button);

        var Door = new Sprite(45,5);
        Door.image = core.assets["image/door.png"];
        Door.x = 800;
        Door.y = 0;
        scene.addChild(Door);

        var Enemy = Class.create(Sprite, {
            initialize: function(x, y) {
                Sprite.call(this, 45, 45);
                this.x = Hava + 50*x+5;
                this.y = 50*y+5;
                this.image = core.assets["image/enemy.png"];
            }
        });

        var text = Class.create(Label, {
          initialize: function(x,y,z) {
            Label.call(this);
            this.x = x;
            this.y = y;
            this.color = 'black';
            this.font = '20px "Arial"';
            this.on('enterframe', function(){
              this.text = (z);
            });
            scene.addChild(this);
          }
        });

        var Control1 = new Sprite(84,84);
        Control1.image = core.assets["image/control.png"];
        Control1.x = Cont;
        Control1.y = -Cont+height-84-84-84;
        Control1.rotation = 0;
        scene.addChild(Control1);

        var Control2 = new Sprite(84,84);
        Control2.image = core.assets["image/control.png"];
        Control2.x = Cont+84;
        Control2.y = -Cont+height-84-84;
        Control2.rotation = 90;
        scene.addChild(Control2);

        var Control3 = new Sprite(84,84);
        Control3.image = core.assets["image/control.png"];
        Control3.x = Cont+0;
        Control3.y = -Cont+height-84-84;
        Control3.rotation = 270;
        scene.addChild(Control3);

        var Control4 = new Sprite(84,84);
        Control4.image = core.assets["image/control.png"];
        Control4.x = Cont;
        Control4.y = -Cont+height-84;
        Control4.rotation = 180;
        scene.addChild(Control4);

        var Control5 = new Sprite(84,84);
        Control5.image = core.assets["image/control.png"];
        Control5.x = -Cont+width-84;
        Control5.y = -Cont+height-84-84-84;
        Control5.rotation = 0;
        scene.addChild(Control5);

        var Control6 = new Sprite(84,84);
        Control6.image = core.assets["image/control.png"];
        Control6.x = -Cont+width-84;
        Control6.y = -Cont+height-84-84;
        Control6.rotation = 90;
        scene.addChild(Control6);

        var Control7 = new Sprite(84,84);
        Control7.image = core.assets["image/control.png"];
        Control7.x = -Cont+width-84-84;
        Control7.y = -Cont+height-84-84;
        Control7.rotation = 270;
        scene.addChild(Control7);

        var Control8 = new Sprite(84,84);
        Control8.image = core.assets["image/control.png"];
        Control8.x = -Cont+width-84;
        Control8.y = -Cont+height-84;
        Control8.rotation = 180;
        scene.addChild(Control8);

        var Side = Class.create(Sprite, {
            initialize: function(x, y) {
                Sprite.call(this, 45, 5);
                this.x = Hava + 50*x+5;
                this.y = 50*y+50;
                this.image = core.assets["image/side.png"];
                if(Map_S[y][x]==1){
                  scene.addChild(this);
                  S1[S] = 1;
                }
                if(Map_S[y][x]==2){
                  this.image = core.assets["image/door.png"];
                  scene.addChild(this);
                  S1[S] = 2;
                }
                if(Map_S[y][x]==3){
                  this.image = core.assets["image/enemy.png"];
                  scene.addChild(this);
                  S1[S] = 3;
                }
                if(Map_S[y][x]==4){
                  this.image = core.assets["image/Black.png"];
                  scene.addChild(this);
                  S1[S] = 4;
                }
                S++;
            }
        });

        var Vertical = Class.create(Sprite, {
            initialize: function(x, y) {
                Sprite.call(this, 5, 45);
                this.x = Hava + 50*x+50;
                this.y = 50*y+5;
                this.image = core.assets["image/side.png"];
                if(Map_V[y][x]==1){
                  scene.addChild(this);
                  V1[V] = 1;
                }
                if(Map_V[y][x]==2){
                  this.image = core.assets["image/door.png"];
                  scene.addChild(this);
                  V1[V] = 2;
                }
                if(Map_V[y][x]==3){
                  this.image = core.assets["image/enemy.png"];
                  scene.addChild(this);
                  V1[V] = 3;
                }
                if(Map_V[y][x]==4){
                  this.image = core.assets["image/Black.png"];
                  scene.addChild(this);
                  V1[V] = 4;
                }
                V++;
            }
        });

        var Map_S = [
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0,0]
                    ];
        var Map_V = [
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0],
                      [0,0,0,0,0,0,0,0,0]
                    ];

        for (var x = 0; x < 10; x++) {
          for (var y = 0; y < 9; y++) {
            Sides[S] = new Side(x,y);
          }
        }

        for (var x = 0; x < 9; x++) {
          for (var y = 0; y < 10;y++) {
            Verticals[V] = new Vertical(x,y);
          }
        }

        Blue_back.addEventListener("enterframe",function(){
          if(E_I>0) idou_E();
        })

        function idou_E(){
          if (core.input.up){
            Enemy_moves[E_I-1][E_I2] = "↑";
            E_I2++;
            E_U(Enemys[E_I-1]);
          }
          if (core.input.right){
            Enemy_moves[E_I-1][E_I2] = "→";
            E_I2++;
            E_R(Enemys[E_I-1]);
          }
          if (core.input.left){
            Enemy_moves[E_I-1][E_I2] = "←";
            E_I2++;
            E_L(Enemys[E_I-1]);
          }
          if (core.input.down){
            Enemy_moves[E_I-1][E_I2] = "↓";
            E_I2++;
            E_D(Enemys[E_I-1]);
          }
        }

        function E_U(name){
          if(name.frame > 0 && name.frame < 3) name.frame++;
          for (var i = 0; i < S; i++) {
            if(Sides[i].x==name.x&&Sides[i].y==name.y-5&&(S1[i]==1||S1[i]==2||S1[i]==4)) return;
          }
          if(name.y<=5||name.y>455) ;
          else {
            if(name.frame==0){
              name.y-=50;
              E_I3++;
              E_S[E_I3] = new text(name.x,name.y,E_I3);
            }
          }
        }

        function E_D(name,z){
          if(name.frame > 1 && name.frame < 4) name.frame--;
          for (var i = 0; i < S; i++) {
            if(Sides[i].x==name.x&&Sides[i].y==name.y+45&&(S1[i]==1||S1[i]==2||S1[i]==4)) return;
          }
            if(name.y<5||name.y>455) ;
            else if(name.y>=455) ;//name.y = 5;
            else {
              if(name.frame==0){
                name.y+=50;
                E_I3++;
                E_S[E_I3] = new text(name.x,name.y,E_I3);
              }
            }
        }

        function E_R(name,z){
          for (var i = 0; i < V; i++) {
            if(Verticals[i].y==name.y&&Verticals[i].x==name.x+45&&(V1[i]==1||V1[i]==2||V1[i]==4)) return;
          }
          if(name.y<5||name.y>455) ;
          else if(name.x>=Hava + 455) ;
          else {
            if(name.frame==0){
              name.x+=50;
              E_I3++;
              E_S[E_I3] = new text(name.x,name.y,E_I3);
            }
          }
        }

        function E_L(name,z){
          for (var i = 0; i < V; i++) {
            if(Verticals[i].y==name.y&&Verticals[i].x==name.x-5&&(V1[i]==1||V1[i]==2||V1[i]==4)) return;
          }
          if(name.y<5||name.y>455) ;
          else if(name.x<=Hava +5) ;
          else {
            if(name.frame==0){
              name.x-=50;
              E_I3++;
              E_S[E_I3] = new text(name.x,name.y,E_I3);
            }
          }
        }

        function rand(n) {
          return Math.floor(Math.random() * (n + 1));
        }

        function kabeset(){
          for (var i = 0; i < S; i++) {
            if(S1[i]==1){
              Sides[i].image = core.assets["image/side.png"];
              scene.addChild(Sides[i]);
            }
            else if(S1[i]==2||S1[i]==20){
              S1[i]=2;
              Sides[i].image = core.assets["image/door.png"];
              scene.addChild(Sides[i]);
            }
            else if(S1[i]==3){
              Sides[i].image = core.assets["image/enemy.png"];
              scene.addChild(Sides[i]);
            }
            else if(S1[i]==4){
              Sides[i].image = core.assets["image/Black.png"];
              scene.addChild(Sides[i]);
            }
            else{
              scene.removeChild(Sides[i]);
            }
            if(V1[i]==1){
              Verticals[i].image = core.assets["image/side.png"];
              scene.addChild(Verticals[i]);
            }
            else if(V1[i]==2||V1[i]==20){
              V1[i]=2;
              Verticals[i].image = core.assets["image/door.png"];
              scene.addChild(Verticals[i]);
            }
            else if(V1[i]==3){
              Verticals[i].image = core.assets["image/enemy.png"];
              scene.addChild(Verticals[i]);
            }
            else if(V1[i]==4){
              Verticals[i].image = core.assets["image/Black.png"];
              scene.addChild(Verticals[i]);
            }
            else{
              scene.removeChild(Verticals[i]);
            }
          }
        }

        function randam_haiti(){
          for (var i = 0; i < S; i++) {
            V1[i] = rand(7);
            S1[i] = rand(7);
          }
          kabeset();
        }

        function set(x,y,z){
          if(z==8||z==9||z==10||z==11){
            for (var i = 0; i < 10; i++) {
              if(x>Hava +5+50*i&&x<Hava +45+50*i){
                x = i;
                break;
              }
            }
            for (var i = 0; i < 10; i++) {
              if(y>5+50*i&&y<45+50*i){
                y = i;
                break;
              }
            }
            if(x>10||y>10) return;
            if(z==8||z==10||z==11){
              Enemys[E_I] = new Enemy(x,y);
              Time_es[E_I] = 0;
              Enemy_moves[E_I] = [5];
              E_syokiiti[E_I] = "横"+x+"縦"+y;
              if(z==8) Enemys[E_I].frame = 1;
              if(z==11) Enemys[E_I].frame = 4;
              scene.addChild(Enemys[E_I]);
              E_I++;
              E_I2 = 0;
              if(z==10){
                E_I3 = 0;
                E_S[E_I3] = new text(Hava + 50*x+5,50*y+5,E_I3);
              }
            }
            if(z==9){
              if(Key.intersect(Hand)){
                Key.x = 800;
                Key.y = 155;
                Door.x = 800;
                Door.y = 150;
                Key_syokiiti = [Key.x,Key.y];
              }
              else {
                Key.x = Hava + x*50+5;
                Key.y = y*50+5;
                Door.x = Hava + 455;
                Door.y = 0;
                Key_syokiiti = [Key.x,Key.y];
              }
            }
          }
          if(z==1||z==3||z==5||z==7){
            for (var i = 0; i < 10; i++) {
              if(x>Hava +30+50*i&&x<Hava +80+50*i){
                x = i;
                break;
              }
            }
            for (var i = 0; i < 10; i++) {
              if(y>5+50*i&&y<45+50*i){
                y = i;
                break;
              }
            }
            if(z==1){
              if(V1[y+x*10]==1) V1[y+x*10] = 0;
              else V1[y+x*10] = 1;
            }
            if(z==3){
              if(V1[y+x*10]==2) V1[y+x*10] = 0;
              else V1[y+x*10] = 2;
            }
            if(z==5){
              if(V1[y+x*10]==3) V1[y+x*10] = 0;
              else V1[y+x*10] = 3;
            }
            if(z==7){
              if(V1[y+x*10]==4) V1[y+x*10] = 0;
              else V1[y+x*10] = 4;
            }
          }
          if(z==0||z==2||z==4||z==6){
            for (var i = 0; i < 10; i++) {
              if(x>Hava +5+50*i&&x<Hava +45+50*i){
                x = i;
                break;
              }
            }
            for (var i = 0; i < 10; i++) {
              if(y>30+50*i&&y<80+50*i){
                y = i;
                break;
              }
            }
            if(z==0){
              if(S1[y+x*9]==1) S1[y+x*9] = 0;
              else S1[y+x*9] = 1;
            }
            if(z==2){
              if(S1[y+x*9]==2) S1[y+x*9] = 0;
              else S1[y+x*9] = 2;
            }
            if(z==4){
              if(S1[y+x*9]==3) S1[y+x*9] = 0;
              else S1[y+x*9] = 3;
            }
            if(z==6){
              if(S1[y+x*9]==4) S1[y+x*9] = 0;
              else S1[y+x*9] = 4;
            }
          }
          kabeset();
        }

        function idou_E(){
          if (core.input.up){
            Enemy_moves[E_I-1][E_I2] = "↑";
            E_I2++;
            E_U(Enemys[E_I-1]);
          }
          if (core.input.right){
            Enemy_moves[E_I-1][E_I2] = "→";
            E_I2++;
            E_R(Enemys[E_I-1]);
          }
          if (core.input.left){
            Enemy_moves[E_I-1][E_I2] = "←";
            E_I2++;
            E_L(Enemys[E_I-1]);
          }
          if (core.input.down){
            Enemy_moves[E_I-1][E_I2] = "↓";
            E_I2++;
            E_D(Enemys[E_I-1]);
          }
        }

        scene.on("touchstart",function(e){
          Hand.x = e.x;
          Hand.y = e.y;
          if(E_I>0){
            if(Control1.intersect(Hand)||Control5.intersect(Hand)){
                Enemy_moves[E_I-1][E_I2] = "↑";
                E_I2++;
                E_U(Enemys[E_I-1]);
            }
            if(Control2.intersect(Hand)||Control6.intersect(Hand)){
                Enemy_moves[E_I-1][E_I2] = "→";
                E_I2++;
                E_R(Enemys[E_I-1]);
            }
            if(Control3.intersect(Hand)||Control7.intersect(Hand)){
                Enemy_moves[E_I-1][E_I2] = "←";
                E_I2++;
                E_L(Enemys[E_I-1]);
            }
            if(Control4.intersect(Hand)||Control8.intersect(Hand)){
                Enemy_moves[E_I-1][E_I2] = "↓";
                E_I2++;
                E_D(Enemys[E_I-1]);
            }
          }
          for (var i = 0; i < 12; i++){
            if(Objects[i].intersect(Hand)){
              for (var m = 0; m < E_S.length; m++) {
                scene.removeChild(E_S[m]);
              }
              for (var k = 0; k < 12; k++){
                Objects[k].opacity = 0.5;
              }
              Choice = Objects[i].frame;
              Objects[i].opacity = 1;
            }
          }
          if(Random_button.intersect(Hand)){
            randam_haiti();
            return;
          }
          if(Start_button.intersect(Hand)){
            var text = V1 + "切" ;
            text += S1 + "切";
            text += E_I2 + "切";
            text += E_syokiiti + "切";
            Enemy_frames = [];
            Enemy_moves2 = [];
            for (var i = 0; i < Enemy_moves.length; i++) {
              if(E_syokiiti=="") break;
              Enemy_frames[i] = Enemys[i].frame;
              Enemy_moves2[i] = Enemy_moves[i] + "端";
            }
            text += Enemy_frames + "切";
            text += Enemy_moves2 + "切";
            text += Enemy_moves.length + "切";
            text += Key_syokiiti[0] + "切";
            text += Key_syokiiti[1] + "切";
            core.replaceScene(GameScene(text));
            return;
          }
          if(Option_button.intersect(Hand)){
            core.pushScene(OptionScene());
            return;
          }
          if(e.y<480) set(e.x,e.y,Choice);
                          })
          return scene;
        };
      var OptionScene = function(){
         var scene = new Scene();                                // 新しいシーンを作る

         var Hand = new Sprite(1,1);
         Hand.image = core.assets["image/key.png"];
         scene.addChild(Hand);

         var Back = new Sprite(width,height);
         Back.x = 0;
         Back.y = 0;
         Back.image = core.assets["image/Option_back.png"];
         scene.addChild(Back);

         var Back_button = new Sprite(190,38);
         Back_button.image = core.assets["image/Start_button.png"];
         Back_button.x = width-190;//Hava + 0;
         Back_button.y = 515;
         Back_button.frame = 3;
         scene.addChild(Back_button);

         scene.on("touchstart",function(e){
           Hand.x = e.x;
           Hand.y = e.y;
           if(Back_button.intersect(Hand)){
             core.popScene();
             return;
           }
         })
         return scene;
     };
      var PauseScene = function(text,stage){
        var scene = new Scene();                                // 新しいシーンを作る

        var Pause_Time = 0;

        var Hand = new Sprite(1,1);
        Hand.image = core.assets["image/key.png"];
        scene.addChild(Hand);

        var Pause = new Sprite(width,height);
        Pause.image = core.assets["image/Pause.png"];

        var Back = new Sprite(width,height);
        Back.x = 0;
        Back.y = 0;
        Back.image = core.assets["image/Pause_back.png"];
        scene.addChild(Back);

        var Back_button = new Sprite(190,38);
        Back_button.image = core.assets["image/Start_button.png"];
        Back_button.x = width-190;//Hava + 0;
        Back_button.y = 515;
        Back_button.frame = 3;
        scene.addChild(Back_button);

        var Menu_button = new Sprite(190,38);
        Menu_button.image = core.assets["image/Menu.png"];
        Menu_button.x = width-190-200;// Hava + 0;
        Menu_button.y = 515;
        scene.addChild(Menu_button);

        var Restart_button = new Sprite(190,38);
        Restart_button.image = core.assets["image/Menu.png"];
        Restart_button.x = width-190-200;// Hava + 0;
        Restart_button.y = 565;
        Restart_button.frame = 4;
        scene.addChild(Restart_button);

        var Option_button = new Sprite(190,38);
        Option_button.image = core.assets["image/Menu.png"];
        Option_button.x = width-190;//Hava + 505-252;
        Option_button.y = 565;
        Option_button.frame = 2;
        scene.addChild(Option_button);

        Back.addEventListener("enterframe",function(){
          Pause_Time++;
          if(Pause_Time==10){
            Pause_Time = 0;
            scene.removeChild(Pause);
          }
          else if(Pause_Time==5){
            scene.addChild(Pause);
          }
        })

        scene.on("touchstart",function(e){
          Hand.x = e.x;
          Hand.y = e.y;
          if(Back_button.intersect(Hand)){
            core.popScene();
            return;
          }
          if(Option_button.intersect(Hand)){
            core.pushScene(OptionScene());
            return;
          }
          if(Menu_button.intersect(Hand)){
            core.popScene();
            core.replaceScene(MenuScene());
            return;
          }
          if(Restart_button.intersect(Hand)){
            core.popScene();
            core.popScene();
            core.replaceScene(GameScene(text,stage));
            return;
          }
        })
        return scene;
      };
      var GameScene = function(text,stage){
        var scene = new Scene();                                // 新しいシーンを作る

        var Hava = (width-505)/2;
        var Cont = 0;
        var Sides = [];
        var S = 0;
        var Verticals = [];
        var V = 0;
        var S1 = [];
        var V1 = [];
        var Enemys = [];
        var Key_syokiiti = [800,155];
        var Dead_TIME = 0;
        var Enemy_Speed = 2;
        var E_I = 0;
        var Enemy_moves = [[]];
        var Time_es = [];
        var Dame = "固";
        //var E_syokiiti = [];
        //var E_S = [];
        //var Choice = 0;

          var Hand = new Sprite(1,1);
          Hand.image = core.assets["image/key.png"];
          scene.addChild(Hand);

          var Option_button = new Sprite(190,38);
          Option_button.image = core.assets["image/Menu.png"];
          Option_button.x = width-190;//Hava + 505-252;
          Option_button.y = 565;
          Option_button.frame = 3;
          scene.addChild(Option_button);

          var Blue_back = new Sprite(505,505);
          Blue_back.image = core.assets["image/Blue_back.png"];
          Blue_back.x = Hava + 0;
          Blue_back.y = 0;
          scene.addChild(Blue_back);

          var Key = new Sprite(45,45);
          Key.image = core.assets["image/key.png"];
          Key.x = 800;
          Key.y = 155;
          scene.addChild(Key);

          var Explosion = new Sprite(135,135);
          Explosion.image = core.assets["image/Explosion.png"];

          //var Explosion2 = new Sprite(160,160);
          //Explosion2.image = core.assets["image/Explosion2.png"];

          var Door = new Sprite(45,5);
          Door.image = core.assets["image/door.png"];
          Door.x = 800;
          Door.y = 0;
          scene.addChild(Door);

          var Enemy = Class.create(Sprite, {
              initialize: function(x, y) {
                  Sprite.call(this, 45, 45);
                  this.x = Hava + 50*x+5;
                  this.y = 50*y+5;
                  this.image = core.assets["image/enemy.png"];
              }
          });

          var Control1 = new Sprite(84,84);
          Control1.image = core.assets["image/control.png"];
          Control1.x = Cont;
          Control1.y = -Cont+height-84-84-84;
          Control1.rotation = 0;
          scene.addChild(Control1);

          var Control2 = new Sprite(84,84);
          Control2.image = core.assets["image/control.png"];
          Control2.x = Cont+84;
          Control2.y = -Cont+height-84-84;
          Control2.rotation = 90;
          scene.addChild(Control2);

          var Control3 = new Sprite(84,84);
          Control3.image = core.assets["image/control.png"];
          Control3.x = Cont+0;
          Control3.y = -Cont+height-84-84;
          Control3.rotation = 270;
          scene.addChild(Control3);

          var Control4 = new Sprite(84,84);
          Control4.image = core.assets["image/control.png"];
          Control4.x = Cont;
          Control4.y = -Cont+height-84;
          Control4.rotation = 180;
          scene.addChild(Control4);

          var Control5 = new Sprite(84,84);
          Control5.image = core.assets["image/control.png"];
          Control5.x = -Cont+width-84;
          Control5.y = -Cont+height-84-84-84;
          Control5.rotation = 0;
          scene.addChild(Control5);

          var Control6 = new Sprite(84,84);
          Control6.image = core.assets["image/control.png"];
          Control6.x = -Cont+width-84;
          Control6.y = -Cont+height-84-84;
          Control6.rotation = 90;
          scene.addChild(Control6);

          var Control7 = new Sprite(84,84);
          Control7.image = core.assets["image/control.png"];
          Control7.x = -Cont+width-84-84;
          Control7.y = -Cont+height-84-84;
          Control7.rotation = 270;
          scene.addChild(Control7);

          var Control8 = new Sprite(84,84);
          Control8.image = core.assets["image/control.png"];
          Control8.x = -Cont+width-84;
          Control8.y = -Cont+height-84;
          Control8.rotation = 180;
          scene.addChild(Control8);

          var Side = Class.create(Sprite, {
              initialize: function(x, y) {
                  Sprite.call(this, 45, 5);
                  this.x = Hava + 50*x+5;
                  this.y = 50*y+50;
                  this.image = core.assets["image/side.png"];
                  if(Map_S[y][x]==1){
                    scene.addChild(this);
                    S1[S] = 1;
                  }
                  if(Map_S[y][x]==2){
                    this.image = core.assets["image/door.png"];
                    scene.addChild(this);
                    S1[S] = 2;
                  }
                  if(Map_S[y][x]==3){
                    this.image = core.assets["image/enemy.png"];
                    scene.addChild(this);
                    S1[S] = 3;
                  }
                  if(Map_S[y][x]==4){
                    this.image = core.assets["image/Black.png"];
                    scene.addChild(this);
                    S1[S] = 4;
                  }
                  S++;
              }
          });

          var Vertical = Class.create(Sprite, {
              initialize: function(x, y) {
                  Sprite.call(this, 5, 45);
                  this.x = Hava + 50*x+50;
                  this.y = 50*y+5;
                  this.image = core.assets["image/side.png"];
                  if(Map_V[y][x]==1){
                    scene.addChild(this);
                    V1[V] = 1;
                  }
                  if(Map_V[y][x]==2){
                    this.image = core.assets["image/door.png"];
                    scene.addChild(this);
                    V1[V] = 2;
                  }
                  if(Map_V[y][x]==3){
                    this.image = core.assets["image/enemy.png"];
                    scene.addChild(this);
                    V1[V] = 3;
                  }
                  if(Map_V[y][x]==4){
                    this.image = core.assets["image/Black.png"];
                    scene.addChild(this);
                    V1[V] = 4;
                  }
                  V++;
              }
          });

          var Map_S = [
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]
                      ];
          var Map_V = [
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0]
                      ];

          for (var x = 0; x < 10; x++) {
            for (var y = 0; y < 9; y++) {
              Sides[S] = new Side(x,y);
            }
          }

          for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 10;y++) {
              Verticals[V] = new Vertical(x,y);
            }
          }
          stage_load(text);

          var Black = new Sprite(45,45);
          Black.image = core.assets["image/Black.png"];
          Black.x = Hava + 5;
          Black.y = 505;
          scene.addChild(Black);

          reset();

          function reset(){
            kabeset();
            for (var k = 0; k < Enemys.length; k++){
              Enemys[k].x = Hava + E_syokiiti[k].substring(1,2)*50+5;
              Enemys[k].y = E_syokiiti[k].substring(3,4)*50+5;
              Time_es[k] = 0;
              if(Enemys[k].frame==2||Enemys[k].frame==3) Enemys[k].frame = 1;
            }
            if(Key_syokiiti[0] != 800 || Key_syokiiti[1] != 155){
              Door.x = Hava + 455;
              Door.y = 0;
              Key.x = Key_syokiiti[0];
              Key.y = Key_syokiiti[1];
              scene.addChild(Key);
              scene.addChild(Door);
            }
            Black.x = Hava + 5;
            Black.y = 505;
            Time = 0;
          }

          function idou_B(name){
              if (core.input.up) B_U(Black);
              if (core.input.down) B_D(Black);
              if (core.input.left) B_L(Black);
              if (core.input.right) B_R(Black);
              if(name.y<5||name.y>455){
                name.y-=5;
                if(name.y<-45){
                  core.replaceScene(ClearScene(text,stage));
                }
              }
          }

          function stage_load(text){
            console.log("ステージロード");
            if(window.localStorage){
              if(window.localStorage.getItem("Data_UM")!="存在する" && text ==""){
                stage_loads(0);
                return;
              }
              if(text == "") text = window.localStorage.getItem("text").split("切");
              else text = text.split("切");
              V1 = text[0];
              S1 = text[1];
              E_I2 = text[2];
              E_syokiiti = text[3];
              Enemy_frames = text[4];
              Enemy_frames = Enemy_frames.split(",");
              var test = text[5];
              for (var i = 0; i < text[6]; i++) {
                if(test=="") break;
                Enemys[E_I] = new Enemy(11,11);
                Enemys[E_I].frame = Enemy_frames[i]*1;
                E_I++;
              }
              for (var i = 0; i < E_I; i++) {
                if(test=="") break;
                if(Enemys[i].frame != 0 && Enemys[i].frame != 4) scene.addChild(Enemys[i]);
              }
              for (var i = 0; i < E_I; i++) {
                if(test=="") break;
                if(Enemys[i].frame == 0 || Enemys[i].frame == 4) scene.addChild(Enemys[i]);
              }
              test = test.split("端,");
              for (var i = 0; i < test.length; i++) {
                Enemy_moves[i] = test[i].split(",");
              }
              if(Enemy_moves[i-1][Enemy_moves[i-1].length-1]=="↑端") Enemy_moves[i-1][Enemy_moves[i-1].length-1] = "↑";
              if(Enemy_moves[i-1][Enemy_moves[i-1].length-1]=="↓端") Enemy_moves[i-1][Enemy_moves[i-1].length-1] = "↓";
              if(Enemy_moves[i-1][Enemy_moves[i-1].length-1]=="←端") Enemy_moves[i-1][Enemy_moves[i-1].length-1] = "←";
              if(Enemy_moves[i-1][Enemy_moves[i-1].length-1]=="→端") Enemy_moves[i-1][Enemy_moves[i-1].length-1] = "→";
              Key_syokiiti = [text[7]*1,text[8]*1];
              Key.x = text[7]*1;
              Key.y = text[8]*1;
              V1 = V1.split(",");
              S1 = S1.split(",");
              E_syokiiti = E_syokiiti.split(",");
              return;
            }
          }

          function B_U(name){
            for (var i = 0; i < S; i++) {
              if(Sides[i].x==name.x&&Sides[i].y==name.y-5&&(S1[i]==1||S1[i]==2||S1[i]==3)) return;
            }
            if(name.y<=5||name.y>455){
              if(name.x==Hava + 455&&name.y==5){
                if(Door.x==Hava + 455&&Door.y==0);
                else name.y-=2;
              }
            }
            else name.y-=50;
          }

          function B_D(name){
            for (var i = 0; i < S; i++) {
              if(Sides[i].x==name.x&&Sides[i].y==name.y+45&&(S1[i]==1||S1[i]==2||S1[i]==3)) return;
            }
              if(name.y<5||name.y>455) ;
              else if(name.y>=455) ;//name.y = 5;
              else name.y+=50;
          }

          function B_R(name){
            for (var i = 0; i < V; i++) {
              if(Verticals[i].y==name.y&&Verticals[i].x==name.x+45&&(V1[i]==1||V1[i]==2||V1[i]==3)) return;
            }
            if(name.y<5||name.y>455) ;
            else if(name.x>=Hava + 455) ;
            else name.x+=50;
          }

          function B_L(name){
            for (var i = 0; i < V; i++) {
              if(Verticals[i].y==name.y&&Verticals[i].x==name.x-5&&(V1[i]==1||V1[i]==2||V1[i]==3)) return;
            }
            if(name.y<5||name.y>455) ;
            else if(name.x<=Hava +5) ;
            else name.x-=50;
          }

          function idou(){
              if(Key.intersect(Black)){
                for (var i = 0; i < S; i++) {
                  if(S1[i]==2){
                    scene.removeChild(Sides[i]);
                    S1[i] = 20;
                  }
                }
                for (var i = 0; i < V; i++) {
                  if(V1[i]==2){
                    scene.removeChild(Verticals[i]);
                    V1[i] = 20;
                  }
                }
                Key.x = 800;
                Key.y = 155;
                Door.x = 800;
                Door.y = 150;
            }
          }

          function kabeset(){
            for (var i = 0; i < S; i++) {
              if(S1[i]==1){
                Sides[i].image = core.assets["image/side.png"];
                scene.addChild(Sides[i]);
              }
              else if(S1[i]==2||S1[i]==20){
                S1[i]=2;
                Sides[i].image = core.assets["image/door.png"];
                scene.addChild(Sides[i]);
              }
              else if(S1[i]==3){
                Sides[i].image = core.assets["image/enemy.png"];
                scene.addChild(Sides[i]);
              }
              else if(S1[i]==4){
                Sides[i].image = core.assets["image/Black.png"];
                scene.addChild(Sides[i]);
              }
              else{
                scene.removeChild(Sides[i]);
              }
              if(V1[i]==1){
                Verticals[i].image = core.assets["image/side.png"];
                scene.addChild(Verticals[i]);
              }
              else if(V1[i]==2||V1[i]==20){
                V1[i]=2;
                Verticals[i].image = core.assets["image/door.png"];
                scene.addChild(Verticals[i]);
              }
              else if(V1[i]==3){
                Verticals[i].image = core.assets["image/enemy.png"];
                scene.addChild(Verticals[i]);
              }
              else if(V1[i]==4){
                Verticals[i].image = core.assets["image/Black.png"];
                scene.addChild(Verticals[i]);
              }
              else{
                scene.removeChild(Verticals[i]);
              }
            }
          }

          function move(name,k){
            if(Time_es[k]==Enemy_moves[k].length) Time_es[k] = 0;
            //Enemy_moves[k][Time_es[k]] = 0;
            if(Enemy_moves[k][Time_es[k]]==0) Enemy_moves[k][Time_es[k]] = "↓";
            if(Enemy_moves[k][Time_es[k]]==1) Enemy_moves[k][Time_es[k]] = "↑";
            if(Enemy_moves[k][Time_es[k]]==2) Enemy_moves[k][Time_es[k]] = "←";
            if(Enemy_moves[k][Time_es[k]]==3) Enemy_moves[k][Time_es[k]] = "→";
            if(name.frame==4){
              var Kyori_x = Black.x - name.x;
              var Kyori_y = Black.y - name.y;
              if(Kyori_x < 0) Kyori_x = Kyori_x*-1;
              if(Kyori_y < 0) Kyori_y = Kyori_y*-1;
              if(Kyori_x > Kyori_y){
                if(Black.x - name.x > 0) Enemy_moves[k][Time_es[k]] = "→";
                if(Black.x - name.x < 0) Enemy_moves[k][Time_es[k]] = "←";
              }
              else if(Kyori_x < Kyori_y){
                if(Black.y - name.y > 0) Enemy_moves[k][Time_es[k]] = "↓";
                if(Black.y - name.y < 0) Enemy_moves[k][Time_es[k]] = "↑";
              }
              else{
                if(Black.x - name.x > 0) Enemy_moves[k][Time_es[k]] = "→";
                if(Black.x - name.x < 0) Enemy_moves[k][Time_es[k]] = "←";
                if(Black.y - name.y > 0) Enemy_moves[k][Time_es[k]] = "↓";
                if(Black.y - name.y < 0) Enemy_moves[k][Time_es[k]] = "↑";
              }
              if(Enemy_moves[k][Time_es[k]]==Dame){
                if(Dame=="↑"||Dame=="↓"){
                  if(Black.x - name.x > 0) Enemy_moves[k][Time_es[k]] = "→";
                  if(Black.x - name.x < 0) Enemy_moves[k][Time_es[k]] = "←";
                }
                if(Dame=="→"||Dame=="←"){
                  if(Black.y - name.y > 0) Enemy_moves[k][Time_es[k]] = "↓";
                  if(Black.y - name.y < 0) Enemy_moves[k][Time_es[k]] = "↑";
                }
                Dame = "固";
              }
            }
            if (Enemy_moves[k][Time_es[k]]=="↓"){
              if(name.frame > 1 && name.frame < 4) name.frame--;
              for (var i = 0; i < S; i++) {
                if(Sides[i].x==name.x&&Sides[i].y==name.y+45&&(S1[i]==1||S1[i]==2||S1[i]==4)){
                  if(name.frame==0) return;
                  if(name.frame==4){
                    Dame = "↓";
                    return;
                  }
                }
              }
                if(name.y<5||name.y>455);
                else if(name.y>=455);
                else {
                  if(name.frame==0||name.frame==4) name.y+=50;
                }
            }
            if (Enemy_moves[k][Time_es[k]]=="↑"){
              if(name.frame > 0 && name.frame < 3) name.frame++;
              for (var i = 0; i < S; i++) {
                if(Sides[i].x==name.x&&Sides[i].y==name.y-5&&(S1[i]==1||S1[i]==2||S1[i]==4)){
                  if(name.frame==0) return;
                  if(name.frame==4){
                    Dame = "↑";
                    return;
                  }
                }
              }
              if(name.y<=5||name.y>455);
              else {
                if(name.frame==0||name.frame==4) name.y-=50;
              }
            }
            if (Enemy_moves[k][Time_es[k]]=="←"){
              for (var i = 0; i < V; i++) {
                if(Verticals[i].y==name.y&&Verticals[i].x==name.x-5&&(V1[i]==1||V1[i]==2||V1[i]==4)){
                  if(name.frame==0) return;
                  if(name.frame==4){
                    Dame = "←";
                    return;
                  }
                }
              }
              if(name.y<5||name.y>455) ;
              else if(name.x<=Hava +5);
              else {
                if(name.frame==0||name.frame==4) name.x-=50;
              }
            }
            if (Enemy_moves[k][Time_es[k]]=="→"){
              for (var i = 0; i < V; i++) {
                if(Verticals[i].y==name.y&&Verticals[i].x==name.x+45&&(V1[i]==1||V1[i]==2||V1[i]==4)){
                  if(name.frame==0) return;
                  if(name.frame==4){
                    Dame = "→";
                    return;
                  }
                }
              }
              if(name.y<5||name.y>455);
              else if(name.x>=Hava +455);
              else {
                if(name.frame==0||name.frame==4) name.x+=50;
              }
            }
          }

          Explosion.addEventListener("enterframe",function(){
            Explosion.frame++;
            if(Explosion.frame==3){
            //if(Explosion2.frame==12){
              core.replaceScene(GameoverScene(text,stage));
            }
          })

          Black.addEventListener("enterframe",function(){
            idou_B(Black);
            idou();
            Time++;
            if(Dead_TIME < 0) Dead_TIME++;
            for (var i = 0; i < Enemys.length; i++) {
              if(Enemys[i].intersect(Black)&&Enemys[i].frame!=1&&Enemys[i].frame!=2){
                Explosion.x = Hava + Black.x-45;
                Explosion.y = Black.y-45;
                //Explosion2.x = Black.x-58;
                //Explosion2.y = Black.y-58;
                scene.addChild(Explosion);
                scene.removeChild(Black);
                return;
              }
            }
            if(Time%Enemy_Speed==0){
              for (var k = 0; k < Enemys.length; k++) {
                move(Enemys[k],k);
                Time_es[k] = Time_es[k]+1;
              }
            }
          })

          scene.on('touchmove', function(e){
              /*
              if(Black.intersect(Blue_back)){
                if(Black.x == 455+Hava&& Black.y == 5){
                  if(e.x > 425+Hava && e.y<20){
                    B_U(Black);
                  }
                }
                for (var i = 0; i < 10; i++) {
                  if(e.x>Hava +5+50*i&&e.x<Hava +45+50*i){
                    e.x = i;
                    break;
                  }
                }
                for (var i = 0; i < 10; i++) {
                  if(e.y>5+50*i&&e.y<45+50*i){
                    e.y = i;
                    break;
                  }
                }
                if(e.x > 10 || e.y >10) return;
                e.x = e.x*50+5+Hava;
                e.y = e.y*50+5;
                if (Black.y-50 == e.y) B_U(Black);
                if (Black.y+50 == e.y) B_D(Black);
                if (Black.x-50 == e.x) B_L(Black);
                if (Black.x+50 == e.x) B_R(Black);
              }*/
              if(Hand.y>e.y+50){
                B_U(Black);
                Hand.x = e.x;
                Hand.y = e.y;
              }
              else if(Hand.y<e.y-50){
                B_D(Black);
                Hand.x = e.x;
                Hand.y = e.y;
              }
              else if(Hand.x>e.x+50){
                B_L(Black);
                Hand.x = e.x;
                Hand.y = e.y;
              }
              else if(Hand.x<e.x-50){
                B_R(Black);
                Hand.x = e.x;
                Hand.y = e.y;
              }
          });

          scene.on("touchstart",function(e){
            Hand.x = e.x;
            Hand.y = e.y;
            if(Control1.intersect(Hand)||Control5.intersect(Hand)){
              B_U(Black);
            }
            if(Control2.intersect(Hand)||Control6.intersect(Hand)){
              B_R(Black);
            }
            if(Control3.intersect(Hand)||Control7.intersect(Hand)){
              B_L(Black);
            }
            if(Control4.intersect(Hand)||Control8.intersect(Hand)){
              B_D(Black);
            }
            if(Option_button.intersect(Hand)){
              core.pushScene(PauseScene(text,stage));
              return;
            }
            })
            return scene;
          };
      var ClearScene = function(text,stage){
        var scene = new Scene();

        var Hava = (width-505)/2;
        //var Cont = 0;
        //var Sides = [];
        //var S = 0;
        //var Verticals = [];
        //var V = 0;
        //var S1 = [];
        //var V1 = [];
        //var Enemys = [];
        //var Key_syokiiti = [800,155];
        //var Dead_TIME = 0;
        //var Enemy_Speed = 2;
        //var E_I = 0;
        //var Enemy_moves = [[]];
        //var Time_es = [];
        //var E_syokiiti = [];
        //var E_S = [];
        //var Choice = 0;

        var Hand = new Sprite(1,1);
        Hand.image = core.assets["image/key.png"];
        scene.addChild(Hand);

        var Blue_back = new Sprite(505,505);
        Blue_back.image = core.assets["image/Blue_back.png"];
        Blue_back.x = Hava + 0;
        Blue_back.y = 0;
        scene.addChild(Blue_back);

        var End = new Sprite(400,205);
        End.image = core.assets["image/end.png"];
        End.x = Hava + 55;
        End.y = 155;
        End.frame = 1;
        scene.addChild(End);

        var Start_button = new Sprite(190,38);
        Start_button.image = core.assets["image/Menu.png"];
        Start_button.x = width-190;//Hava + 0;
        Start_button.y = 515;
        Start_button.frame = 4;
        scene.addChild(Start_button);

        var Random_button = new Sprite(190,38);
        Random_button.image = core.assets["image/Start_button.png"];
        Random_button.x = width-190-200;//Hava + 505-252;
        Random_button.y = 565;
        Random_button.frame = 6;
        scene.addChild(Random_button);

        var Menu_button = new Sprite(190,38);
        Menu_button.image = core.assets["image/Menu.png"];
        Menu_button.x = width-190;// Hava + 0;
        Menu_button.y = 565;
        scene.addChild(Menu_button);

        var Next_button = new Sprite(190,38);
        Next_button.image = core.assets["image/Menu.png"];
        Next_button.x = width-190-200;//Hava + 505-252;
        Next_button.y = 515;
        Next_button.frame = 1;
        if(stage > 0 && stage <10){
          if(Stage_Number == stage){
            Stage_Number++;
            window.localStorage.setItem("stage",Stage_Number);
          }
          scene.addChild(Next_button);
        }

        var S_Input = new Entity();
        S_Input.moveTo(10,40);
        S_Input.width = 190;
        S_Input.height = 38;
        S_Input._element = document.createElement('input');
        S_Input._element.type = "text";
        S_Input._element.name = "myText";
        S_Input._element.placeholder = "ステージテキストを入力";

        var label1 = new Label();
                label1.x = 5;
                label1.y = 5;
                label1.color = 'red';
                label1.font = '40px "Arial"';
                label1.on('enterframe', function(){
                         label1.text = ("ステージ保存");
                         });

        scene.on("touchstart",function(e){
          Hand.x = e.x;
          Hand.y = e.y;
          if(Start_button.intersect(Hand)){
            core.replaceScene(GameScene(text));
          }
          if(Menu_button.intersect(Hand)){
            core.replaceScene(MenuScene());
          }
          if(Next_button.intersect(Hand)){
            stage_loads(stage+1);
          }
          if(Random_button.intersect(Hand)){
            if(window.localStorage){
              window.localStorage.setItem("Data_UM","存在する");
              window.localStorage.setItem("text",text);
              S_Input._element.value = text;
              scene.addChild(label1);
              scene.addChild(S_Input);
            }
          }
          })
        return scene;
      };
      var GameoverScene = function(text,stage){
        var scene = new Scene();
        var Hava = (width-505)/2;
        //var Cont = 0;
        //var Sides = [];
        //var S = 0;
        //var Verticals = [];
        //var V = 0;
        //var S1 = [];
        //var V1 = [];
        //var Enemys = [];
        //var Key_syokiiti = [800,155];
        //var Dead_TIME = 0;
        //var Enemy_Speed = 2;
        //var E_I = 0;
        //var Enemy_moves = [[]];
        //var Time_es = [];
        //var E_syokiiti = [];
        //var E_S = [];
        //var Choice = 0;

        var Hand = new Sprite(1,1);
        Hand.image = core.assets["image/key.png"];
        scene.addChild(Hand);

        var Blue_back = new Sprite(505,505);
        Blue_back.image = core.assets["image/Blue_back.png"];
        Blue_back.x = Hava + 0;
        Blue_back.y = 0;
        scene.addChild(Blue_back);

        var End = new Sprite(400,205);
        End.image = core.assets["image/end.png"];
        End.x = Hava + 55;
        End.y = 155;
        End.frame = 0;
        scene.addChild(End);

        var Start_button = new Sprite(190,38);
        Start_button.image = core.assets["image/Menu.png"];
        Start_button.x = width-190;//Hava + 0;
        Start_button.y = 515;
        Start_button.frame = 4;
        scene.addChild(Start_button);

        var Menu_button = new Sprite(190,38);
        Menu_button.image = core.assets["image/Menu.png"];
        Menu_button.x = width-190;// Hava + 0;
        Menu_button.y = 565;
        scene.addChild(Menu_button);

        scene.on("touchstart",function(e){
          Hand.x = e.x;
          Hand.y = e.y;
          if(Start_button.intersect(Hand)){
            if(stage > 0 && stage < 10){
              stage_loads(stage);
              return;
            }
            core.replaceScene(GameScene(text));
          }
          if(Menu_button.intersect(Hand)){
            core.replaceScene(MenuScene());
          }
        })
        return scene;
      };
      core.replaceScene(StartScene());  // ゲームの_rootSceneをスタートシーンに置き換える
      }
      core.start()
}
