#!/usr/bin/env node

import {readFileSync} from "fs";
import {join} from "path";

const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
};

try {
    const cwd = process.cwd();
    const {version: packageVersion} = JSON.parse(
        readFileSync(join(cwd, "package.json"), "utf8"),
    );
    const {version: lockVersion} = JSON.parse(
        readFileSync(join(cwd, "package-lock.json"), "utf8"),
    );

    // Сравниваем версии
    if (packageVersion !== lockVersion) {
        console.error(`${colors.red}❌ Версии не совпадают!${colors.reset}`);
        console.error(
            `${colors.yellow}📦 package.json: ${colors.reset}${packageVersion}`,
        );
        console.error(
            `${colors.yellow}🔒 package-lock.json: ${colors.reset}${lockVersion}`,
        );
        console.error(
            `${colors.yellow}💡 Запустите 'npm install' и закоммитьте обновленный package-lock.json${colors.reset}`,
        );
        process.exit(1);
    }
} catch (error) {
    console.error(
        `${colors.red}❌ Ошибка при проверке версий:${colors.reset}`,
        error.message,
    );
    process.exit(1);
}
