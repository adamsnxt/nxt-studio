param (
    [Parameter(Mandatory=$true)]
    [string]$Template,

    [Parameter(Mandatory=$true)]
    [string]$RepoName
)

$source = Join-Path $PSScriptRoot "app\templates\$Template"
$temp = Join-Path $env:TEMP "repo-$RepoName"

if (-not (Test-Path $source)) {
    Write-Error "El template '$Template' no existe."
    exit 1
}

if (Test-Path $temp) {
    Remove-Item $temp -Recurse -Force
}

Write-Host "Copiando template..." -ForegroundColor Cyan

Copy-Item $source $temp -Recurse

Set-Location $temp

Write-Host "Inicializando Git..." -ForegroundColor Cyan

git init
git add .
git commit -m "Initial commit"

Write-Host "Creando repositorio en nxt-lat..." -ForegroundColor Cyan

gh repo create "nxt-lat/$RepoName" `
    --private `
    --source=. `
    --remote=origin `
    --push

Write-Host ""
Write-Host "Repositorio creado correctamente:" -ForegroundColor Green
Write-Host "https://github.com/nxt-lat/$RepoName"