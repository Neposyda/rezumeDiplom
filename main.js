var response_form = document.getElementById('response-form');
var openModal = document.getElementById("open-modal");
var span = document.getElementsByClassName("close")[0];
openModal.onclick = function() {
    clearResponseForm ();
	response_form.style.display = "block";
}
span.onclick = function() {
	response_form.style.display = "none";
    clearResponseForm ();
}

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
    "JavaScript" : " динамічна, об'єктно-орієнтована[4] прототипна мова програмування",
    "GIT" : "розподілена система керування версіями файлів та спільної роботи",
    "WebPack" : "один из самых мощных и гибких инструментов для сборки frontend",
    "React.js" : "відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків",
    "Node.js" : "платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою JavaScript",
    "Scrum" : "підхід управління проєктами для гнучкої розробки програмного забезпечення, робить акцент на якісному контролі процесу розробки",
    "Agile" : "клас методологій розробки програмного забезпечення, що базується на ітеративній розробці, в якій вимоги та розв'язки еволюціонують через співпрацю між багатофункціональними командами здатними до самоорганізації",
    "GTD" : "Getting Things Done (GTD) (укр. впоратися зі справами) — методика підвищення особистої ефективності, створена консультантом Девідом Аланом",
    "Teamwork" : "це спільні зусилля групи для досягнення спільної мети або виконання завдання найбільш ефективним та ефективним способом"
}