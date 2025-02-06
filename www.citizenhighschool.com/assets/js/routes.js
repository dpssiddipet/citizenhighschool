var app = angular.module('schoolApp', ["ui.router"]);

// configure our routes
app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider, $stateProvider
    // show home page
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })

    // show about page
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })

    .state('beyondacademics', {
      url: '/beyondacademics',
      templateUrl: 'templates/beyondacademics.html',
      controller: 'beyondacademicsCtrl'
    })

   

    // trainersCtrl
    .state('trainers', {
      url: '/trainers',
      templateUrl: 'templates/trainers.html',
      controller: 'trainersCtrl'
    })

    // eventsCtrl
    .state('events', {
      url: '/events',
      templateUrl: 'templates/events.html',
      controller: 'eventsCtrl'
    })
    // contactCtrl
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
      controller: 'contactCtrl'
    })
    // preprimary
    .state('preprimary', {
      url: '/preprimary',
      templateUrl: 'templates/preprimary.html',
      controller: 'preprimaryCtrl'
    })
        // mandatory
        .state('mandatory', {
          url: '/mandatory',
          templateUrl: 'templates/mandatory.html',
          controller: 'mandatoryCtrl'
        })
    // primarySchool
    .state('primarySchool', {
      url: '/primarySchool',
      templateUrl: 'templates/primarySchool.html',
      controller: 'primarySchoolCtrl'
    })
    // /////////////////////////////////

    // middleSchool
    .state('middleSchool', {
      url: '/middleSchool',
      templateUrl: 'templates/middleSchool.html',
      controller: 'middleSchoolCtrl'
    })
    // assessment
    .state('assessment', {
      url: '/assessment',
      templateUrl: 'templates/assessment.html',
      controller: 'assessmentCtrl'
    })
    //// assessment
    .state('admissionProcess', {
      url: '/admissionProcess',
      templateUrl: 'templates/admissionProcess.html',
      controller: 'admissionProcessCtrl'
    })
    //// feeStructure
    .state('feeStructure', {
      url: '/feeStructure',
      templateUrl: 'templates/feeStructure.html',
      controller: 'feeStructureCtrl'
    })
    // whyToChoseUs
    .state('whyToChoseUs', {
      url: '/whyToChoseUs',
      templateUrl: 'templates/whyToChoseUs.html',
      // controller  : 'feeStructureCtrl'
    })
    // enrollmentGuide
    .state('enrollmentGuide', {
      url: '/enrollmentGuide',
      templateUrl: 'templates/enrollmentGuide.html',
      // controller  : 'feeStructureCtrl'
    })
  
   
    // ageCriteria
    .state('ageCriteria', {
      url: '/ageCriteria',
      templateUrl: 'templates/ageCriteria.html',
      // controller  : 'feeStructureCtrl'
    })
    // documentRequired
    .state('documentRequired', {
      url: '/documentRequired',
      templateUrl: 'templates/documentRequired.html',
      // controller  : 'feeStructureCtrl'
    })
    // transport
    .state('transport', {
      url: '/transport',
      templateUrl: 'templates/transport.html',
      // controller  : 'feeStructureCtrl'
    })
    // onlineRegis
    .state('onlineRegis', {
      url: '/onlineRegis',
      templateUrl: 'templates/onlineRegis.html',
      // controller  : 'feeStructureCtrl'
    })
    //OfflineRegis
    .state('OfflineRegis', {
      url: '/OfflineRegis',
      templateUrl: 'templates/OfflineRegis.html',
      // controller  : 'feeStructureCtrl'
    })
//student life
.state('education', {
  url: '/education',
  templateUrl: 'templates/education.html',
  controller: 'educationCtrl'
})
.state('extracurricular', {
  url: '/extracurricular',
  templateUrl: 'templates/extracurricular.html',
  controller: 'extracurricularCtrl'
})
.state('cocurricular', {
  url: '/cocurricular',
  templateUrl: 'templates/cocurricular.html',
  controller: 'cocurricularCtrl'
})
.state('schoolpermises', {
  url: '/schoolpermises',
  templateUrl: 'templates/schoolpermises.html',
  controller: 'schoolpermisesCtrl'
})
.state('naturalsunlight', {
  url: '/naturalsunlight',
  templateUrl: 'templates/naturalsunlight.html',
  controller: 'naturalsunlightCtrl'
})
.state('indoorenvironment', {
  url: '/indoorenvironment',
  templateUrl: 'templates/indoorenvironment.html',
  controller: 'indoorenvironmentCtrl'
})
.state('physical', {
  url: '/physical',
  templateUrl: 'templates/physical.html',
  controller: 'physicalCtrl'
})
.state('safety', {
  url: '/safety',
  templateUrl: 'templates/safety.html',
  controller: 'safetyCtrl'
})
//student life

  // catch all route
  //   send users to the home page
  $urlRouterProvider.otherwise('/home');
});
