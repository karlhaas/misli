export const MEETUP_DATA = {
  'decks': {
    'decks': [{
      'uuid': 'deck1',
      'name': 'My first deck',
      'slides': [{
        'uuid': '427ef758-3724-4da8-98d6-638c18ed4f3a',
        'data': 'Karl Haas\nmail@karlhaas.at\n\nAngular Meetup Graz - 12.12.2017',
        'type': 'simple-text'
      }, {
        'uuid': 'c9f038f4-1c1f-4db5-a9f1-feb8eaafb378',
        'data': '<strong>Experience</strong>\n\nKnapp Logistics (C/C++)\nSSI Schäfer (Java)\nCarrot & Company (Angular)\n<img src=\'https://app.feedbackr.io/static/images/feedbackr_logo_animated_dark.svg\' width=\'13%\'>\n',
        'type': 'simple-text'
      }, {
        'uuid': 'a',
        'type': 'simple-text',
        'data': '<strong>Agenda</strong>\n\nAn app within a day\nDynamic Components in Angular\n'
      }, {
        'uuid': 'b',
        'type': 'simple-text',
        'data': '<strong>Experiment</strong>\n\nAn app within a day\nor\nwhat can I write in 8 hours using Angular\n'
      }, {
        'uuid': '2dccb655-6b48-4253-85ae-20bfcf36d1dc',
        'data': 'Hey, I\'m the result 😎',
        'type': 'simple-text'
      }, {
        'uuid': 'c',
        'type': 'simple-text',
        'data': '<strong>Why?</strong>\n\nNo simple app to illustrate dynamic components\nTo play with the latest versions\nTo find the obstacles'
      }, {
        'uuid': '2143af70-e0d4-4c80-b0f1-34095c5a53de',
        'data': '<strong>Tech Stack</strong>\n\nAngular v5 (Base, Router, Forms)\nAngular CLI\nAngular Flex Layout\nAngular Material\nNGRX Store',
        'type': 'simple-text'
      }, {
        'uuid': 'e1362c79-cb6f-447b-a7cf-6e2d3d1be68c',
        'data': '<strong>Result: v0.0.1</strong>\n\nEdit slides using HTML (including preview)\nAdd and delete slides\nPresent slides\nBookmarkable URLs\nData stored in browser storage\nKeyboard, mouse wheel and presenter navigation',
        'type': 'simple-text'
      }, {
        'uuid': 'd575609e-484a-4eb8-99aa-2e66f20328a0',
        'data': '<strong>Pitfalls (1/2)</strong>\n\nFlexLayoutModule not added to the right module (styles not applied without warning)\n\nNGRX: StoreRouterConnectingModule does not work well with ngrx-store-freeze',
        'type': 'simple-text'
      }, {
        'uuid': 'aa9ca8dc-2e68-4d09-8ba8-b819aa057e86',
        'data': '<strong>Pitfalls (2/2)</strong>\n\nFuture-proof architecture vs KISS\nAOT',
        'type': 'simple-text'
      }, {
        'uuid': '72804aa4-add4-4b8e-9844-41a993bbe296',
        'data': '<strong>Dynamic Components</strong>\n\nGoal: A way to add new types of slides without touching the core app',
        'type': 'simple-text'
      }, {
        'uuid': '9581b2a6-efbf-4974-ae71-48a8e019b794',
        'data': '<strong>Dynamic Components</strong>\n\nNot talking much about theory because it is already covered in the official docs\n<a href=\'https://angular.io/guide/dynamic-component-loader\' target=\'_blank\'>Dynamic Component Loader</a>',
        'type': 'simple-text'
      }, {
        'uuid': '323cb4ac-c184-4ba2-b4b3-7a7bc45026b8',
        'data': '<strong>Approach</strong>\n\nAdd a registry for slide types and load components to edit and present slides dynamically',
        'type': 'simple-text'
      }, {
        'uuid': 'dc59ffb5-7974-4015-9bec-f3a3ef33dbf6',
        'data': '<strong>Registry</strong>\n\nAn Angular service which is observable and knows all types of slides',
        'type': 'simple-text'
      }, {
        'uuid': 'd35c3722-3048-490e-9dc2-059d9e166867',
        'data': '<strong>Two ways to provide registry entries</strong>\n\nUsing dependency injection (e.g. feedbackr)\nInjecting the registry service in modules and register types',
        'type': 'simple-text'
      }, {
        'uuid': '71f240ce-baa0-47ba-a813-d6ad7a72006c',
        'data': '<strong>Render component depending on type</strong>\n\nObtain the type information from the slide data\nGet the right component class by using the registry\nCreate a component instance using ComponentFactoryResolver\nPass input data to the component and forward output events',
        'type': 'simple-text'
      }, {
        'uuid': '1ae3e0c1-af7a-4b07-8555-2dea0ca82849',
        'data': '<strong>Add slide depending on type</strong>\n\nUse the registry to get all available types\nRender a button per type\nRegistry entry contains a function to initialize the new slide',
        'type': 'simple-text'
      }, {
        'uuid': 'a750de2a-85da-4980-9df2-f1c88676aa3a',
        'data': 'Demo: Add a new slide type ...',
        'type': 'simple-text'
      }, {
        'uuid': '971e1422-b0cd-4e2c-b257-2b5dfb35ce6f',
        'data': '<strong>Thx!</strong>\n\nKarl Haas\nmail@karlhaas.at',
        'type': 'simple-text'
      }]
    }, {
      'uuid': 'deck2',
      'name': 'My first deck',
      'slides': [{'uuid': 'b66e0c27-9567-428e-ae85-e72b6648d4f8', 'data': 'Wahnsinn \nsdf\n', 'type': 'simple-text'}]
    }]
  }, 'presenter': {}
}
