#!/bin/bash

# PBE Website - New Page Boilerplate Generator
# Usage: ./new-page.sh <page-name> [page-title]
# Example: ./new-page.sh about "About Us"

if [ -z "$1" ]; then
    echo "Usage: $0 <page-name> [page-title]"
    echo "Example: $0 about 'About Us'"
    exit 1
fi

PAGE_NAME="$1"
PAGE_TITLE="${2:-$(echo "$PAGE_NAME" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')}"
FILE_NAME="${PAGE_NAME}.html"

# Check if file already exists
if [ -f "$FILE_NAME" ]; then
    echo "Error: $FILE_NAME already exists!"
    exit 1
fi

# Create the boilerplate HTML
cat > "$FILE_NAME" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$PAGE_TITLE | PBE</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="icon" href="PBEimages\favicon.ico">
    <meta name="theme-color" content="black">

  <script src="components/page-hero.js" defer></script>
  <script src="components/navbar.js" defer></script>
  <script src="components/footer.js" defer></script>
  <script src="components/back-to-top.js" defer></script>
  <script src="components/site-behavior.js" defer></script>
</head>
<body>
  <div data-page-hero data-hero-class="sub-header" data-hero-title="$PAGE_TITLE"></div>

  <main>
    <section class="${PAGE_NAME}">
      <div class="container">
        <h1>$PAGE_TITLE</h1>
        <!-- Add your content here -->
      </div>
    </section>
  </main>

  <div id="site-footer"></div>
  <div id="site-back-to-top"></div>
</body>
</html>
EOF

echo "Created $FILE_NAME"
echo "Don't forget to:"
echo "  1. Add the page to the navbar in components/navbar.js"
echo "  2. Add page-specific styles to style.css if needed"