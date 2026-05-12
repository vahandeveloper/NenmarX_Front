@echo off
setlocal
cd /d "%~dp0"

REM PowerShell-ում «npm»-ը բացում է npm.ps1 — Execution Policy-ով կարող է արգելվել։ Ամեն անգամ օգտագործում ենք npm.cmd
set "NPM=%ProgramFiles%\nodejs\npm.cmd"
if not exist "%NPM%" set "NPM=%ProgramFiles(x86)%\nodejs\npm.cmd"
if not exist "%NPM%" (
  echo [Սխալ] Չի գտնվել npm.cmd — տեղադրեք Node.js https://nodejs.org
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Նախ տեղադրվում են կախվածությունները...
  call "%NPM%" install
  if errorlevel 1 (
    echo npm install ձախողվեց։
    pause
    exit /b 1
  )
)

echo.
echo Բացեք զննարկիչում  http://localhost:3000
echo Կանգնեցնելու համար՝ Ctrl+C
echo.
call "%NPM%" run dev
pause
