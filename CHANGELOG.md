# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet.

## [2.3.0] - 2024-04-18

### Added

- Implemented status property on `TarSelect` and `TarTextarea` components.

## [2.2.0] - 2024-04-17

### Added

- Implemented label-only required.

## [2.1.1] - 2024-04-17

### Added

- NPM package publication workflow.

### Fixed

- Export `inputUtils`.

## [2.1.0] - 2024-04-17

### Added

- Build workflow `pull_request` trigger on `main` branch.
- Implemented `inputUtils` to handle input types.
- `TarInput` status property and styling.

### Changed

- Call Bootstrap `getOrCreateInstance` methods instead of creating a new instance of components.
- Refactored `TarInput` type property handling.
- Replaced `...` by `…`.
- Replaced `yarn` by NPM.
- Upgraded NuGet packages.

### Fixed

- Storybook component property documentation.

## [2.0.5] - 2024-01-04

### Fixed

- Fixed package exports.

## [2.0.4] - 2024-01-04

### Fixed

- Fixed package exports.

## [2.0.3] - 2024-01-04

### Fixed

- Exported CSS styles.

## [2.0.2] - 2024-01-03

### Fixed

- Remove Pinia dependency, and `TarToaster` now receives toasts by a property instead of using a store.

## [2.0.1] - 2024-01-02

### Fixed

- Added `useToastStore` to exports.

## [2.0.0] - 2024-01-02

### Changed

- Implemented a Toast store.

## [1.0.0] - 2024-01-02

### Added

- Created and configured the helper functions & component library project.
- Implemented a Badge component.
- Implemented a Breadcrumb component.
- Implemented a Button component.
- Implemented a Card component.
- Implemented a Carousel component.
- Implemented a Checkbox component.
- Implemented a Modal component.
- Implemented a Pagination component.
- Implemented a Progress component.
- Implemented a Select component.
- Implemented a Spinner component.
- Implemented a Tab component.
- Implemented a Textarea component.
- Implemented a Toast component.
- Implemented an Accordion component.
- Implemented an Alert component.
- Implemented an Avatar component.
- Implemented an Image component.
- Implemented an Input component.

[unreleased]: https://github.com/Logitar/Vue3Ui/compare/v2.3.0...HEAD
[2.3.0]: https://github.com/Logitar/Vue3Ui/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/Logitar/Vue3Ui/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/Logitar/Vue3Ui/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/Logitar/Vue3Ui/compare/v2.0.5...v2.1.0
[2.0.5]: https://github.com/Logitar/Vue3Ui/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/Logitar/Vue3Ui/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/Logitar/Vue3Ui/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/Logitar/Vue3Ui/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/Logitar/Vue3Ui/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Logitar/Vue3Ui/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/Logitar/Vue3Ui/releases/tag/v1.0.0
