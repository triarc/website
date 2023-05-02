// vite.config.ts
import {sveltekit} from "@sveltejs/kit/vite";
import {imagetools} from "vite-imagetools";
var config = {
  plugins: [sveltekit(), imagetools()],
  ssr: {
    noExternal: Object.keys({})
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
