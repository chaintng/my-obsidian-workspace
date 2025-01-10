---
title:
tags:
  - journals
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
template: "[[Journals Template]]"
auto-backlink: "[[📝 Journals]]"
---

`= choice(length(this.title) != 0, "# " + this.title, "")`

# Today Journal `BUTTON[voice-journal]`
-

# List TODO


```meta-bind-button
label: 🔴 Voice Journal
hidden: true
class: ""
tooltip: ""
id: voice-journal
style: default
actions:
  - type: command
    command: whisper:start-stop-recording
```

