# REVIEW ON JUN 23, 2024

## Naming & code convention

1. Naming color: Follow Alias naming color: https://mui.com/material-ui/customization/palette/

2. Organize Import

- Separate group import by a blank line and Add comment for each import groups
- MUI component import, can group to one line:
  ex: import { AppBar, Toolbar, Typography } from "@mui/material";

## Technical

#### General

1. Import customTheme only one time in the main.jsx file (purpose is used for ThemeProvider)
2. No copy code from any source except official docs.

   If you copy other code, check its correctness in the official docs.

   **NOTE**: Code in official docs sometimes might not follow a nice coding convention, but it's technically correct.

3. Map array

- Should not use index as key. Use a unique number/string that identifies each item in the list.

4. Source need to learn:

- (MUI system library)[https://mui.com/system]
- (MUI material library)[https://mui.com/material-ui]

#### MUI System Library

5. Spacing & sizing:
   Mo need to write like : "10px". Just 10, or "10"

```
// Example 1
<AppBar sx={{ height: 66, bgcolor: "primary.main" }}>

// Example 2
<Drawer variant="permanent" sx={{ width: 68 }}>

// Example 3
<Avatar width="15" alt="logo" src={item.icon} />
```

#### MUI Material UI Library

6. Use component following official documents

- When use MUI component, read their props on the website to use it correctly.

  For example: when using AppBar component, read how to use that component at: https://mui.com/material-ui/api/app-bar/

7. Read more about how to organize and use custom color and component at https://mui.com/system/styled/

## Workflow

1. Don't push code to main branch, create PR and tag reviewers' names for reviewing
   and mention reviewers in project channel just for double notify.
