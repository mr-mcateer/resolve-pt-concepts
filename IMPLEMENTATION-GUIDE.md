# RESOLVE PHYSICAL THERAPY — WEBSITE IMPLEMENTATION GUIDE

## Quick Start Summary

You have a complete, ready-to-go website built with standard web files (HTML, CSS, and JavaScript) — no fancy frameworks or databases required. To get it live on the internet, you need to do four things: **(1)** make a few small text edits to personalize your content, **(2)** set up a free form service so patient inquiries reach your inbox, **(3)** upload everything to a hosting provider, and **(4)** handle basic privacy and legal items. **Estimated total time: 2-3 hours**, and most of that is just waiting for DNS (the internet's address book) to update. You've got this!

---

## ROADMAP — Do These Steps In This Order

> **Read this first!** The steps below are listed in the order you should actually do them. Make all your edits BEFORE uploading to a hosting provider — that way you only have to upload once.

| Step | What You'll Do | Time | Section |
|------|---------------|------|---------|
| **Step 1** | Make your edits (personalize text, fix placeholders, add photos) | ~60-90 min | [Jump to Step 1](#step-1-editing-your-website-with-notepad) |
| **Step 2** | Set up your contact forms (so patient messages reach your inbox) | ~15 min | [Jump to Step 2](#step-2-making-your-forms-work-backend-setup) |
| **Step 3** | Choose hosting & upload your site to the internet | ~30 min | [Jump to Step 3](#step-3-choose-your-hosting-pick-one) |
| **Step 4** | Privacy & legal basics (privacy policy, accessibility, Google Business) | ~15 min | [Jump to Step 4](#step-4-privacy-legal--compliance) |

> **Why this order?** If you upload your site first and THEN make edits, you would have to upload again. By editing first, you only upload once and your site is ready to go from the moment it goes live.

---
---

# STEP 1: EDITING YOUR WEBSITE WITH NOTEPAD++

## Resolve Physical Therapy Website - Complete Editing Guide

**Who This Is For:** You (the clinic owner), editing files on a Windows computer using Notepad++.

**What You Need Before Starting:**
- Notepad++ installed (free download: https://notepad-plus-plus.org/downloads/)
- Your website folder on your computer (the folder with `index.html`, `services.html`, `about.html`, `contact.html`)
- About 60-90 minutes for all edits

**How To Open a File in Notepad++:**
1. Open Notepad++
2. Go to `File` in the menu bar, then click `Open...`
3. Browse to your website folder
4. Select the file mentioned in each edit below
5. Click `Open`

**How Find & Replace Works (you will use this a LOT):**
1. With the file open in Notepad++, press `Ctrl+H` on your keyboard
2. In the **Find what:** box, paste exactly what the instructions say
3. In the **Replace with:** box, paste exactly what the instructions say
4. Click `Replace All` (or just `Replace` if you want to go one at a time)
5. Press `Ctrl+S` to save the file

**Important Reminder:** After every edit, press `Ctrl+S` to save. If you forget to save, your changes will be lost.

> 💡 **If Notepad++ says "0 replacements found,"** the spacing in your file might be slightly different. Try using Ctrl+F (Find) first to locate the text, then edit it by hand. Don't panic — the important thing is finding the right text and changing it.

---

## CRITICAL FIXES (Your Site is Broken Without These)

These are the edits that absolutely must be done before your website goes live. A placeholder phone number, fake email, or broken video will make your clinic look unprofessional.

---

### 📝 EDIT #1: Download the Hero Image Locally

**File:** `index.html`
**Problem:** The hero image (the big banner photo at the top of your home page) currently loads from an external server (Unsplash). If that server ever goes down or the image gets removed, your hero section will show a broken image. Let's save a local copy so your site doesn't depend on anyone else's server.

**Step 1: Download the image**

1. Open `index.html` in Notepad++ and look for a line near the top that contains an Unsplash URL — it will look something like `https://images.unsplash.com/photo-...`
2. Copy that entire URL
3. Open your web browser, paste the URL into the address bar, and press Enter
4. When the image loads, right-click on the image and choose **"Save image as..."** (or **"Save picture as..."** depending on your browser)
5. Navigate to the `images` folder inside your website folder
6. Save the file as **`hero.jpg`**

**Step 2: Update the code to use the local image**

1. Back in Notepad++, with `index.html` open
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:** the full Unsplash URL you just copied (it starts with `https://images.unsplash.com/`)
4. **Replace with:**
```
images/hero.jpg
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

💡 **Tip:** If the URL appears more than once in the file, that's fine — `Replace All` will catch every instance, which is what you want.

✅ **Done!** Your hero image now loads from your own files instead of depending on an external server.

---

### 📝 EDIT #2: Fix the YouTube Video Embed

**File:** `index.html`
**Line:** 335
**Problem:** The video section currently shows `YOUR_VIDEO_ID` instead of a real YouTube video. Visitors will see a broken/blank video player.

**First, get your YouTube video ID:**
1. Go to YouTube and find your clinic's video
2. Look at the URL in your browser's address bar. It will look like one of these:
   - `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - `https://youtu.be/dQw4w9WgXcQ`
3. The video ID is the code after `v=` (or after `youtu.be/`). In the example above, it's `dQw4w9WgXcQ`
4. Copy that code

**Now do the replacement:**

1. Open `index.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
https://www.youtube.com/embed/YOUR_VIDEO_ID
```
4. **Replace with:** (use your actual video ID in place of `PASTE_YOUR_ID_HERE`)
```
https://www.youtube.com/embed/PASTE_YOUR_ID_HERE
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

💡 **Tip:** If you do not have a YouTube video yet, you can skip this edit for now. The video section will just show a blank player. You can also temporarily hide the entire video section by deleting lines 326 through 344 in `index.html` -- but only do this if you are comfortable and have a backup copy of the file.

✅ **Done!** Your YouTube video will now display properly on the home page.

---

### 📝 EDIT #3: Fix the Fake Phone Number on the Services Page

**File:** `services.html`
**Line:** 336
**Problem:** The footer of the services page shows `(541) 000-0000` instead of your real phone number. Every other page already has the correct number.

1. Open `services.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
(541) 000-0000
```
4. **Replace with:**
```
(541) 306-1099
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

✅ **Done!** The correct phone number now shows on the services page footer.

---

### 📝 EDIT #4: Fix the Wrong Email on the Services Page

**File:** `services.html`
**Line:** 343
**Problem:** The footer shows `info@resolveptbend.com` which is not your real email address.

1. Open `services.html` in Notepad++ (it may already be open from Edit #3)
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
info@resolveptbend.com
```
4. **Replace with:**
```
resolveptbend@gmail.com
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

✅ **Done!** The correct email now shows on the services page footer.

---

### 📝 EDIT #5: Add Your Full Street Address to the Services Page

**File:** `services.html`
**Line:** 330
**Problem:** The services page footer only says "Bend, Oregon" with no street address. Every other page has the full address.

1. Open `services.html` in Notepad++ (it may already be open)
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
<span>Bend, Oregon</span>
```
4. **Replace with:**
```
<span>1740 NW Pence Ln Suite 5<br>Bend, OR 97703</span>
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

💡 **Tip:** The `<br>` tag creates a line break so the address appears on two lines (street on one line, city/state/zip on the next).

✅ **Done!** The full address now shows on the services page footer.

---

### 📝 EDIT #6: Fix Social Media Placeholder Links

**Problem:** Several pages have social media icons that don't go anywhere (they just link to `#`). We need to point them to your real Facebook, Instagram, and Google profiles.

#### EDIT #6A: Fix Social Links on `services.html`

The services page has three social icons (Facebook, Instagram, Google) that all link to `#`.

1. Open `services.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace

**Fix the Facebook link:**

3. **Find what:**
```
<a href="#" class="footer__social-link" aria-label="Facebook">
```
4. **Replace with:**
```
<a href="https://www.facebook.com/resolveptbend" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
```
5. Click `Replace All`

**Fix the Instagram link:**

6. **Find what:**
```
<a href="#" class="footer__social-link" aria-label="Instagram">
```
7. **Replace with:**
```
<a href="https://www.instagram.com/resolveptbend" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
```
8. Click `Replace All`

**Fix the Google link (or remove it):**

The Google social icon currently goes nowhere. You have two options:

**Option A -- Link it to your Google Business Profile:**

If you know your Google Business Profile URL (it looks something like `https://g.page/resolveptbend`), do this:

9. **Find what:**
```
<a href="#" class="footer__social-link" aria-label="Google">
```
10. **Replace with:** (put your real Google Business URL in place of the example)
```
<a href="https://g.page/resolveptbend" class="footer__social-link" aria-label="Google Business Profile" target="_blank" rel="noopener noreferrer">
```
11. Click `Replace All`

**Option B -- Remove the Google icon entirely:**

If you do not have a Google Business Profile URL or just want to remove it, you need to delete a block of code. This is easiest to do manually:

1. Press `Ctrl+G` (Go to Line) and type `359` then press Enter
2. You should see a line starting with `<a href="#" class="footer__social-link" aria-label="Google">`
3. Select from the beginning of line 359 all the way through line 365 (the line that says `</a>`)
4. That entire block looks like this:

```html
            <a href="#" class="footer__social-link" aria-label="Google">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            </a>
```

5. Delete those lines entirely
6. Press `Ctrl+S` to save

#### EDIT #6B: Fix Social Links on `contact.html`

The contact page has two social icons (Facebook, Instagram) that link to `#`.

1. Open `contact.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace

**Fix the Facebook link:**

3. **Find what:**
```
<a href="#" class="footer__social-link" aria-label="Facebook">
```
4. **Replace with:**
```
<a href="https://www.facebook.com/resolveptbend" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
```
5. Click `Replace All`

**Fix the Instagram link:**

6. **Find what:**
```
<a href="#" class="footer__social-link" aria-label="Instagram">
```
7. **Replace with:**
```
<a href="https://www.instagram.com/resolveptbend" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
```
8. Click `Replace All`
9. Press `Ctrl+S` to save

💡 **Tip:** The `target="_blank"` attribute makes the link open in a new tab, so visitors don't leave your website. The `rel="noopener noreferrer"` part is a security best practice.

✅ **Done!** All social media icons now link to your real profiles.

---

### 📝 EDIT #7: Connect the Contact Forms

**Problem:** Both contact forms on `contact.html` (the "Send Us a Message" form and the "Schedule Your Appointment" form) do not actually send anywhere. When someone fills them out and clicks Submit, nothing happens.

📋 **Your contact forms need a backend service. Complete setup instructions are in [Step 2 (Making Your Forms Work)](#step-2-making-your-forms-work-backend-setup). Do that section next, then come back here for Edit #8.**

---

### 📝 EDIT #8: Fix Dead "Careers" Links

**Problem:** Every page has a "Careers" link in both the navigation bar and the footer. They all link to `#`, which means they go nowhere. You need to either point them somewhere real or remove them.

**These files have Careers links:**
- `index.html` -- lines 85 (nav) and 498 (footer)
- `services.html` -- lines 47 (nav) and 307 (footer)
- `about.html` -- lines 112 (nav) and 384 (footer)
- `contact.html` -- lines 49 (nav) and 495 (footer)

#### Option A: Link to a Real Careers Page or Job Posting

If you have a careers page, an Indeed listing, or a job posting URL, replace the `#` with that URL in all four files.

For each file (`index.html`, `services.html`, `about.html`, `contact.html`):

1. Open the file in Notepad++
2. Press `Ctrl+H` to open Find & Replace

**For the nav bar links in index.html:**
3. **Find what:**
```
<a href="#" class="nav__link">Careers</a>
```
4. **Replace with:** (use your real URL)
```
<a href="https://YOUR-CAREERS-URL-HERE.com" class="nav__link" target="_blank" rel="noopener noreferrer">Careers</a>
```
5. Click `Replace All`

**For the footer links in index.html:**
6. **Find what:**
```
<a href="#" class="footer__link">Careers</a>
```
7. **Replace with:**
```
<a href="https://YOUR-CAREERS-URL-HERE.com" class="footer__link" target="_blank" rel="noopener noreferrer">Careers</a>
```
8. Click `Replace All`
9. Press `Ctrl+S` to save
10. Repeat steps 1-9 for `services.html`, `about.html`, and `contact.html`

#### Option B: Remove the Careers Links Entirely (Recommended If Not Hiring)

If you are not currently hiring, it is better to remove the dead links entirely.

For each of the four files, open the file and do two separate Find & Replace operations:

**Remove the nav Careers link:**

In `index.html`:
1. Press `Ctrl+H`
2. **Find what:**
```
        <a href="#" class="nav__link">Careers</a>
```
3. **Replace with:** (leave the Replace with box completely empty)
4. Click `Replace All`

In `services.html`:
1. Press `Ctrl+H`
2. **Find what:**
```
        <li><a href="#" class="nav__link">Careers</a></li>
```
3. **Replace with:** (leave empty)
4. Click `Replace All`

In `about.html`:
1. Press `Ctrl+H`
2. **Find what:**
```
        <li role="none"><a href="#" class="nav__link" role="menuitem">Careers</a></li>
```
3. **Replace with:** (leave empty)
4. Click `Replace All`

In `contact.html`:
1. Press `Ctrl+H`
2. **Find what:**
```
        <li><a href="#" class="nav__link">Careers</a></li>
```
3. **Replace with:** (leave empty)
4. Click `Replace All`

**Remove the footer Careers link (same in all 4 files):**

In each file:
1. Press `Ctrl+H`
2. **Find what:**
```
          <a href="#" class="footer__link">Careers</a>
```
3. **Replace with:** (leave empty)
4. Click `Replace All`
5. Press `Ctrl+S` to save

✅ **Done!** No more dead Careers links.

---

### 📝 EDIT #9: Replace Team Photo Placeholders with Real Headshots

**File:** `about.html`
**Problem:** All five team members (Jenny, Kasey, Nate, Sarah, Ethan) currently show a generic gray person icon (an SVG placeholder) instead of real headshots.

#### Step 1: Prepare Your Photos

1. Get a headshot photo for each team member
2. Resize each photo to approximately **400 x 400 pixels** (square)
3. Save them as JPG files, ideally under **200KB** each
4. Name them simply with no spaces:
   - `jenny.jpg`
   - `kasey.jpg`
   - `nate.jpg`
   - `sarah.jpg`
   - `ethan.jpg`
5. Put all five photos into the `images` folder inside your website folder

💡 **Tip:** You can resize photos for free at https://www.iloveimg.com/resize-image. Set width to 400 and height to 400 and check "Do not enlarge if smaller."

💡 **Tip:** If you don't have an `images` folder yet, create one inside your website folder (right-click in the folder, select `New` then `Folder`, name it `images`).

#### Step 2: Replace the SVG Placeholders with Real Photos

You need to do this for each team member. Here is the exact process for **Jenny McAteer** as a template. Then repeat for the others.

**Jenny McAteer:**

1. Open `about.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
          <article class="team-card reveal">
            <div class="team-card__image" style="background-color: var(--color-light); display: flex; align-items: center; justify-content: center; color: var(--color-text-light);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Jenny McAteer, DPT</h3>
```
4. **Replace with:**
```
          <article class="team-card reveal">
            <div class="team-card__image">
              <img src="images/jenny.jpg" alt="Jenny McAteer, DPT - Owner and Physical Therapist at Resolve Physical Therapy" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Jenny McAteer, DPT</h3>
```
5. Click `Replace All`

**Kasey Lohman:**

6. **Find what:**
```
          <article class="team-card reveal">
            <div class="team-card__image" style="background-color: var(--color-light); display: flex; align-items: center; justify-content: center; color: var(--color-text-light);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Kasey Lohman, DPT</h3>
```
7. **Replace with:**
```
          <article class="team-card reveal">
            <div class="team-card__image">
              <img src="images/kasey.jpg" alt="Kasey Lohman, DPT - Physical Therapist at Resolve Physical Therapy" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Kasey Lohman, DPT</h3>
```
8. Click `Replace All`

**Nate Palmer:**

9. **Find what:**
```
          <article class="team-card reveal">
            <div class="team-card__image" style="background-color: var(--color-light); display: flex; align-items: center; justify-content: center; color: var(--color-text-light);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Nate Palmer, PT, DPT</h3>
```
10. **Replace with:**
```
          <article class="team-card reveal">
            <div class="team-card__image">
              <img src="images/nate.jpg" alt="Nate Palmer, PT, DPT - Physical Therapist at Resolve Physical Therapy" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Nate Palmer, PT, DPT</h3>
```
11. Click `Replace All`

**Sarah Consiglio:**

12. **Find what:**
```
          <article class="team-card reveal">
            <div class="team-card__image" style="background-color: var(--color-light); display: flex; align-items: center; justify-content: center; color: var(--color-text-light);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Sarah Consiglio, DPT</h3>
```
13. **Replace with:**
```
          <article class="team-card reveal">
            <div class="team-card__image">
              <img src="images/sarah.jpg" alt="Sarah Consiglio, DPT - Physical Therapist at Resolve Physical Therapy" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Sarah Consiglio, DPT</h3>
```
14. Click `Replace All`

**Ethan Bruno:**

15. **Find what:**
```
          <article class="team-card reveal">
            <div class="team-card__image" style="background-color: var(--color-light); display: flex; align-items: center; justify-content: center; color: var(--color-text-light);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Ethan Bruno, DPT</h3>
```
16. **Replace with:**
```
          <article class="team-card reveal">
            <div class="team-card__image">
              <img src="images/ethan.jpg" alt="Ethan Bruno, DPT - Physical Therapist at Resolve Physical Therapy" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="team-card__body">
              <h3 class="team-card__name">Ethan Bruno, DPT</h3>
```
17. Click `Replace All`
18. Press `Ctrl+S` to save

⚠️ **Make sure your image files are named exactly `jenny.jpg`, `kasey.jpg`, `nate.jpg`, `sarah.jpg`, and `ethan.jpg` and are placed inside the `images` folder.** File names are case-sensitive on some web servers, so use all lowercase.

✅ **Done!** All five team members now show real headshot photos.

---

### 📝 EDIT #10: Replace Clinic Photo Placeholders

**Problem:** Both `index.html` (the home page) and `about.html` (the about page) have a big gray placeholder box where a photo of your clinic or Jenny should go.

#### Step 1: Prepare Your Photo

1. Get a good photo of your clinic or of Jenny/the team
2. Resize it to approximately **800 x 450 pixels** (landscape/wide format)
3. Save it as `clinic.jpg` (under 300KB if possible)
4. Put it in the `images` folder

#### Step 2: Replace the Placeholder on index.html

1. Open `index.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
            <div style="width: 100%; height: 450px; background: linear-gradient(135deg, var(--color-light) 0%, var(--color-border) 100%); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--color-text-light); font-size: var(--text-sm);">
              <!-- Replace with clinic/Jenny photo -->
              <div style="text-align: center;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.3;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <p style="margin-top: 0.5rem; opacity: 0.5;">Clinic or Founder Photo</p>
              </div>
            </div>
```
4. **Replace with:**
```
            <img src="images/clinic.jpg" alt="Resolve Physical Therapy clinic in Bend, Oregon" loading="lazy" style="width: 100%; height: 450px; object-fit: cover; border-radius: var(--radius-lg);">
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

#### Step 3: Replace the Placeholder on about.html

1. Open `about.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
            <div style="width: 100%; height: 400px; background-color: var(--color-light); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--color-text-light);">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
```
4. **Replace with:**
```
            <img src="images/clinic.jpg" alt="Resolve Physical Therapy clinic in Bend, Oregon" loading="lazy" style="width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius-lg);">
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

💡 **Tip:** You can use a different photo for each page if you want. Just save them with different names (e.g., `clinic-home.jpg` and `clinic-about.jpg`) and update the `src` attribute accordingly.

✅ **Done!** Real clinic photos now appear on both the home and about pages.

---

### 📝 EDIT #11: Fix the Google Maps Embed

**File:** `contact.html`
**Lines:** 204-210
**Problem:** The Google Map currently shows a generic/approximate location using placeholder coordinates. You need a proper embed URL for your exact business address.

#### Step 1: Get Your Google Maps Embed Code

1. Go to https://www.google.com/maps in your browser
2. Search for: **Resolve Physical Therapy 1740 NW Pence Ln Suite 5 Bend OR**
3. Click on your business listing in the results
4. Click the **Share** button (the icon that looks like an arrow or chain link)
5. In the popup, click the tab that says **Embed a map**
6. You will see a big block of HTML code that starts with `<iframe`
7. Click **COPY HTML**
8. Paste it into a blank Notepad document temporarily
9. Find the part that says `src="..."` -- the URL inside the quotes is what you need. It will look something like:
   ```
   https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867...
   ```
10. Copy just that URL (everything between the quotes after `src=`)

#### Step 2: Replace the Map URL in contact.html

1. Open `contact.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.5!2d-121.33!3d44.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDAzJzM2LjAiTiAxMjHCsDE5JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1
```
4. **Replace with:** (paste the URL you copied from Google Maps)
```
PASTE_YOUR_GOOGLE_MAPS_EMBED_URL_HERE
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

⚠️ **The URL you paste should start with `https://www.google.com/maps/embed?pb=` -- if it starts with `<iframe` then you copied too much. You only need the URL part, not the entire HTML tag.**

✅ **Done!** The contact page now shows your exact location on Google Maps.

---

### 📝 EDIT #12: Fix the "Download Intake Form" Link

**File:** `contact.html`
**Line:** 265
**Problem:** The "Download Intake Form" button links to `#` and does nothing when clicked.

#### Step 1: Prepare Your Intake Form

You need a PDF version of your intake form. If you do not have one yet:
1. Create or export your intake form as a PDF file
2. Name it something simple like `intake-form.pdf`
3. Place it in your website folder (in the root, or inside a folder called `documents` or `files`)

💡 **Tip:** If you use Prompt EMR or another practice management system, you may already have an online intake form link. You can use that URL instead of a PDF.

#### Step 2: Update the Link

1. Open `contact.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace

**If using a PDF file in your website folder:**

3. **Find what:**
```
<a href="#" class="btn btn--outline btn--small" style="margin-top: var(--space-lg);">
```
4. **Replace with:**
```
<a href="intake-form.pdf" class="btn btn--outline btn--small" style="margin-top: var(--space-lg);" download>
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

**If using an online link (e.g., from Prompt EMR):**

3. **Find what:**
```
<a href="#" class="btn btn--outline btn--small" style="margin-top: var(--space-lg);">
```
4. **Replace with:** (use your real URL)
```
<a href="https://YOUR-INTAKE-FORM-URL-HERE.com" class="btn btn--outline btn--small" style="margin-top: var(--space-lg);" target="_blank" rel="noopener noreferrer">
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

✅ **Done!** The "Download Intake Form" button now actually provides the form.

---

> 🎉 **CHECKPOINT: If you've completed all the critical edits above, your website is fully functional!** The edits below are polish — they make your site look more professional but aren't required. Take a break if you need one.

---

## NICE-TO-HAVE FIXES

These are not urgent, but they will make your website more polished and professional.

---

### 📝 EDIT #13: Add a Favicon (Browser Tab Icon)

**Problem:** When someone opens your website, the browser tab just shows a generic icon (or no icon). A favicon is the small icon that appears in browser tabs, bookmarks, and search results.

#### Step 1: Create Your Favicon

1. Go to https://favicon.io in your browser
2. If you have a logo image, click **Image** and upload it
3. If you do not have a logo image, click **Text** and type "R" with your brand colors
4. Download the generated favicon package (a .zip file)
5. Extract the zip file
6. Find the file called `favicon.ico`
7. Place `favicon.ico` into your `images` folder

#### Step 2: Add the Favicon Code to All Four HTML Files

You need to add one line of code to the `<head>` section of each HTML file.

**For `index.html`:**

1. Open `index.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
```
4. **Replace with:**
```
  <!-- Favicon -->
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
```
5. Click `Replace All`
6. Press `Ctrl+S` to save

**Repeat the exact same Find & Replace for `services.html`, `about.html`, and `contact.html`.**

The search text (`<!-- Fonts -->` followed by the preconnect line) appears in all four files, so the same Find & Replace works for each one.

✅ **Done!** Your clinic's icon now appears in browser tabs.

---

### 📝 EDIT #14: Fix Privacy Policy Links

**Problem:** The Privacy Policy links in the footer of `about.html` and `contact.html` go to `#` (nowhere).

You have two options:

#### Option A: Link to a Free Privacy Policy Generator

1. Go to https://www.freeprivacypolicy.com/free-privacy-policy-generator/ and create a privacy policy for your website
2. They will give you a hosted URL for your policy

Then in `about.html`:

1. Press `Ctrl+H`
2. **Find what:**
```
        <a href="#" class="footer__link" style="margin-bottom: 0;">Privacy Policy</a>
```
3. **Replace with:** (use your generated privacy policy URL)
```
        <a href="https://YOUR-PRIVACY-POLICY-URL-HERE" class="footer__link" style="margin-bottom: 0;" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
```
4. Click `Replace All`
5. Press `Ctrl+S` to save

In `contact.html`:

1. Press `Ctrl+H`
2. **Find what:**
```
          <a href="#" class="footer__link" style="display: inline;">Privacy Policy</a>
```
3. **Replace with:**
```
          <a href="https://YOUR-PRIVACY-POLICY-URL-HERE" class="footer__link" style="display: inline;" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
```
4. Click `Replace All`
5. Press `Ctrl+S` to save

#### Option B: Remove the Privacy Policy Links

If you do not want to deal with a privacy policy right now, you can remove the links:

In `about.html`:
1. **Find what:**
```
        <a href="#" class="footer__link" style="margin-bottom: 0;">Privacy Policy</a>
```
2. **Replace with:** (leave empty)
3. Click `Replace All` and save.

In `contact.html`:
1. **Find what:**
```
          <a href="#" class="footer__link" style="display: inline;">Privacy Policy</a> &middot;
          <a href="#" class="footer__link" style="display: inline;">Terms of Service</a>
```
2. **Replace with:** (leave empty)
3. Click `Replace All` and save.

✅ **Done!** Privacy policy links are now either functional or removed.

---

### 📝 EDIT #15: Update the Review Count

**File:** `index.html`
**Problem:** The home page says "201+ Five-Star Reviews" in two places (the trust bar around line 142 and the testimonials badge around line 360). As you get more reviews, you will want to update this number.

1. Open `index.html` in Notepad++
2. Press `Ctrl+H` to open Find & Replace
3. **Find what:**
```
201+
```
4. **Replace with:** (use your current review count)
```
250+
```
5. Click `Replace All`

⚠️ **This will replace ALL instances of "201+" in the file, which is what you want (it appears in both the trust bar and the testimonials section). But double-check the file after to make sure nothing unexpected changed.**

6. Press `Ctrl+S` to save

Also update the Schema.org structured data at the top of the file:

7. Press `Ctrl+H` again
8. **Find what:**
```
"reviewCount": "201"
```
9. **Replace with:** (use your current number without the + sign)
```
"reviewCount": "250"
```
10. Click `Replace All`
11. Press `Ctrl+S` to save

💡 **Tip:** Set a quarterly reminder on your calendar to update this number.

✅ **Done!** Review count is current.

---

### 📝 EDIT #16: Add OG (Open Graph) Images for Social Sharing

**Problem:** When someone shares your website on Facebook, LinkedIn, or other social media, a preview image should appear. Currently, no image is set for most pages.

#### What Are OG Images?

OG (Open Graph) images are the preview pictures that show up when someone shares a link to your site on social media. Without them, shared links look plain and may show a random image or no image at all.

#### What To Do

1. Create a wide image (1200 x 630 pixels is the standard size) that represents your brand. It could be your logo on a branded background, a photo of your clinic, etc.
2. Save it as `og-image.jpg` in your `images` folder
3. Add the following line to the `<head>` section of `index.html` and `about.html` (these two pages are missing it; `contact.html` already has one but it references a file that may not exist yet):

For `index.html`:

1. Press `Ctrl+H`
2. **Find what:**
```
  <meta property="og:url" content="https://resolveptbend.com">
  <meta property="og:locale" content="en_US">
```
3. **Replace with:**
```
  <meta property="og:url" content="https://resolveptbend.com">
  <meta property="og:image" content="https://resolveptbend.com/images/og-image.jpg">
  <meta property="og:locale" content="en_US">
```
4. Click `Replace All`
5. Press `Ctrl+S` to save

For `about.html`:

1. Press `Ctrl+H`
2. **Find what:**
```
  <meta property="og:url" content="https://resolveptbend.com/about.html">
  <meta property="og:locale" content="en_US">
```
3. **Replace with:**
```
  <meta property="og:url" content="https://resolveptbend.com/about.html">
  <meta property="og:image" content="https://resolveptbend.com/images/og-image.jpg">
  <meta property="og:locale" content="en_US">
```
4. Click `Replace All`
5. Press `Ctrl+S` to save

For `contact.html` (already has an OG image tag, just needs the right filename):

1. Press `Ctrl+H`
2. **Find what:**
```
  <meta property="og:image" content="https://resolveptbend.com/images/og-contact.jpg">
```
3. **Replace with:**
```
  <meta property="og:image" content="https://resolveptbend.com/images/og-image.jpg">
```
4. Click `Replace All`
5. Press `Ctrl+S` to save

💡 **Tip:** This is completely optional. Your website will work perfectly fine without OG images. They just make shared links look better on social media.

💡 **Tip:** You can test your OG images at https://www.opengraph.xyz after your site is live.

✅ **Done!** Social media shares will now show a preview image.

---

## EDITING MASTER CHECKLIST

Print this page and check off each item as you complete it:

### Critical Fixes
- [ ] **Edit #1** -- Hero image downloaded locally and URL replaced in `index.html`
- [ ] **Edit #2** -- YouTube video ID replaced in `index.html`
- [ ] **Edit #3** -- Phone number fixed in `services.html` footer (`(541) 000-0000` changed to `(541) 306-1099`)
- [ ] **Edit #4** -- Email fixed in `services.html` footer (`info@resolveptbend.com` changed to `resolveptbend@gmail.com`)
- [ ] **Edit #5** -- Full street address added to `services.html` footer
- [ ] **Edit #6A** -- Social media links fixed in `services.html` (Facebook, Instagram, Google)
- [ ] **Edit #6B** -- Social media links fixed in `contact.html` (Facebook, Instagram)
- [ ] **Edit #7** -- Contact forms connected (see Step 2 below for full instructions)
- [ ] **Edit #8** -- Careers links fixed or removed in all 4 HTML files
- [ ] **Edit #9** -- Team photos added for Jenny, Kasey, Nate, Sarah, Ethan in `about.html`
- [ ] **Edit #10** -- Clinic photo placeholder replaced in `index.html` and `about.html`
- [ ] **Edit #11** -- Google Maps embed URL updated in `contact.html`
- [ ] **Edit #12** -- Download Intake Form link fixed in `contact.html`

### Nice-to-Have Fixes
- [ ] **Edit #13** -- Favicon added to all 4 HTML files
- [ ] **Edit #14** -- Privacy Policy links fixed or removed in `about.html` and `contact.html`
- [ ] **Edit #15** -- Review count updated in `index.html` (if needed)
- [ ] **Edit #16** -- OG images added for social media sharing

### Final Verification

After completing all edits:

1. **Open each page in your browser** by double-clicking the HTML files in your website folder
2. **Check each page visually:**
   - Does the clinic photo show up on the home page and about page?
   - Do all five team member headshots appear?
   - Does the YouTube video play?
   - Does the Google Map show the right location?
   - Do the Facebook and Instagram icons go to the right pages?
   - Is the phone number correct in every footer?
   - Is the email correct in every footer?
   - Does the Careers link work (or is it gone)?
3. **Test both contact forms:**
   - Fill them out with your own email and submit
   - Check that you receive the submission at your email
4. **Check the browser tab** for your favicon icon
5. **Share a link on Facebook or in a text message** to verify the OG image preview appears

⚠️ **Always keep a backup copy of your original files before making any edits.** Copy the entire website folder and rename the copy something like `Website Backup - Before Edits`.

---

*End of Step 1. If you run into any issues, the most common fix is pressing `Ctrl+Z` to undo your last change, then trying again more carefully.*

---
---

# STEP 2: MAKING YOUR FORMS WORK (Backend Setup)

Right now, your website has two beautiful forms on the Contact page -- but they don't actually go anywhere. When someone fills one out and clicks "Send Message" or "Request Appointment," all they get is a pop-up alert. No email is sent. No data is saved.

This section walks you through connecting those forms so that submissions arrive in your inbox like regular emails.

---

## Your Two Forms

Your file `contact.html` contains two forms:

1. **Contact Form** (line 88) -- collects Name, Email, Phone, Service Interest, and Message
2. **Booking/Appointment Request Form** (line 314) -- collects Name, Email, Phone, Preferred Date, Preferred Time, and Message/Notes

Both forms currently have `action="#"` which means "do nothing." We need to point them to a real service that will email you the submissions.

---

## Option A: Web3Forms (RECOMMENDED -- Easiest Free Option)

This is the simplest choice. No account creation, no credit card, no complicated dashboard. You verify your email and you are done.

- **Free tier:** 250 submissions/month (more than enough for a PT clinic)
- **Setup time:** About 5 minutes
- **Cost:** Free

### Step-by-Step Setup

**Step 1: Get your access key**

1. Open your browser and go to **web3forms.com**
2. You will see a field that says "Enter your email address"
3. Type in: **resolveptbend@gmail.com**
4. Click the button to get your access key
5. Check your Gmail inbox -- you will receive an email from Web3Forms containing your **access key** (a long string of letters and numbers like `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
6. Copy that access key and save it somewhere safe (you will paste it into your code twice)

**Step 2: Update the Contact Form**

Open `contact.html` in your text editor (Notepad++, VS Code, or any editor you prefer).

Find this line (it is around line 88):

```html
<form action="#" method="POST" aria-label="Contact form">
```

Change it to:

```html
<form action="https://api.web3forms.com/submit" method="POST" aria-label="Contact form">
```

Now, directly below that line (before the first `<div class="form-group">`), add these two new lines:

```html
<input type="hidden" name="access_key" value="YOUR-ACCESS-KEY-HERE">
<input type="hidden" name="subject" value="New Contact Form Submission - Resolve PT">
```

Replace `YOUR-ACCESS-KEY-HERE` with the actual access key you received by email. Keep the quotes around it.

The word "hidden" means these fields will not be visible to your website visitors -- they are just instructions for Web3Forms behind the scenes.

**Step 3: Update the Booking Form**

In the same file (`contact.html`), scroll down to around line 314 and find:

```html
<form action="#" method="POST" aria-label="Appointment request form">
```

Change it to:

```html
<form action="https://api.web3forms.com/submit" method="POST" aria-label="Appointment request form">
```

Just like before, add these hidden fields directly below that opening `<form>` tag:

```html
<input type="hidden" name="access_key" value="YOUR-ACCESS-KEY-HERE">
<input type="hidden" name="subject" value="New Appointment Request - Resolve PT">
```

Use the same access key as before. Notice the subject line is different -- this way, when an email lands in your inbox, you can instantly tell whether it came from the general contact form or the appointment booking form.

**Step 4: Fix the JavaScript (REQUIRED)**

> ⚠️ **DIFFICULTY: This is the most technical edit in the guide. Take your time and read carefully. If you get stuck, it's okay to skip this and ask a tech-savvy friend for help later.**

This is the most important step. Right now, the JavaScript in `js/main.js` **blocks** form submissions from actually going through. It intercepts every form submit, shows a pop-up message, and stops there. We need to change this so it still validates the fields but then allows the form to actually send.

Open the file `js/main.js` in your text editor.

Look for **Section 7: FORM VALIDATION** (around line 280-355). You need to find this specific block of code (around lines 345-352):

```js
        if (!isValid) {
          e.preventDefault();
          alert('Please correct the following:\n\n' + errors.join('\n'));
        } else {
          e.preventDefault();
          alert('Thank you! Your message has been submitted successfully. We will get back to you shortly.');
          form.reset();
        }
```

See the problem? Both the "if" (errors found) AND the "else" (everything is fine) branches call `e.preventDefault()` -- that line is what stops the form from actually submitting. When there are errors, we want to stop submission. But when everything is valid, we need to let it go through.

**Replace** that entire block with this:

```js
        if (!isValid) {
          e.preventDefault();
          alert('Please correct the following:\n\n' + errors.join('\n'));
        }
        // If valid, do nothing -- let the form submit naturally to Web3Forms
```

That is it. You are removing the `else` block entirely. When the form is valid, the code simply does not interfere, and the browser submits the form to Web3Forms as intended.

💡 **How to do this edit safely:**
1. Use `Ctrl+H` (Find & Replace)
2. **Find what:**
```
        } else {
          e.preventDefault();
          alert('Thank you! Your message has been submitted successfully. We will get back to you shortly.');
          form.reset();
        }
```
3. **Replace with:**
```
        }
        // If valid, the form submits normally to Web3Forms
```
4. Click `Replace All`
5. Press `Ctrl+S` to save

⚠️ **Be very careful with this edit.** Only change the lines described above. If you accidentally delete a curly brace `}` or parenthesis `)`, the entire JavaScript file will break. If something goes wrong, press `Ctrl+Z` repeatedly to undo your changes.

**What the user will experience after this change:**
- They fill out the form and click "Send Message"
- If they left a required field blank or typed a bad email, they see a helpful error message (same as before)
- If everything looks good, the page briefly redirects to Web3Forms, which processes the submission and then shows a thank-you page
- You receive an email with all their information

---

## Option B: Formspree (Good Alternative)

If you want a more traditional dashboard where you can see all submissions in one place, Formspree is a solid choice.

- **Free tier:** 50 submissions/month
- **Cost:** Free (paid plans available for more volume)
- **Setup time:** About 10 minutes

### Steps

1. Go to **formspree.io** and create a free account
2. Click "New Form" and give it a name like "Resolve PT Contact"
3. Formspree will give you an endpoint URL that looks like: `https://formspree.io/f/xAbCdEfG`
4. In `contact.html`, replace `action="#"` with your Formspree URL (do this for both forms -- you can create two separate forms in Formspree so submissions are organized)
5. You still need to do the **same JavaScript fix** described in Step 4 above
6. Formspree will email you each submission and also stores them in your Formspree dashboard

---

## Option C: Netlify Forms (Best if You Are Hosting on Netlify)

If you end up hosting your website on Netlify (covered in Step 3), this is the most seamless option because it requires almost no setup.

- **Free tier:** 100 submissions/month
- **Cost:** Free with Netlify hosting
- **Setup time:** About 2 minutes (but only works if your site is on Netlify)

### Steps

1. In `contact.html`, change the contact form tag (line 88) from:

```html
<form action="#" method="POST" aria-label="Contact form">
```

to:

```html
<form name="contact" method="POST" data-netlify="true" aria-label="Contact form">
```

2. Add this hidden field right after the opening `<form>` tag:

```html
<input type="hidden" name="form-name" value="contact">
```

3. Do the same for the booking form (line 314), but use `name="booking"` and `value="booking"` instead.

4. You still need the **same JavaScript fix** from Step 4 above.

5. After deploying to Netlify, go to your Netlify dashboard, click on your site, then go to "Forms" in the sidebar. You will see all submissions there. You can also set up email notifications under "Forms" > "Form notifications."

---

## Quick Comparison

| Feature | Web3Forms | Formspree | Netlify Forms |
|---|---|---|---|
| Free submissions/month | 250 | 50 | 100 |
| Account required? | No (just email) | Yes | Yes (Netlify hosting) |
| Email notifications | Automatic | Automatic | Manual setup |
| Dashboard to view submissions | No | Yes | Yes |
| Setup difficulty | Easiest | Easy | Easiest (if on Netlify) |
| Best for | Most clinics | If you want a dashboard | If already on Netlify |

---

## Testing Your Forms

After making the changes, test both forms before considering this done.

1. Open your website (locally or on your live server)
2. Go to the Contact page
3. Fill out the contact form with your own information
4. Click "Send Message"
5. Check your Gmail inbox -- you should receive the submission within a minute or two (check spam/junk folder too)
6. Scroll down and repeat the test with the booking/appointment form
7. Also test with intentional errors -- leave a required field blank and confirm you still see the error message

If the form submits but you do not receive an email, double-check that your access key (Web3Forms) or form ID (Formspree) is pasted correctly, with no extra spaces.

---

## FORMS CHECKLIST

- [ ] Signed up for a form service (Web3Forms, Formspree, or Netlify Forms)
- [ ] Received your access key or form endpoint URL
- [ ] Updated `action="#"` to the real URL on the **Contact Form** (line 88 of `contact.html`)
- [ ] Added hidden input fields (access key, subject) to the Contact Form
- [ ] Updated `action="#"` to the real URL on the **Booking Form** (line 314 of `contact.html`)
- [ ] Added hidden input fields (access key, subject) to the Booking Form
- [ ] Edited `js/main.js` -- removed the `else` block that was blocking form submission (lines 348-352)
- [ ] Tested: filled out the Contact Form and received the email
- [ ] Tested: filled out the Booking Form and received the email
- [ ] Tested: leaving a required field blank still shows an error (validation still works)

---
---

# STEP 3: CHOOSE YOUR HOSTING (Pick One)

This is the biggest decision, but there's no wrong answer here. All three options below will get your site live and looking great. Read through them, pick the one that feels right, and follow the steps. You can always switch later — your website files stay the same no matter where you host them.

---

### Option A: Netlify (Recommended for Beginners)

| Detail | Info |
|--------|------|
| **Cost** | Free forever for a site like this |
| **SSL** | Free automatic HTTPS (the padlock icon that tells visitors your site is secure) |
| **Best for** | First-time website owners who want the easiest possible setup |

**Why Netlify?** You literally drag a folder from your computer onto a webpage and your site is live. It also has built-in form handling, which means patient inquiries from your Contact page can go straight to your Netlify dashboard — no extra services needed.

**Step-by-step:**

1. Open your web browser and go to **[netlify.com](https://netlify.com)**
2. Click **Sign Up** and create an account using your email address
3. Once you're on your dashboard (the main screen after logging in), look for the deploy area — it's a large dotted-line box that says something like *"Drag and drop your site output folder here"*
4. Open **File Explorer** on your computer and navigate to the folder containing all your website files (the folder with `index.html`, `about.html`, `services.html`, `contact.html`, plus the `css/`, `js/`, and `images/` folders)
5. **Drag that entire folder** from File Explorer onto the dotted-line box in your browser

   > Wait a few seconds. Netlify will upload and process your files.

6. Your site is now live! Netlify gives you a temporary URL that looks something like `random-words-12345.netlify.app` — click it to see your site on the real internet
7. **Test it!** Click through all four pages (Home, About, Services, Contact) and make sure everything looks right

**To connect your custom domain (resolveptbend.com):**

8. In Netlify, go to **Site Settings** (button near the top of your site's dashboard)
9. Click **Domain Management** in the left sidebar
10. Click **Add custom domain**
11. Type in your domain name (e.g., `resolveptbend.com`) and click **Verify** then **Add domain**
12. Netlify will show you DNS records you need to set up — keep this page open
13. Log in to wherever you bought your domain name (your "domain registrar" — this might be GoDaddy, Namecheap, Google Domains, etc.)
14. Find the **DNS settings** for your domain
15. Add a **CNAME record** (a type of DNS entry that says "this domain points to that other address") with these values:
    - **Host/Name:** `www`
    - **Value/Target:** your Netlify URL (e.g., `random-words-12345.netlify.app`)
16. For the root domain (without "www"), add an **A record** or follow Netlify's specific instructions — they'll walk you through it on screen
17. Save your DNS changes
18. Back in Netlify, click **Verify DNS configuration** — it may take anywhere from 5 minutes to 48 hours for DNS to fully update (usually it's under an hour)
19. Netlify will automatically set up your SSL certificate (HTTPS) once the domain is connected — you'll see the padlock icon in the browser address bar

**Netlify Forms Bonus:**

If your contact form's `<form>` tag includes the word `netlify` as an attribute, Netlify automatically collects form submissions and shows them in your dashboard under **Forms**. No extra services, no extra cost. We covered this in detail in Step 2 of this guide.

---

### Option B: Cloudflare Pages (Best Free Performance)

| Detail | Info |
|--------|------|
| **Cost** | Free — with unlimited bandwidth (no matter how much traffic you get) |
| **SSL** | Free |
| **Best for** | Owners who want the fastest-loading site and don't mind using a separate form service |

**Why Cloudflare Pages?** Cloudflare runs one of the largest networks in the world. Your site gets served from data centers close to every visitor, which means it loads incredibly fast. The free tier is extremely generous — unlimited traffic, unlimited bandwidth, 500 deploys per month.

**Step-by-step (drag-and-drop — no coding or Git required):**

1. Open your browser and go to **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Click **Sign Up** and create a free account
3. Once logged in, look in the left sidebar for **Workers & Pages**
4. Click **Workers & Pages**, then click the **Create** button
5. Select the **Pages** tab at the top
6. Choose **Upload assets** (this is the drag-and-drop option — ignore anything about connecting to Git/GitHub)
7. Give your project a name (e.g., `resolvept`) — this will create a temporary URL like `resolvept.pages.dev`
8. **Drag your entire website folder** into the upload area, or click to browse and select it
9. Click **Deploy site**
10. Wait for the upload to finish — your site is now live at `your-project-name.pages.dev`
11. **Test it!** Visit the URL and click through all your pages

**To connect your custom domain:**

12. In your Cloudflare Pages project, go to **Custom domains**
13. Click **Set up a custom domain**
14. Enter your domain name (e.g., `resolveptbend.com`)
15. If your domain is already on Cloudflare, the DNS records will be configured automatically
16. If your domain is registered elsewhere, Cloudflare will give you nameserver addresses — update your domain registrar to use Cloudflare's nameservers (your registrar will have instructions for how to change nameservers)
17. SSL activates automatically once DNS is set up

> **A note about forms:** Cloudflare Pages does not have built-in form handling like Netlify does. You'll need to use a free form service like **Web3Forms** (recommended) or **Formspree** to receive contact form submissions. We covered exactly how to set this up in Step 2 of this guide.

---

### Option C: Traditional Hosting via Namecheap (Best if You Want Email Hosting Too)

| Detail | Info |
|--------|------|
| **Cost** | ~$1.48/month first year (promotional price), renews at ~$7.88/month |
| **SSL** | Free with AutoSSL (automatically set up for you) |
| **Best for** | Owners who also want a professional email address like jenny@resolveptbend.com |

**Why Namecheap?** If you want a professional email address that matches your website domain (instead of using Gmail or Outlook), traditional hosting is the easiest path. Namecheap's Stellar plan includes email hosting, so you can set up `jenny@resolveptbend.com` or `info@resolveptbend.com` right from the same control panel where you manage your website. It's also a very familiar setup if you've ever worked with a web host before.

**Step-by-step:**

1. Go to **[namecheap.com](https://namecheap.com)**
2. Look for the **Stellar** shared hosting plan (usually on the homepage or under **Hosting** in the top menu)
3. Click **Get Started** or **Buy Now** — follow the checkout process
4. During checkout, you can also register your domain name here if you haven't already, or connect a domain you own elsewhere
5. After purchase, you'll receive a welcome email with your login details
6. Log into your **Namecheap dashboard** and find your hosting package
7. Click **Go to cPanel** (cPanel is the control panel where you manage your website files, email, and settings — it looks a bit old-school but it works great)
8. In cPanel, find and click **File Manager**
9. Navigate to the **public_html** folder — this is the folder that holds your live website files. Anything you put here is visible on the internet
10. Click the **Upload** button at the top of File Manager
11. Upload **all** of your website files and folders:
    - `index.html`
    - `about.html`
    - `services.html`
    - `contact.html`
    - `css/` folder (with all files inside)
    - `js/` folder (with all files inside)
    - `images/` folder (with all files inside)
    - Any other files in your website folder (like `favicon.ico`, `robots.txt`, etc.)

    > **Tip:** You can select multiple files at once, but cPanel's File Manager doesn't always handle folders smoothly. If you have trouble, try creating a `.zip` file of your entire website folder on your computer, uploading the `.zip` file, and then using cPanel's **Extract** button to unzip it. Make sure the extracted files end up directly inside `public_html` (not in a subfolder).

12. **Done!** Your site should now be live at your domain. Visit it in your browser to check.

**To set up a professional email address:**

13. In cPanel, find **Email Accounts**
14. Click **Create** and set up an address like `jenny@resolveptbend.com` or `info@resolveptbend.com`
15. You can access your email through cPanel's webmail, or connect it to an email app like Outlook or Thunderbird using the settings cPanel provides

---

### Domain Name Setup (All Options)

Your domain name is your website's address on the internet — it's what people type into their browser to find you (e.g., `resolveptbend.com`).

**If you don't own your domain yet**, here are good places to buy one:

| Registrar | Annual Cost | Notes |
|-----------|-------------|-------|
| **Cloudflare Registrar** | ~$10.46/year | Cheapest option — they charge exactly what they pay (no markup) |
| **Porkbun** | ~$11.08/year | Clean interface, good support, very affordable |
| **Namecheap** | ~$13.48/year | Convenient if you're also hosting with them |

> **What is a domain registrar?** It's the company where you officially purchase and register your domain name. Think of it like a phone book listing — you're reserving your unique name on the internet.

**If you already own your domain**, you just need to update your DNS records (the settings that tell the internet "this domain name points to this server") to point to your hosting provider. Here's what to do:

1. Log in to whichever company you bought your domain from
2. Find the **DNS** or **Nameserver** settings for your domain
3. Follow the specific instructions from your hosting provider (Netlify, Cloudflare, or Namecheap) — they each give you the exact records to add after you deploy your site
4. Save the changes and wait for DNS to propagate (this is the internet updating its address book — it usually takes 15 minutes to 1 hour, but can take up to 48 hours in rare cases)

> **Don't panic if your site doesn't appear immediately after changing DNS settings.** This is completely normal. The internet needs time to spread the word about where your new site lives. Go get a coffee, and check again in 30 minutes.

---

### HOSTING CHECKLIST

Use this checklist to make sure everything is set up correctly:

- [ ] Signed up for a hosting provider (Netlify, Cloudflare Pages, or Namecheap)
- [ ] Uploaded all website files (HTML pages, css/ folder, js/ folder, images/ folder)
- [ ] Site loads at the temporary URL — **test it in your browser!**
- [ ] Clicked through all 4 pages (Home, About, Services, Contact) to confirm they load correctly
- [ ] Connected your custom domain (`resolveptbend.com`)
- [ ] SSL/HTTPS is active (you see a padlock icon in the browser address bar)
- [ ] Site loads correctly at `https://resolveptbend.com` (with the "s" in https)

> **All boxes checked? Congratulations — your website is live on the internet!** Move on to Step 4 for a few final privacy and legal best practices.

---
---

# STEP 4: PRIVACY, LEGAL & COMPLIANCE

This section covers the legal and compliance basics for your website. The good news: for a small physical therapy clinic with a simple informational website, the requirements are straightforward. You do not need a lawyer for any of this, but the information below will help you stay on the right side of best practices.

---

## 4A: Do You Need HIPAA Compliance for This Website?

**Short answer: No, not for this website as it currently stands.**

Here is why:

- **HIPAA** (Health Insurance Portability and Accountability Act) protects **Protected Health Information (PHI)** -- things like medical diagnoses, treatment records, prescription history, and insurance details.
- Your contact form collects: **name, email, phone number, a general service interest, and a free-text message.** None of that is PHI. It is basic contact information that any business website collects.
- Your booking form collects: **name, email, phone, a preferred date/time, and a message.** Again, not PHI.

**So you are in the clear -- with one important warning:**

Do NOT add fields to your forms that ask visitors to describe their specific health conditions, injuries, diagnoses, or symptoms in detail. A field like "Describe your injury" or "What is your diagnosis?" could cross the line into collecting PHI, which would trigger HIPAA requirements for how that data is transmitted and stored.

If someone voluntarily writes medical details in the free-text "Message" box, that is on them -- you are not specifically asking for it, and your form is not designed to collect it. You are fine.

**What about online intake forms?**

Your current approach -- providing a downloadable PDF intake form that patients fill out on paper -- is perfectly fine and avoids HIPAA web compliance issues entirely.

If you ever want to move to **online intake forms** that collect health history, insurance information, or medical details, use a platform that is specifically built for HIPAA compliance:

- **Jane App** (janeapp.com) -- popular with PT clinics
- **IntakeQ** (intakeq.com) -- specializes in online intake forms
- **Prompt EMR's patient portal** -- you already use Prompt EMR, so check if their portal supports this

These platforms handle encryption, secure storage, and Business Associate Agreements (BAAs) -- all the things HIPAA requires. Your simple website contact form does not need any of that.

---

## 4B: Privacy Policy (Recommended)

Even though a privacy policy is not strictly legally required for a small clinic website, having one builds trust with visitors and is considered a best practice. It is also very easy to set up.

### What Your Privacy Policy Should Cover

1. **What information you collect** -- names, email addresses, phone numbers submitted through your forms
2. **How you use it** -- to respond to inquiries, schedule appointments, and communicate about services
3. **Who you share it with** -- nobody, except the form processing service (Web3Forms, Formspree, etc.) that delivers the submission to your email
4. **Third-party services** -- your site loads Google Fonts from Google's servers, which means Google receives visitors' IP addresses when they load your pages (more on this below)
5. **How to contact you** -- your email and phone number for privacy-related questions

### Setting Up Your Privacy Policy Page

Create a new file called `privacy-policy.html` in your website folder. You can copy the structure (the `<head>`, header, and footer) from any of your existing pages like `about.html`, then replace the main content area with your privacy policy text.

Here is a simple, plain-English privacy policy you can use as your starting point. Paste this into the main content area of your new page:

```
PRIVACY POLICY
Resolve Physical Therapy
Last updated: [Month Year]

What information we collect
When you fill out a form on our website, we collect the information you
provide: your name, email address, phone number, and any message you
write. We do not collect any health or medical information through our
website forms.

How we use your information
We use your contact information only to respond to your inquiry, schedule
appointments, or communicate with you about our services. We do not use
your information for marketing unless you specifically ask us to.

Who we share it with
We do not sell or share your personal information with anyone. The only
third party that processes your form data is our form delivery service
(Web3Forms / Formspree), which transmits your submission to our email.
They do not store or use your data for any other purpose.

Google Fonts
Our website uses fonts loaded from Google's servers. When you visit our
site, your browser connects to Google to download these fonts. This means
Google may receive your IP address. Google's privacy policy applies to
this data. If this concerns you, please let us know.

Cookies
Our website does not use cookies, tracking pixels, or analytics tools.

Your rights
If you would like us to delete any information you have submitted through
our forms, please contact us and we will do so promptly.

Contact us about privacy
Resolve Physical Therapy
1740 NW Pence Ln Suite 5, Bend, OR 97703
Email: resolveptbend@gmail.com
Phone: (541) 306-1099
```

After creating the page, update the "Privacy Policy" link in your footer. In every HTML file (`index.html`, `about.html`, `services.html`, `contact.html`), find this line near the bottom:

```html
<a href="#" class="footer__link" style="display: inline;">Privacy Policy</a>
```

And change `href="#"` to `href="privacy-policy.html"`.

---

## 4C: Cookie Consent -- Do You Need a Cookie Banner?

**No, you do not need a cookie banner right now.**

Here is why:

- Your website does **not** use cookies
- You have **no analytics** (no Google Analytics, no tracking scripts)
- You have **no advertising pixels** (no Facebook Pixel, no Google Ads tags)
- You have **no third-party tracking** of any kind

Cookie consent banners (those annoying pop-ups on every website) are only required when your site places cookies or similar tracking technology on visitors' devices. Your site does not do this.

**One thing to be aware of:** Your site loads Google Fonts from Google's servers (`fonts.googleapis.com`). This is extremely common -- millions of websites do this. It does mean Google receives your visitors' IP addresses when the fonts load, but this is **not a cookie** and does not require a consent banner under US law.

**If you add Google Analytics or Facebook Pixel later**, you WILL need a cookie consent banner at that point. But for now, you are all set.

### Optional: Self-Hosting Google Fonts (For Maximum Privacy)

If you want to eliminate even the Google Fonts data transfer, you can download the fonts and host them directly on your own server. This means your visitors' browsers will never contact Google at all. This is entirely optional but here is how to do it if you want to:

1. Go to **gwfh.mranftl.com/fonts** (Google Webfonts Helper) -- this is a free tool that packages Google Fonts for self-hosting
2. Search for **Inter** -- select weights 400, 500, 600, and 700. Download the zip file.
3. Search for **Playfair Display** -- select weight 700. Download the zip file.
4. Create a new folder in your website called `fonts/`
5. Unzip both downloads and put all the font files (`.woff2` files) into your `fonts/` folder
6. The tool will give you CSS code to paste. Add that CSS to the top of your `css/styles.css` file (it will be a series of `@font-face` declarations)
7. In **every HTML file** (`index.html`, `about.html`, `services.html`, `contact.html`), delete or comment out these three lines from the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

After doing this, your website will load slightly faster (fonts come from your own server instead of Google's) and you will have zero third-party data transfers. But again, this is optional -- using Google Fonts the current way is perfectly normal and legal.

---

## 4D: ADA/WCAG Accessibility

Healthcare websites should meet **WCAG 2.1 Level AA** accessibility standards. This means your website should be usable by people with disabilities, including those who use screen readers, keyboard-only navigation, or have visual impairments.

### The Legal Landscape

Federal rules finalized in April 2024 require that websites of entities covered by the ADA meet WCAG 2.1 AA standards:

- **Practices with 15 or more employees:** Must comply by **May 2026**
- **Smaller practices (fewer than 15 employees):** Must comply by **May 2027**

Regardless of the legal timeline, making your website accessible is simply the right thing to do -- and your website is already in great shape.

### What Your Website Already Does Right

Your website was built with accessibility as a priority. Here is what is already in place:

- **Semantic HTML structure** -- Your pages use proper elements like `<header>`, `<nav>`, `<main>`, and `<footer>`, which help screen readers understand the page layout
- **Skip link** -- There is a "Skip to main content" link at the very top of each page (line 32 of `contact.html`) that lets keyboard users jump past the navigation
- **Form labels** -- Every form field has a proper `<label>` element connected to it, so screen readers can announce what each field is for
- **ARIA attributes** -- Navigation menus, accordion sections, and interactive elements include `aria-label` and `aria-expanded` attributes
- **Keyboard navigation** -- The mobile menu closes when the Escape key is pressed, and all interactive elements are reachable via the Tab key
- **Color contrast** -- Text colors were chosen to meet AA contrast ratios against their backgrounds

### What to Watch For When You Edit the Site

As you add content and make changes, keep these simple rules in mind:

1. **Always add `alt` text to images.** Whenever you add an `<img>` tag, include a description:
   ```html
   <!-- Good -->
   <img src="images/clinic-lobby.jpg" alt="The bright, welcoming lobby of Resolve Physical Therapy in Bend, Oregon">

   <!-- Bad -- screen readers will just say "image" -->
   <img src="images/clinic-lobby.jpg">

   <!-- Also bad -- not helpful -->
   <img src="images/clinic-lobby.jpg" alt="image">
   ```

2. **Use headings in order.** Do not skip heading levels. If you have an `<h2>`, the next sub-heading should be `<h3>`, not `<h4>`.

3. **Make link text descriptive.** Instead of "Click here," write "Download the patient intake form" or "View our physical therapy services."

4. **Keep color contrast strong.** If you change any colors, make sure text is easily readable against its background. You can check contrast at **webaim.org/resources/contrastchecker/**.

---

## 4E: Google Business Profile

Your Google Business Profile is one of the most important things for getting found by patients searching for "physical therapy near me" or "PT in Bend Oregon." Make sure your website URL is current.

### Steps to Update

1. Go to **business.google.com** and sign in with the Google account that manages your business listing
2. Find your Resolve Physical Therapy listing
3. Click on **"Edit profile"** or go to the **"Info"** section
4. Find the **"Website"** field
5. Enter your new website URL (for example: `https://resolveptbend.com`)
6. Save the changes

### While You Are There, Double-Check These Too

- **Business name:** Resolve Physical Therapy
- **Address:** 1740 NW Pence Ln Suite 5, Bend, OR 97703
- **Phone:** (541) 306-1099
- **Hours:** Make sure they are accurate (your website says "By Appointment Only, Monday - Friday")
- **Categories:** Make sure "Physical Therapist" or "Physical Therapy Clinic" is your primary category
- **Photos:** Add photos of your clinic, treatment rooms, and team if you have not already -- businesses with photos get significantly more engagement

Your Google Business Profile is also where your Google reviews live, so keeping it polished and up-to-date has a real impact on how many new patients find you.

---

## LEGAL & PRIVACY CHECKLIST

- [ ] Confirmed: your contact forms do NOT collect health information (no diagnosis, injury description, or insurance fields)
- [ ] Created a `privacy-policy.html` page using the template above (or your own version)
- [ ] Updated the "Privacy Policy" footer link in all four HTML files to point to `privacy-policy.html`
- [ ] Verified: no cookie consent banner is needed (no analytics, no tracking, no cookies)
- [ ] If desired: self-hosted Google Fonts to eliminate third-party data transfer (optional)
- [ ] All images on your site have descriptive `alt` text
- [ ] Checked: heading levels are used in proper order (h1, h2, h3 -- no skipping)
- [ ] Updated your Google Business Profile with the correct website URL
- [ ] Reviewed Google Business Profile for accurate hours, address, phone, and photos

---
---

# UPDATING YOUR SITE AFTER FUTURE EDITS

After your site is live, you will occasionally need to make changes — updating your review count, adding a new team member photo, changing business hours, etc. After editing the files on your computer, you need to re-upload them so the changes appear on the live site. Here is how to do it for each hosting option:

---

### If You Use Netlify

1. Log in to **[app.netlify.com](https://app.netlify.com)**
2. Click on your site
3. Go to the **Deploys** tab
4. You will see the same drag-and-drop area you used the first time
5. **Drag your entire updated website folder** onto that area (the same folder with `index.html`, `css/`, `js/`, `images/`, etc.)
6. Netlify will replace the old files with the new ones automatically
7. Your changes will be live within seconds — refresh your website to confirm

> 💡 **Tip:** You do not need to delete the old deploy first. Netlify handles everything — each new deploy completely replaces the previous one.

---

### If You Use Cloudflare Pages

1. Log in to **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Click **Workers & Pages** in the left sidebar
3. Click on your project (e.g., `resolvept`)
4. Click the **Create deployment** button
5. Choose **Upload assets** again
6. **Drag your entire updated website folder** into the upload area
7. Click **Deploy site**
8. Your changes will be live within a minute or two

> 💡 **Tip:** Cloudflare keeps a history of all your deployments. If something goes wrong with a new upload, you can roll back to a previous version from the Deployments tab.

---

### If You Use Namecheap (cPanel)

1. Log in to your **Namecheap dashboard**
2. Click **Go to cPanel**
3. Open **File Manager**
4. Navigate to the **public_html** folder
5. Upload the files you changed (you do not need to re-upload everything — just the files that were modified)
   - For example, if you only updated `index.html` and added a new image, upload just those files
6. If cPanel asks whether to overwrite existing files, click **Overwrite**
7. Your changes are live immediately — refresh your website to confirm

> 💡 **Tip:** If you are making many changes at once, it is easier to zip your entire website folder, upload the `.zip` file, delete the old files in `public_html`, then extract the new `.zip`. This ensures everything is in sync.

---

### General Tips for Updates

- **Always test locally first.** Before uploading, open your edited HTML files in your browser by double-clicking them. Make sure everything looks right on your own computer before pushing changes to the live site.
- **Keep a backup.** Before making major changes, copy your website folder and name the copy something like `Website Backup - Feb 2026`. That way you can always go back if something breaks.
- **Clear your browser cache.** After re-uploading, if your changes do not appear, try pressing `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to do a hard refresh. Your browser sometimes shows a cached (saved) version of the old page.

---

## You Are Doing Great

If you have made it through all four steps, your website is complete and live on the internet. Your forms deliver messages to your inbox, your privacy bases are covered, and your site is already built to be accessible. These are the things that separate a professional web presence from a template that just looks nice.

The forms are the single most important thing you set up — every potential patient who reaches out through your website is a real person looking for help. Making sure their message actually reaches you is worth the 15 minutes it took to follow those steps.

If you get stuck on any step, read the error message carefully, double-check your access key, and try again. You have got this.
