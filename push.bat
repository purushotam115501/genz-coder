set PATH=%PATH%;C:\Program Files\Git\cmd
git init
git config --global user.email "purushotam115501@users.noreply.github.com"
git config --global user.name "purushotam115501"
git add .
git commit -m "Mobile responsiveness update"
git branch -M main
git remote remove origin
git remote add origin https://github.com/purushotam115501/genz-coder.git
git push -u origin main
