---
created: 2024-11-06T10:23:38+07:00
modified: 2024-12-06T13:41:50+07:00
references: 
favourite: false
template: general
tags: 
---

## Last updated files
```dataview
TABLE WITHOUT ID 
file.link AS Note, file.content,
dateformat(created, "yyyy-MM-dd") AS " Created  "
FROM "1. Inbox/Journals"
WHERE 1=1
AND !regexmatch("^1. Inbox/Journals/.+/", file.path)
AND file.name != "Transcripts"
AND file.name != this.file.name
AND regextest("\d+-\d+-\d+", file.name)
AND journals = true
SORT file.name desc
LIMIT 20
```

## MY 🥰 OPEN TODO ✅ 
```dataview
TASK
from #todo or "1. Inbox/Journals"
where !completed
and !contains(file.path, "3. Areas/💼 Work")
sort created DESC
limit 20
```
