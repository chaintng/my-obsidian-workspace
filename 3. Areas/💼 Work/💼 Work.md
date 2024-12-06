---
modified: 2024-12-06T21:16:07+07:00
created: 2024-09-14T23:38:53+07:00
auto-backlink: "[[3. Areas]]"
---

## Last updated files
```dataview
TABLE WITHOUT ID
file.link AS Files, file.mtime as "Last Modified"
FROM "3. Areas/💼 Work"
WHERE file.name != this.file.name
  AND !contains(file.path, "ADHOC")
  AND !contains(file.tags, "hidden")
SORT file.mtime desc
LIMIT 20
```

## WORK TODO ITEMS
```dataview
TASK
from #todo or "3. Areas/💼 Work/ADHOC"
where !completed
AND contains(file.path, "3. Areas/💼 Work")
AND !contains(file.tags, "hidden")
sort created DESC
limit 20
```
