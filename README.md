# VisionMate — Smart Wearable Reading Assistant for the Visually Impaired
### SLIIT Comprehensive Design & Analysis Project (CDAP) · Final Year Research Portfolio
**Research Group ID:** `R26-IT-41`  
**Faculty:** Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT)  
**Live Deployment:** Ready for deployment on [Vercel](https://vercel.com)

---

## 📖 Project Overview
**VisionMate** is an autonomous assistive edge-computing wearable headset designed to empower visually impaired individuals with complete reading independence. 

The system solves physical alignment, cognitive overload, and speech comprehension challenges through four deeply integrated research modules:
1. **Automatic Camera Position Guidance** (*Lead: Priyashantha D.G.M.D — IT22295392*) — Real-time YOLOv8n page edge detection and acoustic spatial voice guidance ("Move slightly left", "Tilt up", "Hold steady") with auto-capture.
2. **Document Identification & Image Description** (*Lead: Chithrasena D.C.M.A — IT22114112*) — MobileNetV2 document categorization, title extraction via EasyOCR, and multimodal vision models to explain inside-page illustrations and diagrams.
3. **Content Summarization & Category Detection** (*Lead: Herath H M M G E H B — IT22198136*) — Column segmentation for complex multi-topic newspapers, topic selection (Politics, Sports, Tech), and quantized edge LLaMA summarization.
4. **Age-Adaptive Reading & Page Completion Detection** (*Lead: Praveesha R.G.R — IT22299970*) — Contactless RFID user identification, adaptive text simplification, emotional speech modulation (friendly, formal, playful), and page-end turn cues.

---

## 🏛️ SLIIT CDAP Website Guidelines Compliance

This portfolio strictly adheres to the official **SLIIT CDAP Website Guidelines (`Website.pdf`)**:

| Guideline Page | Structural Requirement | Implementation in VisionMate Portfolio |
|---|---|---|
| **Slide 8 & 9** | **Home** | [index.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/index.html) — General introduction, problem & solution abstract, prototype visual showcase, research pipeline flow, impact statistics strip, and commercialization highlights. |
| **Slide 8 & 10** | **Domain** | [domain.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/domain.html) — Literature survey, research gap comparison matrix, formal problem definition, 4 specific research objectives, complete methodology with SVG system architecture diagram, and full technology stack. |
| **Slide 8 & 11** | **Milestones** | [milestones.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/milestones.html) — Interactive milestone drop-down menu (as requested in Slide 11) to inspect assessments, milestone progress bars, dates, and 100% marks distribution breakdown. |
| **Slide 8 & 12** | **Documents** | [documents.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/documents.html) — Project Charter, Proposal, Status Documents 1 & 2, Research Paper Manuscript, Research Poster, and Final Thesis Report (Group Report + 4 Individual Reports) with download and Google Drive buttons. |
| **Slide 8 & 13** | **Presentations** | [presentations.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/presentations.html) — Slide decks for Proposal, Progress Presentation 1, Progress Presentation 2, and scheduled Final Defense & Viva Voce. |
| **Slide 8 & 14** | **About Us** | [about.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/about.html) — 4 Group member profile cards with photos, student IDs, responsibilities, emails, LinkedIn & GitHub links, and supervisor details. |
| **Slide 8 & 15** | **Contact Us** | [contact.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/contact.html) — General contact information, phone numbers, department details, and pre-filled email templates with interactive form. |
| **Slide 16** | **20MB Disk Limit & Stack** | Pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Zero heavy dependencies, optimized assets, well under the 20MB limit. |

---

## 📸 How to Show & Update Team Member Photos

Photos are located in the folder:  
`assets/images/team/`

### 1. Photo Filename Convention
Place your personal photos in `assets/images/team/` using these exact names:
- **Priyashantha:** `assets/images/team/priyashantha.jpg`
- **Chithrasena:** `assets/images/team/chithrasena.jpg`
- **Herath:** `assets/images/team/herath.jpg`
- **Praveesha:** `assets/images/team/praveesha.jpg`
- **Supervisor:** `assets/images/team/supervisor.svg` (or `.jpg`)
- **Co-Supervisor:** `assets/images/team/co-supervisor.svg` (or `.jpg`)

### 2. Automatic Fallback Protection
The code in `about.html` includes smart error fallback:
```html
<img src="assets/images/team/chithrasena.jpg" 
     onerror="this.src='assets/images/team/chithrasena.svg'" 
     alt="Chithrasena D.C.M.A" class="member-photo" />
```
If a photo file is ever missing or fails to load, it will automatically show the corresponding vector avatar with matching initial badges!

---

## 📁 How to Show & Update Project Files & Documents

SLIIT CDAP recommends keeping the portfolio lightweight for web upload while linking large deliverables to cloud repositories.

### Official Google Drive Integration
All documents, presentation decks, individual proposal reports, and upcoming thesis drafts are configured to open directly in the public Google Drive repository:
All common documents, slide decks, and individual reports are linked directly to our official Google Drive folder:
- **Public Folder URL**: `https://drive.google.com/drive/folders/1PwOOgbNJF3VeSgYsqnP58i5j8G_vR2n1?usp=drive_link`
- **Subfolders**:
  - `Individual Proposal Reports` (4 individual proposal PDFs)
  - `Individual Thesis Drafts` (All 4 individual dissertations: `IT22295392_DRAFT.pdf`, `IT22114112_DRAFT.pdf`, `IT22198136_DRAFT.pdf`, `IT22299970_DRAFT.pdf`)
- **Common Academic Documents**:
  - `TAF_R26-IT-041.pdf` (Topic Assessment Form)
  - `R26-IT-041-Research Paper.pdf` (IEEE Research Manuscript)
  - `R26-IT-041_DRAFT.pdf` (Common Final Thesis Report - Master Volume)
  - `R26-IT-041-Proposal-Presentation.pptx` (Proposal Slides)
  - `R26-IT-041-Progress-Presentation-01.pdf` (PP1 Slides)
  - `R26-IT-041-Progress-Presentation-02.pdf` (PP2 Slides)

---

## 🚀 How to Deploy to Vercel

The repository includes a ready-to-use [`vercel.json`](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/vercel.json) file configured for clean URLs and caching.

### Method 1: Deploy via GitHub (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initialize VisionMate CDAP Research Portfolio"
   git push origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository: `VisionMate-Smart-Reading-Assistant`.
5. Under **Framework Preset**, select **"Other"** (it is a standard static HTML/CSS project).
6. Click **"Deploy"**.
7. Vercel will provide your live URL (e.g. `https://visionmate-smart-reading.vercel.app`) in under 20 seconds!

### Method 2: Deploy via Vercel CLI
1. Open PowerShell or terminal in this folder:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command:
   ```bash
   vercel
   ```
3. Follow the quick prompts (select default settings and press Enter).
4. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 💻 Local Testing
To preview the website locally on your computer:
1. Double-click [index.html](file:///c:/Users/User/OneDrive/Desktop/VisionMate-Smart-Reading-Assistant/index.html) in any browser (Chrome, Edge, Firefox, Brave), or
2. Use Python / Node local server:
   ```bash
   npx serve .
   ```
   or
   ```bash
   python -m http.server 3000
   ```
3. Open `http://localhost:3000`.

---

## 👥 Authors & Academic Affiliation
- **Priyashantha D.G.M.D** — `IT22295392`
- **Chithrasena D.C.M.A** — `IT22114112`
- **Herath H M M G E H B** — `IT22198136`
- **Praveesha R.G.R** — `IT22299970`

**Department of Information Technology**  
Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka.
