```dataview
TABLE WITHOUT ID
file.link AS Note
, dateformat(default(date(file.frontmatter.modified), file.mtime), "yyyy-MM-dd") AS "Modified"
FROM "4. Resources/web-bookmark"
WHERE 1=1
AND file.name != this.file.name
AND !contains(file.tags, "hidden")
SORT default(date(file.frontmatter.modified), file.mtime) desc
LIMIT 20
```