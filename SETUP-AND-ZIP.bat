@echo off
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if errorlevel 1 goto fail
echo Building...
call npm run build
if errorlevel 1 goto fail
echo Creating ZIP...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0MAKE-ZIP.ps1"
echo.
echo Done! Open the zip from Desktop or run: npm run dev
pause
goto end
:fail
echo Something failed. Check errors above.
pause
:end
