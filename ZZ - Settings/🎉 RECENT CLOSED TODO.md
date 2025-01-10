---
references: 
tags:
  - folder-note
favourite: false
created: 2024-12-21T15:52:50+07:00
modified: 2024-12-21T15:53:24+07:00
template: "[[General]]"
---

> [!multi-column] REMAINING TODO
>> [!TODO]+ 🥰 ME
>>  ```dataview
>> TASK
>> from #todo or "🏠 Personal/📝 Journals"
>> where completed
>> and !contains(file.path, "💼 Work/2. Areas")
>> sort completion DESC
>> limit 20
>> ```
>
>> [!TODO]+ 💼 Work
>>  ```dataview
>> TASK
>> from #todo or "💼 Work/2. Areas/ADHOC"
>> where completed
>> and contains(file.path, "💼 Work/2. Areas")
>> AND !contains(file.tags, "hidden")
>> sort created DESC
>> limit 20
>> ```
