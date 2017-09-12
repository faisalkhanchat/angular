var myApp = angular
.module("myApp",[])
.controller("myController", function ($scope){
    
    var employees = [
        { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
        { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
        { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
        { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
        { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
    ];

    $scope.employees = employees;

var technologies = [
    {name: "HTML", likes: 0, dislikes :0 },
    {name: "CSS", likes: 0, dislikes :0 },
    {name: "JS", likes: 0, dislikes :0 },
    {name: "C#", likes: 0, dislikes :0 },
    {name: "PHP", likes: 0, dislikes :0 },
    {name: "JAVA", likes: 0, dislikes :0 },
    {name: ".NET", likes: 0, dislikes :0 },
    {name: "MySQL", likes: 0, dislikes :0 }
    
];
    $scope.technologies = technologies;
    
    $scope.incrementLikes = function(technology){
        console.log('clicked');
        technology.likes++ ;
    } 
    $scope.incrementDislikes = function(technology){
        technology.dislikes++ ;
    } 
    
    
});