Drop the homepage hero background video here as `hero.mp4`.

Recommended: muted, looping, ~10-20s clip, H.264 MP4, under ~8MB and 1920x1080 or smaller so it loads fast on mobile. The hero (`src/components/HomeHero.tsx`) falls back to `PBEimages/pbeZachSmaller-min.jpg` if the video is missing, fails to load, or the visitor has "reduce motion" enabled.
