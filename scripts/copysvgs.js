"use strict"

const fs = require("fs")
const path = require("path")

function appendSuffix(file, suffix) {
  const filename = path.basename(file, ".svg")
  return `${filename}-${suffix}.svg`
}

function copier(sourceDir, targetDir, suffix = "") {
  fs.readdir(sourceDir, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
      if (path.extname(file) !== ".svg") {
        return
      }

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true })
      }

      const targetFilename = suffix ? appendSuffix(file, suffix) : file

      fs.copyFile(
        path.join(sourceDir, file),
        path.join(targetDir, targetFilename),
        (err) => {
          if (err) throw err
          console.log(`Copied ${file} to ${targetDir}/${targetFilename}`)
        },
      )
    })
  })
}

copier("./node_modules/ionicons/dist/ionicons/svg", "./icons/ionicons")
copier("./node_modules/heroicons/24/solid", "./icons/heroicons", "solid")
copier("./node_modules/heroicons/24/outline", "./icons/heroicons", "outline")
