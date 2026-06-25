const { spawn } = require('child_process');
const path = require('path');

console.log('⚡ Starting Oxygen Sports Tracker Full-Stack Application...');

// 1. Start Backend Server
const backend = spawn('npm', ['start'], {
  cwd: path.join(__dirname, 'backend'),
  shell: true,
  stdio: 'inherit'
});

// 2. Start Frontend Server
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  shell: true,
  stdio: 'inherit'
});

// Clean termination handling
const handleExit = () => {
  console.log('\nShutting down servers...');
  backend.kill();
  frontend.kill();
  process.exit();
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
