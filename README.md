# Angularjs Taira Multiselect
Simple, Easy to use and Flexible Multiselect directive for AngularJS


## Demo & Examples
Full examples and documentation can be found here: http://ybrodsky.github.io/angularjs-taira-multiselect/


## Instalation

Taira Multiselect relies on [Ui-Bootstrap] (https://angular-ui.github.io/bootstrap/) and [Lodash] (http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js)
```html
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.js"></script>
  <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.3.2.js"></script>
  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
  
  <!--Taira Multiselect-->
  <script type="text/javascript" src="js/taira.multiselect.min.js"></script>
  
  <!--Bootstrap css-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
```

## Basic setup

```javascript
  var myApp = angular.module('myApp', ['ui.bootstrap', 'taira-multiselect']);
```

```html
  <taira-multiselect model="selected" options="dataSet" settings="settings"></taira-multiselect>
```

```javascript
  $scope.selected = [];
  $scope.dataSet = [
    {id: 1, name: 'Alejo', surname: 'Gerlingstein'},
    {id: 2, name: 'Topo', surname: 'Noesuficiente'},
    {id: 2, name: 'Vivian', surname: 'Redox'},
  ];
  $scope.settings = {
    display: {
      fields: ['name']        
    }
  };
```


For more extensive examples and a full display of all the configurations, go here: http://ybrodsky.github.io/angularjs-taira-multiselect/
