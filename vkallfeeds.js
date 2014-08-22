vkladki = document.getElementsByClassName("t0")[0];
lastChild = vkladki.children[3];

li1 = document.createElement("li");
li2 = document.createElement("li");

li1.id ="feedtab_notifications";
li1.innerHTML = "<a href=\"/feed?section=notifications\" onclick=\"return checkEvent(event);\" onmousedown=\"return feed.switchSection('notifications', event);\"><b class=\"tl1\"><b></b></b><b class=\"tl2\"></b><b class=\"tab_word\">Все уведомления</b></a>";

vkladki.appendChild(li1,lastChild);

li2.id = "feedtab_replies";
li2.innerHTML = "<a href=\"/feed?section=replies\" onclick=\"return checkEvent(event);\" onmousedown=\"return feed.switchSection('replies', event);\"><b class=\"tl1\"><b></b></b><b class=\"tl2\"></b><b class=\"tab_word\">Ответы</b></a>";

vkladki.appendChild(li2,li1);