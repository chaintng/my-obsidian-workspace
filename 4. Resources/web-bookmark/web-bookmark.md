---
created: 2024-11-25T22:07:18+07:00
modified: 2024-12-06T21:25:45+07:00
references: 
favourite: false
template: general
tags: 
---
```dataview
TABLE WITHOUT ID
file.link AS Note
, dateformat(default(date(file.frontmatter.modified), file.mtime), "yyyy-MM-dd") AS "Modified"
FROM "4. Resources/web-bookmark"
WHERE 1=1
AND file.name != this.file.name
SORT default(date(file.frontmatter.modified), file.mtime) desc
LIMIT 20
```