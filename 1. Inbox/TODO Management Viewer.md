---
created: 2024-11-24T16:09:47+07:00
modified: 2024-12-02T01:55:26+07:00
references: 
favourite: false
template: general
tags:
  - hidden
---

# ✅ [[TODO Management Viewer|TODO]]   `BUTTON[add-personal-todo]` `BUTTON[add-work-todo]`
> [!multi-column] REMAINING TODO
>> [!TODO]+ [[1. Inbox/Journals/Journals|🥰 ME]]
>>  ```dataview
>> TASK
>> from #todo or "1. Inbox/Journals"
>> where !completed
>> and !contains(file.path, "3. Areas/💼 Work")
>> sort created DESC
>> limit 10
>> ```
>
>> [!TODO]+ [[💼 Work]]  
>>  ```dataview
>> TASK
>> from #todo or "3. Areas/💼 Work/ADHOC"
>> where !completed
>> and contains(file.path, "3. Areas/💼 Work")
>> sort created DESC
>> limit 10
>> ```

```meta-bind-button
style: default
id: add-work-todo
hidden: true
label: ➕ 💼 WORK
action:
  type: command
  command: quickadd-uri:choice:cd33f93b-711b-4a39-ae91-d4c0a9861838
```

```meta-bind-button
style: default
id: add-personal-todo
hidden: true
label: ➕ 🥰 ME
action:
  type: command
  command: quickadd-uri:choice:a268d62e-d8a9-4916-a784-48e4f9aa2606
```

# 🎉 RECENT CLOSED TODO 
> [!multi-column] REMAINING TODO
>> [!TODO]+ [[1. Inbox/Journals/Journals|🥰 ME]] `BUTTON[add-personal-todo]`
>>  ```dataview
>> TASK
>> from #todo or "1. Inbox/Journals"
>> where completed
>> and !contains(file.path, "3. Areas/💼 Work")
>> sort completion DESC
>> limit 20
>> ```
>
>> [!TODO]+ [[💼 Work]]  `BUTTON[add-work-todo]`
>>  ```dataview
>> TASK
>> from #todo or "3. Areas/💼 Work/ADHOC"
>> where completed
>> and contains(file.path, "3. Areas/💼 Work")
>> AND !contains(file.tags, "hidden")
>> sort created DESC
>> limit 20
>> ```
