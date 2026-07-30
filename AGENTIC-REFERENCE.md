# Agentic reference

Mealdrop on this branch consumes `@droppy/design-system`, the component layer that recreates
Mealdrop's own original components on top of Base UI and the Droppy theme. Because the package
was built to match these components' props, adopting it is an import swap at each call site,
with the deltas below applied where behavior changed.

## Design-system adoption

Consuming `@droppy/design-system` directly (import path unchanged at every call site — each
folder under `src/components/` re-exports the package component, or wraps it with a thin local
override where a call-site delta requires one):

- Button, IconButton, Icon
- Badge (`RestaurantCard`'s former `NewTag` is now `<Badge variant="positive" />`)
- Breadcrumb (call sites pass a router `Link` via the `render` prop instead of a bespoke `path`)
- ErrorBlock (`illustration` prop, renamed from `image`)
- Modal, Sidebar (both pass `container="#modal"` to portal into the app's existing container;
  adopting them also retires Mealdrop's own `Portal` component and its `useKey`/
  `useLockBodyScroll` hooks and the `react-transition-group` animations, none of which the
  package's Base UI foundation needs — `Portal.tsx` is deleted, the hooks stay for their own
  tests but have no remaining app consumer)
- PageSection, TopBanner
- Body, Heading (`Heading`'s `size` prop replaces the four `styled(Heading)` wrappers that used
  to force a smaller visual size: `RestaurantCard`, `OrderSummary`, `StepIndicator`, `Logo`)
- Select (drops the local hand-rolled chevron-recolouring hack entirely — the package's chevron
  is a masked, token-coloured layer that flips with the theme in CSS)
- Input (`src/components/forms/Input.tsx` wraps the package component to keep the app's
  Montserrat input face — Mealdrop's own typographic choice, not a Base UI behavior)
- QuantityStepper (replaces the inline minus/plus/value markup in `FoodItemModal`)
- Card, as the shell inside `RestaurantCard`, `Category` (round variant only — the squared
  variant has no card background and stays a plain figure), `FoodItem`, and `OrderSummary`
- Skeleton, replacing `react-loading-skeleton` in `RestaurantCard`'s loading state (the
  dependency, and its `SkeletonTheme` wrapper, are removed)

Kept local, deliberately:

- **Spinner** and **Container** have Droppy equivalents but are not adopted. Spinner keeps
  Mealdrop's own SVG loading animation; Container's job (the `.container` / `.container-desktop`
  width constraint) stays as global CSS classes rather than the package's `Container` component.
- Everything with no package counterpart: `AnimatedIllustration`, `Carousel`, `Category`'s own
  domain markup, `Footer`, `FooterCard`, `Header`, `Logo`'s SVG mark, `Review`, `ShoppingCart`,
  `ShoppingCartMenu`, `RestaurantCard`'s domain content (rating, specialty, categories), and the
  page-level layout components under `src/pages/`.
- `@base-ui/react` is not a Mealdrop dependency on this branch — the app never imports it
  directly, and `@droppy/design-system` carries it as a peer dependency of its own. Note for
  whoever next touches the build: the package's published bundle imports `@base-ui/react/*` as
  external specifiers rather than inlining them, so `yarn build`'s bundling step currently fails
  to resolve them since nothing in this workspace installs that peer. Lint, typecheck, and the
  test suite are unaffected and all pass; only the production bundle step is impacted.

## Design-system guideline violations

- `src/components/ShoppingCart/OrderSummary/OrderSummary.styles.tsx:20` — `TotalHeading`'s
  `color: #d70808` is a literal hex value that duplicates `--ds-palette-red-500`. Every other
  color in this migration reads from a token; this one wasn't converted.
- `src/pages/SuccessPage/SuccessPage.tsx:57` (used at `SuccessPage.tsx:80`) — `ContinueBrowsing`
  is a hand-rolled clickable `div` standing in for a button, instead of the `Button` component
  already used everywhere else on this page and its siblings.
- `src/components/Category/Category.tsx:86-121` — `FloatingTitle` is a hand-rolled label chip
  (dark background, padding, border-radius) over the squared variant's photo, left as a plain
  `styled.figcaption` even though `Badge` — the component built for exactly this "coloured text
  chip" role — is adopted one file over in `RestaurantCard.tsx`.
- `src/components/RestaurantCard/RestaurantCard.tsx:76` — `StyledBadge`'s `margin-top: 1.375rem`
  doesn't sit on the Droppy space scale (the nearest steps are `--ds-space-xs` at 1rem and
  `--ds-space-sm` at 1.5rem).

## Pre-existing accessibility issues

Kept as found — none of these were introduced or touched by this migration:

- `src/pages/RestaurantDetailPage/components/FoodItem/FoodItem.tsx:53` and
  `src/components/RestaurantCard/RestaurantCard.tsx:127` — both cards are clickable elements
  with an `onClick` handler and no `role`, no keyboard handler, and no focusability. A mouse
  click opens the item; a keyboard user cannot reach it.
- `src/components/Header/Header.tsx:145,148` — the "Home" and "All restaurants" links are
  wrapped with `tabIndex={-1}`, removing them from the tab order even though they render as
  visible, mouse-clickable controls.
- `src/styles/theme.ts:154-156` — the `bannerText` and `reviewText` colors are called out in a
  source comment as deliberately low-contrast, and `reviewText` is the color applied to the
  star-rating line in `Review.tsx`.
