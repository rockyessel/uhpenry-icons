
import { sync } from "./sync.js";
import { generateIconTypes } from "./gen-type.js";
import { processSvgFiles } from "./build-icons.js";

await sync()
await processSvgFiles()
await generateIconTypes()