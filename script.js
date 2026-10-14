cat > script.js << 'EOF'
document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
EOF
