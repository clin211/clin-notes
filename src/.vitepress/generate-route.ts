import fs from "fs";

const ignoreDir = [".vitepress", "public", ".DS_Store"];
export function generateRoute(targetPath: string) {
    const dirsPath = `${process.cwd()}/src/`;
    const dirs = fs.readdirSync(dirsPath);
    if (!dirs.includes(targetPath)) {
        throw new Error(`目录 ${targetPath} 不存在`);
    }

    const targetDir = `${dirsPath}${targetPath}/`;
    const files = fs.readdirSync(targetDir);

    const routes: { text: string; link: string }[] = [];
    files
        .map((item) => item.split(".md")[0])
        .forEach((item) => {
            if (item === "index") {
                routes.push({
                    text: "index",
                    link: `/${targetPath}/index.md`,
                });
            } else {
                routes.push({
                    text: removeLeadingNumbers(item),
                    link: `/${targetPath}/${item}.md`,
                });
            }
        });
    return routes;
}

function extractNumbers(input: string): string {
    let numbers = input.match(/\d+/g);
    if (numbers) {
        return numbers.join("");
    } else {
        return "";
    }
}

function removeLeadingNumbers(input: string): string {
    return input.replace(/^\d+/, "");
}
