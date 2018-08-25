

//game counter
 let wins = 0;
 let losses = 0;


let total = 0; //currentscores
let goal = Math.floor(Math.random() * 80) + 20;
$('.goal').text(goal) 

for(let i=1; i < 5; i++) {
    $('.crystalRow').append(`
    <div class="col-sm-3">
        <img class ="crystal" id ="crystal${i}" data-crystal=${Math.floor(Math.random() * 20) + 1} src="assets/images/crystal${i}.png" alt="crystal${i}">
    </div>
    `)
}

$('.crystal').on('click', function(){
    let crystalValue = $(this).attr('data-crystal')
    total += parseInt(crystalValue)
    $('.total').text(total) //note: (total) is the variable name from let total

        gameStatus()
   
})

function gameStatus(){
    if(goal === total){
        wins++;
        $('.win').text(wins) // '.win' = html and 'wins' = the variable that has been declared at the top
        //alert('you Win')
        reset();
    }else if (total > goal){
        losses++;
        $('.lost').text(losses)
       // alert('you lose')
        reset();

    }

}

function reset(){
  //  $('.crystal').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal1').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal2').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal3').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal4').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    total = 0;
    $('.total').text(total) 
    goal = Math.floor(Math.random() * 80) + 20;
    $('.goal').text(goal) 


}