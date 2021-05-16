var element = document.getElementById("id01");element.innerHTML = "PAGDI -	77.04%	&nbsp;&nbsp;P.LEFT	22.96%	&nbsp;&nbsp;UPDATE - 08/04/2021  	&nbsp;&nbsp;BAL -	1488946	";	
								
var myApp = angular.module('myApp', ['ngRoute'])								
								
//ng-route config								
.config(function ($routeProvider, $locationProvider){								
  $routeProvider								
    .when('/home', {								
      templateUrl: 'default.html',								
    })								
    .when('/contact-info/:contact_index', {								
      templateUrl: 'contact_info.html',								
      controller: 'contactInfoCtrl'								
    })								
    								
    .otherwise({redirectTo: '/home'});								
})								
								
// controllers								
.controller('navCtrl', function ($scope) {								
  $scope.nav = {								
    navItems: ['home', 'add'],								
    selectedIndex: 0,								
    navClick: function ($index) {								
      $scope.nav.selectedIndex = $index;								
    }								
  };								
})								
								
.controller('homeCtrl', function ($scope, ContactService){								
  $scope.contacts = ContactService.getContacts();								
})								
								
.controller('contactInfoCtrl', function ($scope, $routeParams){								
  var index = $routeParams.contact_index;								
  $scope.currentContact = $scope.contacts[index];								
})								
								
								
								
// directives								
.directive('contact', function () {								
  return {								
    restrict: 'E',								
    replace: true,								
    templateUrl: 'contact.html'								
  }								
})								
								
// services								
.factory('ContactService', [function () {								
  var factory = {};								
								
  factory.getContacts = function () {								
    return contactList;								
  }								
								
  // contact list, usually would be a separate database								
  var contactList = [								
								
{id: 1, name: '	AKALTARA		', 					
customer1: '	VINOD GENERAL (AKALTARA)		', amount1: '	2186	',  url1: '	/2084377289testbysam/AKALTARA/VINOD GENERAL (AKALTARA).htm	',	
customer2: '	CHANDAN GENERAL (AKALTARA)		', amount2: '	3653	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	',	
customer3: '	DEEPAK GENERAL (AKALTARA)		', amount3: '	2651	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	',	
customer4: '	SHRIMANAGALM (AKALTARA)		', amount4: '	26766	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	',	
customer5: '	SHARMA GENERAL  (AKALTARA)		', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	',	
customer6: '	SS FANCY (AKALTARA)		', amount6: '	1915	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	',	
customer7: '	KANHA GENERAL (AKALTARA)		', amount7: '	11521	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	',	
							},	
{id: 1, name: '	BALCO		', 					
customer1: '	SACHIN COLLECTION (BALCO)		', amount1: '	0	',  url1: '	/2084377289testbysam/BALCO/SACHIN COLLECTION (BALCO) 84.htm	',	
customer2: '	UPHAR COLLECTION (BALCO)		', amount2: '	1611	',  url2: '	/2084377289testbysam/BALCO/UPHAR COLLECTION (BALCO) 272.htm	',	
customer3: '	NAVEEN ELECTRONICS (BALCO)		', amount3: '	3	',  url3: '	/2084377289testbysam/BALCO/NAVEEN ELECTRONICS (BALCO)  232.htm	',	
							},	
{id: 1, name: '	BALODA		', 					
customer1: '	ESHWAR GENERAL (BALODA)		', amount1: ' 	17910	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	',	
customer2: '	SAKSHI (BALODA)		', amount2: '	8880	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	',	
customer3: '	SHASHANK BOOK DEPO (BALODA)		', amount3: '	4951	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	',	
customer4: '	VARDHAMAN GENERAL (BALODA)		', amount4: '	8906	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	',	
customer5: '	LOVE KIRANA (BALODA)		', amount5: '	33503	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193.htm	',	
customer6: '	VICKEY GENERAL (BALODA)		', amount6: '	0	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA)%2082.htm	',	
customer7: '	SHIVAM GENERAL (BALODA)		', amount7: '	14150	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	',	
customer8: '	B.L GUPTA (BALODA)		', amount8: '	3	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	',	
customer9: '	GOYAL GENERAL (BALODA)		', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	',	
							},	
{id: 1, name: '	BAMNIDIH		', 					
customer1: '	CHANDINI GIFT		', amount1: ' 	22751	',  url1: '	/2084377289testbysam/BAMNIDIH/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	',	
							},	
{id: 1, name: '	BARADWAR		', 					
customer1: '	ASHIRWAD GENERAL (BARADWAR)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/BARADWAR/ASHIRWAD GENERAL (BARADWAR) 13.htm	',	
customer2: '	SIDDHI VINAYAK (BARADWAR)		', amount2: '	3825	',  url2: '	/2084377289testbysam/BARADWAR/SIDDHI VINAYAK GENERAL (BARADWAR) 268.htm	',	
customer3: '	SAMRAT GENERAL (BARADWAR)		', amount3: '	0	',  url3: '	/2084377289testbysam/BARADWAR/SAMRATH GENERAL (BARADWAR).htm	',	
customer4: '	SAKTIYA SETH (BARADWAR)		', amount4: '	0	',  url4: '	/2084377289testbysam/BARADWAR/SAKTIYA SETH (BARADWAR) 219.htm	',	
							},	
								
{id: 1, name: '	BELGEHNA		', 					
customer1: '	RINKU GENERAL (BELGEHNA)		', amount1: '	-1190	',  url1: '	/2084377289testbysam/BELGEHNA/RINKU (BELGEHNA) 109.htm	',	
							},	
{id: 1, name: '	BELTARA		', 					
customer1: '	PRATAB (BELTARA)		', amount1: '	12092	',  url1: '	/2084377289testbysam/BELTARA/PRATAB (BELTARA) 294.htm	',	
							},	
								
{id: 1, name: '	BHATGAON		', 					
customer1: '	DEEPANSHU (BHATGAON)		', amount1: ' 	3216	',  url1: '	/2084377289testbysam/BHATGAON/DEEPANSHU GENERAL (BHATGAON) 19.htm	',	
customer2: '	MANPASAND (BHATGAON)		', amount2: '	0	',  url2: '	/2084377289testbysam/BHATGAON/MANPASAND (BHATGAON) 92.htm	',	
customer3: '	RIYA GENERAL (BHATGAON)		', amount3: ' 	10196	',  url3: '	/2084377289testbysam/BHATGAON/RIYA GENERAL (BHATGAON) 280.htm	',	
customer4: '	NAMDEV (BHATGAON)		', amount4: '	2	',  url4: '	/2084377289testbysam/BHATGAON/NAMDEV GENERAL (BHATGAON) 83.htm	',	
							},	
{id: 1, name: '	BHILAIGARH		', 					
customer1: '	SONU GENERAL (BHILAIGARH)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/BHILAIGARH/SONU GENERAL (BHILAIGARH) 52.htm	',	
customer2: '	SS  SUPER MARKET (BHILAIGARH)		', amount2: '	2346	',  url2: '	/2084377289testbysam/BHILAIGARH/SS  SUPER MARKET (BHILAIGARH).htm	',	
customer3: '	TANU GENERAL (BHILAIGARH)		', amount3: '	8016	',  url3: '	/2084377289testbysam/BHILAIGARH/TANU GENERAL (BHILAIGARH) 251.htm	',	
customer4: '	LALIT GENERAL (BHILAIGARH)		', amount4: '	0	',  url4: '	/2084377289testbysam/BHILAIGARH/LALIT GENERAL (BHILAIGARH) 57.htm	',	
customer5: '	DEWANGAN GENERAL (BHILAIGARH)		', amount5: '	3408	',  url5: '	/2084377289testbysam/BHILAIGARH/DEWANGAN GENERAL (BHILAIGARH) 218.htm	',	
							},	
{id: 1, name: '	BILASPUR		', 					
customer1: '	BOMBAY FASHION (RAJKISHORE)		', amount1: ' 	21033	',  url1: '	/2084377289testbysam/BILASPUR/BOMBAY FASHION (RAJKISHORE).htm	',	
customer2: '	MOHAN NAGOI (BILASPUR)		', amount2: '	17676	',  url2: '	/2084377289testbysam/BILASPUR/MOHAN NAGOI (BILASPUR) 128.htm	',	
customer3: '	POOJA SHRINGAR (BILASPUR)		', amount3: '	0	',  url3: '	/2084377289testbysam/BILASPUR/POOJA SHRINGARH (BILASPUR) 107.htm	',	
customer4: '	AKASH GENERAL (BUDHWARI)		', amount4: '	18690	',  url4: '	/2084377289testbysam/BILASPUR/AKASH GENERAL STORE (BUDHWARI) - 295.htm	',	
customer5: '	SIDDHI VINAYAK (BILASPUR)		', amount5: '	33002	',  url5: '	/2084377289testbysam/BILASPUR/SIDDHI VINAYAK (BILASPUR).htm	',	
customer6: '	PUSTAK BHAWAN (BILASPUR)		', amount6: '	0	',  url6: '	/2084377289testbysam/BILASPUR/PUSHTAK BHAWAN (BILASPUR).htm	',	
customer7: '	SEEMA SHRIVASTAV (BILASPUR)		', amount7: '	0	',  url7: '	/2084377289testbysam/BILASPUR/SEEMA SHRIVASTAV (BILASPUR) 278.htm	',	
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)		', amount8: '	0	',  url8: '	/2084377289testbysam/BILASPUR/SONI GIFT DEVRIKHURDH (BILASPUR) 155.htm	',	
customer9: '	VIJAY TOYS TELIPARA		', amount9: '	3180	',  url9: '	/2084377289testbysam/BILASPUR/VIJAY TOYS (TELIPARA).htm	',	
							},	
{id: 1, name: '	BILHA		', 					
customer1: '	PAYAL FANCY (BILHA)		', amount1: ' 	2726	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm	',	
customer2: '	KISAN MEGA BIG BAZAR (BILHA)		', amount2: '	0	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm	',	
customer3: '	RAJA DAILY NEEDS (BILHA)		', amount3: '	2970	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm	',	
							},	
								
{id: 1, name: '	BIRRA		', 					
customer1: '	TOMESH (BIRRA)		', amount1: '	0	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm	',	
							},	
{id: 1, name: '	BOADTARA		', 					
customer1: '	PRIYAL GENERAL (BODTARA)		', amount1: ' 	17780	',  url1: '	/2084377289testbysam/BOADTARA/PRIYAL (BOADTARA) 26.htm	',	
customer2: '	MONIKA FANCY STORE (BOADTARA)		', amount2: '	0	',  url2: '	/2084377289testbysam/BOADTARA/MONIKA FANCY STORE (BOADTARA).htm	',	
customer3: '	PUNNET SAHU  (BOADTARA)		', amount3: '	-5	',  url3: '	/2084377289testbysam/BOADTARA/PUNNET RAM  SAHU  (BOADTARA).htm	',	
							},	
{id: 1, name: '	BORLA		', 					
customer1: '	KESARWANI CLOTH (BORLA)		', amount1: ' 	4952	',  url1: '	/2084377289testbysam/BORLA/KESARWANI CLOTH (BORLA).htm	',	
							},	
								
{id: 1, name: '	CHAKKARBHATA		', 					
customer1: '	MAHAMAYA THRED HOUSE (CHBT)		', amount1: ' 	-4	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm	',	
customer2: '	MAHESH STD (CHBT)		', amount2: '	16523	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm	',	
customer3: '	NEW JAI MATA DI  (CHBT)		', amount3: '	3727	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm	',	
customer4: '	BABA GENERAL (CHBT)		', amount4: ' 	6504	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm	',	
customer5: '	LAXMI KITABGHAR (CHBT)		', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm	',	
customer6: '	SIDDARTH (CHBT)		', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm	',	
							},	
{id: 1, name: '	CHAMPA		', 					
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)		', amount1: ' 	4	',  url1: '	/2084377289testbysam/CHAMPA/AMIT SHRINGAR AND GIFT (CHAMPA).htm	',	
customer2: '	SOHAM GIFT (CHAMPA)		', amount2: '	229	',  url2: '	/2084377289testbysam/CHAMPA/SOHAM GIFT (CHAMPA) 86.htm	',	
customer3: '	HEMA SHRINGAR (CHAMPA)		', amount3: '	7426	',  url3: '	/2084377289testbysam/CHAMPA/HEMA SUHAG (CHAMPA).htm	',	
customer4: '	RANI GENERAL (CHAMPA)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAMPA/RANI GENERAL STORE (CHAMPA).htm	',	
customer5: '	SHRINGAR SADAN (CHAMPA)		', amount5: '	20	',  url5: '	/2084377289testbysam/CHAMPA/SHRINGAR SAADAN (CHAMPA) 284.htm	',	
customer6: '	RADHA SWAMI (CHAMPA)		', amount6: '	0	',  url6: '	/2084377289testbysam/CHAMPA/RADHA%20SWAMI%20(CHAMPA).htm	',	
customer7: '	MOHSIN (CHAMPA)		', amount7: '	1061	',  url7: '	/2084377289testbysam/CHAMPA/MOHSIN BHAI (CHAMPA) 271.htm	',	
customer8: '	MAA BHAGWATI (CHAMPA)		', amount8: '	24076	',  url8: '	/2084377289testbysam/CHAMPA/MAA BHAGWATI (CHAMPA) 238.htm	',	
customer9: '	POOJA NOVELTY (CHAMPA)		', amount9: '	0	',  url9: '	/2084377289testbysam/CHAMPA/POOJAA NOVELTY (CHAMPA) 40.htm	',	
customer10: '	KANHA SUPERBAZAR (CHAMPA)		', amount10: '	0	',  url10: '	/2084377289testbysam/CHAMPA/KANHA SUPER BAZAAR (CHAMPA) 262.htm	',	
customer11: '	ANIL DHARMIK (CHAMPA)		', amount11: '	6283	',  url11: '	/2084377289testbysam/CHAMPA/ANIL DHARMIK (CHAMPA).htm	',	
							},	
{id: 1, name: '	CHURRI		', 					
customer1: '	NEHA GENERAL (CHURI)		', amount1: ' 	7817	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm	',	
customer2: '	MAA KAUSA GAI (CHURRI)		', amount2: '	0	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm	',	
							},	
								
{id: 1, name: '	DABRA		', 					
customer1: '	FASHION PARK (DABRA)		', amount1: ' 	23359	',  url1: '	/2084377289testbysam/DABRA/FASHION PARK (DABRA) 297.htm	',	
							},	
{id: 1, name: '	DHARAMJAYGARH		', 					
customer1: '	AKANKSHA  (DHARAMJAYGARH)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/DHARMJAYGARH/AKANSHA GENERAL (DHARAMJAYGARH) 3.htm	',	
							},	
								
{id: 1, name: '	DIPKA		', 					
customer1: '	KOLKATA MAHASALE (DIPKA)		', amount1: ' 	22926	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm	',	
customer2: '	NEW BOOK DEPO (DIPKA)		', amount2: '	2	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm	',	
customer3: '	GEETA BOOK DEPO (DIPKA)		', amount3: '	0	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm	',	
customer4: '	SHANTI SUHAG (DIPKA)		', amount4: ' 	5910	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm	',	
customer5: '	KHUSHI BENGALS (DIPKA)		', amount5: '	-1	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm	',	
customer6: '	VASU COLLECTION  (DIPA)		', amount6: '	1597	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm	',	
							},	
{id: 1, name: '	GANYARI		', 					
customer1: '	MISHRA GENERAL (GANYARI)		', amount1: ' 	1300	',  url1: '	/2084377289testbysam/GANYARI/MISHRA (GANYARI) 154.htm	',	
							},	
{id: 1, name: '	GOBIRPATH		', 					
customer1: '	PREETY GOBRIPATH (GOBRIPATH)		', amount1: ' 	-55	',  url1: '	/2084377289testbysam/GOBRIPATH/PREETI (GOBRIPATH) 97.htm	',	
							},	
								
{id: 1, name: '	HARDIBAZAR		', 					
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI GENERAL (HARDIBAZAR) 174.htm	',	
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)		', amount2: '	15828	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI GENERAL (HARDIBAZAR).htm	',	
customer3: '	NIKHIL FANCY (HARDIBAZAR)		', amount3: '	9049	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL FANCY (HARDIBAZAR) 281.htm	',	
customer4: '	 SONI SHRINGAR (HARDIBAZAR)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI SHRINGAR (HARDIBAZAR) 72.htm	',	
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)		', amount5: '	0	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ KAPDA (HARDIBAZAR) 252.htm	',	
							},	
{id: 1, name: '	HARDIKALA		', 					
customer1: '	MANMOHAN (HARDIKALA)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIKALA/MANMOHAN (HARDIKALA) 69.htm	',	
customer2: '	SANAJY  (HARDIKALA)		', amount2: '	3	',  url2: '	/2084377289testbysam/HARDIKALA/SANJAY. (HARDIKALA) 291.htm	',	
							},	
{id: 1, name: '	HASOD		', 					
customer1: '	LAXMI FANCY (HASOD)		', amount1: ' 	46	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm	',	
customer2: '	SAHU FANCY (HASOD)		', amount2: '	7531	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm	',	
customer3: '	REKHA FANCY STORE (HASOD)		', amount3: '	7770	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm	',	
customer4: '	CHAVI GENERAL (HASOD)		', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm	',	
customer5: '	MAHARAJ FANCY (HASOD)		', amount5: '	3191	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ%20FANCY%20STORE%20(HASOD).htm	',	
							},	
{id: 1, name: '	JAITHARI		', 					
customer1: '	SHIV PLASTIC (JAITHARI)		', amount1: ' 	27542	',  url1: '	/2084377289testbysam/JAITHARI/MUSKAN (JAITHARI) 79.htm	',	
customer2: '	MUSKAN FANCY (JAITHARI)		', amount2: '	5940	',  url2: '	/2084377289testbysam/JAITHARI/SHIV PLASTICS (JAITHARI) 143.htm	',	
							},	
{id: 1, name: '	JANJGIR		', 					
customer1: '	GARIMA FANCY (JANJGIR)		', amount1: ' 	4507	',  url1: '	/2084377289testbysam/JANJGIR/GARIMA FANCY (JANJGIR) 166.htm	',	
customer2: '	PRATEEK GENERAL  (JANJGIR)		', amount2: '	5251	',  url2: '	/2084377289testbysam/JANJGIR/PRATEEK GENERAL (JANJGIR) 150.htm	',	
customer3: '	NAMDEV GENERAL (JANJGIR)		', amount3: '	0	',  url3: '	/2084377289testbysam/JANJGIR/NAMDEV GENERAL (JANJGIR) 158.htm	',	
customer4: '	SATYAM GENERAL (JANJGIR)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/JANJGIR/SATYAM GENERAL (JANJGIR) 132.htm	',	
customer5: '	SUPER BAG HOUSE (JANJGIR)		', amount5: '	0	',  url5: '	/2084377289testbysam/JANJGIR/SUPER BAG HOUSE (JANJGIR) 37.htm	',	
customer6: '	AKASH GENERAL (JANJGIR)		', amount6: '	0	',  url6: '	/2084377289testbysam/JANJGIR/AKASH GENERAL STORE (JANJGIR) 11.htm	',	
							},	
{id: 1, name: '	JHARSUKDA		', 					
customer1: '	 FASHION PARK (JHARSUKDA)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/JHARSUKDA/FASHION PARK (JHARSUKDA) 167.htm	',	
customer2: '	GUDDU (JHARSUKDA)		', amount2: '	0	',  url2: '	/2084377289testbysam/JHARSUKDA/GUDDU (JHARSUKDA) 43.htm	',	
							},	
{id: 1, name: '	KATGHORA		', 					
customer1: '	ROOP SHRINGAR		', amount1: ' 	9318	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm	',	
customer2: '	MAHABALI (KATGHORA)		', amount2: '	9956	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm	',	
customer3: '	KAREENA BOOT HOUSE (KATGHORA)		', amount3: '	0	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm	',	
customer4: '	PRADEEP BHAIYA (KATGHORA)		', amount4: ' 	35739	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP%20BHAI.%20(KATGHORA)%20123.htm	',	
customer5: '	PADUKA BOOT HOUSE (KATGHORA)		', amount5: '	10198	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm	',	
							},	
{id: 1, name: '	KATGI		', 					
customer1: '	VIDHYARTHI GENERAL (KATGI)		', amount1: ' 	3194	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm	',	
customer2: '	MANOJ FASHION		', amount2: '	16162	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm	',	
customer3: '	MAHAMAYA GENERAL (KATGI)		', amount3: '	3135	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170.htm	',	
customer4: '	JYOTI GENRAL (KATGI)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm	',	
customer5: '	PAWAN GENERAL STORE (KATGI)		', amount5: '	33288	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm	',	
customer6: '	SAI GENERAL (KATGI)		', amount6: '	11798	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm	',	
customer7: '	SURAJ GENERAL (KATGI)		', amount7: '	18138	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm	',	
customer8: '	MANOJ GENERAL (KATGI)		', amount8: '	5041	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm	',	
							},	
{id: 1, name: '	KAWARDHA		', 					
customer1: '	GURUDEV GENERAL (KAWARDHA)		', amount1: ' 	1970	',  url1: '	/2084377289testbysam/KAWARDHA/GURUDEV GENERAL (KAWARDHA).htm	',	
							},	
{id: 1, name: '	KHAMRIYA		', 					
customer1: '	FAIR DEAL (KHAMARIYA)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm	',	
customer2: '	SHUBHAM GENERAL (KHAMARIYA)		', amount2: '	6254	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM%20(KAMARIYA)%20%20180.htm	',	
							},	
{id: 1, name: '	KHAMI		', 					
customer1: '	AMISHA GENERAL (KHAMI)		', amount1: ' 	2	',  url1: '	/2084377289testbysam/KHAMI/AMISHA GENERAL (KHAMI).htm	',	
customer2: '	SAHU GENERAL (KHAMI)		', amount2: ' 	3689	',  url2: '	/2084377289testbysam/KHAMI/SAHU GENERAL (KHAMI).htm	',	
							},	
{id: 1, name: '	KARNODH		', 					
customer1: '	ASHOK KARNODH		', amount1: ' 	12	',  url1: '	/2084377289testbysam/KARNODH/ASHOK (KARNODH) 144.htm	',	
							},	
{id: 1, name: '	KHARSIYA		', 					
customer1: '	ABHINANDAN (KHARSIYA)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHARSIYA/ABHINANDAN (KHARSIYA).htm	',	
customer2: '	KRISHAN COLLECTION (KHARSIYA)		', amount2: '	0	',  url2: '	/2084377289testbysam/KHARSIYA/KRISHAN COLLECTION (KHARSIYA).htm	',	
							},	
{id: 1, name: '	KHAROD		', 					
customer1: '	MOHAN GENERAL 		', amount1: ' 	3101	',  url1: '	/2084377289testbysam/KHAROD/MOHAN (KHAROD)  65.htm	',	
							},	
{id: 1, name: '	KASHDOL		', 					
customer1: '	MAA SHETLA (KASHDOL)		', amount1: ' 	12	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm	',	
customer2: '	BALAJI (KASHDOL)		', amount2: '	2	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm	',	
							},	
{id: 1, name: '	KORBA		', 					
customer1: '	BANSAL ENTERPRISES		', amount1: ' 	1901	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm	',	
							},	
{id: 1, name: '	KOTA		', 					
customer1: '	AGGARWAL GENERAL (KOTA)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/KOTA/AGGARWAL GENERAL. (KOTA) 30.htm	',	
customer2: '	MAHAMAYA FASHION HOUSE		', amount2: '	0	',  url2: '	/2084377289testbysam/KOTA/MAHAMAYA FASHION HOUSE (KOTA) 18.htm	',	
customer3: '	NISHA GENERAL (KOTA)		', amount3: '	5430	',  url3: '	/2084377289testbysam/KOTA/NISHA GENERAL (KOTA) 260.htm	',	
customer4: '	NIKITA GENERAL (KOTA)		', amount4: ' 	1416	',  url4: '	/2084377289testbysam/KOTA/NIKITA (KOTA).htm	',	
customer5: '	AKANKSHA GENERAL (KOTA)		', amount5: '	0	',  url5: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL(KOTA) 7.htm	',	
customer6: '	SARITA GENERAL (KOTA)		', amount6: '	0	',  url6: '	/2084377289testbysam/KOTA/SARITA GENERAL (KOTA).htm	',	
customer7: '	SHAILESH GENERAL (KOTA)		', amount7: '	7741	',  url7: '	/2084377289testbysam/KOTA/SHAILESH GENERAL. (KOTA) 121.htm	',	
customer8: '	ALL IN ONE (KOTA)		', amount8: '	0	',  url8: '	/2084377289testbysam/KOTA/ALL IN ONE (KOTA).htm	',	
customer9: '	KALPANA GENERAL BABAN (KOTA)		', amount9: '	0	',  url9: '	/2084377289testbysam/KOTA/KALPANA (KOTA) 85.htm	',	
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)		', amount10: '	510	',  url10: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL BABLO (KOTA) 122.htm	',	
							},	
{id: 1, name: '	KOTMISONAR		', 					
customer1: '	JANVI GENERAL (KOTMISONAR)		', amount1: ' 		',  url1: '		',	
							},	
{id: 1, name: '	KUNDA		', 					
customer1: '	CHANDRAKAR GENERAL		', amount1: ' 	7	',  url1: '	/2084377289testbysam/KUNDA/CHANDRAKAR GENERAL (KUNDA) 102.htm	',	
customer2: '	SHREE RADHA RANI (KUNDA)		', amount2: '	0	',  url2: '	/2084377289testbysam/KUNDA/SHREE RADHA RANI (KUNDA).htm	',	
customer3: '	SHRIRAM GENERAL (KUNDA)		', amount3: '	1	',  url3: '	/2084377289testbysam/KUNDA/SHRIRAM GENERAL. (KUNDA) 34.htm	',	
							},	
{id: 1, name: '	LAWAN		', 					
customer1: '	VINOD LAWAN		', amount1: ' 	0	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm	',	
							},	
{id: 1, name: '	LORMI		', 					
customer1: '	NANDANI GENERAL (LORMI)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/LORMI/NANDINI GENERAL (LORMI) 172.htm	',	
customer2: '	ASHISH GENERAL (LORMI)		', amount2: '	0	',  url2: '	/2084377289testbysam/LORMI/ASHISH GENERAL .(LORMI) (NEW 5).htm	',	
customer3: '	KESARWANI (LORMI)		', amount3: '	0	',  url3: '	/2084377289testbysam/LORMI/KESARWANI GIFT (LORMI) 275.htm	',	
customer4: '	KANHA COLLECTION (LORMI)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/LORMI/KANHA COLLECTION .(LORMI).htm	',	
customer5: '	KAVYA GENERAL (LORMI)		', amount5: ' 	0	',  url5: '	/2084377289testbysam/LORMI/KAVYA GENERAL (LORMI) (NEW 33).htm	',	
							},	
{id: 1, name: '	MALHAR		', 					
customer1: '	ANKIT FANCY (MALHAR)		', amount1: ' 	15080	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm	',	
customer2: '	PURVI FANCY (MALHAR)		', amount2: '	11830	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm	',	
customer3: '	JAANVI GENERAL (MALHAR)		', amount3: '	11381	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm	',	
customer4: '	JITENDRA (MALHAR)		', amount4: ' 	1316	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm	',	
							},	
{id: 1, name: '	MALKHARODA		', 					
customer1: '	PARI FANCY		', amount1: ' 	11033	',  url1: '	/2084377289testbysam/MALKHAROD/PARI FANCY (MALKHAROD) 184.htm	',	
							},	
{id: 1, name: '	MANENDRAGARH		', 					
customer1: '	AISHWARIYA GENERAL		', amount1: ' 	0	',  url1: '	/2084377289testbysam/MANENDRAGARH/AISHWARIYA (MANENDRAGARH).htm	',	
							},	
{id: 1, name: '	MARO		', 					
customer1: '	RAJA MARO (MARO)		', amount1: ' 	4840	',  url1: '	/2084377289testbysam/MARO/RAJA (MARO).htm	',	
customer2: '	ANMOL  (MARO)		', amount2: '	4	',  url2: '	/2084377289testbysam/MARO/ANMOL (MARO).htm	',	
							},	
{id: 1, name: '	MARWAHI		', 					
customer1: '	LAXMI GENERAL (MARWAHI)		', amount1: ' 	23247	',  url1: '	/2084377289testbysam/MARWAHI/LAXMI GENERAL .(MARWAHI) 240.htm	',	
customer2: '	JAFFAR BOOT (MARWAHI)		', amount2: '	10227	',  url2: '	/2084377289testbysam/MARWAHI/JAFFAR BOOT .(MARWAHI) 5.htm	',	
							},	
{id: 1, name: '	MASTURI		', 					
customer1: '	KISHORE RIKSHAW		', amount1: ' 	12028	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm	',	
customer2: '	LAXMI GENERAL		', amount2: '	3276	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm	',	
							},	
{id: 1, name: '	MOHGAON		', 					
customer1: '	MANISH GENERAL		', amount1: ' 	7171	',  url1: '	/2084377289testbysam/MOHAGAON/MANISH (MOHGAON) 156.htm	',	
							},	
{id: 1, name: '	MUNGELI		', 					
customer1: '	TOY ZONE 		', amount1: ' 	7820	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm	',	
customer2: '	BABA GENERAL		', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm	',	
customer3: '	GURUNANAK GENERAL		', amount3: '	1570	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm	',	
customer4: '	 JEENAT BENGALS (MUNGELI)		', amount4: ' 	9932	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm	',	
customer5: '	PAYAL BAG HOUSE		', amount5: '	1360	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm	',	
customer6: '	PRIYA LADIES		', amount6: '	2981	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm	',	
customer7: '	SANGAM FANCY		', amount7: '	4749	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm	',	
customer8: '	OM GENERAL (MUNGELI)		', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm	',	
							},	
{id: 1, name: '	PACHPEDI		', 					
customer1: '	VINAY GENERAL (PACHPEDI)		', amount1: ' 	25551	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm	',	
customer2: '	SAHIL (PACHPEDI)		', amount2: '	-4	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm	',	
							},	
{id: 1, name: '	PAMGARH		', 					
customer1: '	BABA SCHOOL POINT (PAMGARH)		', amount1: ' 	-3	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm	',	
customer2: '	KABIR (PAMGARH)		', amount2: ' 	5620	',  url2: '	/2084377289testbysam/PAMGARH/KABIR (PAMGARH).htm	',	
							},	
								
{id: 1, name: '	PALI		', 					
customer1: '	ARADHYA GENERAL (PALI)		', amount1: ' 	2	',  url1: '	/2084377289testbysam/PALI/ARADHYA GENERAL (PALI).htm	',	
customer2: '	JAI  MAHAMAYA (PALI)		', amount2: '	5764	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm	',	
customer3: '	SHIV BEEJ		', amount3: '	9	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm	',	
customer4: '	DEEPAK READYMATE (PALI)		', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm	',	
customer5: '	SHRIJAN		', amount5: '	0	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm	',	
customer6: '	SUMIT COLLECTION PALI		', amount6: '	2	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm	',	
customer7: '	UPHAR COLLECTION PALI		', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm	',	
customer8: '	SANJAY BOOK DEPO (PALI)		', amount8: '	1	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm	',	
customer9: '	SANJAY GIFT (PALI)		', amount9: '	16331	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm	',	
customer10: '	KHUSHI GENERAL (PALI)		', amount10: '	16	',  url10: '	/2084377289testbysam/PALI/KHUSHI GENERAL (PALI).htm	',	
							},	
{id: 1, name: '	PANDARIYA		', 					
customer1: '	FIZZA GENERAL		', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDARIYA/FIZZA GENERAL (PANDARIYA)  32.htm	',	
customer2: '	MARUTI GENERAL (PANDARIYA)		', amount2: '	0	',  url2: '	/2084377289testbysam/PANDARIYA/MARUTI GENERAL (PANDARIYA)  178.htm	',	
customer3: '	MATESHWARI (PANDARIYA)		', amount3: '	6820	',  url3: '	/2084377289testbysam/PANDARIYA/MATESHWARI .(PANDARIYA) 95.htm	',	
customer4: '	OM SATIONARY (PANDARIYA)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDARIYA/OM SATIONARY (PANDARIYA).htm	',	
customer5: '	GURUANAK GENERAL (PANDARIYA)		', amount5: '	0	',  url5: '	/2084377289testbysam/PANDARIYA/GURUNANAK GENERAL (PANDARIYA) 300.htm	',	
customer6: '	ABHAY GENERAL (PANDARIYA)		', amount6: '	8004	',  url6: '	/2084377289testbysam/PANDARIYA/ABHAY GENERAL (PANDARIYA) 242.htm	',	
customer7: '	SOUGAAT GIFT (PANDARIYA)		', amount7: '	0	',  url7: '	/2084377289testbysam/PANDARIYA/SOUGAAT GIFT (PANDARIYA).htm	',	
customer8: '	PRATHNA GENERAL (PANDARIYA)		', amount8: '	4356	',  url8: '	/2084377289testbysam/PANDARIYA/PRATHNA GENERAL (PANDARIYA).htm	',	
							},	
{id: 1, name: '	PANDATARAI		', 					
customer1: '	ARJUN GENERAL (PANDATARAI)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDATARAI/ARJUN GENERAL (PANDATARAI) 181.htm	',	
customer2: '	DURGA GENERAL (PANDATARAI)		', amount2: '	0	',  url2: '	/2084377289testbysam/PANDATARAI/DURGA GENERAL (PANDATARAI) 274.htm	',	
customer3: '	SATGURU		', amount3: '	17949	',  url3: '	/2084377289testbysam/PANDATARAI/SATGURU GENERAL (PANDATARAI)  162.htm	',	
customer4: '	VIDYA SUHAG		', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDATARAI/VIDYA SUHAG (PANDATARAI) 147.htm	',	
customer5: '	PREETI GENERAL (PANDATARAI)		', amount5: '	13702	',  url5: '	/2084377289testbysam/PANDATARAI/PREETI GENERAL. (PANDATARAI) 112.htm	',	
customer6: '	GANESH (PANDATARAI)		', amount6: '	25145	',  url6: '	/2084377289testbysam/PANDATARAI/GANESH GENERAL (PANDATARAI)  279.htm	',	
customer7: '	PRACHI GENERAL (PANDATARAI)		', amount7: '	23110	',  url7: '	/2084377289testbysam/PANDATARAI/PRACHI GENERAL (PANDATARAI).htm	',	
							},	
								
{id: 1, name: '	PANTORA		', 					
customer1: '	KRISHNA  KAPDA (PANTORA)		', amount1: ' 	2570	',  url1: '	/2084377289testbysam/PANTORA.htm	',	
							},	
								
{id: 1, name: '	PATHARIYA		', 					
customer1: '	AKASH BOOK DEPO (PATHARIYA)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm	',	
customer2: '	HARNARAYAN		', amount2: '	0	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm	',	
customer3: '	MUKESH GENERAL 		', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm	',	
customer4: '	OM SAI KARAN (PATHARIYA)		', amount4: ' 	0	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm	',	
customer5: '	SHIV GENERAL (PATHARIYA)		', amount5: '	11444	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV GENERAL .(PATHARIYA) 118.htm	',	
customer6: '	SANTOSH GENERAL (PATHARIYA)		', amount6: '	5359	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm	',	
customer7: '	PREETAM GENERAL (PATHARIYA)		', amount7: '	11623	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm	',	
customer8: '	OM SUHAG (PATHARIYA)		', amount8: '	10	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm	',	
customer9: '	LAXMI GENERAL (PATHARIYA)		', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm	',	
							},	
{id: 1, name: '	PENDRA		', 					
customer1: '	SURYA GARMENTS (PENDRA)		', amount1: ' 	6832	',  url1: '	/2084377289testbysam/PENDRA/SURYA GARMENTS (PENDRA).htm	',	
customer2: '	ARADHYA TRADERS		', amount2: '	13010	',  url2: '	/2084377289testbysam/PENDRA/ARADHYA GENERAL (PENDRA) 124.htm	',	
customer3: '	DECO POINT 		', amount3: '	3000	',  url3: '	/2084377289testbysam/PENDRA/DECO POINT (PENDRA) 33.htm	',	
customer4: '	PANDEY GENERAL		', amount4: ' 	0	',  url4: '	/2084377289testbysam/PENDRA/PANDEY GENERAL. (PENDRA)  140.htm	',	
customer5: '	R.T WOMENS		', amount5: '	35025	',  url5: '	/2084377289testbysam/PENDRA/R.T PENDRA (PENDRA) 88.htm	',	
customer6: '	SADHANA PHOTO STUDIO		', amount6: '	11002	',  url6: '	/2084377289testbysam/PENDRA/SADHNA PHOTO STUDIO (PENDRA) 244.htm	',	
customer7: '	TIME CORNER (PENDRA)		', amount7: '	0	',  url7: '	/2084377289testbysam/PENDRA/TIME CORNER. (PENDRA).htm	',	
customer8: '	SAI MAHASALE (PENDRA)		', amount8: '	37567	',  url8: '	/2084377289testbysam/PENDRA/SAI MAHASALE. (PENDRA) 176.htm	',	
customer9: '	SAI SAKTI (PENDRA)		', amount9: '	7843	',  url9: '	/2084377289testbysam/PENDRA/SAI SAKTI. (PENDRA) 186.htm	',	
customer10: '	POOJA JWELLERY (PENDRA)		', amount10: '	0	',  url10: '	/2084377289testbysam/PENDRA/POOJA JWELLERY. (PENDRA)  190.htm	',	
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)		', amount11: '	0	',  url11: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA)_files.htm	',	
customer12: '	UPHAR GALLERY (PENDRA)		', amount12: '	5860	',  url12: '	/2084377289testbysam/PENDRA/UPHAR GALLERY. (PENDRA) 198.htm	',	
customer13: '	GUPTA ENTERPRISES (PENDRA)		', amount13: '	28147	',  url13: '	/2084377289testbysam/PENDRA/GUPTA ENTERPRISES. (PENDRA) 200.htm	',	
customer14: '	SANJAY GENERAL (PENDRA)		', amount14: '	11539	',  url14: '	/2084377289testbysam/PENDRA/SANJAY GENERAL. (PENDRA).htm	',	
customer15: '	GANESH GENERAL (PENDRA)		', amount15: '		',  url15: '		',	
customer16: '	SONA GARMENTS (PENDRA)		', amount16: '	11138	',  url16: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA).htm	',	
							},	
{id: 1, name: '	PODI		', 					
customer1: '	SHIV SAHU (PODI)		', amount1: ' 	3348	',  url1: '	/2084377289testbysam/PODI/SHIV SAHU (PODI)  127.htm	',	
							},	
{id: 1, name: '	RAHOD		', 					
customer1: '	CHAAVI GENERAL 		', amount1: ' 	-1	',  url1: '	/2084377289testbysam/RAHOD/CHAVI (RAHOD) 12.htm	',	
							},	
{id: 1, name: '	RATANPUR		', 					
customer1: '	 GOLU RATANPUR		', amount1: ' 	84	',  url1: '	/2084377289testbysam/RATANPUR/GOLU (RATANPUR)  196.htm	',	
customer2: '	RAJA YADAV		', amount2: '	-1	',  url2: '	/2084377289testbysam/RATANPUR/RAJA YADAV (RATANPUR) 146.htm	',	
customer3: '	USHA CHAUHAN (RATANPUR)		', amount3: '	N/A	',  url3: '		',	
customer4: '	RIYA GENERAL		', amount4: ' 	10	',  url4: '	/2084377289testbysam/RATANPUR/RIYA. (RATANPUR)  253.htm	',	
							},	
{id: 1, name: '	SAKRI		', 					
customer1: '	GUPTA GENERAL		', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA (SAKRI)  39.htm	',	
customer2: '	KAUSHIK GENERAL (SAKRI)		', amount2: '	189	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK GENERAL. (SAKRI) 261.htm	',	
customer3: '	SHRI RAM (SAKRI)		', amount3: '	4529	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM GENERAL (SAKRI)  20.htm	',	
							},	
{id: 1, name: '	SAKTI		', 					
customer1: '	PAPPI GUPTA (SAKTI)		', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKTI/PAPPI  GUPTA  (SAKTI).htm	',	
customer2: '	DIWA FANCY (SAKTI)		', amount2: '	0	',  url2: '	/2084377289testbysam/SAKTI/DIVA FANCY (SAKTI)  14.htm	',	
customer3: '	VIKAS (SAKTI)		', amount3: '	0	',  url3: '	/2084377289testbysam/SAKTI/VIKAS (SAKTI) 296.htm	',	
customer4: '	ANMOL GIFT (SAKTI)		', amount4: '	122	',  url4: '	/2084377289testbysam/SAKTI/ANMOL (SAKTI)  16.htm	',	
customer5: '	DULHAN SAARE (SAKTI)  		', amount5: '	11670	',  url5: '	/2084377289testbysam/SAKTI/DULHA SAARE (SAKTI).htm	',	
							},	
{id: 1, name: '	SARAGAON		', 					
customer1: '	GOVIND KESARWANI		', amount1: ' 	7004	',  url1: '	/2084377289testbysam/SARAGAON/GOVIND KESARWANI (SARAGAON) 138.htm	',	
							},	
{id: 1, name: '	SARANGARH		', 					
customer1: '	VIKAS  TEXTILE (SARANGARH)		', amount1: ' 	470	',  url1: '	/2084377289testbysam/SARANGARH/VIKAS TEXTILE (SARANGARH).htm	',	
customer2: '	ASHOK BOOK DEPO		', amount2: '	8	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm	',	
customer3: '	KAMAL GENERAL (SARANGARH)		', amount3: '	22444	',  url3: '	/2084377289testbysam/SARANGARH/KAMAL (SARANGARH) 22.htm	',	
customer4: '	SANJAY STORE (SARANGARH)		', amount4: '	-2	',  url4: '	/2084377289testbysam/SARANGARH/SANJAY STORE (SARANGARH)  44.htm	',	
customer5: '	PRIYANKA GENERAL (SARANGARH)		', amount5: '	840	',  url5: '	/2084377289testbysam/SARANGARH/PRIYANKA (SARANGARH) 212.htm	',	
customer6: '	SANTOSH VASTRALAY (SARANGARH)		', amount6: '	0	',  url6: '	/2084377289testbysam/SARANGARH/SANTOSH VASTRALAY (SARANGARH) 220.htm	',	
customer7: '	NEW CLOTH STORE (SARANGARH)		', amount7: '	0	',  url7: '	/2084377289testbysam/SARANGARH/NEW CLOTH (SARANGARH)  256.htm	',	
customer7: '	MAHALAXMI (SARANGARH)		', amount7: '	3514	',  url7: '	/2084377289testbysam/SARANGARH/MAHALAXMI  GENERAL (SARANGARH).htm	',	
							},	
{id: 1, name: '	SARGAON		', 					
customer1: '	SUNITA GENERAL		', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm	',	
customer2: '	RAJU FANCY STORE (SARGAON)		', amount2: '	-1	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm	',	
							},	
{id: 1, name: '	SARSIWA		', 					
customer1: '	HEMA FANCY		', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARSIWA/HEMA FANCY (SARSIWA) 191.htm	',	
customer2: '	OM SAI SARSIWA		', amount2: '	17755	',  url2: '	/2084377289testbysam/SARSIWA/OM SAI (SARSIWA) 6.htm	',	
customer3: '	SHRIYA SHRINGAR (SARSIWA)		', amount3: '	0	',  url3: '	/2084377289testbysam/SARSIWA/SHRIYA SHRINGAR (SARSIWA).htm	',	
							},	
								
{id: 1, name: '	SENDRI		', 					
customer1: '	SHIVAM GENERAL		', amount1: ' 	3	',  url1: '	/2084377289testbysam/SENDRI/SHIVAM (SENDRI) 131.htm	',	
							},	
{id: 1, name: '	SHIVNI		', 					
customer1: '	KHAGESHWAR GENERAL		', amount1: ' 	14965	',  url1: '	/2084377289testbysam/SHIVNI/KHAGESHWAR (SHIVNI) 269.htm	',	
customer2: '	JAI AMBEL (SHIVNI)		', amount2: '	2647	',  url2: '	/2084377289testbysam/SHIVNI/JAI AMBE (SHIVNI) 208.htm	',	
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)		', amount3: '	-1	',  url3: '	/2084377289testbysam/SHIVNI/NEW MAHAMAYA GENERAL 2 (SHIVNI) (NEW 9).htm	',	
							},	
{id: 1, name: '	SHIVRINARAYN		', 					
customer1: '	MAHI SHRINGAR (SHIVRIN)		', amount1: ' 	1551	',  url1: '	/2084377289testbysam/SHIVRINARAYAN/MAHI SHRINGAR (SHIVRINARAYN).htm	',	
customer2: '	RUPESH  GENERAL		', amount2: '	1981	',  url2: '	/2084377289testbysam/SHIVRINARAYAN/RUPESH (SHIVRINARAYAN)  64.htm	',	
customer3: '	ATUL GENERAL		', amount3: '	24276	',  url3: '	/2084377289testbysam/SHIVRINARAYAN/ATUL (SHIVRINARAYAN) 254.htm	',	
customer4: '	NARAYANI COLLECTION (SHIVRIN)		', amount4: '	5891	',  url4: '	/2084377289testbysam/SHIVRINARAYAN/NARAYANI (SHIVRINARAYAN) 136.htm	',	
customer5: '	LAXMI VASTRALAY (SHIVRI)		', amount5: '	24209	',  url5: '	/2084377289testbysam/SHIVRINARAYAN/LAXMI VASTRALAY (SHIVRINARAYAN).htm	',	
							},	
								
{id: 1, name: '	SILDHA		', 					
customer1: '	SATYA NARAYAN (SILDHA)		', amount1: ' 	666	',  url1: '	/2084377289testbysam/SILDHA/SATYANARAYN (SILDHA).htm	',	
							},	
								
								
{id: 1, name: '	SIPAT		', 					
customer1: '	DEEPAK GENERAL (SIPAT)		', amount1: ' 	1727	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm	',	
customer2: '	SITARAM  (SIPAT)		', amount2: '	0	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm	',	
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)		', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm	',	
customer4: '	SWARMANGLA PLASTIC (SIPAT)		', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm	',	
							},	
{id: 1, name: '	SIRGITI		', 					
customer1: '	BABY SUHAG		', amount1: ' 	2692	',  url1: '	/2084377289testbysam/SIRGITI/BABY SUHAG (SIRGITTI) 21.htm	',	
customer2: '	KIRAN SIRGITI		', amount2: '		',  url2: '	<b><br>TOYS -	',	
customer3: '	MAA KALI MUSIC (SIRGITI)		', amount3: '	1	',  url3: '	/2084377289testbysam/SIRGITI/MAA KALI MUSIC CENTER (SIRGITTI) 210.htm	',	
							},	
{id: 1, name: '	TAKHATPUR		', 					
customer1: '	KISHAN (BELPAN)		', amount1: ' 	12445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm	',	
customer2: '	MAYUR GENERAL		', amount2: '	0	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm	',	
customer3: '	MARUTI GENERAL (TAKHATPUR)		', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm	',	
customer4: '	VIJAY STORE (TAKHATPUR)		', amount4: '	23075	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm	',	
customer5: '	NAWAZ GENERAL		', amount5: '	3749	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm	',	
customer6: '	RAJESH GENERAL		', amount6: '	20396	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm	',	
customer7: '	BHARAT BAG HOUSE		', amount7: '	4615	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm	',	
							},	
{id: 1, name: '	TAPKARA		', 					
customer1: '	 POOJA TAPKARA		', amount1: ' 	24350	',  url1: '	/2084377289testbysam/TAPKARA/POOJA (TAPKARA) 287.htm	',	
							},	
{id: 1, name: '	UDAIPUR		', 					
customer1: '	PRIYA UDAIPUR		', amount1: ' 	16123	',  url1: '	/2084377289testbysam/UDAIPUR/PRIYA  (UDAIPUR) 91.htm	',	
							},	
{id: 1, name: '	URGA		', 					
customer1: '	SHUSHMITA URGA		', amount1: ' 	6264	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm	',	
							},	
{id: 1, name: '	USLAPUR		', 					
customer1: '	SAI PROVISION		', amount1: ' 		',  url1: '		',	
							},	
{id: 1, name: '	VENKATNAGAR		', 					
customer1: '	SANTOSH GENERAL		', amount1: ' 	16	',  url1: '	/2084377289testbysam/VENKATNAGAR/SANTOSH (VENKATNAGAR) 113.htm	',	
							},	
								
								
								
  ];								
  								
  return factory;								
}]);								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
