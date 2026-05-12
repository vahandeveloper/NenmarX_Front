# Dev սերվեր — օգտագործում է npm.cmd (ոչ թե npm.ps1), որպեսզի Execution Policy-ն չարգելի
$npm = Join-Path ${env:ProgramFiles} "nodejs\npm.cmd"
if (-not (Test-Path $npm)) {
    $npm = Join-Path ${env:ProgramFiles(x86)} "nodejs\npm.cmd"
}
if (-not (Test-Path $npm)) {
    Write-Error "Չի գտնվել npm.cmd։ Տեղադրեք Node.js https://nodejs.org"
    exit 1
}
Set-Location $PSScriptRoot
if (-not (Test-Path "node_modules")) {
    Write-Host "npm install..."
    & $npm install
}
Write-Host "`nhttp://localhost:3000 — Ctrl+C կանգի համար`n"
& $npm run dev
