# Redirect POC – Demo

A small **demo repo** to test HTTP redirect behavior across platforms: a server redirects `/file` to an image URL; web, React Native, and Android clients load the image and can open the URL.

Useful for checking how each stack handles redirects (e.g. for file previews or auth flows).

---

## What’s in here

| Part | Tech | Purpose |
|------|------|--------|
| **server** | Node + Express | Serves `GET /file` → 302 redirect to an image (e.g. picsum). |
| **next-test** | Next.js | Web client: shows image from server, “Open File” button. |
| **react-native-test** | Expo / React Native | Mobile client: same behavior. |
| **android** | Kotlin + Jetpack Compose | Native Android client: same behavior. |

---

## Quick start

1. **Start the server** (required for all clients):

   ```bash
   cd server
   npm install   # once
   node server.js
   ```

   Server runs at **http://localhost:4000**. You should see: `Server is running on port 4000`.

2. **Run any client:**

   - **Web (Next.js):**  
     `cd next-test && npm install && npm run dev`  
     Open http://localhost:3000.

   - **React Native (Expo):**  
     `cd react-native-test && npm install && npx expo start`  
     - iOS Simulator: keep `LOCAL_IP = "localhost"` in `App.js`.  
     - Android emulator: use `LOCAL_IP = "10.0.2.2"`.  
     - Real device: set `LOCAL_IP` to your machine’s local IP (same Wi‑Fi).

   - **Android (native):**  
     Open `android/` in Android Studio, run on emulator.  
     Emulator uses `10.0.2.2` to reach the host; for a real device you’d change the host in `MainActivity.kt` to your machine’s IP.

---

## Repo layout

```
redirect-poc/
├── README.md           # this file
├── server/             # Node server (port 4000)
├── next-test/          # Next.js web app
├── react-native-test/  # Expo / React Native app
└── android/            # Kotlin Compose Android app
```

---

*Demo repo – [Anarock](https://github.com/anarock).*
