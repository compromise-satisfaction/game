enchant()
function Load(width,height){
  var core = new Core(width, height);
  core.preload("image/Start.png","image/Main.png","image/Number.png");
  core.fps = 10;
  core.onload = function(){
    var StartScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る
      var Start = new Sprite(505,505);
      Start.image = core.assets["image/Start.png"];
      Start.x = 0;
      Start.y = 0;
      scene.addChild(Start);
      scene.on("touchstart",function(e){
        core.replaceScene(MainScene());
      })
      return scene;
    };
    var MainScene = function(V){
      var scene = new Scene();                                // 新しいシーンを作る

      var Hand = new Sprite(1,1);
      Hand.image = core.assets["image/Main.png"];
      scene.addChild(Hand);

      var Main = new Sprite(465,465);
      Main.image = core.assets["image/Main.png"];
      Main.x = 0;
      Main.y = 0;
      scene.addChild(Main);

      var Start = new Sprite(45,45);
      Start.image = core.assets["image/Number.png"];
      Start.x = width-45;
      Start.y = height-45;
      Start.frame = 10;
      scene.addChild(Start);

      var Numbers = Class.create(Sprite, {
        initialize: function(x,y,z,o) {
          Sprite.call(this,45,45);
          this.image = core.assets["image/Number.png"];
          this.x = x;
          this.y = y;
          this.frame = z;
          if(o) this.opacity = 0.5;
          scene.addChild(this);
        }
      });

      var I = 0;
      var K = 0;
      var Choice = 0;

      for (var i = 1; i < 82; i++){
        Number[i] = new Numbers(5+K,5+I,0);
        K = K+50;
        if(i%3==0) K = K+5;
        if(i%9==0){
          I = I+50;
          if(i%27==0) I = I+5;
          K=0;
        }
      }

      for (var i = 1; i < 10; i++){
        Set[i] = new Numbers((i-1)*50,500,i,true);
      }

      if(V!=undefined){
        for (var i = 1; i < 82; i++){
          Number[i].frame = V[i-1];
        }
      }

      scene.on("touchstart",function(e){
        Hand.x = e.x;
        Hand.y = e.y;
        for (var i = 1; i < 82; i++){
          if(Number[i].intersect(Hand)){
            if(Choice==0){
              if(Number[i].frame==9) Number[i].frame=-1;
              Number[i].frame++;
            }
            else{
              if(Choice==Number[i].frame) Number[i].frame = 0;
              else Number[i].frame = Choice;
            }
          }
        }
        for (var i = 1; i < 10; i++){
          if(Set[i].intersect(Hand)){
            for (var k = 1; k < 10; k++){
              Set[k].opacity = 0.5;
            }
            if(Choice == Set[i].frame){
              Choice = 0;
              Set[i].opacity = 0.5;
            }
            else {
              Choice = Set[i].frame;
              Set[i].opacity = 1;
            }
          }
        }
        if(Start.intersect(Hand)){
          var V = [];
          for (var i = 0; i < 81; i++){
            V[i] = Number[i+1].frame;
          }
          core.replaceScene(AnswerScene(V));
        }
      })
      return scene;
    };
    var AnswerScene = function(V){
      var scene = new Scene();

      var Hand = new Sprite(1,1);
      Hand.image = core.assets["image/Main.png"];
      scene.addChild(Hand);

      var Start = new Sprite(45,45);
      Start.image = core.assets["image/Number.png"];
      Start.x = width-45;
      Start.y = height-45;
      Start.frame = 11;
      scene.addChild(Start);

      var Main = new Sprite(465,465);
      Main.image = core.assets["image/Main.png"];
      Main.x = 0;
      Main.y = 0;
      scene.addChild(Main);
      var Numbers = Class.create(Sprite, {
        initialize: function(x,y,z) {
          Sprite.call(this,45,45);
          this.image = core.assets["image/Number.png"];
          this.x = x;
          this.y = y;
          this.frame = z;
          scene.addChild(this);
        }
      });

      var label = new Label();
        label.x = 0;
        label.y = 470;
        label.color = 'red';
        label.font = '40px "Arial"';
        label.text = ("");
        scene.addChild(label);

      var I = 0;
      var K = 0;

      for (var i = 1; i < 82; i++){
        Number[i] = new Numbers(5+K,5+I,V[i-1]);
        K = K+50;
        if(i%3==0) K = K+5;
        if(i%9==0){
          I = I+50;
          if(i%27==0) I = I+5;
          K=0;
        }
      }
      for (var i = 1; i < 82; i++){
        if(V[i-1]==0||V[i-1]>9) V[i-1] = "123456789";
      }

      Main.addEventListener("enterframe",function(){
        var e = 0;
        var f = 0;
        for (var d = 0; d < 9; d++){
          for (var i = 1+d*9; i < 10+d*9; i++){
            for(var c = 1; c < 10; c++){
              if(V[i-1]==c){
                for (var k = 1+d*9; k < 10+d*9; k++){
                  if((V[k-1]+"").length==9&&V[k-1]!="000000009") V[k-1] = V[k-1].substring(0,c-1) + "0" + V[k-1].substring(c);
                }
              }
            }
          }
          for (var i = 1+d; i < 74+d; i = i+9){
            for(var c = 1; c < 10; c++){
              if(V[i-1]==c){
                for (var k = 1+d; k < 74+d; k = k+9){
                  if((V[k-1]+"").length==9&&V[k-1]!="000000009") V[k-1] = V[k-1].substring(0,c-1) + "0" + V[k-1].substring(c);
                }
              }
            }
          }
          if(d==3||d==6){
            e = e+27;
            f = 0;
          }
          for (var i = 1+e+f*3; i < 22+e+f*3; i++){
            if(i==4+e+f*3||i==13+e+f*3){
              i = i+5;
              continue;
            }
            for(var c = 1; c < 10; c++){
              if(V[i-1]==c){
                for (var k = (1+e)+f*3; k < (22+e)+f*3; k++){
                  if(k==4+e+f*3||k==13+e+f*3){
                    k = k+5;
                    continue;
                  }
                  if((V[k-1]+"").length==9&&V[k-1]!="000000009") V[k-1] = V[k-1].substring(0,c-1) + "0" + V[k-1].substring(c);
                }
              }
            }
          }
          f++;
        }
        var e = 0;
        var f = 0;
        for (var d = 0; d < 9; d++){
          if(d==3||d==6){
            e = e+27;
            f = 0;
          }
          for (var i = 1+e+f*3; i < 22+e+f*3; i++){
            if(i==4+e+f*3||i==13+e+f*3){
              i = i+5;
              continue;
            }
            var N = [0,0,0,0,0,0,0,0,0];
            var S = [0,0,0,0,0,0,0,0,0];
            for (var k = (1+e)+f*3; k < (22+e)+f*3; k++){
              if(k==4+e+f*3||k==13+e+f*3){
                k = k+5;
                continue;
              }
              if(V[k-1].length==9){
                for (var c = 0; c < 9; c++){
                  if(V[k-1].substring(c,c+1)==c+1){
                    N[c]++;
                    S[c] = k-1;
                  }
                }
              }
            }
          }
          for (var c = 0; c < 9; c++){
            if(N[c] == 1) V[S[c]] = c+1;
          }
          f++;
        }
        /*
        for (var d = 0; d < 9; d++){
          for (var i = 1+d*9; i < 10+d*9; i++){
            var N = [0,0,0,0,0,0,0,0,0];
            var S = [0,0,0,0,0,0,0,0,0];
            for (var k = 1+d*9; k < 10+d*9; k++){
              if(V[k-1].length==9){
                for (var c = 0; c < 9; c++){
                  if(V[k-1].substring(c,c+1)==c+1){
                    N[c]++;
                    S[c] = k-1;
                  }
                }
              }
            }
          }
          for (var c = 0; c < 9; c++){
            if(N[c] == 1) V[S[c]] = c+1;
          }
        }
        for (var d = 0; d < 9; d++){
          for (var i = 1+d; i < 74+d; i = i+9){
            var N = [0,0,0,0,0,0,0,0,0];
            var S = [0,0,0,0,0,0,0,0,0];
            for (var k = 1+d; k < 74+d; k = k+9){
              if(V[k-1].length==9){
                for (var c = 0; c < 9; c++){
                  if(V[k-1].substring(c,c+1)==c+1){
                    N[c]++;
                    S[c] = k-1;
                  }
                }
              }
            }
          }
          for (var c = 0; c < 9; c++){
            if(N[c] == 1) V[S[c]] = c+1;
          }
        }
        */
        for (var i = 1; i < 82; i++){
          if(V[i-1]=="100000000") V[i-1] = 1;
          if(V[i-1]=="020000000") V[i-1] = 2;
          if(V[i-1]=="003000000") V[i-1] = 3;
          if(V[i-1]=="000400000") V[i-1] = 4;
          if(V[i-1]=="000050000") V[i-1] = 5;
          if(V[i-1]=="000006000") V[i-1] = 6;
          if(V[i-1]=="000000700") V[i-1] = 7;
          if(V[i-1]=="000000080") V[i-1] = 8;
          if(V[i-1]=="000000009") V[i-1] = 9;
          Number[i].a = V[i-1];
          for (var k = 1; k < 10; k++){
            if(V[i-1]==k) Number[i].frame = k;
          }
        }
      })

      scene.on("touchstart",function(e){
        Hand.x = e.x;
        Hand.y = e.y;
        for (var i = 1; i < 82; i++){
          if(Number[i].intersect(Hand)){
            label.text = Number[i].a;
          }
        }
        if(Start.intersect(Hand)){
          var V = [];
          for (var i = 0; i < 81; i++){
            V[i] = Number[i+1].frame;
          }
          core.replaceScene(MainScene(V));
        }
      })

      return scene;
    };
    core.replaceScene(StartScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
