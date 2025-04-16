# zNotes

## `heroUI`

### Concepts

- requires `Framer Motion 11.9` or later.

#### **Component slots**: To provide maximum flexibility, many `HeroUI` components have **slots**, allowing developers **_to inject custom styles or content in specific areas of a component._** Each slot can be individually styled, offering granular control over the appearance and behavior of the component.

#### **Components API**

#### Routing

- Its about component's ablility to be rendered as **HTML links**
- The `HeroUIProvider` component configures all `HeroUI` components within it to navigate using the _client_ side router you provide.
  - `navigate` is a router function for client-side navigation.
  - `useHref` optionally converts router hrefs to native HTML hrefs.



### Commands

- Install globally: _`npm heroui-cli@latest -g`_
- Upgrade all `HeroUI` components: _`heroui upgrade --all`_
- Upgrade Specific: _`heroui upgrade button`_
- List all installed: _`heroui list`_
- Diagnose and resolve issues: _`heroui doctor`_
- Display detailed information about your project's environment settings: _`heroui env`_
