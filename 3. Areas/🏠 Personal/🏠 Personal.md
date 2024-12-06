---
created: 2024-09-08, 09:49:30 PM
modified: 2024-12-06T21:15:53+07:00
tags: 
auto-backlink: "[[3. Areas]]"
---

## Last updated files
```dataview
TABLE WITHOUT ID
file.link AS Files, file.mtime as "Last Modified"
FROM "3. Areas/🏠 Personal"
WHERE file.name != this.file.name
  AND !contains(file.path, "ADHOC")
  AND !contains(file.tags, "hidden")
SORT file.mtime desc
LIMIT 20
```

## ME 🥰  TODO ITEMS
```dataview
TASK
from #todo or "1. Inbox/Journals"
where !completed
AND !contains(file.path, "3. Areas/💼 Work")
AND !contains(file.tags, "hidden")
sort created DESC
limit 20
```
