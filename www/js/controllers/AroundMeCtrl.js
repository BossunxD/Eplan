angular.module('App').controller("AroundMeCtrl", ["$scope", "$ionicLoading", "$compile", AroundMeCtrl]);
function AroundMeCtrl($scope, $ionicLoading, $compile) {

  var fontawesome = {};
  fontawesome.markers = {
      "GLASS": "M3.348 -57.743q0 -0.828 0.648 -1.314t1.368 -0.63 1.548 -0.144h50.688q0.828 0 1.548 0.144t1.368 0.63 0.648 1.314q0 1.26 -1.548 2.808l-22.752 22.752v27.648h11.52q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h11.52v-27.648l-22.752 -22.752q-1.548 -1.548 -1.548 -2.808z",
      "MUSIC": "M0 -6.839q0 -1.8 1.224 -3.204t3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-34.812q0 -1.116 0.684 -2.034t1.764 -1.278l29.952 -9.216q0.432 -0.144 1.008 -0.144 1.44 0 2.448 1.008t1.008 2.448v40.32q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-19.332l-27.648 8.532v25.524q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204z",
      "LEAF": "M0 -13.499q0 -1.26 1.116 -2.646t2.448 -2.358 2.448 -2.016 1.116 -1.728q0 -0.144 -0.504 -1.368t-0.576 -1.584q-0.324 -1.836 -0.324 -3.744 0 -4.14 1.566 -7.92t4.284 -6.642 6.138 -5.004 7.344 -3.438q1.98 -0.648 5.22 -0.918t6.462 -0.324 6.426 -0.216 5.886 -0.864 4.086 -2.034l1.062 -1.062 1.062 -1.008 0.972 -0.72 1.314 -0.576 1.566 -0.162q1.404 0 2.538 1.656t1.71 4.032 0.864 4.464 0.288 3.456q0 3.42 -0.72 6.948 -1.656 8.064 -6.642 13.788t-12.87 9.648q-7.704 3.888 -15.768 3.888 -5.328 0 -10.296 -1.692 -0.54 -0.18 -3.168 -1.512t-3.456 -1.332q-0.576 0 -1.422 1.152t-1.62 2.52 -1.89 2.52 -2.16 1.152q-1.08 0 -1.836 -0.396t-1.116 -0.864 -0.972 -1.512l-0.216 -0.396 -0.198 -0.36 -0.108 -0.342 -0.054 -0.486zm13.824 -11.772q0 0.936 0.684 1.62t1.62 0.684q0.864 0 1.62 -0.684 0.972 -0.864 2.664 -2.556t2.412 -2.376q4.932 -4.464 9.666 -6.336t11.286 -1.872q0.936 0 1.62 -0.684t0.684 -1.62 -0.684 -1.62 -1.62 -0.684q-6.192 0 -11.448 1.782t-9.342 4.824 -8.478 7.902q-0.684 0.756 -0.684 1.62z",
      "MAP_MARKER": "M0 -41.399q0 -7.632 5.4 -13.032t13.032 -5.4 13.032 5.4 5.4 13.032q0 3.924 -1.188 6.444l-13.104 27.864q-0.576 1.188 -1.71 1.872t-2.43 0.684 -2.43 -0.684 -1.674 -1.872l-13.14 -27.864q-1.188 -2.52 -1.188 -6.444zm9.216 0q0 3.816 2.7 6.516t6.516 2.7 6.516 -2.7 2.7 -6.516 -2.7 -6.516 -6.516 -2.7 -6.516 2.7 -2.7 6.516z",
      "SCISSORS": "M0.036 -14.795q0.252 -2.736 2.016 -5.292t4.716 -4.464q4.752 -3.024 10.008 -3.024 2.988 0 5.436 1.116 0.324 -0.468 0.792 -0.792l4.392 -2.628 -4.392 -2.628q-0.468 -0.324 -0.792 -0.792 -2.448 1.116 -5.436 1.116 -5.256 0 -10.008 -3.024 -2.952 -1.908 -4.716 -4.464t-2.016 -5.292q-0.18 -2.124 0.558 -4.068t2.286 -3.348q3.06 -2.844 7.992 -2.844 5.22 0 9.972 3.024 2.988 1.872 4.752 4.428t2.016 5.328q0.144 1.728 -0.36 3.492 0.144 0.036 0.432 0.18l3.96 2.376 24.84 -13.932q0.504 -0.288 1.116 -0.288 0.576 0 1.044 0.252l4.608 2.304q1.08 0.576 1.26 1.836 0.108 1.296 -0.9 2.016l-18.252 14.328 18.252 14.328q1.008 0.72 0.9 2.016 -0.18 1.26 -1.26 1.836l-4.608 2.304q-0.468 0.252 -1.044 0.252 -0.612 0 -1.116 -0.288l-24.84 -13.932 -3.96 2.376q-0.288 0.144 -0.432 0.18 0.504 1.764 0.36 3.492 -0.252 2.772 -2.016 5.31t-4.752 4.446q-4.752 3.024 -9.972 3.024 -4.896 0 -7.992 -2.808 -3.24 -3.024 -2.844 -7.452zm6.012 -0.684q-0.9 2.376 0.756 3.888 1.404 1.296 4.068 1.296 3.6 0 6.912 -2.124 2.916 -1.836 3.816 -4.212t-0.756 -3.888q-1.404 -1.296 -4.068 -1.296 -3.6 0 -6.912 2.124 -2.916 1.836 -3.816 4.212zm0 -28.8q0.9 2.376 3.816 4.212 3.312 2.124 6.912 2.124 2.664 0 4.068 -1.296 1.656 -1.512 0.756 -3.888t-3.816 -4.212q-3.312 -2.124 -6.912 -2.124 -2.664 0 -4.068 1.296 -1.656 1.512 -0.756 3.888zm18.144 19.008l0.324 0.288 0.252 0.216q0.144 0.144 0.396 0.432t0.396 0.432l0.936 0.936 5.76 -3.456 3.456 1.152 26.496 -20.736 -4.608 -2.304 -27.648 15.516v4.068zm0 -9.216l3.456 2.088v-0.396q0 -1.296 1.188 -2.016l0.504 -0.288 -2.844 -1.692 -0.936 0.936q-0.108 0.108 -0.36 0.396t-0.432 0.432l-0.144 0.126 -0.108 0.09zm8.064 4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62 -0.684 1.62 -1.62 0.684 -1.62 -0.684 -0.684 -1.62zm4.392 6.66l20.952 11.772 4.608 -2.304 -18.72 -14.688 -6.372 4.968q-0.072 0.108 -0.468 0.252z",
      "CAMERA": "M0 -13.751v-32.256q0 -3.816 2.7 -6.516t6.516 -2.7h8.064l1.836 -4.896q0.684 -1.764 2.502 -3.042t3.726 -1.278h18.432q1.908 0 3.726 1.278t2.502 3.042l1.836 4.896h8.064q3.816 0 6.516 2.7t2.7 6.516v32.256q0 3.816 -2.7 6.516t-6.516 2.7h-50.688q-3.816 0 -6.516 -2.7t-2.7 -6.516zm18.432 -16.128q0 6.66 4.734 11.394t11.394 4.734 11.394 -4.734 4.734 -11.394 -4.734 -11.394 -11.394 -4.734 -11.394 4.734 -4.734 11.394zm5.76 0q0 -4.284 3.042 -7.326t7.326 -3.042 7.326 3.042 3.042 7.326 -3.042 7.326 -7.326 3.042 -7.326 -3.042 -3.042 -7.326z",
      "VIDEO_CAMERA": "M0 -19.511v-25.344q0 -4.284 3.042 -7.326t7.326 -3.042h25.344q4.284 0 7.326 3.042t3.042 7.326v5.94l14.508 -14.472q0.648 -0.684 1.62 -0.684 0.432 0 0.9 0.18 1.404 0.612 1.404 2.124v39.168q0 1.512 -1.404 2.124 -0.468 0.18 -0.9 0.18 -0.972 0 -1.62 -0.684l-14.508 -14.508v5.976q0 4.284 -3.042 7.326t-7.326 3.042h-25.344q-4.284 0 -7.326 -3.042t-3.042 -7.326z",
      "CAR": "M0 -14.903v-13.824q0 -3.348 2.358 -5.706t5.706 -2.358h1.008l3.78 -15.084q0.828 -3.384 3.744 -5.67t6.444 -2.286h25.344q3.528 0 6.444 2.286t3.744 5.67l3.78 15.084h1.008q3.348 0 5.706 2.358t2.358 5.706v13.824q0 0.504 -0.324 0.828t-0.828 0.324h-4.608v4.608q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896v-4.608h-33.408v4.608q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896v-4.608h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828zm5.76 -10.368q0 2.376 1.692 4.068t4.068 1.692 4.068 -1.692 1.692 -4.068 -1.692 -4.068 -4.068 -1.692 -4.068 1.692 -1.692 4.068zm12.816 -11.52h34.272l-3.204 -12.852q-0.072 -0.288 -0.504 -0.63t-0.756 -0.342h-25.344q-0.324 0 -0.756 0.342t-0.504 0.63zm34.416 11.52q0 2.376 1.692 4.068t4.068 1.692 4.068 -1.692 1.692 -4.068 -1.692 -4.068 -4.068 -1.692 -4.068 1.692 -1.692 4.068z",
      "FILE_TEXT_O": "M0 -3.383v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728l11.232 11.232q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448zm4.608 -1.152h46.08v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296zm9.216 -10.368v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h25.344q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.504 0 -0.828 -0.324t-0.324 -0.828zm0 -9.216v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h25.344q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.504 0 -0.828 -0.324t-0.324 -0.828zm0 -9.216v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h25.344q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.504 0 -0.828 -0.324t-0.324 -0.828zm23.04 -12.672h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792v13.536z"	
  };

  $scope.myLatlng = new google.maps.LatLng(45.757924, 21.228982);
  
  var mapOptions = {
    center: $scope.myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  function geo_success(pos) {
    $scope.loading.hide();
    $scope.myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    $scope.map.setCenter($scope.myLatlng);
  }

  function geo_error(err) {
    alert('Unable to get position: ' + error.message);
    $scope.loading.hide();
  }

  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }
    
    var geo_timeout = 10000;

    $scope.loading = $ionicLoading.show({
      template: 'Getting current position...',
      showBackdrop: true,
      duration: geo_timeout
    });

    var geo_options = {
      //enableHighAccuracy: true,
      timeout: geo_timeout,
      maximumAge: 60000 //cache for 1m
    };

    navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
  };

  function initialize() {
    var eplanDB = new localStorageDB('eplan', localStorage);
    var suppliers = [];
    if( eplanDB.tableExists('suppliers') ) {
      suppliers = eplanDB.query("suppliers");
    }
    
    var locations = [];
    
    angular.forEach(suppliers, function(supplier, key) {
      var props = [];
      props.push(supplier.name);
      props.push(supplier.latitude);
      props.push(supplier.longitude);
      
      switch(supplier.categoryId) {
        case 9:
          props.push(fontawesome.markers.GLASS);
          props.push(0.3);
          break;
        case 8:
          props.push(fontawesome.markers.CAR);
          props.push(0.3);
          break;
        case 4:
          props.push(fontawesome.markers.LEAF);
          props.push(0.3);
          break; 
        case 5:
          props.push(fontawesome.markers.SCISSORS);
          props.push(0.3);
          break;           
        case 7:
          props.push(fontawesome.markers.CAMERA);
          props.push(0.3);
          break;           
        default:
          props.push(fontawesome.markers.MAP_MARKER);
          props.push(0.4);
      }
      
      locations.push(props);
     });

    var infowindow = new google.maps.InfoWindow({maxWidth: 220});
  
    var marker, i;
    
    //Marker + infowindow + angularjs compiled ng-click
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: {
          path: locations[i][3],
          scale: locations[i][4],
          strokeWeight: 0.2,
          strokeColor: 'black',
          strokeOpacity: 1,
          fillColor: 'red',
          fillOpacity: 1
        },
        title: locations[i][0]
      });
  
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var contentString = "<div class='infowindow-content'><strong>"+locations[i][0]+"</strong><br><a ng-click='clickTest()'>Info about the marker.</a></div>";
          var compiled = $compile(contentString)($scope);
          infowindow.setContent(compiled[0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    $scope.map = map;
    
    $scope.centerOnMe();
  };
  
  ionic.Platform.ready(initialize);
  
  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };  

}