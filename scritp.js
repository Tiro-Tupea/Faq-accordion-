window.onload=function(){

    let questions = document.querySelectorAll('.Q');

    //this function will open the div and show the answer 
    function showAnswer() { 
        
        this.classList.toggle('show'); 
        //select the last child of div 'Q' 
        var panel = this.lastElementChild;

        // select the first child of div 'icon'
        //to select the arrow img
        var arrow = this.firstElementChild;
        var arrowIcon = arrow.firstElementChild;

            if(panel.classList != null) {
                //add the class active to the class="answer"
                panel.classList.toggle('active');
                //add the class rotate to the class="fas" (icon img)
                arrowIcon.classList.toggle('rotate');


            }
        
    }
    
    questions.forEach(question => question.addEventListener('click', showAnswer));
}
