const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const buildDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');

function cleanBuildDirectory() {
    if (fs.existsSync(buildDir)) {
        fs.rmdirSync(buildDir, { recursive: true });
    }
    fs.mkdirSync(buildDir);
}

function copyFiles(src, dest) {
    fs.readdirSync(src).forEach(file => {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);

        if (fs.lstatSync(srcFile).isDirectory()) {
            fs.mkdirSync(destFile, { recursive: true });
            copyFiles(srcFile, destFile);
        } else {
            fs.copyFileSync(srcFile, destFile);
        }
    });
}

function runBuild() {
    cleanBuildDirectory();
    copyFiles(srcDir, buildDir);
    console.log('Build completed successfully!');
}

runBuild();