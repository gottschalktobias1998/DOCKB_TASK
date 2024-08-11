const { execSync } = require('child_process');

try {
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Starting project...');
  execSync('npm run start', { stdio: 'inherit' });
} catch (error) {
  console.error('Error during build or start:', error);
  process.exit(1);
}
