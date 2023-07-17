import { Merriweather, Noto_Serif, Inter } from "next/font/google";

export const blogFont = Merriweather({
    subsets: ["vietnamese"],
    weight: "400"
});

export const blogTitleFont = Noto_Serif({
    subsets: ["vietnamese"]
})

export const blogDescriptionFont = Inter({
    subsets: ["vietnamese"]
})