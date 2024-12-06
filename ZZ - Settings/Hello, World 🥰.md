---
cssclasses:
  - homepage
---

> [!QUOTE] What do you want to do 🤔 ?

`BUTTON[journal]` `BUTTON[temp-note]` `BUTTON[work-adhoc]`

# ✍️ Recent Modified Files `BUTTON[quick-note]`
```dataview
LIST
from "" sort date(modified) desc limit 20
where !contains(file.path, "ZZ - Settings")
and !contains(file.tags, "hidden")
and !regexmatch("^Journal", file.name)
and !regexmatch("^Work ADHOC", file.name)
and !regexmatch("^4. Resources/web-bookmark", file.name)
and !regexmatch("^4. Resources/copilot-conversations", file.name)
and !contains(file.folder, file.name)
And !contains(file.path, "/Contact")
// and file.name != regexreplace(file.folder, ".*/", "")
```

---

![[TODO Management Viewer#✅ TODO Management Viewer TODO `BUTTON[add-personal-todo]` `BUTTON[add-work-todo]`]]

--- 

![[2. Projects#2. Projects 🗄️ On Going Project]]

---

# 🔨 Recent Created Files
```dataview
LIST
from "" sort date(created) desc limit 10
where !contains(file.path, "ZZ - Settings")
and !contains(file.tags, "hidden")
```


```meta-bind-button
style: default
id: journal
hidden: true
label: 🗓️ Journal
action:
  type: command
  command: quickadd-uri:choice:8623d502-d1b1-4a90-a332-cb9a3c8ee6a3
```

```meta-bind-button
style: default
id: quick-note
hidden: true
label: 📙 New
action:
  type: command
  command: quickadd-uri:choice:872c1edd-0f37-4e13-9894-44a5b260455e
```

```meta-bind-button
style: default
id: bookmark-web
hidden: true
label: 🌎 Bookmark Website
action:
  type: command
  command: quickadd-uri:choice:f5e97f98-d008-4a8c-ae0c-3c1b1fd031a9
```

```meta-bind-button
style: default
id: work-adhoc
hidden: true
label: 💼 Work Adhoc
action:
  type: command
  command: quickadd-uri:choice:5e3a95d3-fba7-4f63-a6ba-fa9e882d9dcd
```

```meta-bind-button
style: default
id: temp-note
hidden: true
label: 📝 Temp Note
action:
  type: command
  command: quickadd-uri:choice:01948f65-4013-4d7d-96f1-779f48ae18a1
```
