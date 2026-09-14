@echo off
echo ==========================================
echo       PROGVISION DEPLOYMENT SCRIPT
echo ==========================================

echo [1/2] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Aborting deployment.
    pause
    exit /b %errorlevel%
)

echo [2/2] Deploying to Firebase...
call npx firebase-tools deploy
if %errorlevel% neq 0 (
    echo Deployment failed!
    pause
    exit /b %errorlevel%
)

echo ==========================================
echo        DEPLOYMENT SUCCESSFUL!
echo ==========================================
pause
