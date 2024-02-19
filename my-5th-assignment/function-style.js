let counte = 40;
let scondeCount = 0;



function buttonClickById (){
    const section = document.getElementById('ticket-section');
    section.scrollIntoView({behavior:"smooth"});
}

function SeellOfferById(){
    const nextSection = document.getElementById('seat-section');
    nextSection.scrollIntoView({behavior:"smooth"});
}

const seatItem = document.querySelectorAll('.seat-1');
for (let seat of seatItem ){
   seat.addEventListener('click',function(){
    allSeatById ()
    newSeatById()
    serentCountById (seat.innerText)
   })

}

function allSeatById (){
    counte -= 1;
    const counteSeat = document.getElementById('counte_seat');
    counteSeat.innerText = counte;
}

function newSeatById (){
    scondeCount +=1;
    const newSeat = document.getElementById('seatcount_1');
    newSeat.innerText = scondeCount;
}

function serentCountById (id){
    const third = document.getElementById('count-2');
    const createDiv = document.createElement('div');
    createDiv.classList.add('flex', 'gap-20', 'pt-6', 'justify-center')
    const forth = `
    
    <div>
       <h1 class="font-semibold text-stone-500">${id}</h1>
  </div>
      <div>
     <h1 class="font-semibold text-stone-500">Economoy</h1>
     </div>
    <div>
      <h1 class="font-semibold text-stone-500">550</h1>
   </div>`
   createDiv.innerHTML = forth;
   third.appendChild(createDiv);
   
}


document.getElementById('next_button').addEventListener('click',function(){
    console.log('added by new');
})