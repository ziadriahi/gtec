angular.module('gtec',[]);

angular.module('gtec').controller('gCtrl',function($scope){
    var $ctrl=this;
    $ctrl.name="salut";
    $ctrl.surname="Zied";
    var list=[
        {name:'Mohamed'},{name:'Nizar'},{name:'Amine'}
             ];
    $ctrl.list=angular.copy(list);
});
