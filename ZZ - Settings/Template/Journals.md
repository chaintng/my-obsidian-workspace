---
created: 2024-11-25T22:34:23+07:00
modified: 2024-11-25T22:34:23+07:00
template: journals
databases: "[[1. Inbox/Journals/Journals]]"
tags:
  - journals
journals:
---

`= choice(length(this.title) != 0, "# " + this.title, "")`

## Today Journal `BUTTON[voice-journal]`
- 

## List TODO


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

