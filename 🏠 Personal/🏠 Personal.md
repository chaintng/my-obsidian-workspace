---
references: 
tags:
  - folder-note
favourite: false
created: 2024-12-21T01:41:52+07:00
modified: 2025-01-10T19:34:57+07:00
template: "[[General]]"
---

# My TODO
 ```dataview
TASK
from #todo or "🏠 Personal/📝 Journals"
where !completed
and contains(file.path, "🏠 Personal")
sort created DESC
```

# ✍️ Recent Modified Files

> [!multi-column]
>> [!abstract]+ ✍️  Recent Modified Files
>> ```dataview
>> LIST WITHOUT ID
>> choice(length(title) = 0, file.link, link(file.link, file.name + " - " + title))
>> from "🏠 Personal"
>> where !contains(file.tags, "hidden")
>> and !contains(file.path, "3. Resources/web-bookmark")
>> and !contains(file.path, "3. Resources/web-bookmark")
>> and !contains(file.path, "3. Resources/Contacts")
>> and !(contains(file.path, "🏠 Personal/📝 Journals") AND (length(title) = 0))
>> and !contains(file.path, "Terminology")
>> and !contains(file.path, "Investments")
>> and !contains(tags, "folder-note")
>> sort date(modified) desc limit 10
>> ```
>
>> [!abstract]+ 🔨 Recent Created Files
>> ```dataview
>> LIST
>> from "🏠 Personal"
>> where !contains(file.path, "ZZ - Settings")
>> and !contains(file.tags, "hidden")
>> sort date(created) desc limit 10
>> ```

![[🏠 Personal/1. Projects/1. Projects#Pending Projects]]
