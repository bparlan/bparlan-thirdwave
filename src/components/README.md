# Components Module

Contains the modular UI components that constitute the Thirdwave Dashboard.

## Subdirectories
- `terminal/`: Core dashboard engine.
    - `panels/`: UI sub-panels (Navigation, Content).
    - `Header.tsx`: Global header.
    - `Footer.tsx`: Global footer.
    - `ThemeUtils.ts`: Theme logic.
    - `Types.ts`: Component type definitions.

## Design Note
All components are designed for high modularity. `TerminalDashboard.tsx` acts as the orchestrator.
