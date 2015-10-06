angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $timeout, Datas) {
  var zamanlama;
  var TIMER = function (fn, time) {
    var fn2 = function () {
      fn();
      zamanlama = $timeout(fn2, time);
      return zamanlama;
    }
    test_uret();
    return fn2();
  }
  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
  
  var arr = {};
  var sayac= 0;
  var len = {};
  var secim_arr = ["kurallar","istisnalar"]
  var dogru_cevap = [];
  function test_uret(state, durum) {
    for (var i = secim_arr.length - 1; i >= 0; i--) {
      arr[secim_arr[i]] = Datas.randomArr($stateParams.chatId, secim_arr[i]);
      len[secim_arr[i]] = arr[secim_arr[i]].length-1;
    };
  }
  
  function soru_uret(secim) {
    var secenek = [];
    var secim = Math.ceil(Math.random()*2)-1;

    secenek.push(madde_uret(secim_arr[secim], "doğru"));
    secenek.push(madde_uret("kurallar", "yanlış"));
    secenek.push(madde_uret("kurallar", "yanlış"));
    
    sayac++;
    sayac = sayac < len.kurallar ? sayac : 0;
    return secenek;
  }

  function madde_uret(state, durum) {
    var id = durum=="doğru" && state=="kurallar" ? arr[state][sayac] : (Math.floor(Math.random()*len[state]));
    var method = Datas["getOrnek"+state];
    var madde = "";
    if (durum == "doğru"){
      madde = method( id, $stateParams.chatId);
      dogru_cevap = [id, madde];
    }
    else
      madde = method( id, $stateParams.chatId).replace(/'/gm, "");

    return madde;
  }
  
  var sure = 9000;
  var baslat = function (argument) {
    $scope.gosterge = "w100";

    var secenekler = soru_uret();
    $scope.secenekler = shuffle(secenekler);
      
    $timeout(function(){$scope.gosterge = "w0";},1000);
  }
  var tt = TIMER(baslat, sure);
  $scope.puan = 0;
  $scope.durum = "";

  $scope.cevapla = function (cevap) {
    if(dogru_cevap[1] === cevap) {$scope.puan++; $scope.durum = "dogru"}
    else {$scope.puan--; $scope.durum = "yanlis"}
    $timeout.cancel(zamanlama);
    $timeout(function(){
      $scope.durum = "";
      tt = TIMER(baslat, sure);
    },500);

  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
