---
created: 2024-11-06T10:23:38+07:00
modified: 2025-01-10T19:35:19+07:00
references: 
favourite: false
template: "[[General]]"
tags:
  - folder-note
---

## Last updated files
```dataview
TABLE WITHOUT ID
choice(length(title) = 0, file.link, link(file.link, file.name + " - " + title)) AS Note
FROM "🏠 Personal/📝 Journals"
WHERE 1=1
AND !regexmatch("📝 Journals/.+/", file.path)
AND file.name != "Transcripts"
AND file.name != this.file.name
AND title != null
AND !contains(file.path, "🏠 Personal/📝 Journals/Transcripts")
AND regextest("\d+-\d+-\d+", file.name)
// AND length(title) != 0
SORT file.name desc
LIMIT 20
```

## MY 🥰 OPEN TODO ✅
```dataview
TASK
from #todo or "🏠 Personal/📝 Journals"
where !completed
and !contains(file.path, "💼 Work/2. Areas")
sort created DESC
limit 20
```
