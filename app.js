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
      var a=0;
      var b=0;
      for(var i=0;i<10;i++){
        a++;
        if(col-1-i<0){
          break;
        }
        if($scope.board[col-1-i][row]===false && $scope.board[col-i][row] != false){
          break;
        }
      }

      for(var i =0;i<(10-col);i++){
        b++;
        if(col+i+1>9){
          break;
        }
        if($scope.board[col+i][row]!=false && $scope.board[col+i+1][row] === false){
          break;
        }
      }

      var k=0;
      for(var i =(col-(a-1));i<(col+b);i++){
        word_vertical[k] = $scope.board[i][row];
        k++;
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

      var j=0;
      for(var i = (row-(m-1));i<(row+n);i++){
        word_horizontal[j]=$scope.board[col][i];
        j++;

      }
      
     $scope.word=word_vertical;
   
     
     $scope.word1=word_horizontal;
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
