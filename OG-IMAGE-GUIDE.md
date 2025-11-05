# 🎨 Create Your Open Graph Image

## Required Specifications
- **Size**: 1200 x 630 pixels
- **Format**: JPG or PNG
- **File**: Save as `public/og-image.jpg`
- **File Size**: Under 300 KB

## Design Layout

```
┌────────────────────────────────────────────────────────┐
│                     1200 x 630 px                      │
│                                                        │
│  ┌──────────────────────────────────────────────┐   │
│  │          WHITE or LIGHT GREEN Background      │   │
│  │                                                │   │
│  │         [Bull Logo - Large, Centered]         │   │
│  │              (200 x 200 px)                   │   │
│  │                                                │   │
│  │       ──────────────────────────────          │   │
│  │                                                │   │
│  │        Market Mastery View                    │   │
│  │     (Bold, 64px, Dark Gray/Black)            │   │
│  │                                                │   │
│  │   SEBI Registered Research Analyst            │   │
│  │        (Medium, 32px, Green)                  │   │
│  │                                                │   │
│  │       ──────────────────────────────          │   │
│  │                                                │   │
│  │   500+ Clients  •  78% Success  •  ₹500Cr+   │   │
│  │           (Regular, 28px, Gray)               │   │
│  │                                                │   │
│  │     Professional Stock Market Research        │   │
│  │         (Light, 24px, Gray)                   │   │
│  │                                                │   │
│  └──────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘
```

## Color Palette

### Primary
- White: `#FFFFFF`
- Green: `#22C55E` (brand color)
- Dark Gray: `#1F2937`
- Light Gray: `#6B7280`

### Background Options
1. **Clean White**: #FFFFFF with green accents
2. **Gradient**: White → Light Green (#F0FDF4)
3. **Professional**: White with subtle green border

## Fonts
Use Inter or similar sans-serif:
- **Heading**: Inter Bold 900
- **Subheading**: Inter SemiBold 600
- **Stats**: Inter Medium 500

## Quick Creation Methods

### 1. Canva (Easiest - 5 minutes)
1. Go to https://canva.com
2. Create custom size: 1200 x 630 px
3. Background: White or gradient
4. Upload bull logo image
5. Add text elements (copy layout above)
6. Download as JPG
7. Save to `public/og-image.jpg`

**Canva Template Link**: 
https://www.canva.com/create/social-media-graphics/

### 2. Figma (Professional - 15 minutes)
1. Create frame: 1200 x 630
2. Add rectangle fill (white/green)
3. Import bull logo
4. Add text layers with correct fonts
5. Export as JPG (2x quality)
6. Optimize with TinyPNG
7. Save to `public/og-image.jpg`

### 3. Online Tool (Fastest - 2 minutes)
https://www.opengraph.xyz/
- Use their template
- Upload logo
- Add text
- Download

### 4. Photoshop/GIMP (Advanced)
1. New document: 1200 x 630 px, 72 DPI
2. Background layer: White or gradient
3. Place bull logo (centered, ~200px height)
4. Add text layers with proper hierarchy
5. Save for Web: JPG, Quality 80%

## Text Hierarchy

### Line 1: Brand Name
```
Market Mastery View
Font: Inter Bold
Size: 64px
Color: #1F2937 (Dark Gray)
Letter Spacing: -1px
```

### Line 2: Tagline
```
SEBI Registered Research Analyst
Font: Inter SemiBold
Size: 32px
Color: #22C55E (Green)
Letter Spacing: 0px
```

### Line 3: Stats
```
500+ Clients  •  78% Success  •  ₹500Cr+ AUM
Font: Inter Medium
Size: 28px
Color: #6B7280 (Gray)
Letter Spacing: 0px
```

### Line 4: Description
```
Professional Stock Market Research
Font: Inter Regular
Size: 24px
Color: #9CA3AF (Light Gray)
```

## Element Spacing

- Logo to Brand Name: 40px
- Brand Name to Tagline: 20px
- Tagline to Divider: 30px
- Stats to Description: 20px
- Overall padding: 80px from edges

## Pro Tips

✅ **Keep it Simple**: Don't overcrowd
✅ **High Contrast**: Ensure readability
✅ **Logo Prominent**: Bull logo is your brand
✅ **Mobile Preview**: Looks good at small size too
✅ **Test on Dark**: Works on dark backgrounds (WhatsApp, Twitter dark mode)

## Optimization

After creating, optimize file size:

### TinyPNG (Recommended)
https://tinypng.com/
- Upload your image
- Download optimized version
- Should be under 300 KB

### ImageOptim (Mac)
- Drag and drop
- Automatic optimization

## Testing

After adding to `public/og-image.jpg`:

1. Deploy to Vercel
2. Test on: https://www.opengraph.xyz/url/your-url
3. Debug on: https://developers.facebook.com/tools/debug/
4. Share link on WhatsApp to preview

## Alternative Quick Win

If you don't have time to create custom image, use:
- Screenshot of your hero section
- Crop to 1200 x 630
- Add text overlay in Canva
- Save as og-image.jpg

## File Location

```
public/
  ├── og-image.jpg        ← Your main OG image (1200x630)
  ├── bull-favicon.png    ← Existing favicon
  ├── manifest.json       ← PWA manifest
  ├── sitemap.xml         ← SEO sitemap
  └── robots.txt          ← Crawler rules
```

---

**Time Investment**: 5-15 minutes
**Impact**: Huge! Professional link previews everywhere
**Priority**: HIGH - Do this before sharing your site!
