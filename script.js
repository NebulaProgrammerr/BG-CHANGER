const body = document.getElementById('body');
const button = document.querySelectorAll('li')

 button.forEach(function (value){
    value.addEventListener('click', function(){
        let className = this.classList[0];
        let color = '';
        if (className == 'red') {
            color = '#ff7675'}
        if (className == 'green') {
            color = '#00b894'}
        if (className == 'blue') {
            color = '#0984e3'}
        if (className == 'pink') {
            color = '#fd79a8'}            
           body.style.backgroundColor =color;
    })
})


