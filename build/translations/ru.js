(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Block quote":"Цитата",Bold:"Жирный","Bulleted List":"Маркированный список",Cancel:"Отмена","Change image text alternative":"Редактировать альтернативный текст","Choose heading":"Выбрать заголовок",Code:"Исходный код",Downloadable:"","Dropdown toolbar":"","Edit link":"Редактировать ссылку","Editor toolbar":"","Enter image caption":"Подпись к изображению",Heading:"Заголовок","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","image widget":"Виджет изображений","Insert image":"Вставить изображение",Italic:"Курсив",Link:"Ссылка","Link URL":"Ссылка URL",Next:"","Numbered List":"Нумерованный список","Open in a new tab":"","Open link in new tab":"Открыть ссылку в новой вкладке",Paragraph:"Параграф",Previous:"",Redo:"Повторить","Rich Text Editor":"Редактор","Rich Text Editor, %0":"Редактор, %0",Save:"Сохранить","Show more items":"Другие инструменты",Strikethrough:"Зачеркнутый",Subscript:"Подстрочный",Superscript:"Надстрочный","Text alternative":"Альтернативный текст","This link has no URL":"Для этой ссылки не установлен адрес URL",Underline:"Подчеркнутый",Undo:"Отменить",Unlink:"Убрать ссылку","Upload failed":"Загрузка не выполнена","Upload in progress":"Идёт загрузка"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));