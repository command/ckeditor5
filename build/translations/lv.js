(function(d){	const l = d['lv'] = d['lv'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 no %1","Block quote":"Citāts",Bold:"Trekns","Bulleted List":"Nenumurēts Saraksts",Cancel:"Atcelt","Change image text alternative":"Mainīt attēla alternatīvo tekstu","Choose heading":"Izvēlēties virsrakstu",Code:"Kods",Downloadable:"Lejupielādējams","Dropdown toolbar":"Papildus izvēlnes rīkjosla","Edit link":"Labot Saiti","Editor toolbar":"Redaktora rīkjosla","Enter image caption":"Ievadiet attēla parakstu",Heading:"Virsraksts","Heading 1":"Virsraksts 1","Heading 2":"Virsraksts 2","Heading 3":"Virsraksts 3","Heading 4":"Virsraksts 4","Heading 5":"Virsraksts 5","Heading 6":"Virsraksts 6","image widget":"attēla sīkrīks","Insert code block":"Ievietot koda bloku","Insert image":"Ievietot attēlu",Italic:"Kursīvs",Link:"Saite","Link URL":"Saites URL",Next:"Nākamā","Numbered List":"Numurēts Saraksts","Open in a new tab":"Atvērt jaunā cilnē","Open link in new tab":"Atvērt saiti jaunā cilnē",Paragraph:"Pagrāfs","Plain text":"Vienkāršs teksts",Previous:"Iepriekšējā",Redo:"Uz priekšu","Rich Text Editor":"Bagātinātais Teksta Redaktors","Rich Text Editor, %0":"Bagātinātais Teksta Redaktors, %0",Save:"Saglabāt","Show more items":"Parādīt vairāk vienumus",Strikethrough:"Nosvītrots",Subscript:"Apakšraksts",Superscript:"Augšraksts","Text alternative":"Alternatīvais teksts","This link has no URL":"Saitei nav norādīts URL",Underline:"Pasvītrots",Undo:"Atsaukt",Unlink:"Noņemt Saiti","Upload failed":"Augšupielāde neizdevusies","Upload in progress":"Notiek augšupielāde"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));