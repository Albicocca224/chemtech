# images/

Place your image files here.

## Recommended images

| Filename            | Used in section       | Recommended size  |
|---------------------|-----------------------|-------------------|
| wycs4-256.jpg       | Equipment (section 4) | 800 × 600 px      |
| hero-bg.jpg         | Hero background       | 1920 × 1080 px    |
| factory.jpg         | Manufacturer section  | 1200 × 800 px     |
| logo.png            | Nav / footer logo     | 200 × 60 px       |

## How to add the equipment photo

1. Put your image file (e.g. `wycs4-256.jpg`) in this folder.
2. Open `index.html` and find the comment block that says:
   `<!-- ИЗОБРАЖЕНИЕ ОБОРУДОВАНИЯ -->`
3. Replace the placeholder `<div class="equip-image-area">...</div>` with:

```html
<div class="equip-image-area">
  <img src="images/wycs4-256.jpg" alt="Фотосепаратор Wenyao WYCS4-256">
</div>
```

Supported formats: JPG, PNG, WebP.
