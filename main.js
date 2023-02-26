function onPageLoad(){
    console.log("JS is running");
    answer_3();
    answer_4();
    
};

function answer_3(){
    const btn = document.getElementById("ans3Bt");

    btn.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("CookieValue").innerHTML = "e18e30e7165779625aa260391f5dc5ee";
    });
}

function answer_4(){
    const form = document.getElementById("phonetics");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var searchTerm = document.getElementById("searchInput").value;
        console.log(searchTerm);
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const phonetic = data[0].phonetics[0].text;
            if (phonetic == null) {
                //console.log("No phonetic value found for " + searchTerm);
                document.getElementById("ans4").innerHTML = "No Phonetic value found for this one. Try another word?"; 
            } else {
                //console.log(phonetic);
                document.getElementById("ans4").innerHTML = phonetic;            
            }
        })
        .catch(error => console.error(error));    

    });


}