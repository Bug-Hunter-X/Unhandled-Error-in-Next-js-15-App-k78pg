```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function About() {
  throw new Error('Something went wrong!');
}

function MyComponent() {
  return (
    <ErrorBoundary errorComponent={MyErrorBoundary}>
      <About />
    </ErrorBoundary>
  );
}
export default MyComponent
```