---
created: 2024-11-16T02:43:45+07:00
modified: 2024-11-18T00:13:43+07:00
references: 
favourite: false
template: general
tags: 
---

```dataview
TABLE WITHOUT ID
file.link AS Note, 
dateformat(created, "yyyy-MM-dd") AS " Created  "
FROM ""
WHERE contains(file.path, this.file.folder)
AND file.name != this.file.name
SORT file.name desc
LIMIT 20
```
