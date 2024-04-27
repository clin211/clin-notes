import fs from "fs";

const workDir = `${process.cwd()}/src/`;

const ignoreDir = [".vitepress", "public"];

const dirs = fs.readdirSync(workDir);
console.log("🚀 ~ dirs:", dirs);

dirs.map((item) => {
    const dir = `${workDir}${item}`;
    if (!ignoreDir.includes(item) && fs.statSync(dir).isDirectory()) {
        for (let i = 1; i < 10; i++) {
            const path = `${dir}/${i}item.md`;
            const content = `# ${item} ${i}`;
            fs.writeFileSync(path, content, "utf-8");
        }
    }
});
