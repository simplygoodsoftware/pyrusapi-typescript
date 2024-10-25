import fs from "fs";
import {name as moduleName} from "./package.json";

const DECLARATION_FILE_PATH = "build/types/index.d.ts";

const dtsString = fs.readFileSync(DECLARATION_FILE_PATH, {encoding: "utf-8"});
const formatted = dtsString.replaceAll(
    /^(.*(?=declare ))?(?:declare )?(.*)$/gm,
    "\t$1$2",
);

const result = `declare module "${moduleName}" {
${formatted}
}
`;

fs.writeFileSync(DECLARATION_FILE_PATH, result);
