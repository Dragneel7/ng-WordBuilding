angular.module('ngSnake', [])

  .controller('snakeCtrl', function($scope, $timeout, $window) {
    var BOARD_SIZE = 10;

  
    

    $scope.value=function(col,row){
      if($scope.board[col][row]==='a'){
        return 'a';
      }
       else if($scope.board[col][row]==='b'){
        return 'b';
      }
      else if($scope.board[col][row]==='c'){
        return 'c';
      }
      else if($scope.board[col][row]==='d'){
        return 'd';
      }
      else if($scope.board[col][row]==='e'){
        return 'e';
      }
      else if($scope.board[col][row]==='f'){
        return 'f';
      }
      else if($scope.board[col][row]==='g'){
        return 'g';
      }
      else if($scope.board[col][row]==='h'){
        return 'h';
      }
      else if($scope.board[col][row]==='i'){
        return 'i';
      }
      else if($scope.board[col][row]==='j'){
        return 'j';
      }
      else if($scope.board[col][row]==='k'){
        return 'k';
      }
      else if($scope.board[col][row]==='l'){
        return 'l';
      }
      else if($scope.board[col][row]==='m'){
        return 'm';
      }
      else if($scope.board[col][row]==='n'){
        return 'n';
      }
      else if($scope.board[col][row]==='o'){
        return 'o';
      }
      else if($scope.board[col][row]==='p'){
        return 'p';
      }
      else if($scope.board[col][row]==='q'){
        return 'q';
      }
      else if($scope.board[col][row]==='r'){
        return 'r';
      }
      else if($scope.board[col][row]==='s'){
        return 's';
      }
      else if($scope.board[col][row]==='t'){
        return 't';
      }
      else if($scope.board[col][row]==='u'){
        return 'u';
      }
      else if($scope.board[col][row]==='v'){
        return 'v';
      }
      else if($scope.board[col][row]==='w'){
        return 'w';
      }
      else if($scope.board[col][row]==='x'){
        return 'x';
      }
      else if($scope.board[col][row]==='y'){
        return 'y';
      }
      else if($scope.board[col][row]==='z'){
        return 'z';
      }
      
    }

    
    

    
     $scope.setStyling = function(col, row) {
      if($scope.board[col][row] === false){
      return 'grey';
    }
    if($scope.board[col][row] != false){
      return 'lightgrey';
    }
    

    };

      
    $scope.make_active = function(col,row){
     
      $scope.board[col][row]=prompt("enter a letter");
      var word_vertical =[];
      for(var i =9;i>-1;i--){
        word_vertical[9-i] = $scope.board[9-i][row];
      } 

      var word_horizontal=[];
      var m=0;
      var n=0;
      

      for(var i=0;i<10;i++){
        m++;
        if(row-1-i<0){
          break;
        }
        if($scope.board[col][row-1-i]===false && $scope.board[col][row-i] !=false ){

          break;
        }
      }
      
      for(var i =0;i<(10-row);i++){
        n++;
        if($scope.board[col][row+i]!=false && $scope.board[col][row+i+1]===false){
          break;
        }
      }
      
      for(var i = 9;i>-1;i--){
        word_horizontal[9-i]=$scope.board[col][9-i];

      }
      
     $scope.word=word_vertical;
   
     
     $scope.word1=m+n-1 ;
      value();
     

    }
    
    function setupBoard() {
     
      $scope.board = [];
      for (var i = 0; i < BOARD_SIZE; i++) {
        $scope.board[i] = [];
       
        for (var j = 0; j < BOARD_SIZE; j++) {
          
         $scope.board[i][j]=false;
        
        }
      }
      
   }
    setupBoard();


    

  });
