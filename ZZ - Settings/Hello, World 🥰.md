---
cssclasses:
  - homepage
---

> [!EXAMPLE|noicon] `BUTTON[journal]` `BUTTON[temp-note]` `BUTTON[work-adhoc]`
> 🎯 Quick Link: [[🏠 Personal/1. Projects/1. Projects|🥰 My Projects]] | [[💼 Work/1. Projects/1. Projects| 💼 Projects]]

> [!attention|noicon]+ 📍 PIN / ON-GOING
> ```dataview 
> LIST 
> from ""
> where file.starred = true
> AND !contains(file.tags, "folder-note")
> AND !contains(file.path, "ZZ - Settings")
> ```


# ✍️ Last Modified `BUTTON[my-note]` `BUTTON[work-note]`

> [!multi-column]
>> [!abstract]+ [[🏠 Personal|🥰 ME]]
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
>> sort date(modified) desc limit 7
>> ```
> 
>> [!abstract ]+ [[💼 Work/💼 Work|💼 Work]]
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
>> and !contains(tags, "folder-note")
>> AND !contains(tags, "folder-note")
>> sort date(modified) desc limit 7
>> ```
>

# ✅ TODO `BUTTON[add-personal-todo]` `BUTTON[add-work-todo]`
![[✅ PENDING TODO]]

![[🏠 Personal/1. Projects/1. Projects#Pending Projects]]


# 🔨 Recent Created Files
```dataview
LIST
from ""
where !contains(file.path, "ZZ - Settings")
and !contains(file.tags, "hidden")
AND !contains(tags, "folder-note")
sort date(created) desc limit 10
```


```meta-bind-button
style: default
id: journal
hidden: true
label: 🗓️ Journal
action:
  type: command
  command: quickadd:choice:1b6a60d1-6c43-4847-94fa-0240d184c276
```

```meta-bind-button
style: default
id: my-note
hidden: true
label: 📙Note
action:
  type: command
  command: quickadd:choice:1578c8f9-c61f-4062-8605-879cb649dae7
```

```meta-bind-button
style: default
id: work-note
hidden: true
label: 📓Work
action:
  type: command
  command: quickadd:choice:fa1fc968-608c-474e-a774-7a956cc54875
```

```meta-bind-button
style: default
id: bookmark-web
hidden: true
label: 🌎 Bookmark Website
action:
  type: command
  command: quickadd:choice:f5e97f98-d008-4a8c-ae0c-3c1b1fd031a9
```

```meta-bind-button
style: default
id: work-adhoc
hidden: true
label: 💼 Work Adhoc
action:
  type: command
  command: quickadd:choice:5e3a95d3-fba7-4f63-a6ba-fa9e882d9dcd
```

```meta-bind-button
style: default
id: interview-cdd
hidden: true
label: 🏢 Interview
action:
  type: command
  command: quickadd:choice:142878cb-fe8c-44d8-ade9-454f003f2d9f
```

```meta-bind-button
style: default
id: temp-note
hidden: true
label: 📝 Temp Note
action:
  type: command
  command: quickadd:choice:01948f65-4013-4d7d-96f1-779f48ae18a1
```

```meta-bind-button
style: default
id: add-work-todo
hidden: true
label: ➕ 💼 WORK
action:
  type: command
  command: quickadd:choice:cd33f93b-711b-4a39-ae91-d4c0a9861838
```

```meta-bind-button
style: default
id: add-personal-todo
hidden: true
label: ➕ 🥰 ME
action:
  type: command
  command: quickadd:choice:a268d62e-d8a9-4916-a784-48e4f9aa2606
```
