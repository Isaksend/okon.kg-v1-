document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    console.log('whhh')
    
    Array.from(document.getElementsByClassName('btnCall')).forEach(element => {
        element.addEventListener('click', function() {
            console.log('Button clicked');
            document.getElementById('popupWrapper').classList.remove('hidden');
        });
    });
    
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popupWrapper').classList.add('hidden');
    });
    
    document.getElementById('popupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        let name = document.getElementById('nameInput').value
        let phone = document.getElementById('numberInput').value

        alert('submition: '+ name+' '+ phone)

        document.getElementById('nameInput').value = ''
        document.getElementById('numberInput').value = ''



    });
});