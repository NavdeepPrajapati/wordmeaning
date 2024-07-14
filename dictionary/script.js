const url="https://api.dictionaryapi.dev/api/v2/entries/en/"

const result=document.getElementById("result")
const sound=document.getElementById("sound")
const btn=document.getElementById("btn")
const btns=document.getElementById("btns")



btn.addEventListener('click',()=>{
    let inp=document.getElementById("input").value
    fetch(`${url}${inp}`).then(data=>data.json()).then(item=>{
        // console.log(item)
        result.innerHTML=`
        <div class="word">
                <h3>${inp}</h3>
                <button id="btns">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${item[0].meanings[0].partOfSpeech}</p>
                <p>/${item[0].phonetic}/</p>
                
            </div>
            <p class="word-meaning">
                ${item[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
               ${item[0].meanings[0].definitions[0].example || "/not found example☹️/" }
            </p>`
            sound.setAttribute("src",`${item[0].phonetics[0].audio || item[0].phonetics[1].audio || item[0].phonetics[2].audio || item[0].phonetics[3].audio}`)
            playSound()
            console.log(item);
    })
    .catch(()=>{
        result.innerHTML=`<h3 class="error">Could'nt find the word</h3>`
    })
})

// btns.addEventListener("click",playSound())
function playSound(){
    // console.log("hello");
    sound.play()
}