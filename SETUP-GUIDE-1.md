# 📖 STEP-BY-STEP SETUP GUIDE
## Complete Installation and Customization Instructions

---

## 🎯 PHASE 1: INITIAL SETUP (5 minutes)

### Step 1: Download Files
1. Download all project files to your computer
2. Create a new folder called `my-portfolio`
3. Place all files in this folder:
   - `index.html`
   - `styles.css`
   - `animations.css`
   - `script.js`
   - `particles-config.js`
   - `README.md`

### Step 2: Create Assets Folder
1. Create a new folder called `assets` inside `my-portfolio`
2. This will store all your images

### Step 3: Test Basic Setup
1. Double-click `index.html` to open in browser
2. You should see:
   ✅ Dark background with particles
   ✅ Navigation bar at top
   ✅ Animated loading screen
   ✅ Profile section with placeholder

---

## 🖼️ PHASE 2: ADD YOUR IMAGES (10 minutes)

### Step 4: Prepare Your Profile Picture
1. Choose your best professional photo
2. **Recommended specs:**
   - Format: JPG or PNG
   - Size: 400x400 pixels (square)
   - File size: < 500KB
3. Name it: `profile-photo.jpg`
4. Save in main folder (same location as index.html)

### Step 5: Update Profile Image Reference
1. Open `index.html` in text editor
2. Find this line (around line 90):
   ```html
   <img src="profile-placeholder.jpg" alt="MD Lijanur Rahman Limon" class="profile-image" id="profileImage">
   ```
3. Replace with:
   ```html
   <img src="profile-photo.jpg" alt="Your Name" class="profile-image" id="profileImage">
   ```

### Step 6: Add Project Images
1. Prepare 3 project screenshots/images
2. **Recommended specs:**
   - Format: JPG or PNG
   - Size: 800x600 pixels
   - File size: < 1MB each
3. Name them:
   - `project1.jpg`
   - `project2.jpg`
   - `project3.jpg`
4. Save in main folder

### Step 7: Update Project Image References
1. In `index.html`, find these lines (around lines 292, 327, 362):
   ```html
   <img src="project1-placeholder.jpg" alt="Project 1">
   <img src="project2-placeholder.jpg" alt="Project 2">
   <img src="project3-placeholder.jpg" alt="Project 3">
   ```
2. Replace with:
   ```html
   <img src="project1.jpg" alt="Your Project 1 Name">
   <img src="project2.jpg" alt="Your Project 2 Name">
   <img src="project3.jpg" alt="Your Project 3 Name">
   ```

---

## ✏️ PHASE 3: CUSTOMIZE YOUR CONTENT (20 minutes)

### Step 8: Update Your Name
1. Find line ~88 in `index.html`:
   ```html
   <h1 class="glitch-text" data-text="MD LIJANUR RAHMAN LIMON">
       MD LIJANUR RAHMAN LIMON
   </h1>
   ```
2. Replace BOTH instances with YOUR NAME:
   ```html
   <h1 class="glitch-text" data-text="YOUR FULL NAME">
       YOUR FULL NAME
   </h1>
   ```

### Step 9: Update Typing Text Titles
1. Open `script.js`
2. Find lines ~145-151:
   ```javascript
   const phrases = [
       'Full Stack Developer',
       'UI/UX Enthusiast',
       'Tech Innovator',
       'Creative Coder',
       'Problem Solver'
   ];
   ```
3. Replace with YOUR titles:
   ```javascript
   const phrases = [
       'Your Title 1',
       'Your Title 2',
       'Your Title 3',
       'Your Title 4',
       'Your Title 5'
   ];
   ```

### Step 10: Update About Section
1. In `index.html`, find the About section (around line 150)
2. Replace these paragraphs with your own story:
   ```html
   <p class="about-paragraph">
       Write your introduction here...
   </p>
   <p class="about-paragraph">
       Write more about yourself...
   </p>
   ```

### Step 11: Update Technologies
1. Find the tech tags section (around line 172):
   ```html
   <div class="tech-tags">
       <span class="tech-tag">JavaScript</span>
       <span class="tech-tag">React</span>
       <!-- Add or remove as needed -->
   </div>
   ```
2. Add/remove/modify to match YOUR skills

### Step 12: Update Statistics
1. Find the stats section (around line 185):
   ```html
   <div class="stat-number" data-target="50">0</div>
   ```
2. Change `data-target` values to your actual numbers:
   - Projects completed
   - Years of experience
   - Happy clients
   - Technologies mastered

### Step 13: Update Skills & Progress Bars
1. Find Skills section (around line 220)
2. For each skill, update:
   - Skill name
   - Percentage (data-width value)
   
   Example:
   ```html
   <div class="skill-bar">
       <div class="skill-info">
           <span>Your Skill Name</span>
           <span class="skill-percentage">85%</span>
       </div>
       <div class="progress-bar">
           <div class="progress-fill" data-width="85"></div>
       </div>
   </div>
   ```

### Step 14: Update Projects
For EACH project (3 total), update:

1. **Project Title** (line ~297):
   ```html
   <h3 class="project-title">Your Project Name</h3>
   ```

2. **Project Description** (line ~298):
   ```html
   <p class="project-description">
       Describe what your project does...
   </p>
   ```

3. **Technologies Used** (line ~302):
   ```html
   <span class="tech-badge">React</span>
   <span class="tech-badge">Node.js</span>
   <!-- Add more as needed -->
   ```

4. **Project Links** (line ~307):
   ```html
   <a href="YOUR_GITHUB_LINK" class="project-link">Code</a>
   <a href="YOUR_LIVE_DEMO_LINK" class="project-link">Live</a>
   ```

### Step 15: Update Work Experience
For EACH timeline item (around line 370):

1. **Date Range**:
   ```html
   <div class="timeline-date">2022 - Present</div>
   ```

2. **Job Title**:
   ```html
   <h3 class="timeline-title">Your Job Title</h3>
   ```

3. **Company Name**:
   ```html
   <h4 class="timeline-company">Company Name</h4>
   ```

4. **Description**:
   ```html
   <p class="timeline-description">
       What you did in this role...
   </p>
   ```

5. **Technologies**:
   ```html
   <div class="timeline-tech">
       <span>Tech1</span>
       <span>Tech2</span>
   </div>
   ```

### Step 16: Update Contact Information
Find Contact section (around line 450):

1. **Email**:
   ```html
   <span>your-email@example.com</span>
   ```

2. **Phone**:
   ```html
   <span>+880 123 456 7890</span>
   ```

3. **Location**:
   ```html
   <span>Your City, Your Country</span>
   ```

### Step 17: Update Social Media Links
Find social links (around lines 110-130 and in footer):

```html
<a href="YOUR_GITHUB_URL" class="social-link">
<a href="YOUR_LINKEDIN_URL" class="social-link">
<a href="YOUR_TWITTER_URL" class="social-link">
```

---

## 🎨 PHASE 4: CUSTOMIZE COLORS (10 minutes)

### Step 18: Choose Your Color Scheme
1. Open `styles.css`
2. Find the `:root` section at the top (around line 5)
3. Change these colors to match your brand:

```css
:root {
    /* CHANGE THESE VALUES */
    --primary-color: #00f0ff;      /* Main accent color */
    --secondary-color: #ff006e;    /* Secondary accent */
    --accent-color: #7b2cbf;       /* Additional accent */
}
```

**Color Suggestions:**
- **Blue Tech**: `#0084ff, #00a1ff, #0052cc`
- **Green Matrix**: `#00ff88, #00cc70, #008855`
- **Purple Cyber**: `#9d4edd, #7b2cbf, #5a189a`
- **Red Alert**: `#ff006e, #d90429, #8b0000`
- **Orange Energy**: `#ff8500, #ff6b00, #ff4500`

### Step 19: Test Your Colors
1. Save `styles.css`
2. Refresh your browser (F5 or Cmd+R)
3. Check if colors look good together
4. Adjust if needed

---

## 🔧 PHASE 5: ADVANCED CUSTOMIZATION (Optional, 15 minutes)

### Step 20: Adjust Animation Speeds
1. Open `animations.css`
2. Find any animation you want to change
3. Modify the duration:

```css
@keyframes fadeIn {
    /* animation content */
}

/* Usage - change the 0.6s to make faster/slower */
.animate-fadeIn {
    animation: fadeIn 0.6s ease-out;  /* Change to 0.3s for faster */
}
```

### Step 21: Modify Particle Settings
1. Open `particles-config.js`
2. Adjust these values:

```javascript
"number": {
    "value": 80,  // More = more particles (40-120 recommended)
},
"size": {
    "value": 3,   // Particle size (1-5 recommended)
},
"move": {
    "speed": 2,   // Speed (1-3 recommended)
}
```

### Step 22: Change Fonts (Optional)
1. Visit [Google Fonts](https://fonts.google.com/)
2. Choose 3 fonts:
   - Display font (for titles)
   - Body font (for paragraphs)
   - Tech font (for technical text)

3. In `index.html`, replace font link (line ~13):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YOUR+FONT&display=swap" rel="stylesheet">
   ```

4. In `styles.css`, update font variables:
   ```css
   --font-display: 'Your Display Font', sans-serif;
   --font-body: 'Your Body Font', sans-serif;
   --font-tech: 'Your Tech Font', sans-serif;
   ```

---

## ✅ PHASE 6: TESTING & DEPLOYMENT (15 minutes)

### Step 23: Test on Different Devices
Test your website on:
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Mobile Phone (use browser dev tools)
- [ ] Tablet (if available)

**Check these features:**
- [ ] All images load
- [ ] Animations work smoothly
- [ ] Navigation menu opens on mobile
- [ ] Contact form works
- [ ] All links work
- [ ] Text is readable

### Step 24: Check for Errors
1. Open browser DevTools (F12)
2. Check Console tab for errors (should be empty or minimal)
3. Fix any errors you see

### Step 25: Optimize for Performance
1. **Compress Images**:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Reduce file sizes to < 500KB each

2. **Check Loading Speed**:
   - Website should load in < 3 seconds
   - If slow, compress images more

### Step 26: Deploy Your Website

**Option A: GitHub Pages (Free)**
1. Create GitHub account
2. Create new repository: `your-username.github.io`
3. Upload all files
4. Visit: `https://your-username.github.io`

**Option B: Netlify (Free)**
1. Visit [Netlify](https://netlify.com)
2. Drag and drop your folder
3. Get free URL

**Option C: Vercel (Free)**
1. Visit [Vercel](https://vercel.com)
2. Import your project
3. Deploy

**Option D: Custom Domain**
1. Buy domain from Namecheap/GoDaddy
2. Use hosting service (Hostinger, Bluehost, etc.)
3. Upload files via FTP/cPanel

---

## 🐛 TROUBLESHOOTING COMMON ISSUES

### Issue: Particles not showing
**Solution:**
1. Check internet connection (particles.js loads from CDN)
2. Open browser console (F12) - look for errors
3. Try the custom particle system (already included as backup)

### Issue: Images not loading
**Solution:**
1. Check file names match exactly (case-sensitive)
2. Make sure images are in same folder as index.html
3. Check file extensions (.jpg vs .jpeg)

### Issue: Animations not working
**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check if animations.css is linked properly
3. Test in different browser

### Issue: Mobile menu not opening
**Solution:**
1. Check if script.js is loaded
2. Open console (F12) - look for JavaScript errors
3. Try clicking multiple times

### Issue: Contact form not working
**Solution:**
1. Form currently shows notification only
2. To make it actually send emails, you need to add backend
3. Use services like Formspree, EmailJS, or custom PHP script

---

## 📋 CHECKLIST BEFORE GOING LIVE

- [ ] Replaced all placeholder images
- [ ] Updated all personal information
- [ ] Changed all "MD Lijanur Rahman Limon" to your name
- [ ] Updated social media links
- [ ] Verified all project links work
- [ ] Updated contact information
- [ ] Tested on mobile and desktop
- [ ] Checked for spelling errors
- [ ] Optimized images (compressed)
- [ ] No console errors in browser
- [ ] All animations working
- [ ] Navigation menu works on mobile
- [ ] Theme toggle works
- [ ] All sections have content
- [ ] Footer information updated

---

## 🎓 LEARNING RESOURCES

### Want to customize further?
- **HTML**: [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- **CSS**: [CSS-Tricks](https://css-tricks.com/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **Animations**: [Animate.css](https://animate.style/)

### Need help with specific features?
- **Color Schemes**: [Coolors.co](https://coolors.co/)
- **Font Pairing**: [FontPair](https://fontpair.co/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Images**: [Unsplash](https://unsplash.com/)

---

## 💡 TIPS FOR SUCCESS

1. **Start Simple**: Don't try to change everything at once
2. **Save Often**: Save your files frequently while editing
3. **Test Changes**: Test in browser after each major change
4. **Backup**: Keep a backup copy of original files
5. **Ask for Help**: Join web development communities if stuck
6. **Be Patient**: Customization takes time - it's normal!

---

## 🆘 GETTING HELP

If you get stuck:
1. Check this guide again
2. Read the README.md file
3. Check browser console for specific errors
4. Search the error on Google/Stack Overflow
5. Ask in web development forums

---

## 🎉 CONGRATULATIONS!

You've successfully set up your futuristic portfolio website!

**Next Steps:**
1. Share it with friends for feedback
2. Add it to your resume
3. Share on LinkedIn
4. Keep updating with new projects
5. Monitor analytics if you add them

**Remember:** A portfolio is never "finished" - keep updating it as you grow!

---

**Good luck with your new website! 🚀**
