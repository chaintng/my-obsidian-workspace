```page-gallery
fields: [file.name]
mode: image
columns: 3
orientation: square
filter: false
views:
  - name: 🥰 ME
    columns: 4
    from: '[[]]'
    where: 'contains(file.path, this.file.folder)'
    sortBy: ['-created']
    limit: 20
```