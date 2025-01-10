```dataview
TABLE WITHOUT ID
file.link AS Note
, dateformat(default(date(file.frontmatter.modified), file.mtime), "yyyy-MM-dd") AS "Modified"
FROM [[]]
WHERE 1=1
AND file.name != this.file.name
AND !contains(file.tags, "hidden")
AND !contains(tags, "folder-note")
SORT default(date(file.frontmatter.modified), file.mtime) desc
LIMIT 20
```