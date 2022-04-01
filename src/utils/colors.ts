import { themes } from "../global/themes"

export const switchColor = (focus: boolean) => {
    return focus? themes.dark.colors.primary : themes.dark.colors.comment
}