---
created: 2024-11-24T16:09:47+07:00
modified: 2024-12-21T15:56:20+07:00
references: 
favourite: false
template: "[[General]]"
tags:
  - hidden
  - folder-note
---

> [!multi-column] REMAINING TODO
>> [!TODO]+ [[🏠 Personal|🥰 ME]]
>>  ```dataview
>> TASK
>> from #todo or "🏠 Personal/📝 Journals"
>> where !completed
>> and contains(file.path, "🏠 Personal")
>> sort created DESC
>> limit 10
>> ```
>
>> [!TODO]+ [[💼 Work/💼 Work|💼 Work]]
>>  ```dataview
>> TASK
>> from #todo or "💼 Work/2. Areas/ADHOC"
>> where !completed
>> and contains(file.path, "💼 Work")
>> sort created DESC
>> limit 10
>> ```

👉 [[🎉 RECENT CLOSED TODO|See Recent Closed TODO 🎉]]