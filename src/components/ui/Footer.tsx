"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Flexo IT. All rights reserved.
      </div>
    </footer>
  )
}
