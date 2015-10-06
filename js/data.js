angular.module('starter.datas', [])

.factory('Datas', function() {
var isaretler = [
	{
		"kurallar": [
			/*1: */"Kişi adları, soyadları ve takma adları",
			/*2: */"Millet, boy, ormak adları",
			/*3: */ "Devlet adları",
			/*4: */ "Din ve mitoloji ile ilgili özel adlar",
			/*5: */ "Coğrafya ile ilgili yer adlar: Kıta, deniz, nehir, göl, dağ, boğaz, geçit, yayla; ülke, bölge, il, ilçe, köy, semt, bulvar, cadde, sokak vb.",
			/*6: */"Gök bilimi ile ilgili adlar",
			/*7: */"Saray, köşk, han, köprü, anıt vb.",
			/*8: */"Kitap, dergi, gazete ve sanat eserleri",
			/*9: */ "Kanun, tüzük, yönetmelik, yönerge, ve genelge adları",
			/*10: */ "Hayvanalara verilen özel adlar",
			/*11: */ "Kişi adından sonra gelen saygı sözleri",
			/*12: */ "Kısaltmalara",
			/*13: */ "Sayılara getirilen ekleri ayırmak için",
			/*14: */ "Akım, çağ ve dönem ve şavaş adları"
		],
		"istisnalar": [
			/*1: */ "Kurum, kuruluş, kurul, birleşim, oturum adlarına gelen ekler kesmeyle ayrılmaz.",
			/*1: */ "İş yeri adlarına gelen ekler kesmeyle ayrılmaz.",
			/*2: */ "Özel adlara getirilen yapım ekleri, çokluk eki ve bunlardan sonra gelen diğer ekler kesmeyle ayrılmaz.",
			/*3: */ "Sonunda nokta bulunan kısaltmalarla üs işaretinden sonra kesme işareti konulmaz."
		]

	}
];

var ornekler =  [
	{
		"kurallar": [
			[ 
				"Atatürk'ün", "Türkiye'mizin", "Fatih Sultan Mehmet'e",  "Gül Baba'ya", 
				"Sultan Ana'nın", "Mehmet Emin Yurdakul'dan", "Kâzım Karabekir'i", "Yunus Emre'yi", 
				"Ziya Gökalp'tan", "Refik Halit Karay'mış", "Ahmet Cevat Emre'dir", "Namık Kemal'in", 
				"Şinasi'yle"
			],
			[ "Alman'sınız", "Kırgız'ım", "Karakeçili'nin","Oğuz'un", "Fransız'mış" ],
			[ "Osmanlı Devleti'ndeki", "Türkiye Cumhuriyeti'ni", "Karahanlı Devleti'ne" ],
			[ "Cebrail'den", "Allah'ın", "Zeus'a" ],
			[
				"Çanakkale Boğazı'nın", "Van Gölü'ne", "Ağrı Dağı'na", "Marmara Denizi'nde","Zigana Geçidi'nde","İngiltere'nin",
				"Filistin'de", "Muğla'da", "Asya'nın", "Yukarı Kızılırmak Bölgesi'ni", "Subaşı Sokağı'na","Taksim Meydanı'na",
				"Çınarlık Meydanı'na","Samsun'daymış","Ankara'ymış"
			],
			["Samanyolu'nda", "Venüs'ün", "Mars'a","Kutup Yıldızı'na","Büyükayı'ya","Halley'in" ],
			[
				"Sait Halim Paşa Yalısı'ndan", "Dolmabahçe Sarayı'nın", "Ankara Kalesi'nden", 
				"Çanakkale Şehitleri Anıtı'ndan"
			],
			[
				"Resmî Gazete'de", "Nutuk'ta", "Safahat'tan","Onuncu Yıl Marşı'nı", "Altın Kelebek Ödülü'nü",
				"Yunus Emre Oratoryosu'nu"
			],
			["Millî Eğitim Temel Kanunu'na", "Telif Hakkı Yayın ve Satış Yönetmeliği'ni", ],
			["Sarıkız'ın (ineğin ismi)", "Karabaş'a (köpeğin adı)", "Minnoş'tan (kedinin adı)" ],
			[ "Ayşe Hanım'dan", "Enver Paşa'ya", "Mahmut Efendi'ye" ],
			[ "TBMM'nin", "TV'ye", "TDK'ya", "BM'ye", "ABD'de" ],
			[ "1990'da", "8'inci", "2'nci kat", "10'luk", "Mayısın 19'uncu günü", "3'üncü madde" ],
			[ "Eski Çağ'ın", "Yükselme Dönemi'nin", "Cumhuriyet Dönemi Türk Edebiyatı'na", "Kurtuluş Savaşı'nı" ],
		],
		"istisnalar": [
			["Türkiye Büyük Millet Meclisine", "Türk Dil Kurumundan", "Türkiye Petrolleri Anonim Ortaklığına", 
			"Türk Dili ve Edebiyatı Bölümü Başkanlığının", "Bakanlar Kurulunun", "Danışma Kurulundan", "Yürütme Kuruluna",
			"Türkiye Büyük Millet Meclisinin 112'nci Birleşimi"],
			["Mavi Köşe Bakkaliyesinden", "ABC Holdingden", "Adem Bakkala"],
			["Türklük", "Türkleşmek", "Türkçü", "Türkçülük", "Türkçe", "Müslümanlık", "Hristiyanlık", "Avrupalı", 
			"Avrupalılaşmak", "Konyalı", "Bursalı", "Ahmetler", "Mehmetler", "Yakup Kadriler", "Türklerin", 
			"Türklüğün", "Türkleşmekte", "Türkçenin", "Müslümanlıkta", "Hollandalıdan", "Hristiyanlıktan", "Atatürkçülüğün" ],
			["Alm.dan","İng.yi","cm3e(santimetre küpe)","m2ye(metre küpe)"]
		]

	}
];

  return {
    tumKurallar: function(id) {
      return isaretler[val];
    },
    tumOrnekler: function(id) {
      return ornekler[val];
    },

    getKural: function(id, state) {
      return isaretler[state]["kurallar"][id];
    },
    getIstisna: function(id, state) {
      return isaretler[id]["istisnalar"];
    },
    getOrnekkurallar: function(id, state) {
    	var arr = ornekler[state]["kurallar"][id];
    	var len = arr.length;
		var randomnumber=Math.ceil(Math.random()*len)-1;

      return arr[randomnumber];
    },
	 getOrnekistisnalar: function(id, state) {
      var arr = ornekler[state]["istisnalar"][id];
    	var len = arr.length;
		var randomnumber=Math.ceil(Math.random()*len)-1;

      return arr[randomnumber];
    },
   
    randomArr: function(id, state) {
    	id = parseInt(id);

    	var len = isaretler[id][state].length;
		var arr = []
		while(arr.length < len){
		  var randomnumber=Math.ceil(Math.random()*len)
		  var found=false;
		  for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber-1){found=true;break}
		  }
		  if(!found)arr[arr.length]=randomnumber-1;
		} 
		  	
      return arr;
    },
   

  };
});
