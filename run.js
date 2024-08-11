const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to remove the 'dist' directory
// TODO not optimal if you want to view the resulting output. If you you (Mr Holldack :P) encounter problems,
// please run npm run build | npm run start
function removeDist() {
  const distDir = path.join(__dirname, 'dist');
  if (fs.existsSync(distDir)) {
    console.log('Removing dist directory...');
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log('dist directory removed.');
  } else {
    console.log('No dist directory to remove.');
  }
}

try {
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Starting project...');
  execSync('npm run start', { stdio: 'inherit' });

  // Remove 'dist' directory after starting
  removeDist();
} catch (error) {
  console.error('Error during build or start:', error);
  process.exit(1);
}
