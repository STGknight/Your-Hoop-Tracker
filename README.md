# Your Hoop Tracker

Your Hoop Tracker is a mobile-first MVP web app for organizing local basketball runs. Players can enter the app, view tonight's session, join the run, and appear on a confirmed player list. Organizers can review confirmed players and toggle each player's payment status.

## MVP Goal

Build a simple basketball session tracker that demonstrates the core flow before adding real Supabase authentication, database tables, and payments.

## Tech Stack

- React for UI components and local state
- Vite for local development and production builds
- Tailwind CSS for fast mobile-first styling
- Mock data/local state today, with Supabase planned for auth and database features later

## Project Structure

```text
Your-Hoop-Tracker/
├── index.html                 # Vite HTML entry point
├── package.json               # Project scripts and dependencies
├── postcss.config.js          # PostCSS plugins used by Tailwind
├── vite.config.js             # Vite config that enables React support
├── tailwind.config.js         # Tailwind content paths and custom basketball colors
├── eslint.config.js           # ESLint rules for React source files
├── src/
│   ├── main.jsx               # Mounts the React app into the page
│   ├── App.jsx                # Owns app state and decides which screen to show
│   ├── styles.css             # Tailwind imports and global page styles
│   ├── data/
│   │   └── mockData.js        # Mock user and mock run data until Supabase is added
│   ├── components/
│   │   ├── AppShell.jsx       # Shared mobile phone-style app frame
│   │   ├── BasketballIcon.jsx # CSS basketball brand mark
│   │   ├── Header.jsx         # App header and simple screen navigation
│   │   └── RunCard.jsx        # Reusable card for basketball run summary details
│   └── screens/
│       ├── LoginScreen.jsx            # Welcome, sign-up, and log-in mock auth screens
│       ├── HomeScreen.jsx             # Session list screen showing tonight's run
│       ├── SessionDetailsScreen.jsx   # Run details and joined player list
│       └── AdminScreen.jsx            # Confirmed players and payment status toggles
```

## Screens Included

1. **Welcome / Sign Up / Log In**
   - Welcome screen with app name, tagline, Sign Up button, and Log In button
   - Sign Up form with Name, Email, Password, Create Account, Back, and Log In link
   - Log In form with Email, Password, Log In, Back, and Sign Up link
   - Form submission creates a mock current user in local React state
2. **Home / Session List**
   - Shows tonight's run with time, location, spots, price, and a Join Run button
3. **Session Details**
   - Shows run information and confirmed players
   - Joining adds the current mock user to the player list and updates spots
4. **Admin View**
   - Shows confirmed players
   - Displays Paid/Unpaid status
   - Lets an organizer toggle each payment status

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Future Improvements

- Replace mock auth with Supabase Auth
- Store sessions, players, and payments in Supabase tables
- Add multiple runs and session history
- Add online payment collection
- Add waitlists and notifications
