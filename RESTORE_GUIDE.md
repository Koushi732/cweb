# Restore Guide

This document explains exactly how to restore any archived feature to the production website.

## General Restore Instructions

1. **Move files back:** Move the archived directory from `src/archive/app/[feature_name]` back to `src/app/[feature_name]`.
2. **Re-enable routes:** Ensure the page builds successfully and the Next.js router picks up the restored folder.
3. **Re-add links:** Add the required links back into `src/data/navigation.ts` and `src/components/layout/Footer.tsx`.
4. **Restore Home Page references:** If the feature had a section on the homepage, restore it in `src/components/HomeClient.tsx`.

---

## Restoring: Portfolio

1. Run: `Move-Item -Path src/archive/app/portfolio -Destination src/app/portfolio`
2. Add to `src/data/navigation.ts` (inside the main array): `{ name: "Portfolio", href: "/portfolio" },`
3. Add to `src/components/layout/Footer.tsx` (inside the "Company" column links): `{ name: "Portfolio", href: "/portfolio" },`

## Restoring: Blog

1. Run: `Move-Item -Path src/archive/app/blog -Destination src/app/blog`
2. Add to `src/data/navigation.ts` (inside the main array): `{ name: "Blog", href: "/blog" },`
3. Add to `src/components/layout/Footer.tsx` (inside the "Company" column links): `{ name: "Blog", href: "/blog" },`
4. Restore the **Latest Insights** section in `src/components/HomeClient.tsx` (Use `git reflog` or check the repository history for the deleted lines around `import { blogPosts } from "@/data/blog";` and `SECTION 12`).

## Restoring: Careers

1. Run: `Move-Item -Path src/archive/app/careers -Destination src/app/careers`
2. Add to `src/data/navigation.ts` (inside the main array): `{ name: "Careers", href: "/careers" },`
3. Add to `src/components/layout/Footer.tsx` (inside the "Company" column links): `{ name: "Careers", href: "/careers" },`
