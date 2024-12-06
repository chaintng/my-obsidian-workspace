```dataview
TABLE WITHOUT ID
file.link AS Note
, dateformat(default(date(file.frontmatter.modified), file.mtime), "yyyy-MM-dd") AS "Modified"
FROM [[]] or "3. Areas/🏠 Personal"
WHERE 1=1
AND file.name != this.file.name
AND !contains(file.tags, "hidden")
SORT default(date(file.frontmatter.modified), file.mtime) desc
LIMIT 20
```