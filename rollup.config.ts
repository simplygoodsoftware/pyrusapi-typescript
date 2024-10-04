import type {RollupOptions} from "rollup";
import typescript from "rollup-plugin-typescript2";
import {cleandir} from "rollup-plugin-cleandir";

const OUT_DIR = "./build";

const config: RollupOptions = {
    input: "index.ts",
    output: [
        {dir: `${OUT_DIR}/cjs`, format: "cjs", entryFileNames: "[name].cjs"},
        {dir: `${OUT_DIR}/esm`, format: "esm"},
    ],
    plugins: [
        cleandir(OUT_DIR),
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                compilerOptions: {
                    removeComments: true,
                },
            },
        }),
    ],
};

export default config;
