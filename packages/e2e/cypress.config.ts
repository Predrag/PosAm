import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  watchForFileChanges: false,
  video: false,
  e2e: {
    baseUrl: "https://www.posam.sk/",
  },
});
