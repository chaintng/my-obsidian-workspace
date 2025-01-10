---
references: 
tags:
  - folder-note
favourite: false
created: 2024-12-21T01:37:27+07:00
modified: 2024-12-21T16:02:27+07:00
template: "[[General]]"
---


# ✍️ Recent Modified Files

> [!multi-column]
>> [!abstract]+ ✍️  Recent Modified Files
>> ```dataview
>> LIST WITHOUT ID
>> link(file.path, file.title)
>> from "💼 Work"
>> where !contains(file.tags, "hidden")
>> and !regexmatch("^Work ADHOC", file.name)
>> and !regexmatch("^3. Resources/web-bookmark", file.name)
>> and !regexmatch("^3. Resources/copilot-conversations", file.name)
>> and !regexmatch("^3. Resources/Contacts", file.path)
>> and !contains(file.path, "Terminology")
>> and !contains(file.path, "Investments")
>> and file.name != this.file.name
>> sort date(modified) desc limit 20
>> ```
>
>> [!TODO]+ [[💼 Work|💼 WORK TODO]]
>>  ```dataview
>> TASK
>> from #todo or "💼 Work/2. Areas/ADHOC"
>> where !completed
>> and contains(file.path, "💼 Work")
>> sort created DESC
>> limit 10
>

![[💼 Work/1. Projects/1. Projects#Pending Projects]]

# 🔨 Recent Created Files
```dataview
LIST
from "💼 Work"
where !contains(file.path, "ZZ - Settings")
and !contains(file.tags, "hidden")
sort date(created) desc limit 10
```
