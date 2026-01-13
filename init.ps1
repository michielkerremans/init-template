# Clone the original repository
git clone https://github.com/ORIGINAL_OWNER/original-repo.git
cd original-repo

# Remove old Git history
Remove-Item -Recurse -Force .git

# Check that the old Git history is gone
Test-Path .git   # should return False

# Initialize a new repository and push to the new remote
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOU/init-template.git
git push -u origin main

# ---- Optional: delete the local folder and re-clone ----

# Go to the parent directory
cd ..

# Remove the local folder
Remove-Item -Recurse -Force original-repo

# Re-clone the new repository (with desired folder name)
git clone https://github.com/YOU/init-template.git init-template
