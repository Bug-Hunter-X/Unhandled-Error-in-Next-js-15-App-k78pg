# Unhandled Error in Next.js 15 Application

This example demonstrates an unhandled error in a Next.js 15 application.  The `pages/about.js` file throws an error, and this error is not properly caught or handled. This can lead to a crash or a less-than-ideal user experience.  The solution shows proper error handling techniques.

## Bug
The `pages/about.js` throws an error using `throw new Error()`.  Without proper error boundaries, this will crash the application.

## Solution
The solution involves using error boundaries in Next.js 15 to gracefully handle errors.
