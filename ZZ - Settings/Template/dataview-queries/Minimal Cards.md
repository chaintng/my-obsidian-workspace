---
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
references:
favourite: false
template: "[[General]]"
tags:
---

```dataview
TABLE without id cover
, file.link as Name
, price
FROM [[]]
WHERE 1=1
AND contains(file.path, this.file.folder)
```

```
cssclasses:
- cards
- cards-cols-3
- cards-cover
- cards-1-1
```
