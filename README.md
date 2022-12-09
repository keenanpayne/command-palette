# Command Palette

Original CodePen demo: [https://codepen.io/keenanpayne/pen/eYKPqgm/bc7d9eaa2fabed4c5eb296e5c26cfcd9](https://codepen.io/keenanpayne/pen/eYKPqgm/bc7d9eaa2fabed4c5eb296e5c26cfcd9).

## Setup

Use Node v14

```bash
npm install
npm run serve
```

## Bugs

- [ ] Fix duplicate icon issue
  - Clicking first command then first subcommand then hitting back arrow displays duplicate icon. 
    - This is because `checkOptions` and `checkSubcommand` use `commands[state.activeCommand]`, which always references the top-most commands—i.e., when clicking a sub-command, the parent command will always be run.
  - [ ] Hotfix: loop over every icon and ensure they are all removed on every `reset()`
- Set up fuzzy search to allow using string fragments to filter commands
  - e.g., Searching "view board" filters out "view as board" when it should include it
- [ ] Commas displayed between keyboard shortcuts
- [ ] Sorting by groups using forward slash breaks interactivity with commands.
  - Clicking on "merge nodes" when sorted triggers triggers node deletion command because of how the logic is set up.

## Improvements

- [ ] Use a standard pattern for creating reusable JavaScript components.
- [ ] Check accessibility, ensure proper `aria-*` roles are being set, cross-reference with [WCAG guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [ ] Replace Gulp build scripts with NPM scripts
  - CodePen exported my demo with Gulp, but this is unnecessary and adds overhead
- [ ] Better organize CSS custom properties to simplify and reduce duplicates

## Inspiration
  - https://codepen.io/keenanpayne/details/YmKKer
  - https://codepen.io/patheticgeek/pen/ExmgadM?editors=0010
  - https://www.toptal.com/developers/keycode/for/meta
  - https://philipcdavis.com/writing/command-palette-interfaces
  - https://github.com/stefanjudis/awesome-command-palette
  - https://github.com/timc1/kbar
  - https://github.com/asabaylus/react-command-palette
  - https://github.com/harshhhdev/kmenu
  - https://kmenu.hxrsh.in
  - https://github.com/albingroen/react-cmdk