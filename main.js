var response_form = document.getElementById('response-form');
var openModal = document.getElementById("open-modal");
var span = document.getElementsByClassName("close")[0];
var tech_skills = document.getElementById("tech-skills");
var soft_skills = document.getElementById("soft-skills");
var skills_list = document.getElementsByName("skills-list");
var newDiv = document.createElement("div");
newDiv.setAttribute("class", "skills-detail");
newDiv.setAttribute("name", "skills-detail");

openModal.onclick = function() {
    clearResponseForm ();
	response_form.style.display = "block";
}
span.onclick = function() {
	response_form.style.display = "none";
    clearResponseForm ();
}

skills_list.forEach((list) => list.onclick = function(event) {    
    var selectedLi = (event.target.nodeName === "LI")?event.target:event.target.parentElement;
     if (selectedLi.lastElementChild === newDiv) {
        selectedLi.removeChild(newDiv);
        newDiv.innerText = "";
     }
     else
     {
        var nameScill = selectedLi.firstElementChild.innerText;    
        newDiv.innerText = myGlossary[nameScill];
        selectedLi.appendChild(newDiv);        
     }
});

window.onload = function() {
	response_form.addEventListener('submit', function(event) {
		event.preventDefault();
        emailjs.sendForm('service_rxx4kdc', 'response-form', '#response-form', "user_BZQUP7Cepb0tnErGl5qD8")
            .then(function() {
            	response_form.style.display = "none";
                clearResponseForm ();
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

function clearResponseForm () {
    document.getElementById("input-name").value="";
    document.getElementById("input-email").value="";
    document.getElementById("message").value="";
}

var myGlossary = {
    "HTML5": "5-та версія мови розмітки HTML",
    "CSS3" : "це спеціальна мова стилю вебсторінок, що використовується для опису їхнього зовнішнього вигляду",
    "JavaScript" : " динамічна, об'єктно-орієнтована прототипна мова програмування",
    "GIT" : "розподілена система керування версіями файлів та спільної роботи",
    "WebPack" : "один з найбільш потужних та гнучких інструментов для збірки frontend",
    "React.js" : "відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків",
    "Node.js" : "платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою JavaScript",
    "Scrum" : "підхід управління проєктами для гнучкої розробки програмного забезпечення, робить акцент на якісному контролі процесу розробки",
    "Agile" : "клас методологій розробки програмного забезпечення, що базується на ітеративній розробці, в якій вимоги та розв'язки еволюціонують через співпрацю між багатофункціональними командами здатними до самоорганізації",
    "GTD" : "Getting Things Done (GTD) (укр. впоратися зі справами) — методика підвищення особистої ефективності, створена консультантом Девідом Аланом",
    "Teamwork" : "це спільні зусилля групи для досягнення спільної мети або виконання завдання найбільш ефективним та ефективним способом"
}