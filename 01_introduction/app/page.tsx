// ============================================================
// SERVER COMPONENT vs CLIENT COMPONENT — Next.js App Router
// ============================================================

// "use client"   <-- (commented out here, imagine this line is REMOVED)
//
// Without "use client", this component is a SERVER COMPONENT
// (default behavior in Next.js App Router - app/ directory)

export default function Home() {
  const handleClick = () => {};

  // console.log("hey nikhat")
  // -> Runs on the SERVER (Node.js), during render on the server.
  // -> Will NOT appear in browser DevTools console.
  // -> WILL appear in your terminal (where `npm run dev` is running).
  // -> Because Server Components never ship their JS to the browser,
  //    the code literally never executes client-side.

  return (
    <div>
      {/* 
        onClick={handleClick}
        -> ERROR in a Server Component:
           "Event handlers cannot be passed to Client Component props."
        -> WHY: Event handlers (onClick, onChange, etc.) need JS
           running IN THE BROWSER to listen for user interaction.
        -> Server Components produce static HTML only — there's no
           JS runtime attached in the browser for them, so React
           can't wire up an onClick listener to server code.
      */}
      <h1 onClick={handleClick}>Hello Nikhat</h1>
    </div>
  );
}

// ============================================================
// FIX: add "use client" at the very top of the file
// ============================================================
/*
"use client";

export default function Home() {
  const handleClick = () => {};

  console.log("hey nikhat"); 
  // ✅ Now runs in the BROWSER -> shows in DevTools console
  // ✅ Component + its JS is bundled and sent to the client

  return (
    <div>
      <h1 onClick={handleClick}>Hello Nikhat</h1>
      {// ✅ Works now — browser JS is present to attach the listener }
    </div>
  );
}
*/