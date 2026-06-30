import { spawn } from 'node:child_process'

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const child = spawn(
  npmCommand,
  ['run', 'dev', '--', '--host', 'localhost', '--port', '5173', '--strictPort'],
  {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: false,
  },
)

child.on('exit', (exitCode) => {
  process.exit(exitCode ?? 0)
})